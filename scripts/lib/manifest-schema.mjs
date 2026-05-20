import { z } from 'zod'

const safeName = /^[a-z][a-z0-9-]*$/
const safeParamName = /^[A-Za-z][A-Za-z0-9_]*$/

export const paramSchema = z.object({
  name: z.string().regex(safeParamName, 'param name must be a safe JS identifier'),
  type: z.enum(['string', 'integer', 'number', 'boolean']).default('string'),
  required: z.boolean().default(false),
  default: z.union([z.string(), z.number(), z.boolean()]).optional(),
  desc: z.string().default(''),
})

export const responseFieldSchema = z.object({
  name: z.string().min(1),
  type: z.enum(['string', 'integer', 'number', 'boolean', 'object', 'array', 'unknown']).default('unknown'),
  desc: z.string().default(''),
  usage: z.string().default(''),
})

export const responseSchema = z.object({
  type: z.enum(['object', 'array', 'unknown']).default('unknown'),
  desc: z.string().default(''),
  fields: z.array(responseFieldSchema).default([]),
})

export const actionSchema = z.object({
  name: z.string().regex(safeName, 'action name must be lowercase kebab-case'),
  description_cn: z.string().min(1),
  method: z.enum(['GET', 'POST']),
  path: z.string().min(1).startsWith('/'),
  params: z.array(paramSchema).default([]),
  response: responseSchema.optional(),
  deprecated: z.boolean().default(false),
})

export const moduleSchema = z.object({
  domain: z.string().regex(safeName, 'domain must be lowercase kebab-case'),
  description_cn: z.string().min(1),
  keywords: z.array(z.string().min(1)).min(1),
  scenarios_cn: z.string().min(1),
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

        const paramNames = new Set(action.params.map((param) => param.name))
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
