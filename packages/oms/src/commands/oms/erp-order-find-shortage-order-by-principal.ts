// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindShortageOrderByPrincipal extends MBSCommand {
  static description = '缺货订单查询(按负责人)：仪表盘「清仓停产/15天缺货订单」列表分页查询：按当前登录负责人(principal)拉取其名下缺货订单，返回订单列表(订单号、状态、延迟天数、店铺、客户、金额、时间、运费、交易单号、备注)及总条数/总页数。首屏不带分页参数(默认首页)，翻页回调带 currPage。'

  static flags = {
    currPage: Flags.string({ description: '当前页码。来源：分页控件 .fifteenM-box 回调 api.getCurrent()。首屏查询不传(后端默认第1页)；翻页时以 ?currPage= 拼入 URL' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindShortageOrderByPrincipal)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findShortageOrderByPrincipal', {}, { params: { "currPage": flags.currPage } })
    this.output(data)
  }
}
