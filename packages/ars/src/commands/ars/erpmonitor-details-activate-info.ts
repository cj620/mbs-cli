// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorDetailsActivateInfo extends MBSCommand {
  static description = 'TikTok Listing 批量上/下架(detailsActivateInfo)：店铺爆款监控页选中若干 TikTok(platformId=120) listing 后，批量提交上架(operType=1)或下架(operType=2)。前端把勾选行完整对象数组随操作类型一并 POST 给后端，后端据 code/desc 返回处理结果并前端弹窗提示。'

  static flags = {
    operType: Flags.string({ description: '操作类型。1=上架(tiktokBatchPush)；2=下架(tiktokBatchPull)。无输入控件，由按钮回调代码固定传值', required: true }),
    esProductSKUList: Flags.string({ description: '勾选的 TikTok(platformId=120) listing 行集合；元素为选中 listing 完整行对象，来源 getChosenRow() 过滤 platformId===120 (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorDetailsActivateInfo)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/detailsActivateInfo', { "operType": flags.operType, "esProductSKUList": toArray(flags.esProductSKUList, 'unknown') })
    this.output(data)
  }
}
