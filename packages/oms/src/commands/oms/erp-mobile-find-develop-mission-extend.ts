// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileFindDevelopMissionExtend extends MBSCommand {
  static description = '开发任务(货源)分页列表查询：移动端马帮ERP「未找到货源/已找到货源」页面的开发任务分页列表查询：按是否已找到货源标志 isGoodSupply 分页拉取开发任务，返回任务列表(商品标题、售价、放弃状态/原因等)、总页数及当前用户头像，前端用 art-template(#nosupplyTemplate) 渲染并支持加载更多分页。'

  static flags = {
    isGoodSupply: Flags.string({ description: '是否已找到货源标志。本页(未找到货源)固定传\'2\'=未找到货源；同接口被已找到货源页supplyGoods.html以其它取值复用(其它取值含义待人工确认)。来源：代码固定值', required: true }),
    currentPage: Flags.string({ description: '当前页码，从1开始；首次查询为1，点击加载更多时currentPage++递增。来源：前端分页变量currentPage', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileFindDevelopMissionExtend)

    const data = await this.client.post('/erpMobile/erpMobile/shoeController/findDevelopMissionExtend', { "isGoodSupply": flags.isGoodSupply, "currentPage": flags.currentPage })
    this.output(data)
  }
}
