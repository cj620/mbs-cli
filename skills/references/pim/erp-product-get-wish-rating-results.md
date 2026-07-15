# mbs pim erp-product-get-wish-rating-results

获取wish评论信息：按 Wish listing 的 itemId 查询该商品的评价汇总信息(标题/主图/平均分/各星级评价数/误导风险处理记录)及其全部买家评论明细列表(results)，前端用于「查看评论」弹窗渲染星级、头像、评论内容与评论图片。

## 用法

```bash
mbs pim erp-product-get-wish-rating-results --itemId <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/wishRating/getWishRatingResults`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `itemId` | itemId | body | string | 是 | - | Wish 商品 listing 的 itemId(平台商品唯一标识)，取自列表行按钮的 data-itemid 属性；后端校验为空时返回 500 '参数不能为空' |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码。200=成功；500=失败(未登录/参数不能为空/没有找到评价信息！/查询错误) | - |
| `desc` | string | 响应提示信息(失败时为错误原因文案) | - |
| `success` | boolean | 是否成功(CommonResponse 通用字段，前端本处未使用) | - |
| `obj` | object | 业务数据对象：该 itemId 的 Wish 评价汇总信息(DbWishRatingInfo)。前端以 if (data.obj) 判空 | - |
| `obj.sequenceid` | string | 主键(评价信息记录ID) | - |
| `obj.itemId` | string | Wish 商品 listing 的 itemId(与请求入参一致) | - |
| `obj.listingUrl` | string | listing 链接(Wish 平台商品详情页URL) | - |
| `obj.shopId` | string | 店铺ID | - |
| `obj.shopName` | string | 店铺名称 | - |
| `obj.title` | string | listing 标题 | - |
| `obj.imageUrl` | string | 商品图片URL | - |
| `obj.rating` | string | 商品平均评价分(星级均分，单位：星) | - |
| `obj.ratingCount` | number | 评价总数量(单位：条)。列表页「评论(x)」中的 x 即取该值 | - |
| `obj.starOneRatingCount` | number | 1星评价数量(单位：条) | - |
| `obj.starTwoRatingCount` | number | 2星评价数量(单位：条) | - |
| `obj.starThreeRatingCount` | number | 3星评价数量(单位：条) | - |
| `obj.starFourRatingCount` | number | 4星评价数量(单位：条) | - |
| `obj.starFiveRatingCount` | number | 5星评价数量(单位：条) | - |
| `obj.createOper` | string | 创建人 | - |
| `obj.createDate` | string | 创建时间 | - |
| `obj.publishTime` | string | listing 刊登时间 | - |
| `obj.results[]` | array | 评价详细信息列表(买家评论明细)。前端 data.obj.results.length > 0 才渲染弹窗，否则 alert('暂无评价') | - |
| `obj.results[][0]` | string | 主键(评论记录ID) | - |
| `obj.results[][1]` | string | 所属 listing 的 itemId | - |
| `obj.results[][2]` | string | 店铺ID | - |
| `obj.results[][3]` | string | 店铺名称 | - |
| `obj.results[][4]` | string | Wish 平台评论ID | - |
| `obj.results[][5]` | string | 评价内容(评论正文)，模板直接渲染 | - |
| `obj.results[][6]` | number | 评价级别(星级)。枚举：1=1星;2=2星;3=3星;4=4星;5=5星；模板按值渲染实心/空心星，非1~5时渲染5颗空心星 | - |
| `obj.results[][7]` | string | 评论图片ID | - |
| `obj.results[][8]` | string | 评论图片ID集合 | - |
| `obj.results[][9]` | string | 评论大图URL，模板中作为缩略图的外链地址 | - |
| `obj.results[][10]` | string | 评论缩略图URL，模板中有值才渲染 100×100 图片 | - |
| `obj.results[][11]` | string | 评论视频ID | - |
| `obj.results[][12]` | string | 评论视频ID集合 | - |
| `obj.results[][13]` | string | 评论用户简称，模板渲染为标题行 | - |
| `obj.results[][14]` | string | 用户地点(语言/地区标识) | - |
| `obj.results[][15]` | string | 用户国家二字码 | - |
| `obj.results[][16]` | string | 用户注册日期 | - |
| `obj.results[][17]` | string | 用户名称 | - |
| `obj.results[][18]` | number | 是否 Wish 员工。枚举：0=不是;1=是 | - |
| `obj.results[][19]` | number | 是否 Wish 明星用户。枚举：0=不是;1=是 | - |
| `obj.results[][20]` | string | 用户头像URL(50×50)。模板渲染为圆形头像，加载失败时 onerror 回退默认头像 user2.png | - |
| `obj.results[][21]` | string | 用户头像URL(100×100) | - |
| `obj.results[][22]` | string | 用户头像URL(200×200) | - |
| `obj.results[][23]` | number | 该评论被反对(踩)的数量(单位：次) | - |
| `obj.results[][24]` | number | 该评论被赞成(赞)的数量(单位：次) | - |
| `obj.results[][25]` | string | 评价时间，模板渲染在用户名下方 | - |
| `obj.results[][26]` | string | 创建人 | - |
| `obj.results[][27]` | string | 创建时间 | - |
| `obj.misleadOper` | string | 标记误导风险人 | - |
| `obj.solutionMsg` | string | 处理方案备注(标记「存在误导风险」时填写) | - |
| `obj.misleadDate` | string | 标记误导风险时间 | - |
| `obj.shopManager` | string | 店铺负责人 | - |
| `obj.chief` | string | 主管(大酋长)(待人工确认：实体无注释，按字段名推断为主管/大酋长姓名) | - |
| `obj.result` | string | 误导风险处理结果 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
