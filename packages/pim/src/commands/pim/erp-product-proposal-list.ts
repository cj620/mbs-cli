// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductProposalList extends MBSCommand {
  static description = '运营优化建议(SPU)列表查询：库存/今日必做看板「优化」(optimiz/重新检测)Tab 的列表分页查询：按店铺名称、平台、店长、处理状态、itemId 等条件分页查询命中运营策略的 SPU，返回每条 SPU 的图片/标题/订单量/PV-UV/加购收藏/转化率/毛利率/评价评分/推送处理时间/处理状态、问题诊断规则(rule)与优化策略动作列表(actionList)。'

  static flags = {
    page: Flags.string({ description: '当前页码。首屏 optimizSearch() 固定传 1；翻页回调取 api.getCurrent()', required: true }),
    shopNameList: Flags.string({ description: '店铺名称列表。来源控件 #shopName，非空时按 , 与空格拆分为字符串数组，否则传 [] (comma-separated)' }),
    platformIdList: Flags.string({ description: '平台ID列表。来源控件 #plantform；首屏为 [值]，翻页时按 , 拆分为数组，空则 [] (comma-separated)' }),
    shopManagerList: Flags.string({ description: '店长列表。来源控件 #shopleader，非空时为 [值]，否则 [] (comma-separated)' }),
    pageSize: Flags.string({ description: '每页条数。来源控件 #optimizPageSize', required: true }),
    status: Flags.string({ description: '策略处理状态(优化建议状态筛选)。来源控件 #optimizStict' }),
    itemid: Flags.string({ description: '平台商品 itemId 过滤。来源控件 #itemid，仅翻页回调 optimizPaging() 携带，首屏不传' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductProposalList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/operateStrate/proposalList', { "page": flags.page, "shopNameList": toArray(flags.shopNameList, 'string'), "platformIdList": toArray(flags.platformIdList, 'string'), "shopManagerList": toArray(flags.shopManagerList, 'string'), "pageSize": flags.pageSize, "status": flags.status, "itemid": flags.itemid })
    this.output(data)
  }
}
