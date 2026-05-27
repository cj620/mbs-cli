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

export function buildApp(manifest: AuditManifest, getClient: () => Promise<APIClient>): FastifyInstance {
  const app = Fastify({ logger: false })
  attachCors(app)

  const routes = buildRoutes(manifest)

  app.get('/__routes', async () => ({
    ok: true,
    data: routes.map((route) => ({
      method: route.method,
      url: route.routeUrl,
      domain: route.domain,
      action: route.action,
      description: route.description,
    })),
  }))

  registerRoutes(app, routes, getClient)
  return app
}

export default class Serve extends Command {
  static description = 'Start a local HTTP gateway so browser pages can query MBS APIs without re-implementing auth'

  static examples = [
    'mbs serve --manifest fixtures/sample-audit-manifest.json',
    'mbs serve --manifest fixtures/sample-audit-manifest.json --port 7878',
  ]

  static flags = {
    manifest: Flags.string({
      description: 'Path to audit manifest JSON',
      required: true,
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
    const manifest = loadManifest(flags.manifest)

    let client: APIClient | undefined
    const getClient = async (): Promise<APIClient> => {
      if (client) return client
      const { cookie } = await getAuthContext()
      const { apiUrl } = getConfig()
      const refresh = async (): Promise<string> => (await forceRefreshAuthContext()).cookie
      client = new APIClient(apiUrl, cookie, refresh)
      return client
    }

    const app = buildApp(manifest, getClient)

    try {
      const address = await app.listen({ port: flags.port, host: flags.host })
      this.log(
        JSON.stringify({
          ok: true,
          data: {
            address,
            host: flags.host,
            port: flags.port,
            routes: buildRoutes(manifest).length,
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
