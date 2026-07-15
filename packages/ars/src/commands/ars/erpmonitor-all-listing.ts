// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorAllListing extends MBSCommand {
  static description = '在线商品列表查询（本周新刊登 / 所有在线商品）：在线商品监控列表分页查询。同一接口被两处复用：本周新刊登标签页固定带 thisWeek=1 查询本周新刊登商品；所有在线商品标签页不带 thisWeek 查询全部在线商品。返回商品列表及分页信息（total/pages/scrollId）。'

  static flags = {
    currpage: Flags.string({ description: '当前页码，从1开始。首次查询固定传1；翻页时由分页组件 api.getCurrent() 取值', required: true }),
    scrollId: Flags.string({ description: 'ES滚动分页ID。首页不传；翻页时回传上一次响应返回的 data.obj.scrollId' }),
    thisWeek: Flags.string({ description: '是否查询本周新刊登。固定取值 1=本周新刊登(本周新刊登标签页传入)；不传=所有在线商品' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorAllListing)

    const data = await this.client.post('/erpmonitor/erpmonitor/managerHotProduct/allListing', {}, { params: { "currpage": flags.currpage, "scrollId": flags.scrollId, "thisWeek": flags.thisWeek } })
    this.output(data)
  }
}
