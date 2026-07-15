// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetReclassifyByIds extends MBSCommand {
  static description = '根据一级品类ID获取重分类(二级品类)列表：报表页品类下拉(#Category，数据来自一级品类 getPrimaryClassificationDashBoard)勾选一个或多个一级品类后 onchange=CategoryChange() 触发，将所选一级品类 sequenceid 数组以 JSON 数组 POST 给本接口，返回这些一级品类下的重分类(二级品类)名称列表，用于渲染二级品类下拉 #CategoryList。'

  static flags = {
    ids: Flags.string({ description: '请求体根节点：所选一级品类的 sequenceid 数组($(\'#Category\').val()，多选下拉值数组)。未选时为 null/空数组 (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetReclassifyByIds)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/product/getReclassifyByIds', { "ids": toArray(flags.ids, 'string') })
    this.output(data)
  }
}
