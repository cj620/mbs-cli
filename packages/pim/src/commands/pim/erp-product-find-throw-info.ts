// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindThrowInfo extends MBSCommand {
  static description = '泡货(抛货)信息查询：SPU/SKU 列表中某行的泡货图标(炸弹图标)鼠标悬停时触发，按 SKU 向后端查询该 SKU 的泡货/抛货(超体积/抛重)提示信息，后端直接返回一段 HTML 片段，前端用 .html() 写入提示气泡 .findeinfos 展示。'

  static flags = {
    sku: Flags.string({ description: 'SKU 编码(查询主键)。取自被悬停列表行对象 objs.sid，拼接到 URL ?sku= 之后；SKU详情页则取浏览器地址栏 GetQueryString("SKU")。来源控件：列表行炸弹图标 onmouseover="findThrowInfo({{value}})"', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindThrowInfo)

    const data = await this.client.post('/erpProduct/erpProduct/product/findThrowInfo', { "sku": flags.sku })
    this.output(data)
  }
}
