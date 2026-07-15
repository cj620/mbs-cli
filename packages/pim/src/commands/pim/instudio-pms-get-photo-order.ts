// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetPhotoOrder extends MBSCommand {
  static description = '获取列表：获取列表'

  static flags = {
    orderType: Flags.string({ description: '订单类型（字段名推断,语义待核实）' }),
    orderId: Flags.string({ description: '订单ID（字段名推断,语义待核实）' }),
    orderStatus: Flags.string({ description: '订单状态（字段名推断,语义待核实） (comma-separated)' }),
    photoOrderStatus: Flags.string({ description: '图片订单状态（字段名推断,语义待核实） (comma-separated)' }),
    developer: Flags.string({ description: '开发者（字段名推断,语义待核实） (comma-separated)' }),
    developerLeader: Flags.string({ description: '开发者组长（字段名推断,语义待核实） (comma-separated)' }),
    orderCreateOper: Flags.string({ description: '订单创建操作（字段名推断,语义待核实） (comma-separated)' }),
    sku: Flags.string({ description: 'SKU（字段名推断,语义待核实） (comma-separated)' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实） (comma-separated)' }),
    signInTimeStart: Flags.string({ description: '签名入库时间开始（字段名推断,语义待核实）' }),
    signInTimeEnd: Flags.string({ description: '签名入库时间结束（字段名推断,语义待核实）' }),
    returnTimeStart: Flags.string({ description: '退货时间开始（字段名推断,语义待核实）' }),
    returnTimeEnd: Flags.string({ description: '退货时间结束（字段名推断,语义待核实）' }),
    currentPage: Flags.integer({ description: '当前页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    startNum: Flags.integer({ description: '开始数量（字段名推断,语义待核实）' }),
    endNum: Flags.integer({ description: '结束数量（字段名推断,语义待核实）' }),
    managerNames: Flags.string({ description: '管理名称列表（字段名推断,语义待核实）' }),
    lableType: Flags.string({ description: 'Lable类型（字段名推断,语义待核实）' }),
    createOrderTimeStart: Flags.string({ description: '创建订单时间开始（字段名推断,语义待核实）' }),
    createOrderTimeEnd: Flags.string({ description: '创建订单时间结束（字段名推断,语义待核实）' }),
    lossesTimeStart: Flags.string({ description: 'Losses时间开始（字段名推断,语义待核实）' }),
    lossesTimeEnd: Flags.string({ description: 'Losses时间结束（字段名推断,语义待核实）' }),
    signinOper: Flags.string({ description: 'Signin操作（字段名推断,语义待核实） (comma-separated)' }),
    photoRemark: Flags.string({ description: '拍照备注' }),
    spus: Flags.string({ description: '拍照备注spu (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetPhotoOrder)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/photoOrder/getPhotoOrder', { "orderType": flags.orderType, "orderId": flags.orderId, "orderStatus": toArray(flags.orderStatus, 'string'), "photoOrderStatus": toArray(flags.photoOrderStatus, 'string'), "developer": toArray(flags.developer, 'string'), "developerLeader": toArray(flags.developerLeader, 'string'), "orderCreateOper": toArray(flags.orderCreateOper, 'string'), "sku": toArray(flags.sku, 'string'), "spu": toArray(flags.spu, 'string'), "signInTimeStart": flags.signInTimeStart, "signInTimeEnd": flags.signInTimeEnd, "returnTimeStart": flags.returnTimeStart, "returnTimeEnd": flags.returnTimeEnd, "currentPage": flags.currentPage, "pageSize": flags.pageSize, "startNum": flags.startNum, "endNum": flags.endNum, "managerNames": flags.managerNames, "lableType": flags.lableType, "createOrderTimeStart": flags.createOrderTimeStart, "createOrderTimeEnd": flags.createOrderTimeEnd, "lossesTimeStart": flags.lossesTimeStart, "lossesTimeEnd": flags.lossesTimeEnd, "signinOper": toArray(flags.signinOper, 'string'), "photoRemark": flags.photoRemark, "spus": toArray(flags.spus, 'string') })
    this.output(data)
  }
}
