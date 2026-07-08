import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'
import { readDorisMetadataCache, writeDorisMetadataCache } from '../../cache.js'
import { DORIS_API_PREFIX } from '../../doris.js'

interface DorisSchemasResponse {
  data?: unknown
}

export default class DorisSchemas extends MBSCommand {
  static description = 'List Doris databases and tables available to the current user'

  static flags = {
    refresh: Flags.boolean({
      description: 'Bypass local metadata cache and refresh schemas from the server',
      default: false,
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(DorisSchemas)
    if (!flags.refresh) {
      const cached = readDorisMetadataCache<unknown>('schemas', 'all')
      if (cached !== null) {
        this.output(cached)
        return
      }
    }

    const response = await this.client.get<DorisSchemasResponse>(`${DORIS_API_PREFIX}/schemas`)
    const data = response?.data ?? response
    writeDorisMetadataCache('schemas', 'all', data)
    this.output(data)
  }
}
