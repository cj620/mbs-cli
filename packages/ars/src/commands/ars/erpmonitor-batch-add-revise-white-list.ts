// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorBatchAddReviseWhiteList extends MBSCommand {
  static description = '批量加入改价(缺货不改0)白名单：在线列表页面勾选一条或多条 listing 后，点击"我不要缺货改0"，将所选 listing（按 平台ID+店铺名+平台商品ID 定位）批量加入改价白名单，加入后系统不再对其执行缺货自动改0处理。请求体为 JSON 数组，成功后弹出提示并刷新列表。'

  static flags = {
    root: Flags.string({ description: '请求体根：待加入白名单的 listing 列表（勾选的表格行，逐条为对象） (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorBatchAddReviseWhiteList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/batchAddReviseWhiteList', { "(root)": toArray(flags.root, 'unknown') })
    this.output(data)
  }
}
