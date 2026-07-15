// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutFindSoldOutNum extends MBSCommand {
  static description = '下架SKU待审核数量查询：开发员工作台(仪表盘)统计当前登录员工「下架SKU待审核」的商品数量，返回数量值并随返回的员工ID拼接跳转链接(跳转下架商品上架页 status=4)。定时器每 5 分钟刷新一次。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutFindSoldOutNum)

    const data = await this.client.post('/erpsoldout/erpsoldout/soldOut/findSoldOutNum', {})
    this.output(data)
  }
}
