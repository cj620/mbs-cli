// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsYyaccountGetstaymessage extends MBSCommand {
  static description = '待办通知（全部通知）查询：经理看板右侧通知卡片点击【全部】按钮触发，按当前员工 userid 拉取全部待办/通知消息列表，返回 JSON 字符串形式通知数组与新通知条数；前端 JSON.parse(data.obj) 后 shift() 去首行，用 art-template contentComment 渲染到 #comment-section。'

  static flags = {
    userid: Flags.string({ description: '当前员工ID，来源页面URL查询参数 yyemployeeid（getQueryString），按用户拉取通知列表', required: true }),
    callback: Flags.string({ description: 'JSONP 回调函数名参数（jsonp:"callback" 自动生成追加），用于包裹跨域响应', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsYyaccountGetstaymessage)

    const data = await this.client.get('/yyaccount/account/messagecontroller/getstaymessage', { params: { "userid": flags.userid, "callback": flags.callback } })
    this.output(data)
  }
}
