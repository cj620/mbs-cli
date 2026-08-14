// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetLeaderShop3 extends MBSCommand {
  static description = '平台看店铺(getLeaderShop3)：根据平台、组员、大酋长、客服经理查询登录人可见的店铺列表，用于页面店铺下拉框联动渲染；后端按部门与管辖范围过滤并补写店铺级别/暂停/客户经理信息。'

  static flags = {
    platformId: Flags.string({ description: '平台ID(为空则不按平台过滤)。1=eBay,2=Amazon,10=AliExpress,16=Wish,18=Lazada,26=Shopee 等，来源控件 #reserve11' }),
    employeeList: Flags.string({ description: '组员(运营员工名列表，未选传[])，后端按 db_shop.shopmanager IN(...) 过滤，来源控件 #employeeList (comma-separated)' }),
    bigChiefList: Flags.string({ description: '大酋长(店铺主管)列表(未选传[])，employeeList为空且此项非空时后端据其反查组员，来源控件 #shopManager (comma-separated)' }),
    customerServiceMgr: Flags.string({ description: '客服经理(逗号拼接，未选传\'\')，用于把客户经理名拼接进 SHOPNAME2 展示，来源控件 #custService(.join(\',\'))' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetLeaderShop3)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getLeaderShop3', { "platformId": flags.platformId, "employeeList": toArray(flags.employeeList, 'string'), "bigChiefList": toArray(flags.bigChiefList, 'string'), "customerServiceMgr": flags.customerServiceMgr })
    this.output(data)
  }
}
