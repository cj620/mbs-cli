// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskWriteReviewListingDetail extends MBSCommand {
  static description = '提交/保存 Listing 评价（writeReviewListingDetail）：提交或暂存一条 Listing 打造质量评价：七项 1~5 星评分(标题/图片/价格/属性/促销/维护频次(核心卖点)/好评维护(颜色/尺码))、综合评定下拉、listing亮点(content)与需要改进(listingMerit)两段富文本；按 draftType 区分保存草稿与提交评价，按场景传 sequenceid/listingId。'

  static flags = {
    draftType: Flags.string({ description: '草稿类型/操作标识。仅保存草稿时传，取值=1(submitEvaluation 的 num=1)；提交评价(num=2)不传。来源:按钮 onclick 传入的 num' }),
    sequenceid: Flags.string({ description: '评价记录序号ID。任务列表进入=URL参数 reviewId；我也要点评/创建listing场景(flag==2)=getReviewListingDetailByOper 返回的 obj.sequenceid(twosequenceid)', required: true }),
    listingId: Flags.string({ description: 'Listing ID。仅我也要点评/创建listing场景(flag==2)传，值=URL参数 reviewId' }),
    titleLevel: Flags.string({ description: '标题/关键词 评分(星级)。枚举:1/2/3/4/5(标题卖点突出度、SEO关键词完备性)。来源:#titleLevel' }),
    imageLevel: Flags.string({ description: '图片/创意 评分(星级)。枚举:1/2/3/4/5(图片美观度、差异化、创意)。来源:#imageLevel' }),
    priceLevel: Flags.string({ description: '价格设置 评分(星级)。枚举:1/2/3/4/5(有竞争力、精细化设置)。来源:#priceLevel' }),
    propertyLevel: Flags.string({ description: '属性/类目 评分(星级)。枚举:1/2/3/4/5(属性完整度和准确性)。来源:#propertyLevel' }),
    promotionLevel: Flags.string({ description: '促销关联 评分(星级)。枚举:1/2/3/4/5(捆绑销售或关联推荐设置)。来源:#promotionLevel' }),
    maintainLevel: Flags.string({ description: '维护频次 评分(星级)；部门 depart==\'62\'或\'产品部\' 时标签切换为核心卖点。枚举:1/2/3/4/5。来源:#maintainLevel' }),
    praiseLevel: Flags.string({ description: '好评维护 评分(星级)；部门 depart==\'62\'或\'产品部\' 时标签切换为颜色/尺码。枚举:1/2/3/4/5。来源:#praiseLevel' }),
    syntheticalEvaluate: Flags.string({ description: '综合评定。枚举:高质量精细刊登/简单重复刊登/无脑铺货刊登(空=未选择)。来源:#syntheticalEvaluate' }),
    content: Flags.string({ description: '评价正文(取 #editor1 listing亮点 CKEditor 富文本, myinstances[0])' }),
    listingMerit: Flags.string({ description: '需要改进内容(取 #editor2 需要改进 CKEditor 富文本, myinstances[1]；源码注释标注为listng亮点，实际取自需要改进文本框)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskWriteReviewListingDetail)

    const data = await this.client.post('/erpTask/erpTask/reviewListingTask/writeReviewListingDetail', { "draftType": flags.draftType, "sequenceid": flags.sequenceid, "listingId": flags.listingId, "titleLevel": flags.titleLevel, "imageLevel": flags.imageLevel, "priceLevel": flags.priceLevel, "propertyLevel": flags.propertyLevel, "promotionLevel": flags.promotionLevel, "maintainLevel": flags.maintainLevel, "praiseLevel": flags.praiseLevel, "syntheticalEvaluate": flags.syntheticalEvaluate, "content": flags.content, "listingMerit": flags.listingMerit })
    this.output(data)
  }
}
