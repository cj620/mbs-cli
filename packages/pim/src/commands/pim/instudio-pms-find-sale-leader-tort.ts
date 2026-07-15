// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindSaleLeaderTort extends MBSCommand {
  static description = '编辑侵权：编辑侵权'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    saleLeader: Flags.string({ description: '销售组长（字段名推断,语义待核实）' }),
    tortId: Flags.integer({ description: '侵权ID（字段名推断,语义待核实）' }),
    tagStatus: Flags.integer({ description: '标签状态（字段名推断,语义待核实）' }),
    tagDate: Flags.string({ description: '标签日期（字段名推断,语义待核实）' }),
    createdBy: Flags.integer({ description: '创建人（字段名推断,语义待核实）' }),
    createdOn: Flags.string({ description: '创建（字段名推断,语义待核实）' }),
    sku: Flags.string({ description: 'SKU（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    employeeName: Flags.string({ description: '员工名称（字段名推断,语义待核实）' }),
    platformId: Flags.string({ description: '平台ID（字段名推断,语义待核实）' }),
    platformName: Flags.string({ description: '平台名称（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindSaleLeaderTort)

    const data = await this.client.post('/yypms/pms/productTort/findSaleLeaderTort', { "id": flags.id, "saleLeader": flags.saleLeader, "tortId": flags.tortId, "tagStatus": flags.tagStatus, "tagDate": flags.tagDate, "createdBy": flags.createdBy, "createdOn": flags.createdOn, "sku": flags.sku, "spu": flags.spu, "employeeName": flags.employeeName, "platformId": flags.platformId, "platformName": flags.platformName })
    this.output(data)
  }
}
