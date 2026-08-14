// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsYyaccountInstudioAccountGetstaymessage1 extends MBSCommand {
  static description = '待办通知-爆单SPU通知查询：经理工作台待办通知区点击「爆单SPU」按钮触发，按当前登录员工 userid 拉取待处理爆单SPU通知列表(JSON字符串)及未读条数，前端 JSON.parse 后 shift() 移除首元素再用 contentComment 模板渲染；JSONP 跨域调用。'

  static flags = {
    userid: Flags.string({ description: '当前登录员工ID,来源 JSON.parse(localStorage.getItem(\'userid\')),后端 @RequestParam Integer userid', required: true }),
    callback: Flags.string({ description: 'JSONP回调函数名,jQuery据 dataType:jsonp/jsonp:callback 自动生成,后端非空时以 callback(数据) 包裹返回' }),
    i: Flags.string({ description: '异步调用序号,后端 request.getParameter(\'i\') 读取并回填 code;本 getSurgeOrderNotice() 调用未显式传递(待人工确认)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsYyaccountInstudioAccountGetstaymessage1)

    const data = await this.client.get('/yyaccount/account/messagecontroller/getstaymessage1', { params: {} })
    this.output(data)
  }
}
