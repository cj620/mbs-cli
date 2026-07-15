// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutFindSoldOutReason extends MBSCommand {
  static description = '查询下架原因列表：进入平台商品下架明细页时调用，获取全部「下架原因」枚举列表，用于渲染顶部筛选区 #Reason 下拉框（contentTemplate4）。无请求参数，响应为下架原因字符串数组。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutFindSoldOutReason)

    const data = await this.client.post('/erpsoldout/erpsoldout/soldOut/findSoldOutReason', {})
    this.output(data)
  }
}
