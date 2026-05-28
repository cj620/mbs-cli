import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'
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
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(DorisShowCreateTable)
    const response = await this.client.get<ShowCreateTableResponse>(`${DORIS_API_PREFIX}/show-create-table`, {
      params: { tableName: flags.tableName },
    })
    this.output(response?.data ?? response)
  }
}
