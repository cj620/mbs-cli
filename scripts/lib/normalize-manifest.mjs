// Normalizes a server manifest (ManifestVo) into the canonical audit-manifest
// shape that auditManifestSchema accepts. Keeps the local schema strict.

const VALID_TYPES = ['object', 'array', 'string', 'integer', 'number', 'boolean']
const SAFE_CLI_NAME = /^[A-Za-z][A-Za-z0-9_]*$/
const RESERVED_CLI_NAMES = new Set(['json'])

export function kebab(value) {
  return String(value ?? '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // camelCase -> camel-Case
    .replace(/[^a-zA-Z0-9]+/g, '-') // non-alphanumeric -> -
    .toLowerCase()
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')
}

// "array<integer>" -> {type:'array', items:{type:'integer'}}
// "integer(long)" / "string(date)" / "object(PageBean)" -> base type
function normalizeType(raw) {
  const s = String(raw ?? '').trim()
  const arr = s.match(/^array<(.+)>$/i)
  if (arr) return { type: 'array', items: normalizeType(arr[1]) }
  const base = s.replace(/\(.*\)$/, '').toLowerCase()
  return { type: VALID_TYPES.includes(base) ? base : 'unknown' }
}

function normalizeJsonSchema(node, path = []) {
  if (!node || typeof node !== 'object') return node
  const out = { ...node }
  // The server marks each property required with a self-describing boolean
  // (`required: true`). JSON Schema (and the local audit schema) expects an
  // array of names on the parent object. A stray boolean only reaches here at a
  // schema root (nested ones are lifted by the parent loop below); drop it.
  if (typeof out.required === 'boolean') delete out.required
  if (typeof out.type === 'string') {
    const t = normalizeType(out.type)
    out.type = t.type
    if (t.type === 'array' && t.items && !out.items) out.items = t.items
  }
  if (out.properties && typeof out.properties === 'object') {
    const required = Array.isArray(out.required) ? [...out.required] : []
    out.properties = Object.fromEntries(
      Object.entries(out.properties).map(([k, v]) => {
        if (v && typeof v === 'object' && typeof v.required === 'boolean') {
          if (v.required) required.push(k)
          const { required: _dropped, ...rest } = v
          return [k, normalizeJsonSchema(rest, [...path, k])]
        }
        return [k, normalizeJsonSchema(v, [...path, k])]
      }),
    )
    if (required.length) out.required = required
    else delete out.required
  }
  if (out.items) out.items = normalizeJsonSchema(out.items, path)
  if (path.length > 0 && out.type !== 'object' && !out['x-cli-name']) {
    const candidate = toCamelCase(path)
    if (!SAFE_CLI_NAME.test(candidate)) out['x-cli-name'] = fallbackCliName(path)
    else if (RESERVED_CLI_NAMES.has(candidate)) out['x-cli-name'] = `${candidate}Value`
  }
  return out
}

function toCamelCase(parts) {
  return parts
    .flatMap((part) => String(part).split(/[^A-Za-z0-9]+/).filter(Boolean))
    .map((part, index) => {
      const value = index === 0 ? `${part.charAt(0).toLowerCase()}${part.slice(1)}` : part
      return index === 0 ? value : `${value.charAt(0).toUpperCase()}${value.slice(1)}`
    })
    .join('')
}

function fallbackCliName(path) {
  let hash = 2166136261
  for (const char of path.join('.')) {
    hash ^= char.codePointAt(0)
    hash = Math.imul(hash, 16777619)
  }
  return `field${(hash >>> 0).toString(16)}`
}

function normalizeRequest(req, path) {
  if (!req || typeof req !== 'object') return undefined
  const out = {}
  for (const key of ['path', 'query', 'body']) {
    if (!req[key]) continue
    const schema = normalizeJsonSchema(req[key])
    if (key === 'path' && schema?.type === 'object') {
      const names = new Set(pathParamNames(path))
      schema.properties = Object.fromEntries(
        Object.entries(schema.properties ?? {}).filter(([name]) => names.has(name)),
      )
      schema.required = (schema.required ?? []).filter((name) => names.has(name))
      if (Object.keys(schema.properties).length === 0) continue
    }
    out[key] = schema
  }
  if (Object.keys(out).length === 0) return undefined
  disambiguateRequestCliNames(out)
  return out
}

function disambiguateRequestCliNames(request) {
  const fields = []
  for (const location of ['path', 'query', 'body']) {
    collectRequestFields(request[location], location, [], fields)
  }
  const groups = new Map()
  for (const field of fields) {
    const name = field.schema['x-cli-name'] ?? toCamelCase(field.path)
    const group = groups.get(name) ?? []
    group.push(field)
    groups.set(name, group)
  }

  const used = new Set([...groups].filter(([, group]) => group.length === 1).map(([name]) => name))
  for (const [name, group] of groups) {
    if (group.length === 1) continue
    for (const field of group) {
      const suffix = `${field.location.charAt(0).toUpperCase()}${field.location.slice(1)}`
      let candidate = `${name}${suffix}`
      let index = 2
      while (used.has(candidate)) {
        candidate = `${name}${suffix}${index}`
        index += 1
      }
      field.schema['x-cli-name'] = candidate
      used.add(candidate)
    }
  }
}

function collectRequestFields(schema, location, path, fields) {
  if (!schema) return
  if (schema.type === 'object') {
    for (const [name, child] of Object.entries(schema.properties ?? {})) {
      collectRequestFields(child, location, [...path, name], fields)
    }
    return
  }
  fields.push({ schema, location, path })
}

function pathParamNames(path) {
  const names = new Set()
  for (const match of String(path ?? '').matchAll(/\{([A-Za-z][A-Za-z0-9_]*)\}/g)) names.add(match[1])
  for (const match of String(path ?? '').matchAll(/:([A-Za-z][A-Za-z0-9_]*)/g)) names.add(match[1])
  return [...names]
}

function lastPathSegment(path) {
  return String(path ?? '').split('/').filter(Boolean).pop() ?? ''
}

function normalizeMethod(method) {
  return String(method ?? '').trim().toUpperCase()
}

function normalizeAction(action) {
  const service = action.serviceName ?? action.service
  const path = String(action.path ?? '').replace(/\/{2,}/g, '/')
  const tail = lastPathSegment(path)
  const name = [service ? kebab(service) : '', kebab(tail)].filter(Boolean).join('-')
  const request = normalizeRequest(action.request, path)
  const declaredPathNames = new Set(pathParamNames(path))
  const params = action.params?.filter(
    (param) => param.in !== 'path' || declaredPathNames.has(param.name) || declaredPathNames.has(param.apiName),
  )

  // Preserve the (often Chinese) human title from the server's `name` by
  // folding it into the description so skill docs keep a readable label.
  const title = action.name && action.name !== name ? action.name : null
  const description = title ? `${title}：${action.description ?? ''}` : action.description

  return {
    name,
    description,
    ...(service ? { service } : {}),
    ...(action.pathPrefix ? { pathPrefix: action.pathPrefix } : {}),
    method: normalizeMethod(action.method),
    path,
    ...(action.responseMode ? { responseMode: action.responseMode } : {}),
    ...(params ? { params } : {}),
    ...(request ? { request } : {}),
    ...(action.response ? { response: normalizeJsonSchema(action.response) } : {}),
    ...(action.deprecated !== undefined ? { deprecated: action.deprecated } : {}),
  }
}

function normalizeModule(mod) {
  const actions = deduplicateActions((mod.actions ?? []).map(normalizeAction))
  return {
    domain: kebab(mod.domain),
    ...(mod.service ? { service: mod.service } : {}),
    ...(mod.pathPrefix ? { pathPrefix: mod.pathPrefix } : {}),
    description: mod.description,
    keywords: mod.keywords,
    scenarios: mod.scenarios,
    ...(mod.generate !== undefined ? { generate: mod.generate } : {}),
    actions: disambiguateActionNames(actions),
  }
}

function deduplicateActions(actions) {
  const seen = new Set()
  return actions.filter((action) => {
    const key = [action.service ?? '', action.pathPrefix ?? '', action.method, action.path].join('\n')
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function disambiguateActionNames(actions) {
  const groups = new Map()
  for (const action of actions) {
    const group = groups.get(action.name) ?? []
    group.push(action)
    groups.set(action.name, group)
  }

  const names = new Map()
  const reserved = new Set(actions.map((action) => action.name))
  for (const [baseName, group] of groups) {
    if (group.length === 1) continue

    const paths = group.map((action) => String(action.path ?? '').split('/').filter(Boolean))
    const maxDepth = Math.max(...paths.map((parts) => Math.max(0, parts.length - 1)))
    let candidates
    for (let depth = 1; depth <= maxDepth; depth += 1) {
      const next = group.map((action, index) => {
        const suffix = paths[index].slice(-(depth + 1), -1).map(kebab).filter(Boolean).join('-')
        return suffix ? `${baseName}-${suffix}` : baseName
      })
      if (new Set(next).size === next.length && next.every((name) => !reserved.has(name))) {
        candidates = next
        break
      }
    }

    candidates ??= group.map((action) => `${baseName}-${kebab(action.method)}-${kebab(action.path)}`)
    if (new Set(candidates).size !== candidates.length || candidates.some((name) => reserved.has(name))) {
      const fallbackNames = new Map()
      const sorted = [...group].sort((left, right) =>
        `${left.method} ${left.path}`.localeCompare(`${right.method} ${right.path}`),
      )
      sorted.forEach((action, index) => {
        let suffix = index + 1
        let candidate = `${baseName}-${kebab(action.method)}-${suffix}`
        while (reserved.has(candidate)) {
          suffix += 1
          candidate = `${baseName}-${kebab(action.method)}-${suffix}`
        }
        fallbackNames.set(action, candidate)
        reserved.add(candidate)
      })
      candidates = group.map((action) => fallbackNames.get(action))
    }

    group.forEach((action, index) => {
      names.set(action, candidates[index])
      reserved.add(candidates[index])
    })
  }

  return actions.map((action) => (names.has(action) ? { ...action, name: names.get(action) } : action))
}

export function normalizeServerManifest(data) {
  return {
    schemaVersion: data.schemaVersion ?? '1',
    manifestVersion: data.manifestVersion,
    modules: (data.modules ?? []).map(normalizeModule),
  }
}
