import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'
import { readDorisMetadataCache, writeDorisMetadataCache } from '../../cache.js'
import {
  DORIS_API_PREFIX,
  isDataDictionarySql,
  resolveSql,
  writeAndCollectNdjsonStream,
  writeNdjsonStream,
} from '../../doris.js'

export default class DorisQuery extends MBSCommand {
  static description = 'Execute a server-validated Doris SELECT query and stream NDJSON rows'

  static flags = {
    sql: Flags.string({
      description: 'SELECT SQL to execute. If omitted, SQL is read from stdin.',
    }),
    refresh: Flags.boolean({
      description: 'Bypass local metadata cache for DB_DATA_DICTIONARY queries',
      default: false,
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(DorisQuery)
    const sql = await resolveSql(flags.sql)
    const cacheable = isDataDictionarySql(sql)
    if (cacheable && !flags.refresh) {
      const cached = readDorisMetadataCache<string>('data-dictionary-query', sql)
      if (cached !== null) {
        process.stdout.write(cached)
        return
      }
    }

    const stream = await this.client.postStream(`${DORIS_API_PREFIX}/query`, { sql })
    if (cacheable) {
      const result = await writeAndCollectNdjsonStream(stream)
      if (!result.hasError) writeDorisMetadataCache('data-dictionary-query', sql, result.text)
      if (result.hasError) this.exit(1)
      return
    }

    const result = await writeNdjsonStream(stream)
    if (result.hasError) this.exit(1)
  }
}
