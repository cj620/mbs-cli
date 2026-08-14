// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsCreateTimeFrom extends MBSCommand {
  static description = '通过创建时间条件获取SPU：通过创建时间条件获取SPU'

  static flags = {}

  static args = {
    currentPage: Args.string({ required: true, description: '当前页码（字段名推断,语义待核实）' }),
    pageNumber: Args.string({ required: true, description: '页码编号（字段名推断,语义待核实）' }),
    createTimeFrom: Args.string({ required: true, description: '创建时间来源（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsCreateTimeFrom)

    const data = await this.client.get(`/yypms/pms/productApi/findProductList/${args.currentPage}/${args.pageNumber}/${args.createTimeFrom}`, { params: {} })
    this.output(data)
  }
}
