// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorSpu extends MBSCommand {
  static description = '获取商品视频地址(getVedio)：在“在线列表(热销商品监控)”页面的绑定视频弹窗中，按商品SPU查询该SPU当前已绑定的视频地址，用于回填视频地址输入框。'

  static flags = {}

  static args = {
    spu: Args.string({ required: true, description: '商品SPU编号(路径变量)。来源:当前列表行数据 spuid(_getCurrentRowData 返回),用于查询该SPU已绑定的视频地址' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(ArsErpmonitorSpu)

    const data = await this.client.get(`/erpmonitor/erpmonitor/ebayVideoController/getVedio/${args.spu}`, { params: {} })
    this.output(data)
  }
}
