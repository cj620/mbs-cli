// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceGetShopPaypalcase extends MBSCommand {
  static description = '获取店铺信息(按店长/客服筛选)：PayPal纠纷案件列表页(paypalcaseList)的店铺下拉框联动数据源。根据已选择的店长(shopManager)与客服(shopCustomer)多选条件，查询对应店铺名称列表，用于渲染店铺多选下拉(#shopName)。页面加载时、以及店长/客服选择变化(onchange=getShop())时触发。'

  static flags = {
    shopManagerList: Flags.string({ description: '店长列表。取自店长多选下拉 #shopManager 的 .val()，为已选店长名称字符串数组 (comma-separated)' }),
    shopCustomerServiceerList: Flags.string({ description: '客服列表。取自客服多选下拉 #shopCustomer 的 .val()，为已选客服名称字符串数组(字段名以源码拼写 shopCustomerServiceerList 为准) (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceGetShopPaypalcase)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpFinance/erpFinance/paypalcase/getShop', { "shopManagerList": toArray(flags.shopManagerList, 'string'), "shopCustomerServiceerList": toArray(flags.shopCustomerServiceerList, 'string') })
    this.output(data)
  }
}
