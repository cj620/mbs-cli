// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetShopFreightTemplates extends MBSCommand {
  static description = '店铺运费模板查询：爆款商品监控(shopHotProducts2)页面，按当前所选平台与店铺查询其可用的运费模板列表，用于运费模板多选下拉的选项数据。仅当已选平台且已选至少一个店铺时才发起请求。'

  static flags = {
    platformId: Flags.string({ description: '平台ID。来源：页面平台下拉选择 shopapp.platform（单值）。为空时不发起请求。', required: true }),
    shopNames: Flags.string({ description: '店铺名称列表。来源：店铺多选 shopapp.shop（el-option 的 value=SHOPNAME，店铺名数组）。长度为 0 时不发起请求。 (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetShopFreightTemplates)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/getShopFreightTemplates', { "platformId": flags.platformId, "shopNames": toArray(flags.shopNames, 'string') })
    this.output(data)
  }
}
