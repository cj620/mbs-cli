import { Args, Command, Flags } from '@oclif/core'
import { APIClient, forceRefreshAuthContext, getAuthContext, getConfig } from '@mb-it-org/shared'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import { findApis, type RemoteRecall } from '../find/find-service.js'
import { recordFindEvent } from '../find/telemetry.js'
import type { FindRequest, RecallTargetType, SkillManifest } from '../find/types.js'

const API_GATEWAY_PREFIX = '/gateway/cli'

export default class Find extends Command {
  static description = 'Find read-only API or workflow candidates from a natural-language query'

  static examples = [
    'mbs find "查询店铺库存"',
    'mbs find "销量为什么下降" --target-type workflow',
    'mbs find "订单明细" --domain oms --top-k 5',
  ]

  static args = {
    query: Args.string({ required: true, description: 'Natural-language API or workflow query' }),
  }

  static flags = {
    domain: Flags.string({ description: 'Limit candidates to a business domain' }),
    'target-type': Flags.string({
      description: 'Candidate type',
      options: ['api', 'workflow', 'all'],
      default: 'all',
    }),
    'top-k': Flags.integer({
      description: 'Maximum number of candidates',
      default: 5,
      min: 1,
      max: 50,
    }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Find)
    const request: FindRequest = {
      query: args.query,
      domain: flags.domain,
      targetType: flags['target-type'] as RecallTargetType,
      topK: flags['top-k'],
    }
    const manifest = loadSkillManifest(this.config.root)
    const remoteRecall = createRemoteRecall()
    const outcome = await findApis(request, manifest, remoteRecall)
    recordFindEvent(request.query, outcome.meta, outcome.data.results.length)
    this.log(JSON.stringify({ ok: true, data: outcome.data, meta: outcome.meta }))
  }

  async catch(error: Error & { exitCode?: number }): Promise<void> {
    this.log(JSON.stringify({
      ok: false,
      error: { type: 'validation', message: error.message, hint: 'Run `mbs find --help` to check supported arguments' },
    }))
    this.exit(1)
  }
}

export function loadSkillManifest(cliRoot: string): SkillManifest {
  const candidates = [
    join(cliRoot, 'skills', 'manifest.json'),
    join(cliRoot, '..', '..', 'skills', 'manifest.json'),
  ]
  const path = candidates.find(existsSync)
  if (!path) throw new Error('skills/manifest.json was not found')
  return JSON.parse(readFileSync(path, 'utf8')) as SkillManifest
}

function createRemoteRecall(): RemoteRecall {
  return async (request) => {
    const { cookie } = await getAuthContext()
    const { apiUrl } = getConfig()
    const refreshAuth = async (): Promise<string> => (await forceRefreshAuthContext()).cookie
    const client = new APIClient(`${apiUrl.replace(/\/+$/, '')}${API_GATEWAY_PREFIX}`, cookie, refreshAuth)
    return await client.post('/cli/api/recall', request)
  }
}
