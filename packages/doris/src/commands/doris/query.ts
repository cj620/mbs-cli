import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'
import { readDorisMetadataCache, writeDorisMetadataCache } from '../../cache.js'
import {
  DATABASE_API_PREFIX,
  databaseQueryBody,
  dataSourceCacheKey,
  isDataDictionarySql,
  requireDataSourceOptions,
  resolveSql,
  writeAndCollectNdjsonStream,
  writeNdjsonStream,
} from '../../doris.js'

export default class DorisQuery extends MBSCommand {
  static description = 'Execute a server-validated database SELECT query and stream NDJSON rows'

  static flags = {
    sql: Flags.string({
      description: 'SELECT SQL to execute. If omitted, SQL is read from stdin.',
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
      description: 'Bypass local metadata cache for DB_DATA_DICTIONARY queries',
      default: false,
    }),
  }

  /**
   * Resolves validated SQL and data-source options, executes the streaming
   * read-only query, and maintains the existing metadata-query cache contract.
   *
   * <p>The request uses the shared authenticated client and standard CLI
   * gateway, matching the metadata command routing contract.</p>
   *
   * @returns A promise that resolves after the NDJSON stream is written.
   * @throws Error for invalid SQL, invalid source options, transport failures, or API failures.
   */
  async run(): Promise<void> {
    const { flags } = await this.parse(DorisQuery)
    const sql = await resolveSql(flags.sql)
    const source = requireDataSourceOptions(flags)
    const cacheable = isDataDictionarySql(sql)
    const cacheKey = `${dataSourceCacheKey(source)}\n${sql}`
    if (cacheable && !flags.refresh) {
      const cached = readDorisMetadataCache<string>('data-dictionary-query', cacheKey)
      if (cached !== null) {
        process.stdout.write(cached)
        return
      }
    }

    const stream = await this.client.postStream(
      `${DATABASE_API_PREFIX}/query`,
      databaseQueryBody(sql, source),
    )
    if (cacheable) {
      const result = await writeAndCollectNdjsonStream(stream)
      if (!result.hasError) writeDorisMetadataCache('data-dictionary-query', cacheKey, result.text)
      if (result.hasError) this.exit(1)
      return
    }

    const result = await writeNdjsonStream(stream)
    if (result.hasError) this.exit(1)
  }
}
