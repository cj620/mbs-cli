// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureCustomer extends MBSCommand {
  static description = '客户信息详情查询：进入大客户详情页时，根据客户主键(sequenceid)查询单个客户的联系方式(Skype/微信/WhatsApp/邮箱/电话)及订单概览(累计订单数、累计金额、退款金额、复购间隔)，返回结果渲染到左侧客户信息卡片。'

  static flags = {
    id: Flags.string({ description: '客户主键ID。来源：当前页面 URL 查询串 sequenceid（GetQueryString("sequenceid")）；以 URL 查询参数 ?id= 形式拼接传递；无对应输入控件', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureCustomer)

    const data = await this.client.post('/erpManufacture/erpManufacture/customer/customer', {}, { params: { "id": flags.id } })
    this.output(data)
  }
}
