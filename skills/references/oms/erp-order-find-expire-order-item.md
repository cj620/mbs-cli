<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-expire-order-item

到期订单明细查询：在「到期订单」列表展开某行时，按 orderId 查询该订单下的商品明细行，返回商品图片、销量、产品等级、单价、币种、原价、库存/在途、成本价等字段，前端用 art-template dutoTemplate2 渲染子表并计算毛利额与毛利率。

## 用法

```bash
mbs oms erp-order-find-expire-order-item --orderId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findExpireOrderItem`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderId` | orderId | query | string | 是 | - | 订单号(URL query 参数)。来源：列表行 tr 的 data-id |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准包装字段) | - |
| `desc` | string | 响应提示信息(标准包装字段) | - |
| `obj[]` | array | 到期订单商品明细列表(前端赋给 list2 渲染) | - |
| `obj[][0]` | string | 商品图片URL(加载失败回退默认图) | - |
| `obj[][1]` | number | 销量(销售数量,参与毛利额/毛利率计算) | - |
| `obj[][2]` | string | 产品等级枚举：超爆/超级爆款/爆A/爆B、旺A/旺B、平A/平B、滞A/滞B、无销新品 | - |
| `obj[][3]` | string | 产品状态(在等级标签下方展示) | - |
| `obj[][4]` | number | 单价(参与毛利额=(unitPrice-costPrice)*soldNum 计算) | - |
| `obj[][5]` | string | 币种(与 originPrice 拼接展示) | - |
| `obj[][6]` | number | 原始价格(对应币种的原价) | - |
| `obj[][7]` | number | 库存数量 | - |
| `obj[][8]` | number | 在途数量 | - |
| `obj[][9]` | number | 成本价(参与毛利额/毛利率计算,不单独展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
