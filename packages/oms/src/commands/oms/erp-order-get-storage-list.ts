// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetStorageList extends MBSCommand {
  static description = '发货仓库列表查询：获取全部发货仓库列表，用于订单列表页"发货仓库"筛选下拉框的渲染；前端拿到数组后将"上海仓库""东莞仓库"置顶排序，并在部分场景按仓库类型(storagetype)过滤。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetStorageList)

    const data = await this.client.get('/erpOrder/erpOrder/orderNew/getStorageList', { params: {} })
    this.output(data)
  }
}
