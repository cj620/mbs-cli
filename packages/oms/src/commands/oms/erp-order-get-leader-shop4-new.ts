// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetLeaderShop4New extends MBSCommand {
  static description = '店长/店铺列表查询(getLeaderShop4New)：在「订单时间业绩/发货时间业绩」报表页中，根据所属平台、组员、大酋长(店长)、客服经理、公司等条件查询符合条件的店铺清单，用于店铺勾选弹框/店铺下拉的数据渲染。'

  static flags = {
    platformIds: Flags.string({ description: '所属平台ID列表(来源 #reserve11，无选中传[]) (comma-separated)' }),
    employeeList: Flags.string({ description: '组员(员工名)列表(来源 #employeeList，无选中传[]) (comma-separated)' }),
    bigChiefList: Flags.string({ description: '大酋长(店长)ID列表(来源 #shopManager，无选中传[]) (comma-separated)' }),
    customerServiceMgr: Flags.string({ description: '客服(客户)经理，多选逗号拼接(来源 #custService.val().join(\',\'),无选中传"")' }),
    companyId: Flags.string({ description: '公司ID(来源公司下拉 #componey)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetLeaderShop4New)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getLeaderShop4New', { "platformIds": toArray(flags.platformIds, 'string'), "employeeList": toArray(flags.employeeList, 'string'), "bigChiefList": toArray(flags.bigChiefList, 'string'), "customerServiceMgr": flags.customerServiceMgr, "companyId": flags.companyId })
    this.output(data)
  }
}
