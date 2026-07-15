// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureQuerySmtShop extends MBSCommand {
  static description = 'SMT店铺列表查询：查询SMT纠纷统计页可选「店铺」列表。前端在页面 onMounted → getshop() 中调用，无任何请求参数，返回店铺名称字符串数组，前端将每个名称映射为 {value,label} 后填充店铺筛选下拉框。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureQuerySmtShop)

    const data = await this.client.post('/erpManufacture/erpManufacture/issueInfo/querySmtShop', {})
    this.output(data)
  }
}
