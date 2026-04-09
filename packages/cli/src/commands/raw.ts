// packages/cli/src/commands/raw.ts
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mbs/shared'

export default class Raw extends MBSCommand {
  static description = 'Make a raw authenticated HTTP request to the API'

  static examples = [
    'mbs raw GET /v1/orders',
    'mbs raw POST /v1/export --body \'{"from":"2026-01-01"}\'',
  ]

  static args = {
    method: Args.string({
      required: true,
      description: 'HTTP method (GET, POST, PUT, DELETE)',
    }),
    path: Args.string({
      required: true,
      description: 'API path (e.g. /v1/orders)',
    }),
  }

  static flags = {
    body: Flags.string({
      description: 'JSON request body (for POST/PUT)',
      char: 'b',
    }),
    params: Flags.string({
      description: 'Query params as JSON (e.g. \'{"status":"pending"}\')',
      char: 'p',
    }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Raw)

    const body = flags.body ? (JSON.parse(flags.body) as unknown) : undefined
    const params = flags.params
      ? (JSON.parse(flags.params) as Record<string, unknown>)
      : undefined

    const data = await this.client.request(args.method, args.path, { body, params })
    this.output(data)
  }
}
