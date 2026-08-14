// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindSmtAutopublishSpu extends MBSCommand {
  static description = 'SMT自动刊登SPU列表查询：SMT(速卖通)自动刊登管理页的SPU分页列表查询：支持按SPU编码/批量SPU/itemid关键词、店铺、SMT分类、开发时间/刊登时间区间、产品状态、销量级别、在线状态、价差大等条件筛选；返回SPU行及其下挂的SKU明细列表。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码（num==1 取 baseData.currentPage，否则取 baseData.leftcurrentPage，默认1）', required: true }),
    pageSize: Flags.string({ description: '每页条数（固定传 50）', required: true }),
    targetShop: Flags.string({ description: '目标店铺（来源 baseData.targetShop，由侧边店铺状态点击 searchStatus(str,shop) 设置；num==1 时清空）' }),
    onlineResult: Flags.string({ description: '在线刊登结果状态（来源 baseData.onlineResult，由侧边状态点击设置；num==1 时清空）' }),
    topShopname: Flags.string({ description: '顶部店铺筛选（来源 #shopName 下拉选择）' }),
    smtCategoryName: Flags.string({ description: 'SMT分类名称（来源 #smtCategoryName 输入）' }),
    spu: Flags.string({ description: '关键词-SPU编码（#filtertype=1 时取 #keyword；非1/2/3 时传空字符串）' }),
    spuText: Flags.string({ description: '关键词-批量SPU编码（#filtertype=2 时取 #keyword，多个逗号分割）' }),
    itemid: Flags.string({ description: '关键词-平台itemid（#filtertype=3 时取 #keyword；非1/2/3 时传空字符串）' }),
    isPriceDifference: Flags.string({ description: '是否仅看价差大（勾选 #isPriceDifference 时传 1，否则不传）' }),
    createTimeStart: Flags.string({ description: '开发时间-起始（#setTime=1 且 #startTime 有值时，值为 日期 00:00:00）' }),
    createTimeEnd: Flags.string({ description: '开发时间-结束（#setTime=1 且 #endTime 有值时，值为 日期 23:59:59）' }),
    publishTimeStart: Flags.string({ description: '刊登时间-起始（#setTime=2 且 #startTime 有值时，值为 日期 00:00:00）' }),
    publishTimeEnd: Flags.string({ description: '刊登时间-结束（#setTime=2 且 #endTime 有值时，值为 日期 23:59:59）' }),
    productStatus: Flags.string({ description: '产品状态（来源 #status 下拉）' }),
    salesLevel: Flags.string({ description: '销量级别（来源 #salesStatus 下拉）' }),
    onlineStatus: Flags.string({ description: '在线状态（来源 #onlineStatus 下拉）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindSmtAutopublishSpu)

    const data = await this.client.post('/erpProduct/erpProduct/smtProductController/findSmtAutopublishSpu', { "currentPage": flags.currentPage, "pageSize": flags.pageSize, "targetShop": flags.targetShop, "onlineResult": flags.onlineResult, "topShopname": flags.topShopname, "smtCategoryName": flags.smtCategoryName, "spu": flags.spu, "spuText": flags.spuText, "itemid": flags.itemid, "isPriceDifference": flags.isPriceDifference, "createTimeStart": flags.createTimeStart, "createTimeEnd": flags.createTimeEnd, "publishTimeStart": flags.publishTimeStart, "publishTimeEnd": flags.publishTimeEnd, "productStatus": flags.productStatus, "salesLevel": flags.salesLevel, "onlineStatus": flags.onlineStatus })
    this.output(data)
  }
}
