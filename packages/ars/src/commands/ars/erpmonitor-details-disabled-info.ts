// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorDetailsDisabledInfo extends MBSCommand {
  static description = '在线列表删除下架(detailsDisabledInfo)：在线列表(热销商品监控)页勾选listing后批量删除/下架;平台为Joom(85)或TikTok(120)时调用,提交选中listing整行对象数组,成功后弹出desc并刷新列表。'

  static flags = {
    root: Flags.string({ description: '请求体根节点:选中的待删除/下架listing对象数组(整行对象,JSON.stringify后提交) (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorDetailsDisabledInfo)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/detailsDisabledInfo', { "[root]": toArray(flags.root, 'unknown') })
    this.output(data)
  }
}
