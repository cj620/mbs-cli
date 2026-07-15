# mbs pim instudio-pms-get-pricing-channel-amazon

获取Amazon算价可用渠道：获取Amazon算价可用渠道

## 用法

```bash
mbs pim instudio-pms-get-pricing-channel-amazon
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/amazon/getPricingChannel`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（列表行字段，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.currency` | string | 币种（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.price` | string | 价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.quantity` | string | 数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.discount` | string | 折扣（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.discountDate` | string | 折扣日期（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.prop` | string | PROP（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.label` | string | 标签（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sku` | string | SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.width` | string | 宽度（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sync` | string | 同步（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.component` | string | 组件（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.requires` | string | Requires（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tip` | string | TIP（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.upcId` | string | UPCID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.upcType` | string | UPC类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.onConfirm` | string | 确认（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.title` | string | 标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.keyword` | string | 关键词（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.isSuccess` | string | 是否成功（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tipMsg` | string | TIP消息（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.phishingWords` | string | PhishingWords（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.item_name` | string | 条目名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.generic_keywords` | string | GenericKeywords（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.part_number` | string | PART编号（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.profit` | string | 利润（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.item_sku` | string | 条目SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.standard_price` | string | Standard价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spec` | string | 规格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.validate` | string | 校验（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.discountTime` | string | 折扣时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.titleMsgData` | string | 标题消息数据（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.keywordMsgData` | string | 关键词消息数据（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.reduce` | string | Reduce（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sale_from_date` | string | 销售来源日期（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sale_end_date` | string | 销售结束日期（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.external_product_id` | string | External商品ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.external_product_id_type` | string | External商品ID类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.condition_type` | string | 条件类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.condition_note` | string | 条件备注（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.status` | string | 状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sale_price` | string | 销售价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.merchant_shipping_group_name` | string | 商户运输分组名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.image` | string | 图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.processed` | string | Processed（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.list_price` | string | 列表价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.list_price_with_tax` | string | 列表价格税费（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.key` | string | 键（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.merchant_shipping_group` | string | 商户运输分组（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.amount` | string | 金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.fulfillment_channel_code` | string | 履约渠道编码（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.listPriceCurrency` | string | 列表价格币种（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.condition` | string | 条件（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.start_at` | string | 开始时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.end_at` | string | 结束时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.requiredDay` | string | 必填天（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuInfo` | string | SKU信息（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.getMeta` | string | 查询META（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.generic_keyword` | string | Generic关键词（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.index` | string | 索引（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.arr` | string | ARR（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productId` | string | 商品ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
