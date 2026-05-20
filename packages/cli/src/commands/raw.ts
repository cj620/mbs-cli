// packages/cli/src/commands/raw.ts
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class Raw extends MBSCommand {
  static description = 'Make a raw authenticated HTTP request to the API'

  static examples = [
    'mbs raw GET /v1/orders',
    'mbs raw POST /v1/export --body \'{"from":"2026-01-01"}\'',
  ]

  static args = {
    method: Args.string({
      required: true,
      description: 'HTTP method (GET or POST)',
    }),
    path: Args.string({
      required: true,
      description: 'API path (e.g. /v1/orders)',
    }),
  }

  static flags = {
    body: Flags.string({
      description: 'JSON request body (for POST)',
      char: 'b',
    }),
    params: Flags.string({
      description: 'Query params as JSON (e.g. \'{"status":"pending"}\')',
      char: 'p',
    }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Raw)
    const method = args.method.toUpperCase()
    if (!['GET', 'POST'].includes(method)) {
      throw new Error('raw only supports read-only GET and query POST requests')
    }

    const body = flags.body ? (JSON.parse(flags.body) as unknown) : undefined
    const params = flags.params
      ? (JSON.parse(flags.params) as Record<string, unknown>)
      : undefined

    const data = await this.client.request(method, args.path, { body, params })
    this.output(data)
  }
}
