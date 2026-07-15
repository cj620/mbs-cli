// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetProductTypeTab extends MBSCommand {
  static description = '亚马逊自动刊登-获取产品类型(类目)标签页：亚马逊自动刊登待确认页面顶部「类目标签栏」数据获取：按所选店铺(shopIds)与刊登状态(status)统计各产品类型(一级类目)的待处理数量，返回类目列表，前端用 categoryListTemplate 渲染为可点击的标签页(tab)，点击后按 productType/templateId 二次筛选列表。'

  static flags = {
    shopIds: Flags.string({ description: '店铺标识列表；来源店铺多选控件 #shopNames 的选中值，searchByStatus 调用时传 [shop] 单店铺数组。元素为店铺名/店铺标识(string) (comma-separated)' }),
    status: Flags.string({ description: '刊登状态(在线结果)；来源刊登状态控件 #publishStatus(searchByStatus 的 str 参数)，为空字符串表示不限状态' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetProductTypeTab)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/amazonProductPublish/getProductTypeTab', { "shopIds": toArray(flags.shopIds, 'string'), "status": flags.status })
    this.output(data)
  }
}
