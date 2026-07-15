// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetShopSite extends MBSCommand {
  static description = '店铺站点列表查询(getShopSite)：获取「店铺站点」下拉列表数据。页面加载时(password())无条件调用，返回当前可选的店铺站点字符串数组，用于渲染 #password(店铺站点)下拉选择框；用户选中后作为店铺业绩列表查询/导出的 password 过滤条件。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetShopSite)

    const data = await this.client.post('/erpOrder/erpOrder/shopAchievements/getShopSite', {})
    this.output(data)
  }
}
