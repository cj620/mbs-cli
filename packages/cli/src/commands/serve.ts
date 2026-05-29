import { Command, Flags } from '@oclif/core'
import {
  APIClient,
  MBSError,
  NotAuthenticatedError,
  forceRefreshAuthContext,
  getAuthContext,
  getConfig,
} from '@mb-it-org/shared'
import Fastify, { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { isAllowedOrigin } from '../serve/cors.js'
import { projectManifest } from '../serve/generated-manifest.js'
import { buildRoutes, type AuditManifest, type ServeRoute } from '../serve/router.js'

function loadManifest(file: string): AuditManifest {
  const absolute = resolve(process.cwd(), file)
  return JSON.parse(readFileSync(absolute, 'utf8')) as AuditManifest
}

function errorPayload(err: unknown): { ok: false; error: { type: string; message: string; hint: string } } {
  if (err instanceof NotAuthenticatedError || err instanceof MBSError) {
    return { ok: false, error: { type: err.type, message: err.message, hint: err.hint } }
  }
  if (err instanceof Error && typeof (err as { type?: unknown }).type === 'string') {
    const typed = err as Error & { type: string; hint?: string }
    return { ok: false, error: { type: typed.type, message: typed.message, hint: typed.hint ?? '' } }
  }
  const message = err instanceof Error ? err.message : String(err)
  return { ok: false, error: { type: 'api', message, hint: '' } }
}

function attachCors(app: FastifyInstance): void {
  app.addHook('onSend', async (request: FastifyRequest, reply: FastifyReply, payload) => {
    const origin = request.headers.origin
    if (typeof origin === 'string' && isAllowedOrigin(origin)) {
      reply.header('Access-Control-Allow-Origin', origin)
      reply.header('Vary', 'Origin')
      reply.header('Access-Control-Allow-Headers', 'Content-Type')
      reply.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    }
    return payload
  })

  app.options('/*', async (_request, reply) => {
    reply.code(204).send()
  })
}

export interface ServeAppOptions {
  projectApis?: boolean
  proxyAll?: boolean
}

export function registerRoutes(app: FastifyInstance, routes: ServeRoute[], getClient: () => Promise<APIClient>): void {
  for (const route of routes) {
    app.route({
      method: route.method,
      url: route.routeUrl,
      handler: async (request, reply) => {
        try {
          const client = await getClient()
          const data = await route.call(client, {
            params: (request.params ?? {}) as Record<string, string>,
            query: (request.query ?? {}) as Record<string, unknown>,
            body: request.body,
          })
          if (route.responseMode === 'ndjson') {
            reply.type('application/x-ndjson').send(data)
            return
          }
          reply.send({ ok: true, data })
        } catch (err) {
          const payload = errorPayload(err)
          const status = payload.error.type === 'auth' ? 401 : 500
          reply.code(status).send(payload)
        }
      },
    })
  }
}

function registerProxyAllRoute(app: FastifyInstance, getClient: () => Promise<APIClient>): void {
  app.route({
    method: ['GET', 'POST'],
    url: '/proxy/*',
    handler: async (request, reply) => {
      try {
        const params = (request.params ?? {}) as Record<string, string>
        const upstreamPath = params['*']
        if (!upstreamPath) throw new Error('Missing upstream API path')

        const client = await getClient()
        const data = await client.request(request.method.toUpperCase(), `/${upstreamPath}`, {
          params: (request.query ?? {}) as Record<string, unknown>,
          body: request.body,
        })
        reply.send({ ok: true, data })
      } catch (err) {
        const payload = errorPayload(err)
        const status = payload.error.type === 'auth' ? 401 : 500
        reply.code(status).send(payload)
      }
    },
  })
}

export function buildApp(
  manifest: AuditManifest | undefined,
  getClient: () => Promise<APIClient>,
  options: ServeAppOptions = {},
): FastifyInstance {
  const app = Fastify({ logger: false })
  attachCors(app)

  const manifestRoutes = manifest ? buildRoutes(manifest) : []
  const projectRoutes = options.projectApis ? buildRoutes(projectManifest) : []
  const seenRoutes = new Set<string>()
  const routes = [...projectRoutes, ...manifestRoutes].filter((route) => {
    const key = `${route.method} ${route.routeUrl}`
    if (seenRoutes.has(key)) return false
    seenRoutes.add(key)
    return true
  })

  app.get('/__routes', async () => ({
    ok: true,
    data: [
      ...routes.map((route) => ({
        method: route.method,
        url: route.routeUrl,
        domain: route.domain,
        action: route.action,
        description: route.description,
        responseMode: route.responseMode,
      })),
      ...(options.proxyAll
        ? [
            {
              method: 'GET|POST',
              url: '/proxy/*',
              domain: '*',
              action: 'proxy-all',
              description: 'Proxy any read-only upstream API path',
            },
          ]
        : []),
    ],
  }))

  registerRoutes(app, routes, getClient)
  if (options.proxyAll) registerProxyAllRoute(app, getClient)
  return app
}

export default class Serve extends Command {
  static description = 'Start a local HTTP gateway so browser pages can query MBS APIs without re-implementing auth'

  static examples = [
    'mbs serve --manifest fixtures/sample-audit-manifest.json',
    'mbs serve --manifest fixtures/sample-audit-manifest.json --port 7878',
    'mbs serve --project-apis',
    'mbs serve --proxy-all',
  ]

  static flags = {
    manifest: Flags.string({
      description: 'Path to audit manifest JSON',
    }),
    'proxy-all': Flags.boolean({
      description: 'Expose a read-only /proxy/* gateway for arbitrary upstream GET/POST API paths',
      default: false,
    }),
    'project-apis': Flags.boolean({
      description: 'Expose all APIs implemented by this project as /api/<domain>/<action> routes',
      default: false,
    }),
    port: Flags.integer({
      description: 'Port to listen on',
      default: 7878,
    }),
    host: Flags.string({
      description: 'Host to bind to (default 127.0.0.1, do not change unless you know what you are doing)',
      default: '127.0.0.1',
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(Serve)
    const projectApis = flags['project-apis'] || flags['proxy-all']
    if (!flags.manifest && !flags['proxy-all'] && !flags['project-apis']) {
      this.log(JSON.stringify(errorPayload(new Error('Either --manifest, --project-apis, or --proxy-all is required'))))
      this.exit(1)
    }

    const manifest = flags.manifest ? loadManifest(flags.manifest) : undefined

    let client: APIClient | undefined
    const getClient = async (): Promise<APIClient> => {
      if (client) return client
      const { cookie } = await getAuthContext()
      const { apiUrl } = getConfig()
      const refresh = async (): Promise<string> => (await forceRefreshAuthContext()).cookie
      client = new APIClient(apiUrl, cookie, refresh)
      return client
    }

    const app = buildApp(manifest, getClient, { projectApis, proxyAll: flags['proxy-all'] })

    try {
      const address = await app.listen({ port: flags.port, host: flags.host })
      this.log(
        JSON.stringify({
          ok: true,
          data: {
            address,
            host: flags.host,
            port: flags.port,
            routes: (projectApis ? buildRoutes(projectManifest).length : 0) + (manifest ? buildRoutes(manifest).length : 0),
            projectApis,
            proxyAll: flags['proxy-all'],
            warning: 'NO AUTH — local loopback only. Anything on this machine can call these endpoints.',
          },
        }),
      )
    } catch (err) {
      this.log(JSON.stringify(errorPayload(err)))
      this.exit(1)
    }
  }
}
