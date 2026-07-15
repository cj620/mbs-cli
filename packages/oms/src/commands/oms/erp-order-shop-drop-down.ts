// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShopDropDown extends MBSCommand {
  static description = '店铺下拉列表查询：根据平台、总监/经理/店长、客户经理、运营状态、海外仓、店铺排名、店铺名称关键字等条件分页查询店铺下拉列表；后端会把入参的总监/经理/主管换算成店长再过滤，并按登录人名下组员限定数据范围。'

  static flags = {
    platformIds: Flags.string({ description: '平台ID列表(默认[];如 eBay=1、Amazon=2、AliExpress=10、Wish=16、Lazada=18 等) (comma-separated)' }),
    managers: Flags.string({ description: '经理(员工ID)列表(默认[];后端会换算为店长再过滤) (comma-separated)' }),
    leaders: Flags.string({ description: '总监(员工ID)列表(默认[];后端会换算为店长再过滤) (comma-separated)' }),
    shopManagers: Flags.string({ description: '店长(员工ID)列表(默认[]) (comma-separated)' }),
    keyWord: Flags.string({ description: '店铺名称模糊搜索关键字(默认\'\';后端会剔除其中的\'SIP\'字样)' }),
    customerServiceMgr: Flags.string({ description: '客户经理(默认\'\';多值以英文逗号分隔,后端split成数组)' }),
    isvirtual: Flags.string({ description: '是否海外仓店铺(默认null;取值含义 待人工确认)' }),
    operatestatus: Flags.string({ description: '运营状态(默认null;取值含义 待人工确认)' }),
    page: Flags.string({ description: '页码(默认1;后端pageSize默认200,起始下标=(page-1)*pageSize)' }),
    rank: Flags.string({ description: '店铺排名(默认null;取值含义 待人工确认)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderShopDropDown)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/teamDropDown/shopDropDown', { "platformIds": toArray(flags.platformIds, 'string'), "managers": toArray(flags.managers, 'string'), "leaders": toArray(flags.leaders, 'string'), "shopManagers": toArray(flags.shopManagers, 'string'), "keyWord": flags.keyWord, "customerServiceMgr": flags.customerServiceMgr, "isvirtual": flags.isvirtual, "operatestatus": flags.operatestatus, "page": flags.page, "rank": flags.rank })
    this.output(data)
  }
}
