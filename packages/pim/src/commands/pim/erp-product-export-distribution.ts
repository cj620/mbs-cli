// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductExportDistribution extends MBSCommand {
  static description = '印尼分销订单外部仓导出(越域网/赛盈网)：在采购看板自建商品(分销)页勾选订单后，按导出渠道(越域网flag=1/赛盈网flag=0)将所选订单导出为Excel。请求体提交所选订单号集合orderNo及渠道标识flag，后端返回Excel二进制流(.xlsx)，前端以Blob接收并触发浏览器下载。'

  static flags = {
    orderNo: Flags.string({ description: '待导出的订单号集合，由所有勾选的 name=mybuild 复选框 value 组成；为空则前端拦截不发请求 (comma-separated)', required: true }),
    flag: Flags.string({ description: '导出渠道标识。1=越域网导出;0=赛盈网导出(来源按钮 onclick 传参)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductExportDistribution)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/indonesia/exportDistribution', { "orderNo": toArray(flags.orderNo, 'string'), "flag": flags.flag })
    this.output(data)
  }
}
