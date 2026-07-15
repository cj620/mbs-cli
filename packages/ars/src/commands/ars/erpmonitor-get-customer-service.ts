// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetCustomerService extends MBSCommand {
  static description = '客服组员(组员下拉)查询：客服绩效(组员维度)页面中，根据已选「店长」(leaderList 多选)联动查询其名下的客服组员列表，返回结果渲染到「组员」下拉框(customberTemplate)。请求体为裸JSON数组(店长ID数组)。'

  static flags = {
    root: Flags.string({ description: '请求体根节点：店长(leader)ID 数组。来源控件 #leaderList 多选($("#leaderList").val())；未选中时提交空数组 [] (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetCustomerService)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpmonitor/erpmonitor/smtShopKpi/getCustomerService', { "(root)": toArray(flags.root, 'string') })
    this.output(data)
  }
}
