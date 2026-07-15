// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductOzonPublishExportExcel extends MBSCommand {
  static description = 'OZON自动刊登列表导出Excel：OZON推荐(自动)刊登列表页按当前搜索表单筛选条件导出符合条件的刊登SPU为Excel。请求体复用列表查询getParams()结果并追加分页;响应为二进制.xls文件流(responseType=blob),前端创建a标签触发下载,文件名为ozon自动刊登+时间戳.xls。'

  static flags = {
    ozonCategoryName: Flags.string({ description: 'OZON分类名称(来源:请输入ozon分类输入框)' }),
    productStatus: Flags.string({ description: '产品状态(下拉,枚举:正常/清仓/停产/自动创建/暂停销售)' }),
    salesLevelList: Flags.string({ description: '销量级别列表(多选下拉,选项取自product/getProductType:超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品) (comma-separated)' }),
    topShopname: Flags.string({ description: '店铺名称(下拉,选项取自ozonProductController/findPublishShop返回的shopnames)' }),
    onlineResult: Flags.string({ description: '刊登状态(下拉,枚举:等待刊登/刊登中/刊登成功/刊登失败/审核中/放弃刊登)' }),
    targetShop: Flags.string({ description: '目标店铺(默认空字符串;左侧店铺列表点击时由setShopParams写入,导出复用搜索表单值)' }),
    spu: Flags.string({ description: '关键词-SPU编码(仅searchType=spu时存在,值=searchTypeValue输入框内容)' }),
    spuText: Flags.string({ description: '关键词-SPU编码多个查询(仅searchType=spuText时存在,逗号分割多个SPU)' }),
    itemid: Flags.string({ description: '关键词-itemid(仅searchType=itemid时存在,值=searchTypeValue输入框内容)' }),
    createTimeStart: Flags.string({ description: '生成时间-起始(仅timeType=createTime时存在,格式YYYY-MM-DD 00:00:00,来源日期区间选择器起点)' }),
    createTimeEnd: Flags.string({ description: '生成时间-结束(仅timeType=createTime时存在,格式YYYY-MM-DD 23:59:59,来源日期区间选择器终点)' }),
    publishTimeStart: Flags.string({ description: '上架时间-起始(仅timeType=publishTime时存在,格式YYYY-MM-DD 00:00:00)' }),
    publishTimeEnd: Flags.string({ description: '上架时间-结束(仅timeType=publishTime时存在,格式YYYY-MM-DD 23:59:59)' }),
    isPriceDifference: Flags.string({ description: '是否仅看差价大(差价大复选框;勾选传1,未勾选则不传该字段)' }),
    currentPage: Flags.string({ description: '当前页码(导出时由pageInfo.pageIndex强制写入,默认从1开始)', required: true }),
    pageSize: Flags.string({ description: '每页条数(导出时由pageInfo.pageSize强制写入,可选50/100/150/200/1000,默认50)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductOzonPublishExportExcel)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/ozonProductController/ozonPublishExportExcel', { "ozonCategoryName": flags.ozonCategoryName, "productStatus": flags.productStatus, "salesLevelList": toArray(flags.salesLevelList, 'string'), "topShopname": flags.topShopname, "onlineResult": flags.onlineResult, "targetShop": flags.targetShop, "spu": flags.spu, "spuText": flags.spuText, "itemid": flags.itemid, "createTimeStart": flags.createTimeStart, "createTimeEnd": flags.createTimeEnd, "publishTimeStart": flags.publishTimeStart, "publishTimeEnd": flags.publishTimeEnd, "isPriceDifference": flags.isPriceDifference, "currentPage": flags.currentPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
