// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskGetClearDetails2 extends MBSCommand {
  static description = '开发必做清零明细查询(人事部/组员维度)：按时间区间与组员维度分页查询开发必做各类任务的应完成/未完成明细：涵盖重量异常、产品投诉、售后问题、采购异常、拍照、质检二套图、复审被拒、推荐品共8类任务的应完成与未完成量，以及手动清零时间。'

  static flags = {
    startTime: Flags.string({ description: '开始时间(格式 YYYY-MM-DD)。来源日期控件 #startTime，默认当前日期前30天', required: true }),
    endTime: Flags.string({ description: '结束时间(格式 YYYY-MM-DD)。来源日期控件 #endTime，默认当天', required: true }),
    page: Flags.string({ description: '当前页码。来源脚本内部变量 page(默认1，分页回调更新)', required: true }),
    pageSize: Flags.string({ description: '每页条数。来源下拉 #everyPage，枚举:50/100/200', required: true }),
    employeename: Flags.string({ description: '组员姓名列表(员工名数组)。来源多选控件 #employeename；未选时取组长下全部组员 groupArr 或空数组 [] (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskGetClearDetails2)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpTask/erpTask/developMustDo/getClearDetails2', { "startTime": flags.startTime, "endTime": flags.endTime, "page": flags.page, "pageSize": flags.pageSize, "employeename": toArray(flags.employeename, 'string') })
    this.output(data)
  }
}
