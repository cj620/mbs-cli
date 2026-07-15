// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindListing extends MBSCommand {
  static description = '爆款listing列表查询：爆款listing榜单分页查询：按平台、店铺、店铺负责人、总监/经理/主管/店长、店铺名、SPU、开发时间区间、发布时间区间、排序方式等条件筛选，返回 listing 行及分页汇总（total/totalPages）。'

  static flags = {
    reserve11: Flags.string({ description: '平台（取自隐藏控件 #plaformId 的值，平台标识）' }),
    shopName: Flags.string({ description: '店铺（取自 #shopId）' }),
    shopPrincipal: Flags.string({ description: '店铺负责人（取自 #saleLeader）' }),
    currentPage: Flags.string({ description: '当前页码（首次/搜索固定为1，翻页时取分页控件 api.getCurrent()）', required: true }),
    skuCreateDateStart: Flags.string({ description: '开发时间-开始（skuCreateDate[0]，YYYY-MM-DD，仅选了开发时间区间才传）' }),
    skuCreateDateEnd: Flags.string({ description: '开发时间-结束（skuCreateDate[1]，YYYY-MM-DD）' }),
    spuDateUploadedStart: Flags.string({ description: '发布时间-开始（spuDateUploaded[0]，YYYY-MM-DD，仅选了发布时间区间才传）' }),
    spuDateUploadedEnd: Flags.string({ description: '发布时间-结束（spuDateUploaded[1]，YYYY-MM-DD）' }),
    orderBy: Flags.string({ description: '排序方式枚举（sort.value）。1=上榜时间降序;2=上榜时间升序;3=listing在线时长降序;4=listing在线时长升序;5=30天销量降序;6=30天销量升序;7=平均售价降序;8=平均售价升序;9=成本价降序;10=成本价升序;11=开发时间降序;12=开发时间升序;13=发布时间降序;14=发布时间升序' }),
    platformIdQueryList: Flags.string({ description: '平台ID列表（el-select 平台多选 selectdata.platformIds，元素为平台 sequenceid） (comma-separated)' }),
    spu: Flags.string({ description: 'SPU（spu.value，多个用逗号分隔）' }),
    employeeNameQueryList: Flags.string({ description: '店长（员工）名称列表。选了店长时取 selectdata.shopmanager；未选时默认取店长下拉全部 shopmanagerlist.map(name) (comma-separated)' }),
    shopNameQueryList: Flags.string({ description: '店铺名称列表（el-select 店铺多选 selectdata.shop，元素为店铺名 SHOPNAME） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindListing)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/listingController/findListing', { "reserve11": flags.reserve11, "shopName": flags.shopName, "shopPrincipal": flags.shopPrincipal, "currentPage": flags.currentPage, "skuCreateDateStart": flags.skuCreateDateStart, "skuCreateDateEnd": flags.skuCreateDateEnd, "spuDateUploadedStart": flags.spuDateUploadedStart, "spuDateUploadedEnd": flags.spuDateUploadedEnd, "orderBy": flags.orderBy, "platformIdQueryList": toArray(flags.platformIdQueryList, 'string'), "spu": flags.spu, "employeeNameQueryList": toArray(flags.employeeNameQueryList, 'string'), "shopNameQueryList": toArray(flags.shopNameQueryList, 'string') })
    this.output(data)
  }
}
