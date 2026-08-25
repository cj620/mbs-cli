import {
  encodeRequestBody,
  requestBodyFieldsFromSchema,
  type APIClient,
  type RequestBodyMode,
} from '@mb-it-org/shared'

/** Read-only HTTP methods accepted by generated local serve routes. */
export type HttpMethod = 'GET' | 'POST'

/** Response decoding strategy declared by an audited manifest action. */
export type ResponseMode = 'json' | 'ndjson'

/**
 * One normalized manifest action consumed by the local serve router.
 *
 * Request-body metadata is optional for legacy JSON manifests. When present, it is authoritative
 * and the route delegates byte construction to the shared encoder without allowing file reads.
 */
export interface ManifestAction {
  /** Stable generated action name. */
  name: string
  /** Human-readable operation summary. */
  description: string
  /** Allowed read-only transport method. */
  method: HttpMethod
  /** Interface path relative to the optional module or action prefix. */
  path: string
  /** Action-specific path prefix, taking precedence over the module prefix. */
  pathPrefix?: string
  /** Expected response framing. */
  responseMode?: ResponseMode
  /** Optional interface-level request-body encoding contract. */
  requestBodyMode?: RequestBodyMode
  /** Main Content-Type without charset or multipart boundary. */
  requestMediaType?: string
  /** Optional text charset accepted by the shared encoder. */
  requestCharset?: string
  /** Sanitized request schemas; only the body tree participates in encoding. */
  request?: { path?: unknown; query?: unknown; body?: unknown }
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

/** Executable, local-only route derived from one audited manifest action. */
export interface ServeRoute {
  method: HttpMethod
  routeUrl: string
  domain: string
  action: string
  description: string
  apiPath: string
  responseMode: ResponseMode
  requestBodyMode?: RequestBodyMode
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

async function readStream(stream: NodeJS.ReadableStream): Promise<string> {
  const chunks: Buffer[] = []
  for await (const chunk of stream) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)))
  }
  return Buffer.concat(chunks).toString('utf8')
}

/**
 * Builds local serve routes from an audited manifest.
 *
 * POST routes with request-body metadata use the shared encoder and pass only its allowlisted
 * Content-Type header to the authenticated client. File reads are disabled because local serve
 * requests must not turn an HTTP body value into arbitrary filesystem access. Legacy actions
 * without metadata keep their existing JSON transport behavior.
 *
 * @param manifest Normalized audit manifest loaded by the serve command.
 * @returns Deterministically ordered executable routes.
 */
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
        responseMode: action.responseMode ?? 'json',
        ...(action.requestBodyMode ? { requestBodyMode: action.requestBodyMode } : {}),
        call: async (client, { params, query, body }) => {
          const concretePath = substitutePath(apiPath, params)
          const encoded = action.method === 'POST' && action.requestBodyMode
            ? await encodeRequestBody({
                mode: action.requestBodyMode,
                ...(action.requestMediaType ? { mediaType: action.requestMediaType } : {}),
                ...(action.requestCharset ? { charset: action.requestCharset } : {}),
                fields: requestBodyFieldsFromSchema(action.request?.body),
              }, body, { allowFileReads: false })
            : { body }
          if (action.responseMode === 'ndjson') {
            if (action.method === 'GET') {
              return client.get(concretePath, { params: query })
            }
            return readStream(await client.postStream(concretePath, encoded.body, {
              params: query,
              ...(encoded.headers ? { headers: encoded.headers } : {}),
            }))
          }
          if (action.method === 'GET') {
            return client.get(concretePath, { params: query })
          }
          return client.post(concretePath, encoded.body, {
            params: query,
            ...(encoded.headers ? { headers: encoded.headers } : {}),
          })
        },
      })
    }
  }
  return routes
}
