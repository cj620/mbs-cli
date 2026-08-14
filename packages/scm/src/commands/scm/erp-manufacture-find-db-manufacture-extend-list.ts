// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureFindDbManufactureExtendList extends MBSCommand {
  static description = '供应商拓展信息列表查询：供应商管理列表多维度分页查询：支持供应商名称、风险评估、黑名单、供应商类型、退换货情况、地址、评级、状态、是否定制、是否拜访、采购员、供货金额区间、采购时间区间等筛选，并按多种供货金额/数量/笔数/创建时间排序，返回供应商列表及联系人、商品、供货金额、采购笔数、评级等汇总字段。'

  static flags = {
    purchaseStr: Flags.string({ description: '采购员，来源多选控件 #buyer，多选时以逗号拼接，未选则传空字符串' }),
    currentPage: Flags.string({ description: '当前页码，search()中固定为1；翻页时取api.getCurrent()', required: true }),
    sequenceid: Flags.string({ description: '供货商编号，来源#sequenceid(输入框已注释，实际传空字符串)' }),
    evaluationstatus: Flags.string({ description: '是否通过风险评估。空=全部;1=是;0=否;2=在评估中' }),
    name: Flags.string({ description: '供应商名称，来源输入框#name' }),
    sorttype: Flags.string({ description: '排序方式(传中文枚举值)。按近六个月供货金额倒序/正序、按商品数量倒序/正序、按近六个月采购累计笔数倒序/正序、按创建时间倒序/正序、按近1个月供货金额正序/倒序、按供货金额倒序/正序' }),
    takeoper1: Flags.string({ description: '是否黑名单供应商。空=全部;1=是;0=否' }),
    returns: Flags.string({ description: '退换货情况，来源#returnChangeGoods(选项由findReturnList接口动态填充，value=code)' }),
    manufacturecreateby: Flags.string({ description: '地址搜索，来源输入框#manufacturecreateby(翻页callback不传)' }),
    mantype: Flags.string({ description: '供应商类型(多选)，默认[\'1\']。2=普通供应商;3=线下账期;6=1688账期;4=表格供应商;7=淘宝;8=拼多多;9=抖音;10=闲鱼;11=17网;12=绒趣网;13=微信;14=京东(默认值1含义待人工确认) (comma-separated)' }),
    manufacLevel: Flags.string({ description: '供应商评级。A=A级;B=B级;C=C级;D=D级;E=E级' }),
    statusIs: Flags.string({ description: '状态。0=待审核;1=已审核;2=已弃用' }),
    iscustomprocessing: Flags.string({ description: '是否定制。0=否;1=是;2=测试中' }),
    isVisit: Flags.string({ description: '是否拜访。0=未拜访;1=已拜访' }),
    startTime: Flags.string({ description: '采购时间-起始(日期)，默认当前日期前30天' }),
    endTime: Flags.string({ description: '采购时间-结束(日期)，默认当天' }),
    pageSize: Flags.string({ description: '每页条数。50/100/200/1000', required: true }),
    amountMin: Flags.string({ description: '供货金额-小值，来源#amountMin' }),
    amountMax: Flags.string({ description: '供货金额-大值，来源#amountMax' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureFindDbManufactureExtendList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpManufacture/erpManufacture/manufactureExtendController/findDbManufactureExtendList', { "purchaseStr": flags.purchaseStr, "currentPage": flags.currentPage, "sequenceid": flags.sequenceid, "evaluationstatus": flags.evaluationstatus, "name": flags.name, "sorttype": flags.sorttype, "takeoper1": flags.takeoper1, "returns": flags.returns, "manufacturecreateby": flags.manufacturecreateby, "mantype": toArray(flags.mantype, 'string'), "manufacLevel": flags.manufacLevel, "statusIs": flags.statusIs, "iscustomprocessing": flags.iscustomprocessing, "isVisit": flags.isVisit, "startTime": flags.startTime, "endTime": flags.endTime, "pageSize": flags.pageSize, "amountMin": flags.amountMin, "amountMax": flags.amountMax })
    this.output(data)
  }
}
