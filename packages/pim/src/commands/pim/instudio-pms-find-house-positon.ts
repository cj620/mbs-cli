// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindHousePositon extends MBSCommand {
  static description = '查询HousePostiton：查询HousePostiton(源码无注释,按方法名推断)'

  static flags = {
    index: Flags.integer({ description: '索引（字段名推断,语义待核实）', required: true }),
    warehouseId: Flags.integer({ description: '仓库ID（字段名推断,语义待核实）', required: true }),
    positionName: Flags.string({ description: '位置名称（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindHousePositon)

    const data = await this.client.post('/yypms/pms/warehouse/findHousePositon', {}, { params: { "index": flags.index, "warehouseId": flags.warehouseId, "positionName": flags.positionName } })
    this.output(data)
  }
}
