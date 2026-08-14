// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductPreviewTask extends MBSCommand {
  static description = 'Shopee批量刊登-预览生成店铺商品行(previewTask)：Shopee商品批量刊登弹窗中，依据所选站点(siteList)与预刊登店铺(shopList)，后端预生成待刊登店铺商品行(含唯一标识、默认站点、店铺名)，前端渲染到批量导入表格供补填库存/利润率/折扣率/平台费率/价格渠道后提交刊登。'

  static flags = {
    siteList: Flags.string({ description: '站点列表，取自站点多选框 #modal-site 的 select2 选中值。为空时前端阻止请求。枚举：PH/SG/MY/ID/BR/VN/TW/TH/MX 等 Shopee 站点代码 (comma-separated)', required: true }),
    shopList: Flags.string({ description: '预刊登店铺列表，取自店铺多选框 #modal-shop 的 select2 选中值。店铺选项由 getEnabelPublishShopBySite 按所选站点动态加载 (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductPreviewTask)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/shopeeProductPublish/previewTask', { "siteList": toArray(flags.siteList, 'string'), "shopList": toArray(flags.shopList, 'string') })
    this.output(data)
  }
}
