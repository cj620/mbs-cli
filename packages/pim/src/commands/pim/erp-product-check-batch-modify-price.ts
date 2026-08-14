// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductCheckBatchModifyPrice extends MBSCommand {
  static description = '校验批量改价（批量改价前置校验）：亚马逊自动刊登确认列表中，勾选若干待刊登数据后点击“批量改价”时触发：把所选行的分组ID(groupIds)提交后端做改价前置校验。校验通过返回这批数据对应的币种符号(obj)，前端弹出批量改价弹窗并把币种显示在价格输入框旁；校验不通过则返回提示信息(desc)弹框告警。'

  static flags = {
    groupIds: Flags.string({ description: '待批量改价的商品分组ID列表。来源：列表所有勾选行的 data-groupid，经 _getSelectedRowsData(["groupid"]).map(i=>i.groupid) 组成数组。 (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductCheckBatchModifyPrice)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/amazonProductPublish/checkBatchModifyPrice', { "groupIds": toArray(flags.groupIds, 'string') })
    this.output(data)
  }
}
