// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsYyecmGetsaleskpi extends MBSCommand {
  static description = '销售员KPI(等级)查询：客服/销售工作台首页看板：按员工ID查询该销售员的销售额排名、销售额、毛利排名、毛利率、共事天数等 KPI 指标，用于渲染销售名片的排名与当前/上期业绩。'

  static flags = {
    employeeId: Flags.string({ description: '员工ID(销售员)。来源：页面 URL 查询参数 yyemployeeid，经 GetQueryString("yyemployeeid") 取得后作为 data.employeeId 传入', required: true }),
    callback: Flags.string({ description: 'JSONP 回调函数名。由 jQuery $.ajax({dataType:\'jsonp\', jsonp:\'callback\'}) 自动生成并追加至 URL，用于跨域返回包裹', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsYyecmGetsaleskpi)

    const data = await this.client.get('/dev/yyecm/ecm/sales/getsaleskpi', { params: { "employeeId": flags.employeeId, "callback": flags.callback } })
    this.output(data)
  }
}
