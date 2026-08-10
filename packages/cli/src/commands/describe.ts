import { Args, Command, Flags } from '@oclif/core'

import { describeApi, type RemoteApiDetail } from '../find/detail-service.js'
import { RecallUnavailableError } from '../find/find-service.js'
import {
  classifyRemoteFailure,
  createRecallClient,
} from '../find/remote-client.js'

const RECALL_DETAIL_PATH = '/cli/api/recall/detail'

export default class Describe extends Command {
  static description = 'Load one recalled read-only API definition from the backend'

  static examples = [
    'mbs describe 123',
    'mbs describe 123 --diagnostics',
  ]

  static args = {
    apiId: Args.string({ required: true, description: 'API ID returned by mbs find' }),
  }

  static flags = {
    diagnostics: Flags.boolean({
      description: 'Include a sanitized backend failure category',
      default: false,
    }),
  }

  private includeDiagnostics = false

  /**
   * Fetches and prints one complete backend API definition.
   *
   * <p>The command accepts only a positive integer ID, uses the same authenticated
   * client as semantic recall, uses the normal saved CLI login context, and
   * never reads a local endpoint document or interface manifest.</p>
   */
  async run(): Promise<void> {
    const { args, flags } = await this.parse(Describe)
    this.includeDiagnostics = flags.diagnostics
    const apiId = Number(args.apiId)
    if (!Number.isInteger(apiId) || apiId < 1) {
      throw new Error('apiId must be a positive integer')
    }
    const detail = await describeApi(apiId, createRemoteDetail())
    this.log(JSON.stringify({ ok: true, data: detail, meta: { mode: 'remote' } }))
  }

  /**
   * Converts validation and backend failures to the stable CLI error contract.
   *
   * @param error Failure raised before a validated backend detail is available.
   */
  async catch(error: Error & { exitCode?: number }): Promise<void> {
    if (error instanceof RecallUnavailableError) {
      const payload = {
        ok: false,
        error: {
          type: 'api',
          message: 'Backend API detail is unavailable',
          hint: 'Retry after cli-service is available',
        },
        ...(this.includeDiagnostics
          ? { meta: { diagnostics: { remoteFailure: classifyRemoteFailure(error.reason) } } }
          : {}),
      }
      this.log(JSON.stringify(payload))
      this.exit(1)
      return
    }

    this.log(JSON.stringify({
      ok: false,
      error: {
        type: 'validation',
        message: error.message,
        hint: 'Use the positive API ID returned by `mbs find`',
      },
    }))
    this.exit(1)
  }
}

/**
 * Creates the backend callback used by `mbs describe`.
 *
 * @returns Callback that posts one API ID to the fixed read-only detail endpoint.
 */
function createRemoteDetail(): RemoteApiDetail {
  return async (apiId, signal) => {
    const client = await createRecallClient()
    return await client.post(RECALL_DETAIL_PATH, { apiId }, { signal })
  }
}
