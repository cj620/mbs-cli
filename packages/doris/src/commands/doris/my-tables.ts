import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'
import { readDorisMetadataCache, writeDorisMetadataCache } from '../../cache.js'
import { DATABASE_API_PREFIX } from '../../doris.js'

interface DorisMyTablesResponse {
  data?: unknown
}

export default class DorisMyTables extends MBSCommand {
  static description = 'List database tables the current user can query from permission configuration'

  static flags = {
    refresh: Flags.boolean({
      description: 'Bypass local metadata cache and refresh table permissions from the server',
      default: false,
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(DorisMyTables)
    if (!flags.refresh) {
      const cached = readDorisMetadataCache<unknown>('my-tables', 'current-user')
      if (cached !== null) {
        this.output(cached)
        return
      }
    }

    const response = await this.client.get<DorisMyTablesResponse>(`${DATABASE_API_PREFIX}/my-tables`)
    const data = response?.data ?? response
    writeDorisMetadataCache('my-tables', 'current-user', data)
    this.output(data)
  }
}
