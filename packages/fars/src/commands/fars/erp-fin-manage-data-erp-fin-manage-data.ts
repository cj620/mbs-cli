// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinManageDataErpFinManageData extends MBSCommand {
  static description = '财务数据批量更新/核销（通用 updateRows）：前端通用助手 updateRows(url, search?, index) 向 /erpFinManageData/erpFinManageData 拼接子路径后 POST，对勾选行执行批量更新/核销；无 JSON 请求体，参数经 URL 子路径+查询串传递；成功(code==200)弹提示并回调 search 重查。'

  static flags = {
    url: Flags.string({ description: '助手包装参：拼接到基地址后的子路径+查询串，由调用方构造（如 /Others/updateBillInfosBySequeneIds?type=3&sequeneIds=...）', required: true }),
    subPath: Flags.string({ description: 'URL 路径段，决定更新操作：/Others/updatePayByPaymentIds、/Others/updateBillInfosBySequeneIds、/Others/updateHisBySequeneIds', required: true }),
    type: Flags.string({ description: '操作类型标识，更新/核销类调用点固定传 3', required: true }),
    paymentIds: Flags.string({ description: '付款单ID列表，英文逗号拼接；仅 /Others/updatePayByPaymentIds 使用；来源勾选行 paymentId 去重；与 sequeneIds 互斥' }),
    sequeneIds: Flags.string({ description: '账单序列ID列表(sequecneId)，英文逗号拼接；用于 updateBillInfosBySequeneIds/updateHisBySequeneIds；来源勾选行 CheckedRows；与 paymentIds 互斥' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinManageDataErpFinManageData)

    const data = await this.client.post('/erpFinManageData/erpFinManageData', {}, { params: { "url": flags.url, "subPath": flags.subPath, "type": flags.type, "paymentIds": flags.paymentIds, "sequeneIds": flags.sequeneIds } })
    this.output(data)
  }
}
