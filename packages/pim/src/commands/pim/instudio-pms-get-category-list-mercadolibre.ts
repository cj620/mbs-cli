// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetCategoryListMercadolibre extends MBSCommand {
  static description = '美客多-产品类目下拉选择：美客多-产品类目下拉选择'

  static flags = {
    requestId: Flags.integer({ description: '请求记录编号' }),
    categoryName: Flags.string({ description: '类目中文' }),
    shopId: Flags.string({ description: '店铺编号' }),
    shopName: Flags.string({ description: '店铺名称' }),
    groupCode: Flags.string({ description: '店铺分组编码' }),
    mercadolibreCategoryId: Flags.string({ description: '美客多类目编号' }),
    spu: Flags.string({ description: 'spu编号' }),
    sku: Flags.string({ description: 'sku编号' }),
    platformSku: Flags.string({ description: 'sku编号' }),
    sites: Flags.string({ description: 'site, 多个,分割，' }),
    platformSkuList: Flags.string({ description: 'platformSku编号 (comma-separated)' }),
    logisticsType: Flags.string({ description: '物流类型' }),
    spuSingleFlag: Flags.boolean({ description: '单/多变体 true:单变体/false:多变体', allowNo: true }),
    categoryQueryParam: Flags.string({ description: '美客多类目查询条件' }),
    parentCategoryId: Flags.string({ description: '美客多类目查询条件' }),
    categoryLevel: Flags.integer({ description: '美客多类目查询条件' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetCategoryListMercadolibre)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/mercadolibre/getCategoryList', { "requestId": flags.requestId, "categoryName": flags.categoryName, "shopId": flags.shopId, "shopName": flags.shopName, "groupCode": flags.groupCode, "mercadolibreCategoryId": flags.mercadolibreCategoryId, "spu": flags.spu, "sku": flags.sku, "platformSku": flags.platformSku, "sites": flags.sites, "platformSkuList": toArray(flags.platformSkuList, 'string'), "logisticsType": flags.logisticsType, "spuSingleFlag": flags.spuSingleFlag, "categoryQueryParam": flags.categoryQueryParam, "parentCategoryId": flags.parentCategoryId, "categoryLevel": flags.categoryLevel })
    this.output(data)
  }
}
