import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'
import { DORIS_API_PREFIX, resolveSql, writeNdjsonStream } from '../../doris.js'

export default class DorisQuery extends MBSCommand {
  static description = 'Execute a server-validated Doris SELECT query and stream NDJSON rows'

  static flags = {
    sql: Flags.string({
      description: 'SELECT SQL to execute. If omitted, SQL is read from stdin.',
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(DorisQuery)
    const sql = await resolveSql(flags.sql)
    const stream = await this.client.postStream(`${DORIS_API_PREFIX}/query`, { sql })
    const result = await writeNdjsonStream(stream)
    if (result.hasError) this.exit(1)
  }
}
