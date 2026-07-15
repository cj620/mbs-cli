# mbs pim instudio-pms-request-id-get-publish-request-info

美客多获取单品刊登信息：美客多获取单品刊登信息

## 用法

```bash
mbs pim instudio-pms-request-id-get-publish-request-info
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/mercadolibre/getPublishRequestInfo/{requestId}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `requestId` | requestId | path | integer | 是 | - | 请求ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 状态码。前端使用：待核实 | - |
| `success` | boolean | 是否成功。前端使用：待核实 | - |
| `data` | object | 承载数据。前端使用：待核实 | - |
| `message` | string | 返回消息。前端使用：待核实 | - |
| `obj.requestId` | integer | 请求记录编号。前端使用：待核实 | - |
| `obj.spu` | string | SPU编号。前端使用：待核实 | - |
| `obj.groupCode` | string | 店铺分组编码。前端使用：待核实 | - |
| `obj.groupCodeId` | integer | 店铺分组ID。前端使用：待核实 | - |
| `obj.title` | string | 产品标题。前端使用：待核实 | - |
| `obj.brand` | string | 品牌。前端使用：待核实 | - |
| `obj.expressType` | string | 物流方式。前端使用：待核实 | - |
| `obj.description` | string | 产品描述。前端使用：待核实 | - |
| `obj.globalPrice` | string | 全球价格。前端使用：待核实 | - |
| `obj.spuSingleFlag` | boolean | 单/多变体 true:单变体/false:多变体。前端使用：待核实 | - |
| `obj.requestStatus` | integer | 修改时传。前端使用：待核实 | - |
| `obj.categoryId` | string | 修改时传。前端使用：待核实 | - |
| `obj.categoryPoList[]` | array | 类目采购单列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.publishSite` | string | 修改时传。前端使用：待核实 | - |
| `obj.siteId` | string | 修改时传。前端使用：待核实 | - |
| `obj.shopManager` | string | 店铺负责人。前端使用：待核实 | - |
| `obj.createUser` | string | 创建人。前端使用：待核实 | - |
| `obj.createDate` | string | 创建时间。前端使用：待核实 | - |
| `obj.publishDate` | string | 刊登时间。前端使用：待核实 | - |
| `obj.globalItemId` | string | 全局条目ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.globalResponse` | string | 刊登结果描述。前端使用：待核实 | - |
| `obj.status` | integer | 0 创建刊登信息，1 已提交刊登，2 刊登中，3 刊登成功，4 刊登失败，5 部分刊登成功。前端使用：待核实 | - |
| `obj.siteItemIdJson` | string | 站点条目IDJSON（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.brazilSiteResponse` | string | Brazil站点响应（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.mexicoSiteResponse` | string | Mexico站点响应（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.chileSiteResponse` | string | Chile站点响应（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.colombiaSiteResponse` | string | Colombia站点响应（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.argentinaSiteResponse` | string | Argentina站点响应（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.uruguaySiteResponse` | string | Uruguay站点响应（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.addOrCopyType` | integer | 0-新增，1-复制。前端使用：待核实 | - |
| `obj.clipTaskStatus` | integer | 视频上传任务状态：0-待上传，1-成功，2-失败，3-部分成功，4-取消。。前端使用：待核实 | - |
| `obj.sitePriceInfo` | object | 站点价格信息。前端使用：待核实 | - |
| `obj.publishTypeInfo` | object | 站点刊登类型信息。前端使用：待核实 | - |
| `obj.spuCategoryPropertyMap` | object | SPU分类属性。前端使用：待核实 | - |
| `obj.spuPropertySchema[]` | array | SPU属性结构。前端使用：待核实 | - |
| `obj.skuCategoryPropertyList[]` | array | SPU分类属性。前端使用：待核实 | - |
| `obj.skuPropertySchema[]` | array | SKU属性结构。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
