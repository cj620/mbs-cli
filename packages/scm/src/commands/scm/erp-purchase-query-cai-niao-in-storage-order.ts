// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpPurchaseQueryCaiNiaoInStorageOrder extends MBSCommand {
  static description = '菜鸟入库单列表查询：优选仓菜鸟入库单分页列表查询：按单据类型(采购入库单/退货入库单)、时间区间、入库单编号、SKU、店铺、状态筛选，返回入库单行(FOC单号、优选SKU、申请/已入数、各仓库存、销量、直邮信息、采购情况、状态、操作日志等)及是否有操作权限。'

  static flags = {
    createTimeEnd: Flags.string({ description: '结束时间(格式 yyyy-MM-dd)，来源结束时间日期选择器 time2' }),
    createTimeStart: Flags.string({ description: '开始时间(格式 yyyy-MM-dd)，来源开始时间日期选择器 time1(默认当前时间前30天)' }),
    erpSku: Flags.string({ description: '优选SKU，来源输入框 erpSkuname(placeholder=sku)' }),
    orderCode: Flags.string({ description: '入库单编号，来源输入框 orderCode' }),
    pageNum: Flags.string({ description: '当前页码，来源分页组件(默认1)', required: true }),
    pageSize: Flags.string({ description: '每页条数，前端固定传 50', required: true }),
    shopName: Flags.string({ description: '申请店铺列表(字符串数组，多店铺空格分隔)，来源多选店铺 shop (comma-separated)' }),
    status: Flags.string({ description: '入库单状态，来源状态下拉 status(取值来自 getStutusList 接口 item.id)' }),
    orderType: Flags.string({ description: '单据类型。601=采购入库单;501=退货入库单(默认601)，来源顶部类型下拉 type' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpPurchaseQueryCaiNiaoInStorageOrder)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpPurchase/erpPurchase/caiNiao/queryCaiNiaoInStorageOrder', { "createTimeEnd": flags.createTimeEnd, "createTimeStart": flags.createTimeStart, "erpSku": flags.erpSku, "orderCode": flags.orderCode, "pageNum": flags.pageNum, "pageSize": flags.pageSize, "shopName": toArray(flags.shopName, 'string'), "status": flags.status, "orderType": flags.orderType })
    this.output(data)
  }
}
