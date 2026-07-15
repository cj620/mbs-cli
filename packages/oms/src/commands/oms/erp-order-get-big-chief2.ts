// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetBigChief2 extends MBSCommand {
  static description = '获取大酋长(店长负责人)列表：销售业绩报表(订单时间业绩/发货时间业绩)页面，按人员类别、所属平台、公司维度查询可选的“大酋长”(店长/团队负责人)列表，用于渲染顶部“大酋长”多选下拉框，选中后联动获取组员、店铺并触发业绩查询。'

  static flags = {
    employeeType: Flags.string({ description: '人员类别/业绩时间类型，取自 #orderStaus 下拉。枚举：1=订单时间业绩；3=发货时间业绩', required: true }),
    platformIds: Flags.string({ description: '所属平台ID列表，取自 #reserve11(所属平台多选)；未选择(null)时传空数组[] (comma-separated)' }),
    companyId: Flags.string({ description: '公司ID，取自 #componey(公司下拉)；该下拉默认隐藏，多数场景为空' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetBigChief2)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getBigChief2/', { "employeeType": flags.employeeType, "platformIds": toArray(flags.platformIds, 'string'), "companyId": flags.companyId })
    this.output(data)
  }
}
