// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetManufacRefund extends MBSCommand {
  static description = '供应商/开发员退货排行查询（退货排行榜）：降本排行榜页面「退货排行」标签页数据查询：按开始/结束时间区间统计各人员（开发员/采购员）的退款情况，返回按退款金额排行的人员列表（姓名、统计项金额、累计退款金额）。'

  static flags = {
    page: Flags.string({ description: '当前页码，前端固定传 1', required: true }),
    startTime: Flags.string({ description: '统计开始时间，取自时间选择控件 #startTime（yyyy-MM-dd）' }),
    endTime: Flags.string({ description: '统计结束时间，取自时间选择控件 #endTime（yyyy-MM-dd）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetManufacRefund)

    const data = await this.client.post('/erpProduct/erpProduct/productExtend/getManufacRefund', { "page": flags.page, "startTime": flags.startTime, "endTime": flags.endTime })
    this.output(data)
  }
}
