// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetShopNameByPlatformId extends MBSCommand {
  static description = '根据平台ID查询店铺(店铺下拉联动)：商品统计页平台选择器 onchange 触发：当已选中具体平台时，按 platformId 拉取该平台下的店铺列表，用于渲染“请选择店铺”下拉框(#ShopName)。若平台未选(值为空)则改走 /erpmonitor/erpmonitor/monitor/getShopName 查询全部店铺。'

  static flags = {
    platformId: Flags.string({ description: '平台ID。取自平台下拉框 $("#platformName").val()，option 值来源于 getPlatformNameAndId 返回项的 platformId；仅平台非空时提交并调用本接口。来源控件：<select id="platformName">', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetShopNameByPlatformId)

    const data = await this.client.post('/erpmonitor/erpmonitor/monitor/getShopNameByPlatformId', {}, { params: { "platformId": flags.platformId } })
    this.output(data)
  }
}
