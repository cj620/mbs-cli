// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindLazadaAutopublishSpu extends MBSCommand {
  static description = 'Lazada自动刊登SPU列表查询：Lazada自动刊登管理页的SPU分页查询：按搜索类型(SPU/itemid)、店铺、在线状态、产品状态、销量级别、创建/刊登时间区间、差价等条件分页查询待刊登/已刊登SPU列表，返回每个SPU及其下挂SKU列表(价格、库存、刊登状态等)。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码。num=1取baseData.currentPage，num=2取baseData.leftcurrentPage，分页回调赋当前页', required: true }),
    pageSize: Flags.string({ description: '每页条数，前端固定传50', required: true }),
    targetShop: Flags.string({ description: '目标店铺。仅店铺侧栏searchStatus点击时赋店铺名，主搜索num=1时清空' }),
    onlineResult: Flags.string({ description: '在线刊登状态结果。searchStatus传入(等待刊登/刊登成功/刊登失败/放弃刊登)，主搜索num=1时清空' }),
    topShopname: Flags.string({ description: '顶部店铺筛选，取自#shopName下拉框值' }),
    spu: Flags.string({ description: '关键词-按SPU编码查询。#filtertype=1时取#keyword；非1/3时传空串' }),
    itemid: Flags.string({ description: '关键词-按平台itemid查询。#filtertype=3时取#keyword；非1/3时传空串' }),
    isPriceDifference: Flags.string({ description: '是否仅看差价大商品。勾选#isPriceDifference时传1，否则不传' }),
    createTimeStart: Flags.string({ description: '创建时间-起始。#setTime=1且#startTime有值时取#startTime+\' 00:00:00\'' }),
    createTimeEnd: Flags.string({ description: '创建时间-结束。#setTime=1且#endTime有值时取#endTime+\' 23:59:59\'' }),
    publishTimeStart: Flags.string({ description: '刊登时间-起始。#setTime=2且#startTime有值时取#startTime+\' 00:00:00\'' }),
    publishTimeEnd: Flags.string({ description: '刊登时间-结束。#setTime=2且#endTime有值时取#endTime+\' 23:59:59\'' }),
    productStatus: Flags.string({ description: '产品状态，取自#status下拉框值' }),
    salesLevel: Flags.string({ description: '销量级别，取自#salesStatus(超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品)' }),
    onlineStatus: Flags.string({ description: '在线状态，取自#onlineStatus下拉框值' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindLazadaAutopublishSpu)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaAutopublishController/findLazadaAutopublishSpu', { "currentPage": flags.currentPage, "pageSize": flags.pageSize, "targetShop": flags.targetShop, "onlineResult": flags.onlineResult, "topShopname": flags.topShopname, "spu": flags.spu, "itemid": flags.itemid, "isPriceDifference": flags.isPriceDifference, "createTimeStart": flags.createTimeStart, "createTimeEnd": flags.createTimeEnd, "publishTimeStart": flags.publishTimeStart, "publishTimeEnd": flags.publishTimeEnd, "productStatus": flags.productStatus, "salesLevel": flags.salesLevel, "onlineStatus": flags.onlineStatus })
    this.output(data)
  }
}
