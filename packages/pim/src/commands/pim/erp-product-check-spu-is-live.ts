// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductCheckSpuIsLive extends MBSCommand {
  static description = '校验SPU是否存在：SKU详情页(SKUdetails2)中，用户在SPU输入框失焦(onblur)时触发，把SPU值通过查询参数spu提交后端，校验该SPU是否已存在。obj=true表示已存在；obj=false表示不存在，前端弹出确认框走addSpu创建流程。'

  static flags = {
    spu: Flags.string({ description: '待校验的SPU编号，来源控件 #SPU 输入框，值非空时才发起请求', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductCheckSpuIsLive)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/checkSpuIsLive', {}, { params: { "spu": flags.spu } })
    this.output(data)
  }
}
