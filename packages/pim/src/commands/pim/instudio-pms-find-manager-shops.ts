// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindManagerShops extends MBSCommand {
  static description = '查询当前登陆人管理的店铺：查询当前登陆人管理的店铺'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    name: Flags.string({ description: '名称（字段名推断,语义待核实）' }),
    shipTo: Flags.string({ description: '发货（字段名推断,语义待核实）' }),
    createTime: Flags.string({ description: '创建时间（字段名推断,语义待核实）' }),
    updateTime: Flags.string({ description: '更新时间（字段名推断,语义待核实）' }),
    createBy: Flags.string({ description: '创建人（字段名推断,语义待核实）' }),
    updateBy: Flags.string({ description: '更新人（字段名推断,语义待核实）' }),
    createOper: Flags.integer({ description: '创建操作（字段名推断,语义待核实）' }),
    updateOper: Flags.integer({ description: '更新操作（字段名推断,语义待核实）' }),
    memo: Flags.string({ description: '备注（字段名推断,语义待核实）' }),
    num: Flags.integer({ description: '数量（字段名推断,语义待核实）' }),
    type: Flags.integer({ description: '1 相对加减 2相对百分数' }),
    shipToMap: Flags.string({ description: '发货MAP（字段名推断,语义待核实） (comma-separated)' }),
    emps: Flags.string({ description: 'EMPS（字段名推断,语义待核实） (comma-separated)' }),
    checkTimeStart: Flags.string({ description: '校验时间开始（字段名推断,语义待核实）' }),
    checkTimeEnd: Flags.string({ description: '校验时间结束（字段名推断,语义待核实）' }),
    itemId: Flags.string({ description: '条目ID（字段名推断,语义待核实）' }),
    shopName: Flags.string({ description: '店铺名称（字段名推断,语义待核实）' }),
    jumpUrl: Flags.string({ description: 'JUMPURL（字段名推断,语义待核实）' }),
    erpSpu: Flags.string({ description: 'ERPSPU（字段名推断,语义待核实）' }),
    recordId: Flags.integer({ description: '记录ID（字段名推断,语义待核实）' }),
    configId: Flags.integer({ description: '配置ID（字段名推断,语义待核实）' }),
    title: Flags.string({ description: '标题（字段名推断,语义待核实）' }),
    publishSpu: Flags.string({ description: '刊登SPU（字段名推断,语义待核实）' }),
    publishDate: Flags.string({ description: '刊登日期（字段名推断,语义待核实）' }),
    ids: Flags.string({ description: 'ID列表（字段名推断,语义待核实） (comma-separated)' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    currentPage: Flags.integer({ description: '当前页码（字段名推断,语义待核实）' }),
    totalPage: Flags.integer({ description: '总数页码（字段名推断,语义待核实）' }),
    totalSize: Flags.integer({ description: '总大小（字段名推断,语义待核实）' }),
    itemSubmits: Flags.string({ description: '条目Submits（字段名推断,语义待核实） (comma-separated)' }),
    itemSubmitStr: Flags.string({ description: '条目提交字符串（字段名推断,语义待核实）' }),
    submitBy: Flags.string({ description: '提交人（字段名推断,语义待核实）' }),
    shiptotype: Flags.string({ description: 'Shiptotype（字段名推断,语义待核实）' }),
    submitDate: Flags.string({ description: '提交日期（字段名推断,语义待核实）' }),
    submitType: Flags.integer({ description: '提交类型（字段名推断,语义待核实）' }),
    batchId: Flags.string({ description: '批次ID（字段名推断,语义待核实）' }),
    status: Flags.integer({ description: '状态（字段名推断,语义待核实）' }),
    response: Flags.string({ description: '响应（字段名推断,语义待核实）' }),
    refreshDate: Flags.string({ description: '刷新日期（字段名推断,语义待核实）' }),
    freightId: Flags.string({ description: '运费ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindManagerShops)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/smtShiptoConfigurationController/findManagerShops', { "id": flags.id, "name": flags.name, "shipTo": flags.shipTo, "createTime": flags.createTime, "updateTime": flags.updateTime, "createBy": flags.createBy, "updateBy": flags.updateBy, "createOper": flags.createOper, "updateOper": flags.updateOper, "memo": flags.memo, "num": flags.num, "type": flags.type, "shipToMap": toArray(flags.shipToMap, 'object'), "emps": toArray(flags.emps, 'string'), "checkTimeStart": flags.checkTimeStart, "checkTimeEnd": flags.checkTimeEnd, "itemId": flags.itemId, "shopName": flags.shopName, "jumpUrl": flags.jumpUrl, "erpSpu": flags.erpSpu, "recordId": flags.recordId, "configId": flags.configId, "title": flags.title, "publishSpu": flags.publishSpu, "publishDate": flags.publishDate, "ids": toArray(flags.ids, 'integer'), "startIndex": flags.startIndex, "pageSize": flags.pageSize, "currentPage": flags.currentPage, "totalPage": flags.totalPage, "totalSize": flags.totalSize, "itemSubmits": toArray(flags.itemSubmits, 'string'), "itemSubmitStr": flags.itemSubmitStr, "submitBy": flags.submitBy, "shiptotype": flags.shiptotype, "submitDate": flags.submitDate, "submitType": flags.submitType, "batchId": flags.batchId, "status": flags.status, "response": flags.response, "refreshDate": flags.refreshDate, "freightId": flags.freightId })
    this.output(data)
  }
}
