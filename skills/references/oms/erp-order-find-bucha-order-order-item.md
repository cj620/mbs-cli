# mbs oms erp-order-find-bucha-order-order-item

补差大订单-商品明细查询(第二层)：在订单管理“补差大”页签的订单列表中，点击某条订单的展开图标时触发；以该订单 orderId 为入参，POST 查询该订单下的补差商品明细行(图片/标题/SKU/销量/等级/单价/补差金额/库存等)，渲染到二级明细表格。

## 用法

```bash
mbs oms erp-order-find-bucha-order-order-item --orderId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findBuchaOrderOrderItem`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderId` | orderId | body | string | 是 | - | 订单ID——“补差大”订单列表中被展开的那条订单的主键，用于查询其商品明细(以URL查询串传递) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 业务数据——该订单下的商品明细行列表(模板 list2) | - |
| `obj[][0]` | string | 商品图片URL(加载失败回退 /2018ui/assets/images/timg.jpg) | - |
| `obj[][1]` | string | 商品标题(SKU标题,超长省略号显示) | - |
| `obj[][2]` | string | SKU编码(可跳转 /product/SKUdetails.html?SKU={sku}) | - |
| `obj[][3]` | string | 商品ItemId(线上商品ID,显示于SKU旁括号) | - |
| `obj[][4]` | number | 销量(销售数量;参与毛利/毛利率计算) | - |
| `obj[][5]` | string | 产品等级(售卖状态)枚举：超爆/超级爆款/爆A/爆B(红标)、旺A/旺B(橙标)、平A/平B(蓝标)、滞A/滞B(描边标)、无销新品(默认标) | - |
| `obj[][6]` | string | 产品状态(等级下方文本展示) | - |
| `obj[][7]` | number | 销售单价(参与毛利=(unitPrice-costPrice)*soldNum 计算) | - |
| `obj[][8]` | string | 币种(与原始售价一起展示) | - |
| `obj[][9]` | number | 原始售价 | - |
| `obj[][10]` | number | 补差(亏损)金额 | - |
| `obj[][11]` | number | 库存数量 | - |
| `obj[][12]` | number | 在途数量 | - |
| `obj[][13]` | number | 成本价(用于前端计算毛利与毛利率,不单独成列) | - |
| `obj[][14]` | string | 订单ID(下架操作 shelves(v,'补差大') 取 orderId/itemId/sku 调用 normalSoldout) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
