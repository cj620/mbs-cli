// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductExportRegistrationList extends MBSCommand {
  static description = '侵权登记列表导出：侵权(showslog/tort)登记列表按平台、问题类型、店铺/店长/销售大酋长、开发员/开发大酋长、SPU、提交时间区间、SPU提交售卖时间区间、扣分数区间、禁售政策、触发产品等多维条件，导出侵权登记记录 Excel 文件。以 XMLHttpRequest(responseType=blob) 发起，返回二进制文件流，文件名由 content-disposition 响应头携带。'

  static flags = {
    koufenshuMin: Flags.string({ description: '最小扣分数(空串转null)。来源输入框koufenshuMin，仅平台=10/120显示' }),
    koufenshuMax: Flags.string({ description: '最大扣分数(空串转null)。来源输入框koufenshuMax，仅平台=10/120显示' }),
    startTime: Flags.string({ description: '提交开始时间(YYYY-MM-DD)。来源日期选择器startTime' }),
    endTime: Flags.string({ description: '提交结束时间(YYYY-MM-DD)。来源日期选择器endTime' }),
    shopNameList: Flags.string({ description: '店铺名称列表。来源多选下拉shopName(allow-create/remote，值为店铺名SHOPNAME) (comma-separated)' }),
    spu: Flags.string({ description: 'SPU编号(多个用逗号分开)。来源输入框spu' }),
    developersList: Flags.string({ description: '开发员列表(spu开发员)。来源多选下拉developer，值为开发员姓名employee_name (comma-separated)' }),
    developerChiefList: Flags.string({ description: '开发大酋长列表。来源多选下拉developerChief，值为大酋长id (comma-separated)' }),
    shopmanagerList: Flags.string({ description: '店长(店铺管理员)列表。来源多选下拉shopmanager，值为店长姓名employee_name (comma-separated)' }),
    shopmanagerChiefList: Flags.string({ description: '销售大酋长(店铺管理员大酋长)列表。来源多选下拉shopmanagerChief，值为大酋长id (comma-separated)' }),
    platForm: Flags.string({ description: '平台名称(传平台名称platFormname，非ID)。来源下拉platForm经platFormlist映射出PLATFORMNAME' }),
    pageSize: Flags.string({ description: '每页条数。前端固定传100', required: true }),
    page: Flags.string({ description: '当前页码。来源basedata.page(初始1)', required: true }),
    status: Flags.string({ description: '问题类型。枚举：空=全部/疑似侵权待确认/确定侵权/平台限售/属性错误&类目错放。来源下拉status' }),
    prohibitionPolicy: Flags.string({ description: '禁售政策。来源下拉prohibitionPolicy(选项nosalelist由noSalePlatform按平台名加载)' }),
    triggerProduct: Flags.string({ description: '触发产品。来源输入框triggerProduct，仅平台=10显示' }),
    beginSubmitTime: Flags.string({ description: 'SPU提交售卖开始时间(YYYY-MM-DD)。来源日期选择器beginSubmitTime' }),
    endSubmitTime: Flags.string({ description: 'SPU提交售卖结束时间(YYYY-MM-DD)。来源日期选择器endSubmitTime' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductExportRegistrationList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/infringement/exportRegistrationList', { "koufenshuMin": flags.koufenshuMin, "koufenshuMax": flags.koufenshuMax, "startTime": flags.startTime, "endTime": flags.endTime, "shopNameList": toArray(flags.shopNameList, 'string'), "spu": flags.spu, "developersList": toArray(flags.developersList, 'string'), "developerChiefList": toArray(flags.developerChiefList, 'string'), "shopmanagerList": toArray(flags.shopmanagerList, 'string'), "shopmanagerChiefList": toArray(flags.shopmanagerChiefList, 'string'), "platForm": flags.platForm, "pageSize": flags.pageSize, "page": flags.page, "status": flags.status, "prohibitionPolicy": flags.prohibitionPolicy, "triggerProduct": flags.triggerProduct, "beginSubmitTime": flags.beginSubmitTime, "endSubmitTime": flags.endSubmitTime })
    this.output(data)
  }
}
