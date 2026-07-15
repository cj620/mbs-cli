// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutGetInfoSubmit extends MBSCommand {
  static description = 'SKU侵权平台信息查询(getInfoSubmit)：SKU详情页加载时查询该SKU的侵权平台提示信息，后端返回以英文分号\';\'拼接的侵权平台字符串，前端按\';\'拆分后逐条以红色文字渲染到#totarplat区域，用于提示运营该SKU在哪些平台存在侵权风险。'

  static flags = {
    sku: Flags.string({ description: '商品SKU编码。来源：当前SKU详情页URL查询参数SKU(GetQueryString(\'SKU\'))；通过?sku=拼接到接口地址。用于定位要查询侵权平台信息的SKU。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutGetInfoSubmit)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/getInfoSubmit', {}, { params: { "sku": flags.sku } })
    this.output(data)
  }
}
