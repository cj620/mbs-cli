// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindLazadaItemid extends MBSCommand {
  static description = '解析上传文件获取itemId：Lazada批量下架页「生成下架商品信息」弹窗中，用户选择本地文件并点击「上传」按钮后，以 multipart/form-data 上传文件，后端解析文件内容匹配出对应的 itemId 集合并返回（JSON字符串数组），前端解析后用逗号拼接回填到 itemId 文本框。'

  static flags = {
    file: Flags.string({ description: '上传的文件（itemId 导入文件）。来源控件 #importBill 表单内 <input type=\'file\' name=\'file\' id=\'file\'>；以 multipart/form-data 上传，后端据文件内容匹配 itemId 列表', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindLazadaItemid)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaExportController/findLazadaItemid', { "file": flags.file })
    this.output(data)
  }
}
