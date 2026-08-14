// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindDifferenceForEbay extends MBSCommand {
  static description = 'eBay账单差异明细查询：日销售报表-成本明细下钻：根据上级报表查询条件(平台/站点/品类/人员/店铺)+账单日期oneDay+费用类型type，分页查询某日各订单的费用差异明细(订单号、店铺、店长、交易单号、付款交易费及原始金额、币种、费用类型、费用说明、账单时间)。'

  static flags = {
    employeeType: Flags.string({ description: '人员类别(取自 #orderStaus 下拉,如3=按店铺等)' }),
    startTime: Flags.string({ description: '起始日期(取自 #time1)' }),
    endTime: Flags.string({ description: '结束日期(取自 #time2)' }),
    platformIds: Flags.string({ description: '平台ID列表(多选 #reserve11,无选择为空数组;枚举:10=站内推广相关、16=wish、18=lazada等,用于分流判断) (comma-separated)' }),
    siteList: Flags.string({ description: '站点列表(取自 #getSiteList) (comma-separated)' }),
    categoryNameList: Flags.string({ description: '品类列表(取自品类选择器 #show1/#categoryNameList 标签文本拆分,无选择为空数组) (comma-separated)' }),
    categoryNameList2: Flags.string({ description: '品类列表2(取自 #CategoryList) (comma-separated)' }),
    customerServiceMgr: Flags.string({ description: '客服经理(取自 #custService,多选逗号拼接;无选择为空字符串)' }),
    shopName: Flags.string({ description: '店铺(取自 #shopList,按逗号/空白拆分;仅 employeeType=3 时填充,否则空数组) (comma-separated)' }),
    employeeName: Flags.string({ description: '组员(取自 #employeeList,无选择为空数组) (comma-separated)' }),
    bigChief: Flags.string({ description: '大酋长/店长(取自 #shopManager,无选择为空数组) (comma-separated)' }),
    oneDay: Flags.string({ description: '账单日期(从上级报表单元格 currentdate 经查询字符串 oneDay 传入,本页解码后写入 params)', required: true }),
    type: Flags.string({ description: '费用类型(从查询字符串 type 传入,枚举:付款交易费/平台费/站外推广费/罚款/店铺成本/站内推广费等,决定下钻费用维度)', required: true }),
    pageSize: Flags.string({ description: '每页条数(前端固定50)', required: true }),
    page: Flags.string({ description: '当前页码(首次查询固定为1,分页回调取 api.getCurrent())', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindDifferenceForEbay)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/findDifferenceForEbay', { "employeeType": flags.employeeType, "startTime": flags.startTime, "endTime": flags.endTime, "platformIds": toArray(flags.platformIds, 'string'), "siteList": toArray(flags.siteList, 'string'), "categoryNameList": toArray(flags.categoryNameList, 'string'), "categoryNameList2": toArray(flags.categoryNameList2, 'string'), "customerServiceMgr": flags.customerServiceMgr, "shopName": toArray(flags.shopName, 'string'), "employeeName": toArray(flags.employeeName, 'string'), "bigChief": toArray(flags.bigChief, 'string'), "oneDay": flags.oneDay, "type": flags.type, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
