<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-send-failed-order-item

发货失败订单-商品明细查询：在“发货失败订单”面板中展开某一订单行时，按 orderId 查询该订单下的全部商品(SKU行)明细，返回图片、标题、SKU、产品等级、售价、销量、库存/在途、原价、开发员、成本价等字段，前端据此计算并展示毛利与毛利率。

## 用法

```bash
mbs oms erp-order-find-send-failed-order-item --orderId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findSendFailedOrderItem`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderId` | orderId | query | string | 是 | - | 订单ID，定位要查询明细的发货失败订单(URL查询串传参，来源为列表行 item.orderId) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 该订单的商品(SKU行)明细列表 | - |
| `obj[][0]` | string | 商品图片URL(加载失败回退默认图) | - |
| `obj[][1]` | string | 商品标题 | - |
| `obj[][2]` | string | 商品SKU编码(链接至SKU详情页) | - |
| `obj[][3]` | string | 订单项/商品项ID | - |
| `obj[][4]` | string | 产品等级(售卖状态)。枚举:超爆/超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品 | - |
| `obj[][5]` | string | 产品状态 | - |
| `obj[][6]` | number | 售价(单价),参与毛利计算 | - |
| `obj[][7]` | number | 销量(销售数量),参与毛利计算 | - |
| `obj[][8]` | number | 可用库存 | - |
| `obj[][9]` | number | 在途库存 | - |
| `obj[][10]` | string | 币种 | - |
| `obj[][11]` | number | 原始售价(原价) | - |
| `obj[][12]` | string | 开发员 | - |
| `obj[][13]` | number | 成本价(不直接展示,参与毛利与毛利率计算) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
