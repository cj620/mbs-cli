// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetNeedUpcNumber extends MBSCommand {
  static description = '获取批量刊登所需UPC数量：亚马逊自动刊登确认列表中点击「批量UPC」时调用：把所有勾选的待刊登SPU行(每行携带 groupid)封装为 list 上送，后端按这些刊登组计算批量刊登所需补充的 UPC 总数，前端展示为「请填入 N 个UPC」的提示。'

  static flags = {
    list: Flags.string({ description: '勾选的待刊登SPU行集合(批量UPC操作目标)，来源：列表中所有勾选复选框 name=overInput 的行 (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetNeedUpcNumber)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/amazonProductPublish/getNeedUpcNumber', { "list": toArray(flags.list, 'string') })
    this.output(data)
  }
}
