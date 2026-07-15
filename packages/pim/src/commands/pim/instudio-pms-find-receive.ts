// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindReceive extends MBSCommand {
  static description = '查询收货：查询收货(源码无注释,按方法名推断)'

  static flags = {
    warehouseId: Flags.string({ description: '仓库ID（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindReceive)

    const data = await this.client.post('/yypms/pms/warehouse/findReceive', {}, { params: { "warehouse_id": flags.warehouseId } })
    this.output(data)
  }
}
