// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductSid extends MBSCommand {
  static description = '印尼/海外仓SKU刊登校验查询(getSkuInfo)：SKU详情页点击刊登下拉选择平台时，按当前SKU的sid查询该SKU(印尼/海外仓)是否需要刊登提醒。obj===0直接进入对应平台刊登页；obj!==0弹出确认框务必核实海外仓sku是否需要刊登，确认后再刊登。'

  static flags = {}

  static args = {
    sid: Args.string({ required: true, description: 'SKU记录ID/序号ID(路径变量)。来源SKU详情对象obj[0].sid，前端以${sku.sid}拼接到URL路径末尾。' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimErpProductSid)

    const data = await this.client.get(`/erpProduct/erpProduct/indonesia/getSkuInfo/${args.sid}`, { params: {} })
    this.output(data)
  }
}
