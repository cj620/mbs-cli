import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

import { createReadOnlyRequest } from '../request/request-input.js'

/**
 * Public authenticated transport for query APIs discovered at runtime.
 *
 * <p>The shared base command owns `/gateway/cli`, saved Cookie use, refresh,
 * error formatting, and exit codes. This command owns only dynamic method,
 * path, and JSON input validation.</p>
 */
export default class Request extends MBSCommand {
  static description = 'Send an authenticated GET or query POST to a discovered MBS interface path'

  static examples = [
    'mbs request GET /v1/orders --params \'{"status":"open"}\'',
    'mbs request POST /yypms/pms/middlePanel/getMiddlePanelList --body \'{"page":1,"pageSize":20}\'',
  ]

  static args = {
    method: Args.string({
      required: true,
      description: 'Read-only HTTP method (GET or POST)',
    }),
    path: Args.string({
      required: true,
      description: 'Interface path; /gateway/cli is added automatically',
    }),
  }

  static flags = {
    body: Flags.string({
      description: 'JSON request body for query POST',
      char: 'b',
    }),
    params: Flags.string({
      description: 'Query parameters as a JSON object',
      char: 'p',
    }),
  }

  /**
   * Parses and validates the dynamic query, sends it through the shared
   * authenticated gateway client, and prints the standard success envelope.
   *
   * @throws MBSError for invalid method, path, or JSON input.
   * @throws Error for authentication, permission, transport, or API failures;
   * the inherited command boundary maps them to the stable error envelope.
   */
  async run(): Promise<void> {
    const { args, flags } = await this.parse(Request)
    const request = createReadOnlyRequest(args.method, args.path, flags.body, flags.params)
    const response = await this.client.request(request.method, request.path, request.options)
    this.output(response)
  }
}
