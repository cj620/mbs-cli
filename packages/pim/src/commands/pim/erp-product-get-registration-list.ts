// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetRegistrationList extends MBSCommand {
  static description = '侵权登记列表查询：侵权/违规登记记录的多维度分页查询：支持按问题类型、平台、提交时间区间、SPU提交售卖时间区间、SPU、开发员/开发大酋长、店长/销售大酋长、店铺、禁售政策、扣分区间、触发产品等条件筛选并排序，返回侵权登记列表及总条数。'

  static flags = {
    koufenshuMin: Flags.string({ description: '最小扣分数(空串转null;平台=10/120显示)' }),
    koufenshuMax: Flags.string({ description: '最大扣分数(空串转null;平台=10/120显示)' }),
    startTime: Flags.string({ description: '提交开始时间(YYYY-MM-DD)' }),
    endTime: Flags.string({ description: '提交结束时间(YYYY-MM-DD)' }),
    shopNameList: Flags.string({ description: '店铺名称列表(元素=SHOPNAME) (comma-separated)' }),
    spu: Flags.string({ description: 'SPU(多个用逗号分开)' }),
    developersList: Flags.string({ description: '开发员列表(元素=员工姓名) (comma-separated)' }),
    developerChiefList: Flags.string({ description: '开发大酋长列表(元素=员工ID) (comma-separated)' }),
    shopmanagerList: Flags.string({ description: '店长列表(元素=员工姓名) (comma-separated)' }),
    shopmanagerChiefList: Flags.string({ description: '销售大酋长列表(元素=员工ID) (comma-separated)' }),
    platForm: Flags.string({ description: '平台名称(传platFormname;由PLATFORMID映射PLATFORMNAME)', required: true }),
    pageSize: Flags.string({ description: '每页条数(前端固定100)', required: true }),
    page: Flags.string({ description: '当前页码', required: true }),
    status: Flags.string({ description: '问题类型:疑似侵权待确认/确定侵权/平台限售/属性错误&类目错放' }),
    prohibitionPolicy: Flags.string({ description: '禁售政策' }),
    triggerProduct: Flags.string({ description: '触发产品(平台=10显示)' }),
    beginSubmitTime: Flags.string({ description: 'SPU提交售卖开始时间(YYYY-MM-DD)' }),
    endSubmitTime: Flags.string({ description: 'SPU提交售卖结束时间(YYYY-MM-DD)' }),
    ordername: Flags.string({ description: '排序名称:时间降序/时间升序/SPU降序/SPU升序(展开自sort)' }),
    orderField: Flags.string({ description: '排序字段:t.CREATTIME/t.spu(展开自sort)' }),
    sortOrder: Flags.string({ description: '排序方向:DESC/ASC(展开自sort)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetRegistrationList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/infringement/getRegistrationList', { "koufenshuMin": flags.koufenshuMin, "koufenshuMax": flags.koufenshuMax, "startTime": flags.startTime, "endTime": flags.endTime, "shopNameList": toArray(flags.shopNameList, 'string'), "spu": flags.spu, "developersList": toArray(flags.developersList, 'string'), "developerChiefList": toArray(flags.developerChiefList, 'string'), "shopmanagerList": toArray(flags.shopmanagerList, 'string'), "shopmanagerChiefList": toArray(flags.shopmanagerChiefList, 'string'), "platForm": flags.platForm, "pageSize": flags.pageSize, "page": flags.page, "status": flags.status, "prohibitionPolicy": flags.prohibitionPolicy, "triggerProduct": flags.triggerProduct, "beginSubmitTime": flags.beginSubmitTime, "endSubmitTime": flags.endSubmitTime, "ordername": flags.ordername, "orderField": flags.orderField, "sortOrder": flags.sortOrder })
    this.output(data)
  }
}
