// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetLeaderShopNew5 extends MBSCommand {
  static description = '店长店铺列表查询(getLeaderShopNew5)：销售报表(saleReport)模块：根据大区长、客服经理、店长(员工)、平台、关键词、运营状态等条件查询店长名下的店铺列表，返回店铺数组(SHOPID/SHOPNAME)，用于「店铺」多选下拉(el-select)的选项渲染与远程搜索。'

  static flags = {
    bigChiefList: Flags.string({ description: '大区长列表(当前固定传空数组 []);元素类型(待人工确认) (comma-separated)' }),
    customerServiceMgr: Flags.string({ description: '客服经理(当前固定传空字符串 \'\')' }),
    employeeList: Flags.string({ description: '店长(员工)列表,来源「店长」下拉 shopleader(取 el-option 的 item.employee_name);getshop 为 shopleader==\'\'?[]:[shopleader],remoteMethod 直接传 shopleader (comma-separated)' }),
    isvirtual: Flags.string({ description: '是否虚拟店铺(当前固定传 null,枚举待人工确认)' }),
    keyWord: Flags.string({ description: '店铺名称搜索关键词;remoteMethod 取下拉远程输入值 val,getshop 传 \'\'' }),
    operatestatus: Flags.string({ description: '运营状态(当前固定传 null,枚举待人工确认)' }),
    page: Flags.string({ description: '当前页码(固定传 1)', required: true }),
    platformIds: Flags.string({ description: '平台ID列表,来源「平台」下拉 plantform(取 el-option 的 item.PLATFORMID);plantform==\'\'?[]:[plantform] (comma-separated)' }),
    rank: Flags.string({ description: '排名/等级(当前固定传 null,枚举待人工确认)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetLeaderShopNew5)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getLeaderShopNew5', { "bigChiefList": toArray(flags.bigChiefList, 'string'), "customerServiceMgr": flags.customerServiceMgr, "employeeList": toArray(flags.employeeList, 'string'), "isvirtual": flags.isvirtual, "keyWord": flags.keyWord, "operatestatus": flags.operatestatus, "page": flags.page, "platformIds": toArray(flags.platformIds, 'string'), "rank": flags.rank })
    this.output(data)
  }
}
