// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindSaleTort extends MBSCommand {
  static description = '侵权列表：侵权列表'

  static flags = {
    tortId: Flags.integer({ description: '侵权ID（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    sku: Flags.string({ description: 'SKU（字段名推断,语义待核实）' }),
    productName: Flags.string({ description: '商品名称（字段名推断,语义待核实）' }),
    imgAddresss: Flags.string({ description: '图片Addresss（字段名推断,语义待核实）' }),
    platform: Flags.string({ description: '平台（字段名推断,语义待核实）' }),
    shop: Flags.string({ description: '店铺（字段名推断,语义待核实）' }),
    tortType: Flags.string({ description: '侵权类型（字段名推断,语义待核实）' }),
    solution: Flags.string({ description: 'Solution（字段名推断,语义待核实）' }),
    remark: Flags.string({ description: '备注（字段名推断,语义待核实）' }),
    createdBy: Flags.integer({ description: '创建人（字段名推断,语义待核实）' }),
    createdOn: Flags.string({ description: '创建（字段名推断,语义待核实）' }),
    employeeId: Flags.string({ description: '员工ID（字段名推断,语义待核实）' }),
    employeeName: Flags.string({ description: '员工名称（字段名推断,语义待核实）' }),
    tortName: Flags.string({ description: '侵权名称（字段名推断,语义待核实）' }),
    paramValue: Flags.string({ description: '参数值（字段名推断,语义待核实）' }),
    flag: Flags.string({ description: '标志（字段名推断,语义待核实）' }),
    startDate: Flags.string({ description: '开始日期（字段名推断,语义待核实）' }),
    endDate: Flags.string({ description: '结束日期（字段名推断,语义待核实）' }),
    tagStatus: Flags.string({ description: '标签状态（字段名推断,语义待核实）' }),
    paltfromOrShop: Flags.string({ description: 'Paltfrom店铺（字段名推断,语义待核实） (comma-separated)' }),
    tagCount: Flags.integer({ description: '标签数量（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindSaleTort)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/productTort/findSaleTort', { "tortId": flags.tortId, "spu": flags.spu, "sku": flags.sku, "productName": flags.productName, "imgAddresss": flags.imgAddresss, "platform": flags.platform, "shop": flags.shop, "tortType": flags.tortType, "solution": flags.solution, "remark": flags.remark, "createdBy": flags.createdBy, "createdOn": flags.createdOn, "employeeId": flags.employeeId, "employeeName": flags.employeeName, "tortName": flags.tortName, "paramValue": flags.paramValue, "flag": flags.flag, "startDate": flags.startDate, "endDate": flags.endDate, "tagStatus": flags.tagStatus, "paltfromOrShop": toArray(flags.paltfromOrShop, 'string'), "tagCount": flags.tagCount })
    this.output(data)
  }
}
