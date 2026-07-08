import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'
import { readDorisMetadataCache, writeDorisMetadataCache } from '../../cache.js'
import { DORIS_API_PREFIX } from '../../doris.js'

interface ShowCreateTableResponse {
  data?: unknown
}

export default class DorisShowCreateTable extends MBSCommand {
  static description = 'Show Doris CREATE TABLE DDL for a fully-qualified table'

  static flags = {
    tableName: Flags.string({
      description: 'Fully-qualified table name, for example order_db.orders',
      required: true,
    }),
    refresh: Flags.boolean({
      description: 'Bypass local metadata cache and refresh DDL from the server',
      default: false,
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(DorisShowCreateTable)
    if (!flags.refresh) {
      const cached = readDorisMetadataCache<unknown>('show-create-table', flags.tableName)
      if (cached !== null) {
        this.output(cached)
        return
      }
    }

    const response = await this.client.get<ShowCreateTableResponse>(`${DORIS_API_PREFIX}/show-create-table`, {
      params: { tableName: flags.tableName },
    })
    const data = response?.data ?? response
    writeDorisMetadataCache('show-create-table', flags.tableName, data)
    this.output(data)
  }
}
