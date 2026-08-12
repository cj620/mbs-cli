import { Args, Command, Flags } from '@oclif/core'

import {
  findApis,
  RecallUnavailableError,
  type RemoteRecall,
  validateRequest,
} from '../find/find-service.js'
import {
  classifyRemoteFailure,
  createRecallClient,
} from '../find/remote-client.js'
import { recordFindEvent } from '../find/telemetry.js'
import { TABLE_ACTION_CAPABILITY, type FindRequest, type RecallTargetType } from '../find/types.js'

const RECALL_PATH = '/cli/api/recall'

export { classifyRemoteFailure, resolveRecallBaseUrl } from '../find/remote-client.js'

export default class Find extends Command {
  static description = 'Find workflow, read-only API, or authorized table candidates from natural language'

  static examples = [
    'mbs find "查询店铺库存"',
    'mbs find "销量为什么下降" --target-type workflow',
    'mbs find "每日销售明细表" --target-type table',
    'mbs find "订单明细" --top-k 5',
  ]

  static args = {
    query: Args.string({ required: true, description: 'Natural-language business or data query' }),
  }

  static flags = {
    domain: Flags.string({
      description: 'Optional domain filter for explicit user scope or hint-driven follow-up',
    }),
    'target-type': Flags.string({
      description: 'Candidate type',
      options: ['api', 'workflow', 'table', 'all'],
      default: 'all',
    }),
    'top-k': Flags.integer({
      description: 'Maximum number of candidates',
      default: 5,
      min: 1,
      max: 50,
    }),
    diagnostics: Flags.boolean({
      description: 'Include a sanitized backend failure category',
      default: false,
    }),
  }

  private includeDiagnostics = false

  /**
   * Executes backend-only workflow/API/authorized-table discovery and prints the stable JSON contract.
   *
   * <p>The command never loads a local interface manifest or table index. Backend, embedding,
   * Milvus, permission metadata, timeout, authentication, and response-contract failures are reported
   * as explicit errors so incomplete local metadata cannot masquerade as successful
   * semantic discovery. Authentication always comes from the normal saved CLI
   * login context.</p>
   */
  async run(): Promise<void> {
    const { args, flags } = await this.parse(Find)
    this.includeDiagnostics = flags.diagnostics
    const request: FindRequest = {
      query: args.query,
      domain: flags.domain,
      targetType: flags['target-type'] as RecallTargetType,
      topK: flags['top-k'],
      capabilities: [TABLE_ACTION_CAPABILITY],
    }
    validateRequest(request)
    const outcome = await findApis(request, createRemoteRecall())
    recordFindEvent(outcome.meta, outcome.data.results.length)
    this.log(JSON.stringify({ ok: true, data: outcome.data, meta: outcome.meta }))
  }

  /**
   * Converts validation and backend failures to the shared structured error response.
   *
   * @param error Validation, authentication, transport, timeout, or contract error.
   */
  async catch(error: Error & { exitCode?: number }): Promise<void> {
    if (error instanceof RecallUnavailableError) {
      const payload = {
        ok: false,
        error: {
          type: 'semantic-discovery',
          message: 'Semantic discovery service is unavailable',
          hint: 'Retry after cli-service, embedding, Milvus, and permission metadata are available',
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
        hint: 'Run `mbs find --help` to check supported arguments',
      },
    }))
    this.exit(1)
  }
}

/**
 * Creates the authenticated semantic-recall callback used by `mbs find`.
 *
 * @returns Callback that sends one validated request to the fixed backend recall endpoint.
 */
function createRemoteRecall(): RemoteRecall {
  return async (request, signal) => {
    const client = await createRecallClient()
    return await client.post(RECALL_PATH, request, { signal })
  }
}
