// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutCheckIsBatch extends MBSCommand {
  static description = '侵权审核-批量操作前批次校验：商品侵权审核列表中，点击批量「通过/不通过/删除」时，先把列表中勾选的侵权记录ID集合(submitIdList)提交后端校验是否满足批量条件(如是否同一批次/请求)。校验通过(code=200)后前端再弹确认框并调用 batchVerify 执行批量审核；校验不通过则用返回的 desc 文案提示。'

  static flags = {
    submitIdList: Flags.string({ description: '选中的侵权审核记录ID列表(批量操作勾选项)。来源控件：#content 表格复选框 input[name=mychk3]:checked 的 value。批量同审核需为同一批次(requestId)，否则前端拦截 (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutCheckIsBatch)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/checkIsBatch', { "submitIdList": toArray(flags.submitIdList, 'string') })
    this.output(data)
  }
}
