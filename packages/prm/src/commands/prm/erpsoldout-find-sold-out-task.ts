// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutFindSoldOutTask extends MBSCommand {
  static description = '下架任务列表查询：平台商品下架任务分页查询：按 SKU、创建人、平台、创建时间区间、下架原因、任务状态等条件分页查询下架任务列表，返回任务编号、状态、平台、下架原因、下架总量/成功/失败数、关联 SKU、创建人/审核人/创建时间/完成时间等字段。'

  static flags = {
    skuList: Flags.string({ description: 'SKU 列表（来源输入框 #duoSKU，按空白符分割为数组，剔除空值） (comma-separated)' }),
    creater: Flags.string({ description: '创建人（来源下拉 #Founder，取值为 employeeId）' }),
    platformId: Flags.string({ description: '平台ID（来源下拉 #platformName，取值为 platformId）' }),
    createTimeStart: Flags.string({ description: '创建时间-起始（来源时间下拉 #getTime/自定义 #startTime，格式 yyyy-M-d）' }),
    createTimeEnd: Flags.string({ description: '创建时间-结束（来源时间下拉 #getTime/自定义 #endTime，格式 yyyy-M-d）' }),
    employeeId: Flags.string({ description: '员工ID（来源页面URL参数 employeeId，GetQueryString(\'employeeId\')）' }),
    soldOutReason: Flags.string({ description: '下架原因（来源下拉 #Reason）' }),
    soldOutStatus: Flags.string({ description: '任务状态（来源下拉 #states）。枚举：4=待审核(默认选中);0=待生成;1=已生成;2=执行中;3=已完成' }),
    currPage: Flags.string({ description: '当前页码（首次查询固定为 1，翻页时取分页组件 api.getCurrent()）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutFindSoldOutTask)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpsoldout/erpsoldout/soldOut/findSoldOutTask', { "skuList": toArray(flags.skuList, 'string'), "creater": flags.creater, "platformId": flags.platformId, "createTimeStart": flags.createTimeStart, "createTimeEnd": flags.createTimeEnd, "employeeId": flags.employeeId, "soldOutReason": flags.soldOutReason, "soldOutStatus": flags.soldOutStatus, "currPage": flags.currPage })
    this.output(data)
  }
}
