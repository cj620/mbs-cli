import { MBSCommand } from '@mb-it-org/shared'
import { DORIS_API_PREFIX } from '../../doris.js'

interface DorisSchemasResponse {
  data?: unknown
}

export default class DorisSchemas extends MBSCommand {
  static description = 'List Doris databases and tables available to the current user'

  async run(): Promise<void> {
    const response = await this.client.get<DorisSchemasResponse>(`${DORIS_API_PREFIX}/schemas`)
    this.output(response?.data ?? response)
  }
}
