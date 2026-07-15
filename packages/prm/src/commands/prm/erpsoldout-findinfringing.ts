// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutFindinfringing extends MBSCommand {
  static description = '侵权商品列表查询：按 SKU 列表查询侵权商品记录，分页返回侵权关键词、关联SKU、侵权平台、在售/下架成功/下架失败商品数、审核状态、提交/审核人、侵权图片等明细，用于侵权审核任务列表渲染与分页。'

  static flags = {
    skuList: Flags.string({ description: '待查询的 SKU 列表（来源页面全局变量 SKU，作为侵权商品查询条件） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutFindinfringing)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/findinfringing', { "skuList": toArray(flags.skuList, 'string') })
    this.output(data)
  }
}
