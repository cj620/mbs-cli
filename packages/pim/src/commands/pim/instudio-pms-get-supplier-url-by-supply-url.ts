// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSupplierUrlBySupplyUrl extends MBSCommand {
  static description = 'RandomGenerationSKU：RandomGenerationSKU(源码无注释,按方法名推断)'

  static flags = {
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）', required: true }),
    sku: Flags.string({ description: 'SKU（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSupplierUrlBySupplyUrl)

    const data = await this.client.post('/yypms/pms/AllMessage/getSupplierUrlBySupplyUrl', {}, { params: { "spu": flags.spu, "sku": flags.sku } })
    this.output(data)
  }
}
