// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetProductIllegal1 extends MBSCommand {
  static description = '违规/举报产品列表查询：商品违规处理页(registrationForm)的列表查询接口：按 flag 区分两种业务视图——flag=1 违规产品列表(tab1)，flag=2 举报产品列表(tab2)。支持开发经理/开发员/采购员/创建人组长/适用平台/异常原因/SKU/开发时间区间等条件筛选，返回产品行列表及销量、毛利率、退款率、异常/举报信息、审核状态等字段。'

  static flags = {
    flag: Flags.string({ description: '查询类型标识。1=违规产品(tab1,search1)；2=举报产品(tab2,search2)', required: true }),
    startDate: Flags.string({ description: '开发时间-起始(yyyy-MM-dd)。来源控件 #startDate' }),
    endDate: Flags.string({ description: '开发时间-结束(yyyy-MM-dd)。来源控件 #endDate' }),
    productid: Flags.string({ description: 'SKU编码(按SKU查询)。来源控件 #productid' }),
    manager: Flags.string({ description: '开发经理(姓名)。来源控件 #manager' }),
    oper3: Flags.string({ description: '开发员(姓名)。来源控件 #oper3(depId=62)' }),
    oper1: Flags.string({ description: '采购员(姓名)。来源控件 #oper1(depId=65)' }),
    abnormaltype: Flags.string({ description: '异常/举报原因编码(仅 flag=2)。来源 #abnormaltype。枚举 WG64/WG74/WG75/WG63/WG61/WG69/WG68/WG70/WG71/WG65/WG66/WG67/WG72/WG73' }),
    employees: Flags.string({ description: '创建人组长字符串数组(仅 flag=2)。取 #groupLeader 值，有值包成[组长]，无值为[] (comma-separated)' }),
    platformList: Flags.string({ description: '适用平台名称字符串数组(仅 flag=2)。来源控件 #applicablePlatformSelect 多选 (comma-separated)' }),
    pageSize: Flags.string({ description: '每页条数。页面固定50；导出(exprotExcel)时为6000', required: true }),
    page: Flags.string({ description: '当前页码(首次=1，分页回调取 api.getCurrent())', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetProductIllegal1)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/product/getProductIllegal1', { "flag": flags.flag, "startDate": flags.startDate, "endDate": flags.endDate, "productid": flags.productid, "manager": flags.manager, "oper3": flags.oper3, "oper1": flags.oper1, "abnormaltype": flags.abnormaltype, "employees": toArray(flags.employees, 'string'), "platformList": toArray(flags.platformList, 'string'), "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
