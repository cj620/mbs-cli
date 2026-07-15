// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindDifference2 extends MBSCommand {
  static description = '销售报表-差异费项明细查询(findDifference2)：日订单时段报表中点击某日某费项差异数字时弹窗调用，按上级报表筛选条件 + 单日日期(oneDay) + 费项类型(type) 分页查询该费项的逐订单/批次差异明细，返回订单号、店铺、店长、对应费项金额、费项说明与插入时间。'

  static flags = {
    employeeType: Flags.string({ description: '人员类别(上级页下拉 #orderStaus，如店长/组员/店铺等维度)' }),
    startTime: Flags.string({ description: '统计起始日期(上级页 #time1，yyyy-MM-dd)' }),
    endTime: Flags.string({ description: '统计结束日期(上级页 #time2，yyyy-MM-dd)' }),
    platformIds: Flags.string({ description: '平台ID列表(上级页 #reserve11 多选，空则 []) (comma-separated)' }),
    siteList: Flags.string({ description: '站点列表(上级页 #getSiteList 多选) (comma-separated)' }),
    categoryNameList: Flags.string({ description: '品类名称列表(上级页品类多选 valueData，未选为 []) (comma-separated)' }),
    categoryNameList2: Flags.string({ description: '二级品类列表(上级页 #CategoryList 多选) (comma-separated)' }),
    customerServiceMgr: Flags.string({ description: '客服经理(上级页 #custService 多选逗号拼接，未选为 "")' }),
    shopName: Flags.string({ description: '店铺名称列表(上级页 #shopList 文本按逗号/空白拆分，未命中为 []) (comma-separated)' }),
    employeeName: Flags.string({ description: '组员列表(上级页 #employeeList 多选，未选为 []) (comma-separated)' }),
    bigChief: Flags.string({ description: '大酋长(店长上级)列表(上级页 #shopManager 多选，未选为 []) (comma-separated)' }),
    oneDay: Flags.string({ description: '单日日期(本页 URL ?oneDay=，即所点报表列对应的那一天)' }),
    type: Flags.string({ description: '费项类型(本页 URL ?type=，决定查询的费用大类，并作为 expenseType 缺省说明)' }),
    pageSize: Flags.string({ description: '每页条数(本页固定 50)', required: true }),
    page: Flags.string({ description: '当前页码(首次固定 1，翻页取 api.getCurrent())', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindDifference2)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/findDifference2', { "employeeType": flags.employeeType, "startTime": flags.startTime, "endTime": flags.endTime, "platformIds": toArray(flags.platformIds, 'string'), "siteList": toArray(flags.siteList, 'string'), "categoryNameList": toArray(flags.categoryNameList, 'string'), "categoryNameList2": toArray(flags.categoryNameList2, 'string'), "customerServiceMgr": flags.customerServiceMgr, "shopName": toArray(flags.shopName, 'string'), "employeeName": toArray(flags.employeeName, 'string'), "bigChief": toArray(flags.bigChief, 'string'), "oneDay": flags.oneDay, "type": flags.type, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
