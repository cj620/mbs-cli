// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskFindSpuPublishDetail extends MBSCommand {
  static description = 'SPU刊登报表明细查询：按 SPU编号/开发员/提交售卖时间/品牌或推荐人/出单量区间 分页查询 SPU 刊登报表明细，返回每个 SPU 在 eBay、wish、amazon、aliexpress、joom、mail.ru、zoodmall、shopee、其他 共9个平台的实际刊登量、放弃刊登量、出单量，以及平台标记完成量、放弃刊登量、出单量等汇总字段。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码。首次查询固定为1；分页回调取分页控件 api.getCurrent()', required: true }),
    spu: Flags.string({ description: 'SPU编号。来源控件 #spucode 输入框(可由URL参数 SPU 预填)' }),
    oper: Flags.string({ description: '开发员。来源控件 #deperpeople 下拉(值为开发员姓名)' }),
    submitTime: Flags.string({ description: '提交售卖时间。来源控件 #starttime 日期选择框(yyyy-MM-dd)' }),
    ordernummin: Flags.string({ description: '出单量-最小值。来源控件 #ordernummin 数字输入框' }),
    ordernummax: Flags.string({ description: '出单量-最大值。来源控件 #ordernummax 数字输入框' }),
    brand: Flags.string({ description: '品牌或推荐人。来源控件 #brand 输入框。仅首次查询 search() 传递,分页回调不传' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskFindSpuPublishDetail)

    const data = await this.client.post('/erpTask/erpTask/spuController/findSpuPublishDetail', { "currentPage": flags.currentPage, "spu": flags.spu, "oper": flags.oper, "submitTime": flags.submitTime, "ordernummin": flags.ordernummin, "ordernummax": flags.ordernummax, "brand": flags.brand })
    this.output(data)
  }
}
