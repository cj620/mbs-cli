import { MBSCommand } from '@mb-it-org/shared'

export default class OrgPlatforms extends MBSCommand {
  static description = 'List all platforms (平台列表)'

  async run(): Promise<void> {
    await this.parse(OrgPlatforms)
    const data = await this.client.get('/saleReport/getPlatformList', { pathPrefix: '/erpOrder/erpOrder' })
    this.output(data)
  }
}
