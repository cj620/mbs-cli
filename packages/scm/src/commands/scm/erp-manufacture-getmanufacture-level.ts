// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureGetmanufactureLevel extends MBSCommand {
  static description = '供应商等级分配概况查询：按月份(date)查询供应商等级分配概况：返回横向表头(xData，各列名称)与按等级分组的行数据(levelData)，每个等级下含各列单元格数值(chiefData)，前端用 art-template 渲染为「等级 × 列」的二维统计表格。'

  static flags = {
    date: Flags.string({ description: '查询月份，格式 YYYY-MM。来源控件 <select id="dateTime">，页面加载时由 getTody(new Date()) 取当前年月默认选中；下拉硬编码枚举 2019-12/2019-11/2019-10/2019-09，onchange 触发 search()。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureGetmanufactureLevel)

    const data = await this.client.post('/erpManufacture/erpManufacture/manufactureExtendController/getmanufactureLevel', {}, { params: { "date": flags.date } })
    this.output(data)
  }
}
