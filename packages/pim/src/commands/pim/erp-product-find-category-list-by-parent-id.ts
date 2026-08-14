// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindCategoryListByParentId extends MBSCommand {
  static description = '根据父级分类名称查询下级分类列表：在「设置SMT043自动刊登参数」弹窗中，用户选择「马帮大类(一级分类)」后，前端以所选父级分类名称 + 层级数(固定2)调用本接口，联动查询并渲染下属「二级分类」下拉选项。'

  static flags = {
    parentCategoryname: Flags.string({ description: '父级分类名称。取自 #categoryName(马帮大类，多选 ySelect)所选值数组；若调用方传入实参 arr 则用 arr。用于按父级分类名称查询其下级分类 (comma-separated)', required: true }),
    levelnum: Flags.string({ description: '要查询的分类层级数，固定传 2(即查询二级分类)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindCategoryListByParentId)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/categoryController/findCategoryListByParentId', { "parentCategoryname": toArray(flags.parentCategoryname, 'string'), "levelnum": flags.levelnum })
    this.output(data)
  }
}
