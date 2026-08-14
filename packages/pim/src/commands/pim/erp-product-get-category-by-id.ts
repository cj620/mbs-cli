// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetCategoryById extends MBSCommand {
  static description = '根据ID查询商品类目详情：商品类目管理页点击「修改」时，按类目主键(sequenceid)查询单个类目的详情，用于回显到「修改类目」弹窗（类目名称、英文名称、描述、报关编码、SPU开头规则、负责经理/负责人、级别等）。'

  static flags = {
    categoryId: Flags.string({ description: '类目主键ID，取自所点击表格行的 sequenceid（query string 参数，拼接在 URL ?categoryId= 之后）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetCategoryById)

    const data = await this.client.post('/erpProduct/erpProduct/categoryController/getCategoryById', { "categoryId": flags.categoryId })
    this.output(data)
  }
}
