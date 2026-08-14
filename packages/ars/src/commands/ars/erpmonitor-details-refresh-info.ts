// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorDetailsRefreshInfo extends MBSCommand {
  static description = '热销商品监控-批量同步刷新详情信息：在“店铺热销商品”列表中勾选若干 listing 后触发，前端把全部勾选行（getChosenRow() 返回的完整 listing 对象数组）原样作为请求体提交后端发起详情同步刷新任务，前端仅用返回的 code/desc 弹窗提示。'

  static flags = {
    fieldfb8f784d: Flags.string({ description: '勾选的 listing 行对象数组（getChosenRow() 返回值） (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorDetailsRefreshInfo)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/detailsRefreshInfo', { "（请求体根数组）": toArray(flags.fieldfb8f784d, 'object') })
    this.output(data)
  }
}
