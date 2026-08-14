// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetOperReducePrice extends MBSCommand {
  static description = '降本英雄榜(开发员降本汇总查询)：降本排行榜页「降本英雄榜」标签的数据查询：按时间区间统计各开发员(或采购组)在该期间内的降本明细，返回动态列头(title)与对应数据行(list)，前端以表头字段名 name 动态从每行取值渲染等级榜单。'

  static flags = {
    page: Flags.string({ description: '当前页码，固定传 1（该页签无分页控件）', required: true }),
    startTime: Flags.string({ description: '统计开始时间，来源日期控件 #startTime (input type=date，格式 yyyy-MM-dd)' }),
    endTime: Flags.string({ description: '统计结束时间，来源日期控件 #endTime (input type=date，格式 yyyy-MM-dd)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetOperReducePrice)

    const data = await this.client.post('/erpProduct/erpProduct/productExtend/getOperReducePrice', { "page": flags.page, "startTime": flags.startTime, "endTime": flags.endTime })
    this.output(data)
  }
}
