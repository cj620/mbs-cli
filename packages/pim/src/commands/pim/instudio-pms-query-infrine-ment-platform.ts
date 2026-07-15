// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsQueryInfrineMentPlatform extends MBSCommand {
  static description = '根据条件查询侵权店铺：根据条件查询侵权店铺'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    caseId: Flags.integer({ description: '侵权caseId' }),
    caseNumber: Flags.string({ description: '案件号' }),
    infringementPlatform: Flags.integer({ description: '侵权平台' }),
    infringementPlatformCn: Flags.string({ description: '侵权平台 中文' }),
    shopName: Flags.string({ description: '店铺名称' }),
    erpCode: Flags.string({ description: '马帮代号' }),
    shopStatus: Flags.integer({ description: '店铺状态' }),
    shopStatusCN: Flags.string({ description: '店铺状态 (中文)' }),
    collectionPlatform: Flags.integer({ description: '收款平台' }),
    grossProfit: Flags.string({ description: '店铺近半年月毛利额' }),
    sellQuantity: Flags.integer({ description: '侵权产品售卖数量' }),
    sellAmount: Flags.string({ description: '售卖销售金额' }),
    originalCurrency: Flags.string({ description: '冻结原币种金额（原币）' }),
    rmbAmount: Flags.string({ description: '冻结人民币金额' }),
    sku: Flags.string({ description: 'SKU' }),
    salesChief: Flags.integer({ description: '经理' }),
    salesChiefCn: Flags.string({ description: '销售主管中文（字段名推断,语义待核实）' }),
    salesPerson: Flags.integer({ description: '销售员' }),
    salesPersonCn: Flags.string({ description: '销售人员中文（字段名推断,语义待核实）' }),
    developChief: Flags.integer({ description: '开发大酋长' }),
    developChiefCn: Flags.string({ description: 'Develop主管中文（字段名推断,语义待核实）' }),
    developer: Flags.integer({ description: '开发员' }),
    developerCn: Flags.string({ description: '开发者中文（字段名推断,语义待核实）' }),
    companyLegalPerson: Flags.string({ description: '公司法人' }),
    companyName: Flags.string({ description: '公司名称' }),
    casePlatformStatus: Flags.integer({ description: '店铺案件状态,记录是否删除 1:删除 0:不删除' }),
    updateBy: Flags.string({ description: '修改人' }),
    updateTime: Flags.string({ description: '修改时间' }),
    createBy: Flags.string({ description: '创建人' }),
    createTime: Flags.string({ description: '创建时间' }),
    deleteBy: Flags.string({ description: '删除人' }),
    deleteTime: Flags.string({ description: '删除时间' }),
    shopNameList: Flags.string({ description: '店铺名称列表（字段名推断,语义待核实）' }),
    brand: Flags.string({ description: '涉及的品牌' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsQueryInfrineMentPlatform)

    const data = await this.client.post('/yypms/pms/infringement/queryInfrineMentPlatform', { "id": flags.id, "caseId": flags.caseId, "caseNumber": flags.caseNumber, "infringementPlatform": flags.infringementPlatform, "infringementPlatformCn": flags.infringementPlatformCn, "shopName": flags.shopName, "erpCode": flags.erpCode, "shopStatus": flags.shopStatus, "shopStatusCN": flags.shopStatusCN, "collectionPlatform": flags.collectionPlatform, "grossProfit": flags.grossProfit, "sellQuantity": flags.sellQuantity, "sellAmount": flags.sellAmount, "originalCurrency": flags.originalCurrency, "rmbAmount": flags.rmbAmount, "sku": flags.sku, "salesChief": flags.salesChief, "salesChiefCn": flags.salesChiefCn, "salesPerson": flags.salesPerson, "salesPersonCn": flags.salesPersonCn, "developChief": flags.developChief, "developChiefCn": flags.developChiefCn, "developer": flags.developer, "developerCn": flags.developerCn, "companyLegalPerson": flags.companyLegalPerson, "companyName": flags.companyName, "casePlatformStatus": flags.casePlatformStatus, "updateBy": flags.updateBy, "updateTime": flags.updateTime, "createBy": flags.createBy, "createTime": flags.createTime, "deleteBy": flags.deleteBy, "deleteTime": flags.deleteTime, "shopNameList": flags.shopNameList, "brand": flags.brand })
    this.output(data)
  }
}
