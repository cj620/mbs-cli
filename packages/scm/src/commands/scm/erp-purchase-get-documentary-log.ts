// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpPurchaseGetDocumentaryLog extends MBSCommand {
  static description = '采购开发-查看跟进日志：在 SKU 详情页点击“查看跟进日志”时，按批次分组ID(groupId) 查询该批次的采购/供应商跟进日志列表，返回每条日志的时间、跟进明细、操作员，渲染到跟进日志弹窗表格。'

  static flags = {
    groupId: Flags.string({ description: '批次分组ID(跟进日志所属批次号)。来源：getDocumentaryLog(groupid) 入参，同步写入隐藏域 #piciNum；以 URL 查询参数形式传递', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpPurchaseGetDocumentaryLog)

    const data = await this.client.post('/erpPurchase/erpPurchase/purchaseDevelop/getDocumentaryLog', {}, { params: { "groupId": flags.groupId } })
    this.output(data)
  }
}
