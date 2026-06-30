// Normalizes a server manifest (ManifestVo) into the canonical audit-manifest
// shape that auditManifestSchema accepts. Keeps the local schema strict.

const VALID_TYPES = ['object', 'array', 'string', 'integer', 'number', 'boolean']

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

function normalizeJsonSchema(node) {
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
          return [k, normalizeJsonSchema(rest)]
        }
        return [k, normalizeJsonSchema(v)]
      }),
    )
    if (required.length) out.required = required
    else delete out.required
  }
  if (out.items) out.items = normalizeJsonSchema(out.items)
  return out
}

function normalizeRequest(req) {
  if (!req || typeof req !== 'object') return undefined
  const out = {}
  for (const key of ['path', 'query', 'body']) {
    if (req[key]) out[key] = normalizeJsonSchema(req[key])
  }
  return out
}

function lastPathSegment(path) {
  return String(path ?? '').split('/').filter(Boolean).pop() ?? ''
}

function normalizeAction(action) {
  const service = action.serviceName ?? action.service
  const tail = lastPathSegment(action.path)
  const name = [service ? kebab(service) : '', kebab(tail)].filter(Boolean).join('-')

  // Preserve the (often Chinese) human title from the server's `name` by
  // folding it into the description so skill docs keep a readable label.
  const title = action.name && action.name !== name ? action.name : null
  const description = title ? `${title}：${action.description ?? ''}` : action.description

  return {
    name,
    description,
    ...(service ? { service } : {}),
    ...(action.pathPrefix ? { pathPrefix: action.pathPrefix } : {}),
    method: action.method,
    path: action.path,
    ...(action.responseMode ? { responseMode: action.responseMode } : {}),
    ...(action.params ? { params: action.params } : {}),
    ...(action.request ? { request: normalizeRequest(action.request) } : {}),
    ...(action.response ? { response: normalizeJsonSchema(action.response) } : {}),
    ...(action.deprecated !== undefined ? { deprecated: action.deprecated } : {}),
  }
}

function normalizeModule(mod) {
  return {
    domain: kebab(mod.domain),
    ...(mod.service ? { service: mod.service } : {}),
    ...(mod.pathPrefix ? { pathPrefix: mod.pathPrefix } : {}),
    description: mod.description,
    keywords: mod.keywords,
    scenarios: mod.scenarios,
    ...(mod.generate !== undefined ? { generate: mod.generate } : {}),
    actions: (mod.actions ?? []).map(normalizeAction),
  }
}

export function normalizeServerManifest(data) {
  return {
    schemaVersion: data.schemaVersion ?? '1',
    manifestVersion: data.manifestVersion,
    modules: (data.modules ?? []).map(normalizeModule),
  }
}
