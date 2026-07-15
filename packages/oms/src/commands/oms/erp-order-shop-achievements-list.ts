// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShopAchievementsList extends MBSCommand {
  static description = '店铺业绩列表查询：店铺业绩(店铺成绩)分页列表查询：按平台、月份、店铺、组员、大酋长、店铺站点、店铺类型、店铺等级、运营状态、店铺属性、店铺标签、店龄区间、客户经理、资质状态、跟卖状态等条件筛选，支持排序字段与升降序，返回店铺业绩列表及总数、总页数。'

  static flags = {
    platform: Flags.string({ description: '平台(来源 #platform 下拉，按逗号拆分为数组；无值传 []) (comma-separated)' }),
    dateMonth: Flags.string({ description: '月份(来源 #dateMonth 年月下拉，按逗号拆分为数组；无值传 []) (comma-separated)' }),
    shop: Flags.string({ description: '店铺(来源 #shop 多选店铺；无选中传 []) (comma-separated)' }),
    groupMember: Flags.string({ description: '组员(来源 #groupMember 多选；无选中传 []) (comma-separated)' }),
    leader: Flags.string({ description: '大酋长(来源 #leader 多选；无选中传 []) (comma-separated)' }),
    password: Flags.string({ description: '店铺站点(来源 #password 下拉，字段名虽为password实为店铺站点；有值才传)' }),
    shippingtype: Flags.string({ description: '店铺类型(来源 #shippingtype：直销/虚拟海外仓/马来虚拟海外仓；有值才传)' }),
    ranking: Flags.string({ description: '店铺等级(来源 #ranking：A/B/C/D/E；有值才传)' }),
    operateStatus: Flags.string({ description: '运营状态(来源 #operateStatus：1=运营中,2=暂停运营,3=永久关闭中；有值才传)' }),
    shopage: Flags.string({ description: '店铺属性(来源 #shopage：1=全新店铺,2=成长期店铺,3=成熟店铺,4=老店铺；有值才传)' }),
    shopgrade: Flags.string({ description: '店铺标签(来源 #shopgrade：1=黑马店铺,2=健康发展店铺,3=疲软店铺；有值才传)' }),
    shopagestart: Flags.string({ description: '店龄-起始(来源 #shopagestart 输入框，单位:天；恒传)' }),
    shopageend: Flags.string({ description: '店龄-结束(来源 #shopageend 输入框，单位:天；恒传)' }),
    shops: Flags.string({ description: '多店铺(来源 #shops 输入框，多店铺空格隔开；有值才传)' }),
    customerServiceMgr: Flags.string({ description: '客户经理(来源 #custService 下拉；恒传)' }),
    qualificationStatus: Flags.string({ description: '资质状态(来源 #qualificationStatus：1=正常,0=异常,2=注销；恒传)' }),
    followupStatus: Flags.string({ description: '跟卖状态(来源 #followupStatus：1=全部自建,2=全部跟卖,3=部分跟卖；恒传)' }),
    orderDesc: Flags.string({ description: '升序/降序(来源 #orderDesc：desc=降序,空=升序；恒传)' }),
    orderField: Flags.string({ description: '排序字段(来源 #orderField：1店铺目标/2当月销售额/3订单量/4毛利额/5毛利率/21运营毛利率/6新品出单量/7新品销售额/8在线listing量/9 30天刊登量/10 30天退款率/11店铺站点/12店铺类型/13开店时间/14店龄/15跟卖销售额/16跟卖占比/17店铺等级/18客单价/19店铺属性/20店铺标签/22售出量/23售出占比；恒传)' }),
    page: Flags.string({ description: '当前页码(初次固定为1，分页回调取 api.getCurrent())', required: true }),
    pageSize: Flags.string({ description: '每页条数(固定50)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderShopAchievementsList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/shopAchievements/shopAchievementsList', { "platform": toArray(flags.platform, 'string'), "dateMonth": toArray(flags.dateMonth, 'string'), "shop": toArray(flags.shop, 'string'), "groupMember": toArray(flags.groupMember, 'string'), "leader": toArray(flags.leader, 'string'), "password": flags.password, "shippingtype": flags.shippingtype, "ranking": flags.ranking, "operateStatus": flags.operateStatus, "shopage": flags.shopage, "shopgrade": flags.shopgrade, "shopagestart": flags.shopagestart, "shopageend": flags.shopageend, "shops": flags.shops, "customerServiceMgr": flags.customerServiceMgr, "qualificationStatus": flags.qualificationStatus, "followupStatus": flags.followupStatus, "orderDesc": flags.orderDesc, "orderField": flags.orderField, "page": flags.page, "pageSize": flags.pageSize })
    this.output(data)
  }
}
