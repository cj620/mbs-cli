// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductProductClaimList extends MBSCommand {
  static description = '独立站产品认领列表查询：独立站产品认领页列表查询：按 SPU、认领人、提交销售时间区间、测款状态分页查询已认领去广告测款的 SPU 列表，返回 SPU 基本信息及各认领人操作（认领/去广告）记录。'

  static flags = {
    spu: Flags.string({ description: 'SPU 编号（来源 #spu 输入框，按 SPU 模糊查询）' }),
    operDtos: Flags.string({ description: '认领人列表（来源 #queryOperList 多选下拉，值为认领人姓名 employee_name；可多选） (comma-separated)' }),
    startTime: Flags.string({ description: '提交销售时间-起始（格式 yyyy-MM-dd，默认当天前8天）' }),
    endTime: Flags.string({ description: '提交销售时间-结束（格式 yyyy-MM-dd，默认当天前1天）' }),
    status: Flags.string({ description: '测款状态。0=全部;1=未测款;2=已测款' }),
    page: Flags.string({ description: '当前页码（从1开始）', required: true }),
    pageSize: Flags.string({ description: '每页条数（固定传 100）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductProductClaimList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/productClaim/productClaimList', { "spu": flags.spu, "operDtos": toArray(flags.operDtos, 'string'), "startTime": flags.startTime, "endTime": flags.endTime, "status": flags.status, "page": flags.page, "pageSize": flags.pageSize })
    this.output(data)
  }
}
