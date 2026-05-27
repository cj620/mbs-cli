import type { APIClient } from '@mb-it-org/shared'

export type HttpMethod = 'GET' | 'POST'

export interface ManifestAction {
  name: string
  description: string
  method: HttpMethod
  path: string
  pathPrefix?: string
}

export interface ManifestModule {
  domain: string
  pathPrefix?: string
  actions: ManifestAction[]
}

export interface AuditManifest {
  schemaVersion: string
  manifestVersion: string
  modules: ManifestModule[]
}

export interface ServeRoute {
  method: HttpMethod
  routeUrl: string
  domain: string
  action: string
  description: string
  apiPath: string
  call: (
    client: APIClient,
    input: { params: Record<string, string>; query: Record<string, unknown>; body: unknown },
  ) => Promise<unknown>
}

function joinPaths(prefix: string | undefined, path: string): string {
  if (!prefix) return path
  if (!path) return prefix
  return `${prefix.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`
}

function extractPathParamNames(apiPath: string): string[] {
  const names: string[] = []
  const matcher = /\{([A-Za-z][A-Za-z0-9_]*)\}/g
  let match: RegExpExecArray | null
  while ((match = matcher.exec(apiPath)) !== null) names.push(match[1])
  return names
}

function substitutePath(apiPath: string, params: Record<string, string>): string {
  return apiPath.replace(/\{([A-Za-z][A-Za-z0-9_]*)\}/g, (_, name: string) => {
    const value = params[name]
    if (value === undefined) throw new Error(`Missing path param: ${name}`)
    return encodeURIComponent(value)
  })
}

export function buildRoutes(manifest: AuditManifest): ServeRoute[] {
  const routes: ServeRoute[] = []
  for (const mod of manifest.modules) {
    for (const action of mod.actions) {
      const apiPath = joinPaths(action.pathPrefix || mod.pathPrefix, action.path)
      const paramNames = extractPathParamNames(apiPath)
      const paramSuffix = paramNames.map((name) => `/:${name}`).join('')
      const routeUrl = `/api/${mod.domain}/${action.name}${paramSuffix}`

      routes.push({
        method: action.method,
        routeUrl,
        domain: mod.domain,
        action: action.name,
        description: action.description,
        apiPath,
        call: async (client, { params, query, body }) => {
          const concretePath = substitutePath(apiPath, params)
          if (action.method === 'GET') {
            return client.get(concretePath, { params: query })
          }
          return client.post(concretePath, body)
        },
      })
    }
  }
  return routes
}
