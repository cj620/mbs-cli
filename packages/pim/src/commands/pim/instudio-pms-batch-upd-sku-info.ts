// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsBatchUpdSkuInfo extends MBSCommand {
  static description = 'Product批量修改：Product批量修改'

  static flags = {
    type: Flags.integer({ description: '判断修改类型' }),
    sku: Flags.string({ description: 'sku数组' }),
    nameEn: Flags.string({ description: '英文名称' }),
    name: Flags.string({ description: '中文名称' }),
    productweight: Flags.string({ description: '重量' }),
    tagid: Flags.integer({ description: '特殊标记 id' }),
    guideprice: Flags.string({ description: '供货价' }),
    warehouseid: Flags.integer({ description: '仓库id' }),
    positionid: Flags.integer({ description: '仓位id' }),
    positionname: Flags.string({ description: '仓位名称' }),
    warningday: Flags.integer({ description: '警戒天数' }),
    purchaseday: Flags.integer({ description: '采购天数' }),
    purchasenotes: Flags.string({ description: '采购备注' }),
    materialid: Flags.integer({ description: '包材id' }),
    suppyid: Flags.string({ description: '供应商id' }),
    suppyUrl: Flags.string({ description: '供应商url 考api' }),
    suppyUrlhande: Flags.string({ description: '手动 供应商链接' }),
    supplyUrl1: Flags.string({ description: '供应商首页地址' }),
    createdBy: Flags.string({ description: '创建人' }),
    purchaseSkuPrice: Flags.string({ description: '采购单价' }),
    platform: Flags.string({ description: '平台id' }),
    state: Flags.integer({ description: '状态（字段名推断,语义待核实）' }),
    states: Flags.string({ description: 'sku 状态' }),
    receiveId: Flags.integer({ description: '收货ID（字段名推断,语义待核实）' }),
    supplyname: Flags.string({ description: '因需求修改 此处供应商名称 改为旺旺' }),
    wangwang: Flags.string({ description: '旺旺账号' }),
    productLength: Flags.string({ description: '长' }),
    productWidth: Flags.string({ description: '宽' }),
    productHeight: Flags.string({ description: '高' }),
    productVolume: Flags.string({ description: '包装体积' }),
    productLiquidVolume: Flags.string({ description: '液体体积' }),
    attrnams: Flags.string({ description: 'Attrnams（字段名推断,语义待核实）' }),
    skuattribute: Flags.string({ description: 'Skuattribute（字段名推断,语义待核实）' }),
    sellerLoginId: Flags.string({ description: '卖家登录ID（字段名推断,语义待核实）' }),
    spuId: Flags.string({ description: 'SPUID（字段名推断,语义待核实）' }),
    spuName: Flags.string({ description: 'SPU名称（字段名推断,语义待核实）' }),
    batch: Flags.integer({ description: '批次（字段名推断,语义待核实）' }),
    supplySkuStatus: Flags.string({ description: '供应SKU状态（字段名推断,语义待核实）' }),
    specId: Flags.string({ description: '规格ID（字段名推断,语义待核实）' }),
    tort: Flags.string({ description: '是否侵权 1是' }),
    isAutoPurchaseSupply: Flags.integer({ description: '是否是自动采购供应商' }),
    bindingnum: Flags.integer({ description: 'Bindingnum（字段名推断,语义待核实）' }),
    publishColor: Flags.string({ description: '刊登颜色' }),
    publishSize: Flags.string({ description: '刊登大小' }),
    saler: Flags.string({ description: 'Saler（字段名推断,语义待核实）' }),
    suppyskuprice: Flags.string({ description: '供应商单价' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsBatchUpdSkuInfo)

    const data = await this.client.post('/yypms/pms/product/batchUpdSkuInfo', { "type": flags.type, "sku": flags.sku, "name_en": flags.nameEn, "name": flags.name, "productweight": flags.productweight, "tagid": flags.tagid, "guideprice": flags.guideprice, "warehouseid": flags.warehouseid, "positionid": flags.positionid, "positionname": flags.positionname, "warningday": flags.warningday, "purchaseday": flags.purchaseday, "purchasenotes": flags.purchasenotes, "materialid": flags.materialid, "suppyid": flags.suppyid, "suppyUrl": flags.suppyUrl, "suppyUrlhande": flags.suppyUrlhande, "supplyUrl1": flags.supplyUrl1, "createdBy": flags.createdBy, "purchaseSkuPrice": flags.purchaseSkuPrice, "platform": flags.platform, "state": flags.state, "states": flags.states, "receiveId": flags.receiveId, "supplyname": flags.supplyname, "wangwang": flags.wangwang, "product_length": flags.productLength, "product_width": flags.productWidth, "product_height": flags.productHeight, "product_volume": flags.productVolume, "product_liquid_volume": flags.productLiquidVolume, "attrnams": flags.attrnams, "skuattribute": flags.skuattribute, "sellerLoginId": flags.sellerLoginId, "spuId": flags.spuId, "spuName": flags.spuName, "batch": flags.batch, "supplySkuStatus": flags.supplySkuStatus, "specId": flags.specId, "tort": flags.tort, "isAutoPurchaseSupply": flags.isAutoPurchaseSupply, "bindingnum": flags.bindingnum, "publish_color": flags.publishColor, "publish_size": flags.publishSize, "saler": flags.saler, "suppyskuprice": flags.suppyskuprice })
    this.output(data)
  }
}
