// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetLeaveMessageSpu extends MBSCommand {
  static description = 'SPU留言查询：SPU详情页加载时查询该SPU下的全部留言（含子回复）列表，渲染到"SPU 留言"卡片。返回留言人、头像、留言内容、留言时间、留言目标(SKU/SPU)、留言类型及嵌套子留言。当前用户头像通过顶层 content 字段返回。'

  static flags = {
    spu: Flags.string({ description: '商品SPU编号，按SPU查询其留言列表。来源：页面URL参数 SPU（GetQueryString(\'SPU\')）', required: true }),
    isAll: Flags.string({ description: '是否查询全部留言。前端固定传 1（硬编码常量）', required: true }),
    isSystem: Flags.string({ description: '是否含系统留言/系统类型标识。前端固定传 3（硬编码常量，业务取值含义待人工确认）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetLeaveMessageSpu)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getLeaveMessageSpu', {}, { params: { "spu": flags.spu, "isAll": flags.isAll, "isSystem": flags.isSystem } })
    this.output(data)
  }
}
