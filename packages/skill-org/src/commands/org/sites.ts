import { Flags } from '@oclif/core'
import { MBSCommand } from '@mbs/skill-shared'

export default class OrgSites extends MBSCommand {
  static description = 'List sites by platform (站点列表)'

  static flags = {
    platform: Flags.string({ description: 'Platform ID(s), comma-separated', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OrgSites)
    const platformIds = flags.platform.split(',').map(p => p.trim())
    const data = await this.client.get('/saleReport/getSiteList?platformids=' + platformIds.join(','), {
      pathPrefix: '/erpOrder/erpOrder',
    })
    this.output(data)
  }
}
