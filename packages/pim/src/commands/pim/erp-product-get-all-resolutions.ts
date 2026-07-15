// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
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
