// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureGetManufacturePurchase extends MBSCommand {
  static description = '历史采购单查询：在供应商详情页「历史采购单」Tab中，按供应商ID分页查询该供应商的历史采购单记录，返回采购批次、采购时间、SKU、采购件数、采购金额、发货/到货时间、采购员、是否结算等列表数据及总条数、总页数。'

  static flags = {
    manufactureId: Flags.string({ description: '供应商ID(取自页面URL参数sequenceid,即被查询供应商的sequenceid)', required: true }),
    pageSize: Flags.string({ description: '每页条数(前端固定50,单位:条)', required: true }),
    page: Flags.string({ description: '当前页码(首次固定1,翻页取分页组件api.getCurrent())', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureGetManufacturePurchase)

    const data = await this.client.post('/erpManufacture/erpManufacture/manufactureExtendController/getManufacturePurchase', {}, { params: { "manufactureId": flags.manufactureId, "pageSize": flags.pageSize, "page": flags.page } })
    this.output(data)
  }
}
