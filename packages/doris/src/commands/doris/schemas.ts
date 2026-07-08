import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'
import { readDorisMetadataCache, writeDorisMetadataCache } from '../../cache.js'
import { DATABASE_API_PREFIX, dataSourceCacheKey, dataSourceParams, normalizeDataSourceOptions } from '../../doris.js'

interface DorisSchemasResponse {
  data?: unknown
}

export default class DorisSchemas extends MBSCommand {
  static description = 'List databases, schemas, and tables for the selected data source'

  static flags = {
    host: Flags.string({
      description: 'Target data source host identifier. Must be provided together with --database.',
    }),
    database: Flags.string({
      description: 'Target database name. Must be provided together with --host.',
    }),
    refresh: Flags.boolean({
      description: 'Bypass local metadata cache and refresh schemas from the server',
      default: false,
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(DorisSchemas)
    const source = normalizeDataSourceOptions(flags)
    const cacheKey = dataSourceCacheKey(source)
    if (!flags.refresh) {
      const cached = readDorisMetadataCache<unknown>('schemas', cacheKey)
      if (cached !== null) {
        this.output(cached)
        return
      }
    }

    const response = await this.client.get<DorisSchemasResponse>(`${DATABASE_API_PREFIX}/schemas`, {
      params: dataSourceParams(source),
    })
    const data = response?.data ?? response
    writeDorisMetadataCache('schemas', cacheKey, data)
    this.output(data)
  }
}
