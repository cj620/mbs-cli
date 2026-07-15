// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureGetManufactureImages extends MBSCommand {
  static description = '供应商(公司)图片库查询：根据供应商序号ID(manufactureId)查询该供应商的公司图片库图片列表，前端用于渲染“公司图片库”展示网格(contentTemplate1)及“编辑图片”弹窗网格(contentTemplate2)。上传图片/删除图片后会重新调用本接口刷新图片列表。'

  static flags = {
    manufactureId: Flags.string({ description: '供应商序号ID(query参数)。来源：当前页面URL查询串 sequenceid，经 GetQueryString(\'sequenceid\') 获取', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureGetManufactureImages)

    const data = await this.client.post('/erpManufacture/erpManufacture/uploadFlieController/getManufactureImages', {}, { params: { "manufactureId": flags.manufactureId } })
    this.output(data)
  }
}
