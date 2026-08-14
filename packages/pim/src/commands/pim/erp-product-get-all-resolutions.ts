// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetAllResolutions extends MBSCommand {
  static description = '获取全部售后处理方案(文案)列表：拉取后端预置的售后问题处理方案文案列表，前端用于售后问题处理弹窗(developMarkModal)中处理方案下拉框(#selectedText)选项渲染；默认把列表第一项的 description 填入处理方案输入框(#markInput)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetAllResolutions)

    const data = await this.client.get('/erpProduct/erpProduct/product/getAllResolutions', { params: {} })
    this.output(data)
  }
}
