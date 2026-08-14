// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetEnabelPublishShopBySite extends MBSCommand {
  static description = '按站点查询可刊登店铺(Shopee)：Shopee「批量导入/生成 listing」弹窗中，用户在站点多选框选择一个或多个站点后，按所选站点列表查询这些站点下可用于刊登的店铺，返回店铺列表用于渲染「预刊登店铺」下拉选项。'

  static flags = {
    siteList: Flags.string({ description: '站点代码列表(数组)。来源:弹窗站点多选框 #modal-site。枚举:PH/SG/MY/TH/ID/VN/BR/MX/TW/CO/CL/PL/ES/FR/AR。用户可多选,未选时为空数组。 (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetEnabelPublishShopBySite)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/shopeeProductPublish/getEnabelPublishShopBySite', { "siteList": toArray(flags.siteList, 'string') })
    this.output(data)
  }
}
