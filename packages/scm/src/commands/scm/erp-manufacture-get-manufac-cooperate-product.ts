// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureGetManufacCooperateProduct extends MBSCommand {
  static description = '厂商合作(候选)产品列表查询：根据厂商(供应商)ID分页查询该厂商向您提供的候选合作产品，返回产品图片、产品编号、产品名称、净重等信息，前端以缩略图卡片形式渲染并分页展示。'

  static flags = {
    manufactureId: Flags.string({ description: '厂商(供应商)ID。来源：页面URL参数sequenceid(GetQueryString(\'sequenceid\'))，用于查询该厂商的合作候选产品', required: true }),
    pageSize: Flags.string({ description: '每页条数。前端固定为50', required: true }),
    page: Flags.string({ description: '当前页码。初次请求固定为1；翻页时取分页控件api.getCurrent()的当前页', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureGetManufacCooperateProduct)

    const data = await this.client.post('/erpManufacture/erpManufacture/manufactureExtendController/getManufacCooperateProduct', {}, { params: { "manufactureId": flags.manufactureId, "pageSize": flags.pageSize, "page": flags.page } })
    this.output(data)
  }
}
