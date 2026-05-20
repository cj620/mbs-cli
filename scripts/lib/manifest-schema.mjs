import { z } from 'zod'

const safeName = /^[a-z][a-z0-9-]*$/
const safeParamName = /^[A-Za-z][A-Za-z0-9_]*$/

export const paramSchema = z.object({
  name: z.string().regex(safeParamName, 'param name must be a safe JS identifier'),
  apiName: z.string().min(1).optional(),
  in: z.enum(['path', 'query', 'body']).default('query'),
  type: z.enum(['string', 'integer', 'number', 'boolean']).default('string'),
  required: z.boolean().default(false),
  default: z.union([z.string(), z.number(), z.boolean()]).optional(),
  description: z.string().default(''),
})

const enumValueSchema = z.union([z.string(), z.number(), z.boolean(), z.null()])

export const jsonSchema = z.lazy(() =>
  z
    .object({
      type: z.enum(['object', 'array', 'string', 'integer', 'number', 'boolean', 'unknown']).default('unknown'),
      description: z.string().default(''),
      properties: z.record(jsonSchema).default({}),
      items: jsonSchema.optional(),
      required: z.array(z.string()).default([]),
      default: z.union([z.string(), z.number(), z.boolean()]).optional(),
      enum: z.array(enumValueSchema).optional(),
      'x-cli-name': z.string().regex(safeParamName, 'x-cli-name must be a safe JS identifier').optional(),
      'x-usage': z.string().default(''),
    })
    .passthrough(),
)

export const requestSchema = z.object({
  path: jsonSchema.optional(),
  query: jsonSchema.optional(),
  body: jsonSchema.optional(),
})

export const actionSchema = z.object({
  name: z.string().regex(safeName, 'action name must be lowercase kebab-case'),
  description: z.string().min(1),
  service: z.string().min(1).optional(),
  pathPrefix: z.string().default(''),
  method: z.enum(['GET', 'POST']),
  path: z.string().min(1).startsWith('/'),
  params: z.array(paramSchema).default([]),
  request: requestSchema.optional(),
  response: jsonSchema.optional(),
  deprecated: z.boolean().default(false),
})

export const moduleSchema = z.object({
  domain: z.string().regex(safeName, 'domain must be lowercase kebab-case'),
  service: z.string().min(1).optional(),
  pathPrefix: z.string().default(''),
  description: z.string().min(1),
  keywords: z.array(z.string().min(1)).min(1),
  scenarios: z.string().min(1),
  actions: z.array(actionSchema).min(1),
})

export const auditManifestSchema = z
  .object({
    schemaVersion: z.literal('1'),
    manifestVersion: z.string().datetime({ offset: true }),
    modules: z.array(moduleSchema),
  })
  .superRefine((manifest, ctx) => {
    for (const mod of manifest.modules) {
      const actionNames = new Set()
      for (const action of mod.actions) {
        if (actionNames.has(action.name)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['modules', mod.domain, 'actions', action.name],
            message: `duplicate action "${action.name}" in ${mod.domain}`,
          })
        }
        actionNames.add(action.name)

        const requestPathParams = flattenRequestParams(action.request?.path, 'path')
        const declaredPathParams = action.params.filter((item) => item.in === 'path')
        const paramNames = new Set([
          ...action.params.flatMap((param) => [param.name, param.apiName].filter(Boolean)),
          ...requestPathParams.flatMap((param) => [param.cliName, param.apiName].filter(Boolean)),
        ])
        const pathParams = extractPathParams(action.path)
        for (const name of pathParams) {
          if (!paramNames.has(name)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ['modules', mod.domain, 'actions', action.name, 'path'],
              message: `path param "${name}" must be declared in params`,
            })
          }
        }
        for (const param of [...declaredPathParams, ...requestPathParams]) {
          if (!pathParams.includes(param.name) && !pathParams.includes(param.apiName)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ['modules', mod.domain, 'actions', action.name, 'params', param.name],
              message: `path param "${param.name}" must appear in path`,
            })
          }
        }
      }
    }
  })

export function extractPathParams(path) {
  const names = new Set()
  for (const match of path.matchAll(/\{([A-Za-z][A-Za-z0-9_]*)\}/g)) {
    names.add(match[1])
  }
  for (const match of path.matchAll(/:([A-Za-z][A-Za-z0-9_]*)/g)) {
    names.add(match[1])
  }
  return [...names]
}

export function parseAuditManifest(value) {
  return auditManifestSchema.parse(value)
}

function flattenRequestParams(schema, location, path = []) {
  if (!schema) return []
  if (schema.type === 'object') {
    return Object.entries(schema.properties ?? {}).flatMap(([name, child]) =>
      flattenRequestParams(child, location, [...path, name]),
    )
  }
  const apiName = path.at(-1)
  if (!apiName) return []
  return [
    {
      name: schema['x-cli-name'] ?? toCamelCase(path),
      cliName: schema['x-cli-name'] ?? toCamelCase(path),
      apiName,
      in: location,
    },
  ]
}

function toCamelCase(parts) {
  return parts
    .map((part, index) => normalizeIdentifierPart(part, index > 0))
    .join('')
}

function normalizeIdentifierPart(part, capitalize) {
  const tokens = part.split(/[^A-Za-z0-9]+/).filter(Boolean)
  const value =
    tokens.length <= 1
      ? lowerFirst(tokens[0] ?? '')
      : tokens
          .map((token, index) => {
            const lower = token.toLowerCase()
            return index === 0 ? lower : `${lower.charAt(0).toUpperCase()}${lower.slice(1)}`
          })
          .join('')
  return capitalize ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : value
}

function lowerFirst(value) {
  return value ? `${value.charAt(0).toLowerCase()}${value.slice(1)}` : value
}
