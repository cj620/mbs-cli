import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

// Rename class to: <Domain><Action>, e.g. OrdersList, ProcurementReport
export default class DomainAction extends MBSCommand {
  static description = '<What this command does>'

  static flags = {
    // Add flags as needed. Examples:
    // status: Flags.string({ description: 'Filter by status' }),
    // page:   Flags.integer({ description: 'Page number', default: 1 }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(DomainAction)

    // Use this.client.get() for GET requests
    // Use this.client.post() for POST query requests (no mutations)
    const data = await this.client.get('/v1/<endpoint>', {
      // pathPrefix: '/optional/prefix',
      params: flags,
    })

    this.output(data)
  }
}
