// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetAmazonAutoPublishConfirmList extends MBSCommand {
  static description = '亚马逊自动刊登待确认列表查询：亚马逊自动刊登中心首页主列表查询：按店铺、刊登状态、SPU、关键词、站点、类目、刊登人、经理、生成时间区间、价格区间及差评/捆绑/批量等多维度分页查询，返回待刊登/刊登中/成功/失败/放弃的 SPU 行，用于刊登前确认与批量操作。'

  static flags = {
    page: Flags.string({ description: '当前页码(num==1 取 baseData.page, num==2 取 leftcurrentPage, 默认1)', required: true }),
    pageSize: Flags.string({ description: '每页条数(来源控件 #paginationCount)', required: true }),
    shopIds: Flags.string({ description: '店铺ID列表(来源控件 #shopNames; num==2 时为 [targetShop]) (comma-separated)' }),
    publishStatus: Flags.string({ description: '刊登状态筛选(来源控件 #publishStatus; num==2 时为 onlineResult)' }),
    managers: Flags.string({ description: '店铺经理(来源 managers 响应式变量, 店铺负责人筛选) (comma-separated)' }),
    erpSpu: Flags.string({ description: 'ERP SPU 编号(来源控件 #erpSpu)' }),
    genericKeywords: Flags.string({ description: '通用关键词筛选(来源控件 #genericKeywords)' }),
    site: Flags.string({ description: '站点(来源控件 #site, 如 US/UK/DE 等)' }),
    categoryId: Flags.string({ description: '亚马逊类目ID(来源控件 #categoryId, 由 getAmazonCategory 填充)' }),
    amazonCategoryName: Flags.string({ description: '亚马逊类目名/分类页签(取 productType 或 baseData.typeFlag)' }),
    publishOpers: Flags.string({ description: '刊登人/刊登员(来源控件 #amazonSaler) (comma-separated)' }),
    feedBackNumFlag: Flags.string({ description: '是否仅看有差评(来源 feedBackNumFlag 开关, 0=否,1=是)' }),
    bindFlag: Flags.string({ description: '是否仅看捆绑(来源 bindFlag 开关, 0=否,1=是)' }),
    batchFlag: Flags.string({ description: '刊登方式筛选(条件参数, 仅 batchFlag 有值时传; 1=批量,2=推荐)' }),
    startTime: Flags.string({ description: '生成时间-起始(条件参数, 选择时间区间时取 timeValue[0])' }),
    endTime: Flags.string({ description: '生成时间-结束(条件参数, 选择时间区间时取 timeValue[1])' }),
    minPrice: Flags.string({ description: '价格区间-最低价(来源控件 #minPrice, 空则 null; 多店铺下不生效)' }),
    maxPrice: Flags.string({ description: '价格区间-最高价(来源控件 #maxPrice, 空则 null; 多店铺下不生效)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetAmazonAutoPublishConfirmList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/amazonProductPublish/getAmazonAutoPublishConfirmList', { "page": flags.page, "pageSize": flags.pageSize, "shopIds": toArray(flags.shopIds, 'string'), "publishStatus": flags.publishStatus, "managers": toArray(flags.managers, 'string'), "erpSpu": flags.erpSpu, "genericKeywords": flags.genericKeywords, "site": flags.site, "categoryId": flags.categoryId, "amazonCategoryName": flags.amazonCategoryName, "publishOpers": toArray(flags.publishOpers, 'string'), "feedBackNumFlag": flags.feedBackNumFlag, "bindFlag": flags.bindFlag, "batchFlag": flags.batchFlag, "startTime": flags.startTime, "endTime": flags.endTime, "minPrice": flags.minPrice, "maxPrice": flags.maxPrice })
    this.output(data)
  }
}
