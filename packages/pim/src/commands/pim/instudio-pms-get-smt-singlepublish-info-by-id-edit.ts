// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSmtSinglepublishInfoByIdEdit extends MBSCommand {
  static description = '获取编辑信息ById：获取编辑信息ById'

  static flags = {
    listId: Flags.string({ description: '列表ID（字段名推断,语义待核实）' }),
    id: Flags.string({ description: 'ID（字段名推断,语义待核实）' }),
    erpSpu: Flags.string({ description: '马帮spu' }),
    publishSpu: Flags.string({ description: '刊登spu' }),
    mainPic: Flags.string({ description: '主图' }),
    title: Flags.string({ description: '标题' }),
    title2: Flags.string({ description: '标题' }),
    vType: Flags.integer({ description: '类型（字段名推断,语义待核实）' }),
    vNum: Flags.integer({ description: '数量（字段名推断,语义待核实）' }),
    shopname: Flags.string({ description: '店铺' }),
    priceArea: Flags.string({ description: '价格' }),
    profitRate: Flags.string({ description: '毛利率' }),
    jitProfit: Flags.string({ description: '毛利率' }),
    publishItemid: Flags.string({ description: '刊登商品项ID（字段名推断,语义待核实）' }),
    publishResponse: Flags.string({ description: '刊登响应（字段名推断,语义待核实）' }),
    createBy: Flags.string({ description: '创建人（字段名推断,语义待核实）' }),
    publishBy: Flags.string({ description: '刊登人（字段名推断,语义待核实）' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    currentPage: Flags.integer({ description: '当前页码（字段名推断,语义待核实）' }),
    starttime: Flags.string({ description: 'Starttime（字段名推断,语义待核实）' }),
    endtime: Flags.string({ description: 'Endtime（字段名推断,语义待核实）' }),
    shopsSplice: Flags.string({ description: '店铺列表Splice（字段名推断,语义待核实）' }),
    shopmanager: Flags.string({ description: 'Shopmanager（字段名推断,语义待核实）' }),
    categoryname: Flags.string({ description: 'Categoryname（字段名推断,语义待核实）' }),
    jumpUrl: Flags.string({ description: 'JUMPURL（字段名推断,语义待核实）' }),
    isCompulsory: Flags.integer({ description: '是否Compulsory（字段名推断,语义待核实）' }),
    timeOccur: Flags.string({ description: '时间Occur（字段名推断,语义待核实）' }),
    batchId: Flags.string({ description: '批次id' }),
    publishOper: Flags.string({ description: '刊登人' }),
    publishOperId: Flags.integer({ description: '刊登人id' }),
    productStatus: Flags.string({ description: '产品状态' }),
    salesLevel: Flags.string({ description: '销量级别' }),
    publishStatus: Flags.integer({ description: '1:等待刊登2:刊登中3:刊登成功4:刊登失败' }),
    onlineStatus: Flags.integer({ description: '0:等待上架1:上架中2:上架成功3:上架失败4:放弃上架' }),
    publishtimedate: Flags.string({ description: '刊登时间' }),
    createTime: Flags.string({ description: '创建时间' }),
    updateTime: Flags.string({ description: '修改时间' }),
    isOffline: Flags.integer({ description: '是否下线（字段名推断,语义待核实）' }),
    isPriceDifference: Flags.integer({ description: '1价格差异过大' }),
    groupName: Flags.string({ description: '分组名称（字段名推断,语义待核实）' }),
    status2: Flags.integer({ description: '状态2（字段名推断,语义待核实）' }),
    smtCategoryId: Flags.string({ description: '速卖通类目ID（字段名推断,语义待核实）' }),
    saveNum: Flags.integer({ description: '保存数量（字段名推断,语义待核实）' }),
    isRetry: Flags.integer({ description: '是否重试（字段名推断,语义待核实）' }),
    discountstatus: Flags.integer({ description: 'Discountstatus（字段名推断,语义待核实）' }),
    discountName: Flags.string({ description: '折扣名称（字段名推断,语义待核实）' }),
    shiptoConfigId: Flags.integer({ description: 'Shipto配置ID（字段名推断,语义待核实）' }),
    shopNameJitb: Flags.string({ description: '店铺名称JITB（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSmtSinglepublishInfoByIdEdit)

    const data = await this.client.post('/yypms/pms/smtSinglepublishController/getSmtSinglepublishInfoByIdEdit', { "listId": flags.listId, "id": flags.id, "erpSpu": flags.erpSpu, "publishSpu": flags.publishSpu, "mainPic": flags.mainPic, "title": flags.title, "title2": flags.title2, "vType": flags.vType, "vNum": flags.vNum, "shopname": flags.shopname, "priceArea": flags.priceArea, "profitRate": flags.profitRate, "jitProfit": flags.jitProfit, "publishItemid": flags.publishItemid, "publishResponse": flags.publishResponse, "createBy": flags.createBy, "publishBy": flags.publishBy, "startIndex": flags.startIndex, "pageSize": flags.pageSize, "currentPage": flags.currentPage, "starttime": flags.starttime, "endtime": flags.endtime, "shopsSplice": flags.shopsSplice, "shopmanager": flags.shopmanager, "categoryname": flags.categoryname, "jumpUrl": flags.jumpUrl, "isCompulsory": flags.isCompulsory, "timeOccur": flags.timeOccur, "batchId": flags.batchId, "publishOper": flags.publishOper, "publishOperId": flags.publishOperId, "productStatus": flags.productStatus, "salesLevel": flags.salesLevel, "publishStatus": flags.publishStatus, "onlineStatus": flags.onlineStatus, "publishtimedate": flags.publishtimedate, "createTime": flags.createTime, "updateTime": flags.updateTime, "isOffline": flags.isOffline, "isPriceDifference": flags.isPriceDifference, "groupName": flags.groupName, "status2": flags.status2, "smtCategoryId": flags.smtCategoryId, "saveNum": flags.saveNum, "isRetry": flags.isRetry, "discountstatus": flags.discountstatus, "discountName": flags.discountName, "shiptoConfigId": flags.shiptoConfigId, "shopNameJitb": flags.shopNameJitb })
    this.output(data)
  }
}
