// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureGetCustomerLog extends MBSCommand {
  static description = '客户操作日志查询(getCustomerLog)：客户详情页加载/编辑客户信息后调用，按客户ID查询该客户的全部操作日志(操作人、操作时间、操作内容)，返回日志列表渲染到 #customerLog 区域(art-template logTemplate)。'

  static flags = {
    customId: Flags.string({ description: '客户ID(客户序列ID)。来源：页面 URL 查询参数 sequenceid，经 GetQueryString("sequenceid") 取得后以 ?customId= 拼接到接口URL。来源控件：URL 地址栏参数(非页面输入控件)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureGetCustomerLog)

    const data = await this.client.post('/erpManufacture/erpManufacture/customer/getCustomerLog', {}, { params: { "customId": flags.customId } })
    this.output(data)
  }
}
