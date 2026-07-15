<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms erp-task-write-review-listing-detail

提交/保存 Listing 评价（writeReviewListingDetail）：提交或暂存一条 Listing 打造质量评价：七项 1~5 星评分(标题/图片/价格/属性/促销/维护频次(核心卖点)/好评维护(颜色/尺码))、综合评定下拉、listing亮点(content)与需要改进(listingMerit)两段富文本；按 draftType 区分保存草稿与提交评价，按场景传 sequenceid/listingId。

## 用法

```bash
mbs pms erp-task-write-review-listing-detail [--draftType <number>] --sequenceid <string> [--listingId <string>] [--titleLevel <string>] [--imageLevel <string>] [--priceLevel <string>] [--propertyLevel <string>] [--promotionLevel <string>] [--maintainLevel <string>] [--praiseLevel <string>] [--syntheticalEvaluate <string>] [--content <string>] [--listingMerit <string>]
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/reviewListingTask/writeReviewListingDetail`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `draftType` | draftType | body | number | 否 | - | 草稿类型/操作标识。仅保存草稿时传，取值=1(submitEvaluation 的 num=1)；提交评价(num=2)不传。来源:按钮 onclick 传入的 num |
| `sequenceid` | sequenceid | body | string | 是 | - | 评价记录序号ID。任务列表进入=URL参数 reviewId；我也要点评/创建listing场景(flag==2)=getReviewListingDetailByOper 返回的 obj.sequenceid(twosequenceid) |
| `listingId` | listingId | body | string | 否 | - | Listing ID。仅我也要点评/创建listing场景(flag==2)传，值=URL参数 reviewId |
| `titleLevel` | titleLevel | body | string | 否 | - | 标题/关键词 评分(星级)。枚举:1/2/3/4/5(标题卖点突出度、SEO关键词完备性)。来源:#titleLevel |
| `imageLevel` | imageLevel | body | string | 否 | - | 图片/创意 评分(星级)。枚举:1/2/3/4/5(图片美观度、差异化、创意)。来源:#imageLevel |
| `priceLevel` | priceLevel | body | string | 否 | - | 价格设置 评分(星级)。枚举:1/2/3/4/5(有竞争力、精细化设置)。来源:#priceLevel |
| `propertyLevel` | propertyLevel | body | string | 否 | - | 属性/类目 评分(星级)。枚举:1/2/3/4/5(属性完整度和准确性)。来源:#propertyLevel |
| `promotionLevel` | promotionLevel | body | string | 否 | - | 促销关联 评分(星级)。枚举:1/2/3/4/5(捆绑销售或关联推荐设置)。来源:#promotionLevel |
| `maintainLevel` | maintainLevel | body | string | 否 | - | 维护频次 评分(星级)；部门 depart=='62'或'产品部' 时标签切换为核心卖点。枚举:1/2/3/4/5。来源:#maintainLevel |
| `praiseLevel` | praiseLevel | body | string | 否 | - | 好评维护 评分(星级)；部门 depart=='62'或'产品部' 时标签切换为颜色/尺码。枚举:1/2/3/4/5。来源:#praiseLevel |
| `syntheticalEvaluate` | syntheticalEvaluate | body | string | 否 | - | 综合评定。枚举:高质量精细刊登/简单重复刊登/无脑铺货刊登(空=未选择)。来源:#syntheticalEvaluate |
| `content` | content | body | string | 否 | - | 评价正文(取 #editor1 listing亮点 CKEditor 富文本, myinstances[0]) |
| `listingMerit` | listingMerit | body | string | 否 | - | 需要改进内容(取 #editor2 需要改进 CKEditor 富文本, myinstances[1]；源码注释标注为listng亮点，实际取自需要改进文本框) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(前端据此判断成功/失败) | - |
| `desc` | string | 响应提示信息(前端 #tishi 弹窗展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
