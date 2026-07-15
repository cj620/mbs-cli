// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetDeposit extends MBSCommand {
  static description = '押款金额查询：按所属平台、店铺、结束月份查询对应账期的押款金额，返回的押款金额写入发货时间业绩报表的“押款金额”列（.amountNum）展示。'

  static flags = {
    platformNames: Flags.string({ description: '所属平台名称列表。来源：平台下拉框 #reserve11 选中项的文本(option.label)；未选中任何平台时传空数组 []。元素类型 string(平台名称) (comma-separated)' }),
    shopName: Flags.string({ description: '店铺名称列表。来源：店铺输入框 #shopList 的值按英文逗号 , 拆分；未填写时传空数组 []。元素类型 string(店铺名称) (comma-separated)' }),
    endTime: Flags.string({ description: '结束时间(年月)。来源：结束时间日期控件 #time2 取值后截取前 7 位(substring(0,7))，格式 yyyy-MM；未填写时传空字符串 \'\'。单位：月' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetDeposit)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getDeposit', { "platformNames": toArray(flags.platformNames, 'string'), "shopName": toArray(flags.shopName, 'string'), "endTime": flags.endTime })
    this.output(data)
  }
}
