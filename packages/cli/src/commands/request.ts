import { Args, Flags } from '@oclif/core'
import { MBSError, MBSCommand } from '@mb-it-org/shared'

import { describeApi, type RemoteApiDetail } from '../find/detail-service.js'
import { createRecallClient } from '../find/remote-client.js'
import { createMetadataReadOnlyRequest, createReadOnlyRequest } from '../request/request-input.js'

const RECALL_DETAIL_PATH = '/cli/api/recall/detail'

/**
 * Public authenticated transport for query APIs discovered at runtime.
 *
 * <p>The shared base command owns `/gateway/cli`, saved Cookie use, refresh,
 * error formatting, and exit codes. This command owns only dynamic method,
 * path, and request-body input validation.</p>
 */
export default class Request extends MBSCommand {
  static description = 'Send an authenticated GET or query POST to a discovered MBS interface path'

  static examples = [
    'mbs request GET /v1/orders --params \'{"status":"open"}\'',
    'mbs request POST /yypms/pms/middlePanel/getMiddlePanelList --body \'{"page":1,"pageSize":20}\'',
    'mbs request --api-id 123 --body \'{"groupCompanyId":1}\'',
    'mbs request --api-id 456 --body-file ./payload.xml',
  ]

  static args = {
    method: Args.string({
      required: false,
      description: 'Read-only HTTP method; optional with --api-id',
    }),
    path: Args.string({
      required: false,
      description: 'Concrete interface path; optional with --api-id unless path parameters must be replaced',
    }),
  }

  static flags = {
    body: Flags.string({
      description: 'JSON for structured modes; raw text/XML or strict Base64 for raw modes',
      char: 'b',
      exclusive: ['body-file'],
    }),
    'body-file': Flags.string({
      description: 'Runtime file for TEXT, XML, or BINARY mode; content/path is never logged',
      exclusive: ['body'],
    }),
    'api-id': Flags.integer({
      description: 'API ID from mbs find; loads authoritative request-body metadata',
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
    let request
    if (flags['api-id'] !== undefined) {
      if (!Number.isInteger(flags['api-id']) || flags['api-id'] < 1) {
        throw requestValidationError('api-id must be a positive integer')
      }
      const detail = await describeApi(flags['api-id'], createRemoteDetail())
      request = await createMetadataReadOnlyRequest(
        detail,
        args.method,
        args.path,
        flags.body,
        flags['body-file'],
        flags.params,
      )
    } else {
      if (!args.method || !args.path) {
        throw requestValidationError('method and path are required unless --api-id is provided')
      }
      if (flags['body-file'] !== undefined) {
        throw requestValidationError('--body-file requires --api-id request body metadata')
      }
      request = createReadOnlyRequest(args.method, args.path, flags.body, flags.params)
    }
    const response = await this.client.request(request.method, request.path, request.options)
    this.output(response)
  }
}

/**
 * Creates the authenticated backend callback used to load request-body metadata by API ID.
 *
 * @returns Callback targeting only the fixed recall-detail endpoint.
 */
function createRemoteDetail(): RemoteApiDetail {
  return async (apiId, signal) => {
    const client = await createRecallClient()
    return await client.post(RECALL_DETAIL_PATH, { apiId }, { signal })
  }
}

/**
 * Creates a stable validation error for command-shape failures that occur before request encoding.
 *
 * @param message Non-sensitive explanation suitable for the public CLI error envelope.
 * @returns Validation-classified error with a fixed help hint.
 */
function requestValidationError(message: string): MBSError {
  return new MBSError(message, 'validation', 'Run `mbs request --help` for the accepted request format')
}
