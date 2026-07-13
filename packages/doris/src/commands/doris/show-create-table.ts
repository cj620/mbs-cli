import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'
import { readDorisMetadataCache, writeDorisMetadataCache } from '../../cache.js'
import {
  DATABASE_API_PREFIX,
  dataSourceCacheKey,
  dataSourceParams,
  requireDataSourceOptions,
} from '../../doris.js'

interface ShowCreateTableResponse {
  data?: unknown
}

export default class DorisShowCreateTable extends MBSCommand {
  static description = 'Show CREATE TABLE or reconstructed table DDL for the selected data source'

  static flags = {
    tableName: Flags.string({
      description: 'Fully-qualified table name, for example order_db.orders',
      required: true,
    }),
    host: Flags.string({
      description: 'Target data source host identifier. Must be provided together with --database.',
    }),
    database: Flags.string({
      description: 'Target database name. Must be provided together with --host.',
    }),
    schema: Flags.string({
      description: 'Target schema, used when a table name is ambiguous across schemas.',
    }),
    refresh: Flags.boolean({
      description: 'Bypass local metadata cache and refresh DDL from the server',
      default: false,
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(DorisShowCreateTable)
    const source = requireDataSourceOptions(flags)
    const cacheKey = `${dataSourceCacheKey(source)}\n${flags.tableName}`
    if (!flags.refresh) {
      const cached = readDorisMetadataCache<unknown>('show-create-table', cacheKey)
      if (cached !== null) {
        this.output(cached)
        return
      }
    }

    const response = await this.client.get<ShowCreateTableResponse>(`${DATABASE_API_PREFIX}/show-create-table`, {
      params: { tableName: flags.tableName, ...dataSourceParams(source) },
    })
    const data = response?.data ?? response
    writeDorisMetadataCache('show-create-table', cacheKey, data)
    this.output(data)
  }
}
