# mbs pim instudio-pms-preview

预览操作：预览操作

## 用法

```bash
mbs pim instudio-pms-preview --publishIds <array<string>>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/wishPublishInfo/preview`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `publishIds` | publishIds | query | array<string> | 是 | - | 刊登ID列表列表（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].publishId` | string | 刊登ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].spu` | string | SPU（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].erpSpu` | string | ERPSPU（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].title` | string | 标题（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].description` | string | 描述（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].tags` | string | TAGS（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].msrp` | number | MSRP（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].price` | number | 价格（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].shipping` | number | 运输（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].inventory` | integer | 库存。前端使用：待核实 | - |
| `obj.obj[].shippingTime` | string | 运送时间区间用 - 分割 例如 7-28。前端使用：待核实 | - |
| `obj.obj[].mainImage` | string | 主图。前端使用：待核实 | - |
| `obj.obj[].images` | string | 附图。前端使用：待核实 | - |
| `obj.obj[].wishPublishInfoImages[]` | array | Wish刊登信息图片列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].costPrice` | number | 计算使用成本价。前端使用：待核实 | - |
| `obj.obj[].weight` | number | 计算使用重量。前端使用：待核实 | - |
| `obj.obj[].calculatedUsingSku` | string | 计算使用sku。前端使用：待核实 | - |
| `obj.obj[].grossProfitRate` | number | 计算使用毛利率。前端使用：待核实 | - |
| `obj.obj[].sellingPrice` | number | 最终计算销售价 美元。前端使用：待核实 | - |
| `obj.obj[].grossProfit` | number | 最后计算毛利额。前端使用：待核实 | - |
| `obj.obj[].transportationTimeId` | integer | 运输时间模板编号。前端使用：待核实 | - |
| `obj.obj[].pricingAllocationStrategyId` | integer | 分摊策略模板主键。前端使用：待核实 | - |
| `obj.obj[].freightTemplateId` | integer | 计算运费使用模板主键。前端使用：待核实 | - |
| `obj.obj[].shieldingCountryIds[]` | array | 屏蔽国家模板主键。前端使用：待核实 | - |
| `obj.obj[].shieldingCountryIds[]` | integer | - | - |
| `obj.obj[].exchangeRate` | number | 计算时间 使用的 美元-人民币汇率。前端使用：待核实 | - |
| `obj.obj[].competingUrls[]` | array | 竞品链接。前端使用：待核实 | - |
| `obj.obj[].competingUrls[]` | string | - | - |
| `obj.obj[].publishedSourcesLink` | string | 刊登源链接。前端使用：待核实 | - |
| `obj.obj[].data` | boolean | 是否是从数据库中查出来的数据。前端使用：待核实 | - |
| `obj.obj[].property` | string | 商品属性。前端使用：待核实 | - |
| `obj.obj[].createPerson` | integer | 创建人。前端使用：待核实 | - |
| `obj.obj[].publishStatus` | integer | 刊登状态。前端使用：待核实 | - |
| `obj.obj[].infos[]` | array | sku详情信息。前端使用：待核实 | - |
| `obj.obj[].expressType` | string | 物流方式。前端使用：待核实 | - |
| `obj.obj[].publishIdTwo` | string | 上一个列表id。前端使用：待核实 | - |
| `obj.obj[].cleanImage` | string | 清晰图链接(这个链接必须是图片或者附图中的一个图片链接)。前端使用：待核实 | - |
| `obj.obj[].status` | integer | 0 是代表保存并刊登, 1为保存为草稿。前端使用：待核实 | - |
| `obj.obj[].country` | string | 国家（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].videoPath` | string | 视频链接。前端使用：待核实 | - |
| `obj.obj[].warehousesId` | string | 仓库。前端使用：待核实 | - |
| `obj.obj[].countryShippingFees[]` | array | listing 国家运费。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
