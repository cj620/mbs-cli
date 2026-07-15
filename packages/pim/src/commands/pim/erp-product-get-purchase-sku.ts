// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetPurchaseSku extends MBSCommand {
  static description = 'SKU详情-采购记录查询(getPurchaseSku)：按SKU查询该SKU的全部采购记录，返回每条采购单的仓库、采购批次/组、供应商及等级、运单号与物流轨迹、购买/到货数量、采购价/运费、采购备注、采购员、采购/入库时间、采购状态/退款原因、跟单日志等。SKU详情页采购记录面板(content4)渲染数据源；按部门(content)做供应商/价格脱敏。'

  static flags = {
    sku: Flags.string({ description: 'SKU编号。取自页面URL查询参数 ?SKU= (GetQueryString(\'SKU\'))，随地址带入', required: true }),
    oper3: Flags.string({ description: '开发员(创建人oper3)。取自商品信息接口返回 resultObj.oper3，用于后端按开发员维度过滤/鉴权' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetPurchaseSku)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getPurchaseSku', {}, { params: { "sku": flags.sku, "oper3": flags.oper3 } })
    this.output(data)
  }
}
