# mbs pms erp-task-get-review-listing-detail-by-oper

我也要点评-Listing评价详情查询(按操作人)：“我也要点评”场景(flag=2)下，按 listingId 查询当前操作人对该 listing 的评价详情，回显标题/图片/价格/属性/促销/维护/好评 7 项评分、综合评定、评价正文与需改进内容，并据 evaluateTime 判断是否显示“保存草稿”按钮。

## 用法

```bash
mbs pms erp-task-get-review-listing-detail-by-oper --listingId <string>
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/reviewListingTask/getReviewListingDetailByOper`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `listingId` | listingId | query | string | 是 | - | Listing 记录ID(查询主键)。前端取自当前页面 URL 的 reviewId 参数(GetQueryString('reviewId'))，拼接到接口 URL query 上；来源=页面URL参数 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息(标准返回信息字段，本回调未直接读取) | - |
| `obj` | object | 业务数据对象(评价详情)，为空则不回显 | - |
| `obj.titleLevel` | number | 标题/关键词评分(1~5，标题卖点突出度/SEO关键词完备性) | - |
| `obj.imageLevel` | number | 图片/创意评分(1~5，图片美观度/差异化/创意) | - |
| `obj.priceLevel` | number | 价格设置评分(1~5，竞争力/精细化设置) | - |
| `obj.propertyLevel` | number | 属性/类目评分(1~5，属性完整度和准确性) | - |
| `obj.promotionLevel` | number | 促销关联评分(1~5，捆绑销售/关联推荐设置) | - |
| `obj.maintainLevel` | number | 维护频次评分(1~5；产品部/depart=62 场景标签为“核心卖点”) | - |
| `obj.praiseLevel` | number | 好评维护评分(1~5；产品部场景标签为“颜色/尺码”) | - |
| `obj.syntheticalEvaluate` | string | 综合评定，枚举：高质量精细刊登/简单重复刊登/无脑铺货刊登 | - |
| `obj.content` | string | 评价正文，回填富文本编辑器 #editor1(“listing亮点”框) | - |
| `obj.listingMerit` | string | 需要改进内容，回填富文本编辑器 #editor2(“需要改进”框) | - |
| `obj.sequenceid` | number | 评价记录序号ID，赋值给 twosequenceid，作为后续 writeReviewListingDetail 的 sequenceid 入参 | - |
| `obj.evaluateTime` | string | 评价时间；有值则隐藏“保存草稿”按钮(#caogao)，无值则显示 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
