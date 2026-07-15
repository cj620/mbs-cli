// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorListPublishShop extends MBSCommand {
  static description = '查询Allegro可刊登店铺列表：Allegro商品刊登导入页初始化时调用，获取当前用户可选的Allegro店铺列表，用于填充「导入」弹窗中的「选择店铺」下拉框(#shopName)。POST无请求体，返回店铺ID与店铺名称集合。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorListPublishShop)

    const data = await this.client.post('/erpmonitor/erpmonitor/allegroProductPublish/listPublishShop', {})
    this.output(data)
  }
}
