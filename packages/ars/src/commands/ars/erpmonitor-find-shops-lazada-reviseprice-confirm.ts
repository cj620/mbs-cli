// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorFindShopsLazadaRevisepriceConfirm extends MBSCommand {
  static description = 'Lazada提价确认-店铺列表查询(findShops)：页面加载(getShopLi)时无条件拉取当前用户可见的Lazada提价确认店铺列表，返回结果渲染到筛选区“店铺”多选下拉(#checkShops)，供 getList/getList2 按 shopids 过滤提价记录。请求体固定为空对象。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorFindShopsLazadaRevisepriceConfirm)

    const data = await this.client.post('/erpmonitor/erpmonitor/lazadaRevisepriceConfirm/findShops', {})
    this.output(data)
  }
}
