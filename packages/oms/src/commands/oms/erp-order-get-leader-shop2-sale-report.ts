// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetLeaderShop2SaleReport extends MBSCommand {
  static description = '获取组长/平台对应店铺列表：客服消息报表页店铺多选下拉的数据源接口，返回当前组长/平台/组员可见的店铺列表。注：示例页面中本 URL 已被注释并由 /erpReport/erpReport/message/getShop 取代，按任务指定方法 GET 文档化，注释态/未引用字段标注待人工确认。'

  static flags = {
    platformId: Flags.string({ description: '平台ID，取所属平台选择值(待人工确认：注释态参数，来源 #reserve11)' }),
    employeeList: Flags.string({ description: '组员列表，未选时传空数组(待人工确认：注释态参数，来源 #employeeList) (comma-separated)' }),
    bigChiefList: Flags.string({ description: '客服组长列表，未选时传空数组(待人工确认：注释态参数，来源 #shopManager) (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetLeaderShop2SaleReport)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.get('/erpOrder/erpOrder/saleReport/getLeaderShop2', { params: { "platformId": flags.platformId, "employeeList": toArray(flags.employeeList, 'string'), "bigChiefList": toArray(flags.bigChiefList, 'string') } })
    this.output(data)
  }
}
