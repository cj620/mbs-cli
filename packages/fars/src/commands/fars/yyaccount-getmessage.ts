// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsYyaccountGetmessage extends MBSCommand {
  static description = '关注SKU到货异常消息查询：经理仪表盘消息中心，点击"关注sku到货异常"按钮触发，按消息类型(messageTypeId=20)与接收人(toId)分页查询SKU到货异常通知列表，返回消息记录(创建时间/类型/正文/标题/来源SKU)及消息条数，经 contentComment 模板渲染。'

  static flags = {
    status: Flags.string({ description: '消息状态过滤(源码固定传 0；0 通常表示未读/待处理)', required: true }),
    messageTypeId: Flags.string({ description: '消息类型ID(源码固定传 20，对应"关注SKU到货异常"通知类型)', required: true }),
    toId: Flags.string({ description: '消息接收人(员工ID)，来源 URL 查询参数 yyemployeeid(getQueryString("yyemployeeid"))', required: true }),
    index: Flags.string({ description: '分页页码/索引(源码固定传 1，即第1页)', required: true }),
    flag: Flags.string({ description: '查询标志位(源码固定传 0；具体枚举含义待人工确认)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsYyaccountGetmessage)

    const data = await this.client.post('/yyaccount/account/messagecontroller/getmessage', { "status": flags.status, "messageTypeId": flags.messageTypeId, "toId": flags.toId, "index": flags.index, "flag": flags.flag })
    this.output(data)
  }
}
