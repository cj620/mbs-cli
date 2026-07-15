// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetShopeeVoucherById extends MBSCommand {
  static description = '获取优惠券明细：获取优惠券明细'

  static flags = {
    name: Flags.string({ description: '名称（字段名推断,语义待核实）' }),
    code: Flags.string({ description: '编码（字段名推断,语义待核实）' }),
    emps: Flags.string({ description: 'EMPS（字段名推断,语义待核实） (comma-separated)' }),
    shops: Flags.string({ description: '店铺列表（字段名推断,语义待核实） (comma-separated)' }),
    startTime: Flags.string({ description: '开始时间（字段名推断,语义待核实）' }),
    endTime: Flags.string({ description: '结束时间（字段名推断,语义待核实）' }),
    displayTime: Flags.string({ description: '展示时间（字段名推断,语义待核实）' }),
    createBy: Flags.string({ description: '创建人（字段名推断,语义待核实）' }),
    voucherTemplateId: Flags.integer({ description: '凭证模板ID（字段名推断,语义待核实）' }),
    shopsSplice: Flags.string({ description: '店铺列表Splice（字段名推断,语义待核实）' }),
    shopname: Flags.string({ description: '店铺名称（字段名推断,语义待核实）' }),
    voucherid: Flags.string({ description: 'Voucherid（字段名推断,语义待核实）' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    currentPage: Flags.integer({ description: '当前页码（字段名推断,语义待核实）' }),
    pt: Flags.string({ description: 'PT（字段名推断,语义待核实）' }),
    ids: Flags.string({ description: 'ID列表（字段名推断,语义待核实） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetShopeeVoucherById)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/shopeeVoucherController/getShopeeVoucherById', { "name": flags.name, "code": flags.code, "emps": toArray(flags.emps, 'string'), "shops": toArray(flags.shops, 'string'), "startTime": flags.startTime, "endTime": flags.endTime, "displayTime": flags.displayTime, "createBy": flags.createBy, "voucherTemplateId": flags.voucherTemplateId, "shopsSplice": flags.shopsSplice, "shopname": flags.shopname, "voucherid": flags.voucherid, "startIndex": flags.startIndex, "pageSize": flags.pageSize, "currentPage": flags.currentPage, "pt": flags.pt, "ids": toArray(flags.ids, 'integer') })
    this.output(data)
  }
}
