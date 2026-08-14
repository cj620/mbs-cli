// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShowWishFineDetail extends MBSCommand {
  static description = 'Wish罚款明细查询：按时间区间、店铺名、罚款类型分页查询 Wish 平台罚款明细列表，返回总条数、总页数及每条罚款记录(店铺、交易/订单ID、延迟天数、发生时间、罚款/扣减金额(美元/人民币)、是否撤销、罚款类型与状态)。'

  static flags = {
    dateFromStr: Flags.string({ description: '起始时间(罚款发生时间区间-起)，来自页面URL Query GetQueryString(\'dateFromStr\')' }),
    dateToStr: Flags.string({ description: '结束时间(罚款发生时间区间-止)，来自页面URL Query GetQueryString(\'dateToStr\')' }),
    shopName: Flags.string({ description: '店铺名(按店铺过滤)，来自页面URL Query GetQueryString(\'shopName\')' }),
    type: Flags.string({ description: '罚款类型(类型过滤，具体取值含义待人工确认)，来自页面URL Query GetQueryString(\'type\')' }),
    currPage: Flags.string({ description: '当前页码(从1开始；首次固定1，翻页取分页组件 api.getCurrent()；每页固定100条)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderShowWishFineDetail)

    const data = await this.client.post('/erpOrder/erpOrder/wishFine/showWishFineDetail', {}, { params: { "dateFromStr": flags.dateFromStr, "dateToStr": flags.dateToStr, "shopName": flags.shopName, "type": flags.type, "currPage": flags.currPage } })
    this.output(data)
  }
}
