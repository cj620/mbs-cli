// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinancePage extends MBSCommand {
  static description = '供应商回款·出库单分页查询：供应商回款（退货/回款）管理页的出库单分页列表查询：按回款状态、出库单号、运单号、订单状态、创建人、供应商旺旺号、建单/发货/回款时间区间、回款方式、公司、采购员、供应商类型、填写人、仓库等条件分页查询，返回分页对象(total/totalPages/rows)及金额汇总对象(total)。'

  static flags = {
    paymentStatus: Flags.string({ description: '回款状态(未发货/未回款/未核销/已核销)' }),
    warehouse: Flags.string({ description: '仓库(上海仓库/东莞仓库)' }),
    orderId: Flags.string({ description: '出库单号' }),
    expressId: Flags.string({ description: '运单号' }),
    orderStatus: Flags.string({ description: '订单状态(新订单/已支付/配货中/未发货/已发货/已完成)' }),
    createBy: Flags.string({ description: '创建人' }),
    wangwangName: Flags.string({ description: '供应商旺旺号' }),
    createOrderStartTime: Flags.string({ description: '建单开始日期(YYYY-MM-DD)' }),
    createOrderEndTime: Flags.string({ description: '建单结束日期(YYYY-MM-DD)' }),
    paymentStartTime: Flags.string({ description: '回款开始日期(YYYY-MM-DD)' }),
    paymentEndTime: Flags.string({ description: '回款结束日期(YYYY-MM-DD)' }),
    expressStartTime: Flags.string({ description: '发货开始日期(YYYY-MM-DD)' }),
    expressEndTime: Flags.string({ description: '发货结束日期(YYYY-MM-DD)' }),
    manufacType: Flags.string({ description: '供应商类型(1=普通供应商;2=线下账期;3=1688账期;4=表格供应商;5=淘宝供应商)' }),
    paymentType: Flags.string({ description: '回款方式(1688回款/支付宝回款/账期抵扣/换货/1688回款+换货/支付宝回款+换货)' }),
    companyId: Flags.string({ description: '公司ID(1=上海胤元电子科技有限公司;33=上海路莫斯实业发展公司)' }),
    updateBy: Flags.string({ description: '填写人' }),
    fixedmanu: Flags.string({ description: '采购员' }),
    currentPage: Flags.string({ description: '当前页码(搜索/改页大小固定从1开始)', required: true }),
    pageSize: Flags.string({ description: '每页条数(默认50,可选50/100/150/200)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinancePage)

    const data = await this.client.post('/erpFinance/erpFinance/manufacture/payment/get/order/page', { "paymentStatus": flags.paymentStatus, "warehouse": flags.warehouse, "orderId": flags.orderId, "expressId": flags.expressId, "orderStatus": flags.orderStatus, "createBy": flags.createBy, "wangwangName": flags.wangwangName, "createOrderStartTime": flags.createOrderStartTime, "createOrderEndTime": flags.createOrderEndTime, "paymentStartTime": flags.paymentStartTime, "paymentEndTime": flags.paymentEndTime, "expressStartTime": flags.expressStartTime, "expressEndTime": flags.expressEndTime, "manufacType": flags.manufacType, "paymentType": flags.paymentType, "companyId": flags.companyId, "updateBy": flags.updateBy, "fixedmanu": flags.fixedmanu, "currentPage": flags.currentPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
