# mbs pim instudio-pms-list-developpool

产品开发池列表：产品开发池列表

## 用法

```bash
mbs pim instudio-pms-list-developpool [--platformId <integer>] [--categoryId <string>] [--platformFirstCategoryId <string>] [--platformSecondCategoryId <string>] [--status <integer>] [--statusList <array<integer>>] [--timeType <integer>] [--timeStart <string>] [--timeEnd <string>] [--priceStart <string>] [--priceEnd <string>] [--userId <string>] [--tags <string>] [--tagList <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developpool/list`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | query | integer | 否 | - | 平台Id |
| `categoryId` | categoryId | query | string | 否 | - | 分类Id |
| `platformFirstCategoryId` | platformFirstCategoryId | query | string | 否 | - | 平台一级分类Id |
| `platformSecondCategoryId` | platformSecondCategoryId | query | string | 否 | - | 平台二级分类Id |
| `status` | status | query | integer | 否 | - | 分配状态：未映射分类(0)，未分配(1)，已分配(2)，已放弃(3) |
| `statusList` | statusList | query | array<integer> | 否 | - | 多状态查询时使用 |
| `timeType` | timeType | query | integer | 否 | - | 时间类型：1=刊登时间 2=放弃时间 |
| `timeStart` | timeStart | query | string | 否 | - | 开始时间 |
| `timeEnd` | timeEnd | query | string | 否 | - | 结束时间 |
| `priceStart` | priceStart | query | string | 否 | - | 开始价格 |
| `priceEnd` | priceEnd | query | string | 否 | - | 结束价格 |
| `userId` | userId | query | string | 否 | - | 当前用户ID |
| `tags` | tags | body | string | 否 | - | 标签（表:注释） |
| `tagList` | tagList | body | string | 否 | - | 标签（表:注释） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `total` | integer | 总数。前端使用：待核实 | - |
| `totalPages` | integer | 总数Pages。前端使用：待核实 | - |
| `rows[]` | array | 行数据。前端使用：待核实 | - |
| `success` | boolean | 成功。前端使用：待核实 | - |
| `desc` | string | 描述。前端使用：待核实 | - |
| `code` | integer | 编码。前端使用：待核实 | - |
| `footer[]` | array | Footer。前端使用：待核实 | - |
| `sort` | string | 排序。前端使用：待核实 | - |
| `order` | string | 订单。前端使用：待核实 | - |
| `obj.STATUS_NOT_MAPPING_CATEGORY` | integer | 分配状态：未映射分类 = 0。前端使用：待核实 | - |
| `obj.STATUS_ASSIGN_NO` | integer | 分配状态：已映射未分配 = 1。前端使用：待核实 | - |
| `obj.STATUS_ASSIGN_YES` | integer | 分配状态：已分配 = 2。前端使用：待核实 | - |
| `obj.STATUS_GIVEUP` | integer | 分配状态：已放弃 = 3。前端使用：待核实 | - |
| `obj.id` | string | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.status` | integer | 分配状态：未映射分类(0)，未分配(1)，已分配(2)，已放弃(3)。前端使用：待核实 | - |
| `obj.categoryId` | string | 分类id。前端使用：待核实 | - |
| `obj.platformId` | integer | 平台id。前端使用：待核实 | - |
| `obj.platformSiteCode` | string | 平台站点编码：ebay有多个；没有则为空。前端使用：待核实 | - |
| `obj.platformProductId` | string | 平台商品ID。前端使用：待核实 | - |
| `obj.platformProductName` | string | 平台商品名。前端使用：待核实 | - |
| `obj.platformProductUrl` | string | 平台商品URL。前端使用：待核实 | - |
| `obj.platformProductImg` | string | 平台商品图片。前端使用：待核实 | - |
| `obj.platformProductPrice` | number | 平台商品价格。前端使用：待核实 | - |
| `obj.platformProductDays7sales` | integer | 商品周销量。前端使用：待核实 | - |
| `obj.platformProductCountry` | string | 平台商品国家编码。前端使用：待核实 | - |
| `obj.platformProductTag` | string | 平台商品URL。前端使用：待核实 | - |
| `obj.platformCategoryId` | string | 平台叶子分类ID。前端使用：待核实 | - |
| `obj.platformFirstCategoryId` | string | 平台一级分类ID。前端使用：待核实 | - |
| `obj.platformSecondCategoryId` | string | 平台二级分类ID。前端使用：待核实 | - |
| `obj.platformThirdCategoryId` | string | 平台三级分类ID。前端使用：待核实 | - |
| `obj.platformCategoryName` | string | 平台叶子分类名字。前端使用：待核实 | - |
| `obj.platformUploadedTime` | string | 平台叶子分类名字。前端使用：待核实 | - |
| `obj.giveUpReason` | string | 放弃原因。前端使用：待核实 | - |
| `obj.giveUpTime` | string | 放弃时间。前端使用：待核实 | - |
| `obj.createdBy` | string | 创建人（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.createdOn` | string | 创建（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.createdType` | string | 提交状态。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
