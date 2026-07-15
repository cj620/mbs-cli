# mbs oms erp-order-find-smt-ban-tuo-refund-order-item

SMT半托管退款订单明细查询：SMT(速卖通)半托管退款订单列表中，点击某交易订单行展开时，按交易订单ID查询该订单下的退款商品明细行（图片/标题/SKU/产品等级/单价/销量/库存在途/币种原价/开发员/成本毛利等），用于渲染展开子表。

## 用法

```bash
mbs oms erp-order-find-smt-ban-tuo-refund-order-item --tradeOrderId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findSmtBanTuoRefundOrderItem`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `tradeOrderId` | tradeOrderId | query | string | 是 | - | 交易订单ID（SMT半托管退款订单列表行主键，平台/交易单号），URL Query 参数，取自 row.tradeOrderId |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 退款订单商品明细行列表（前端作为 list2 遍历渲染） | - |
| `obj[][0]` | string | 商品图片URL（加载失败回退占位图） | - |
| `obj[][1]` | string | 商品标题（悬浮显示完整标题） | - |
| `obj[][2]` | string | 商品SKU（链接到 /product/SKUdetails.html?SKU={sku}） | - |
| `obj[][3]` | string | 商品itemId（SKU 后括号展示；type==1 时单列展示） | - |
| `obj[][4]` | string | 产品等级。枚举：超爆/超级爆款/爆A/爆B;旺A/旺B;平A/平B;滞A/滞B;无销新品 | - |
| `obj[][5]` | string | 产品状态（等级下方展示） | - |
| `obj[][6]` | string | 原始SKU（仅 type==1/SMT 展开时展示） | - |
| `obj[][7]` | number | 单价（参与毛利=(unitPrice-costPrice)*soldNum 计算） | - |
| `obj[][8]` | number | 销售数量 | - |
| `obj[][9]` | number | 库存数 | - |
| `obj[][10]` | number | 在途数量 | - |
| `obj[][11]` | string | 币种（与 originPrice 拼接展示） | - |
| `obj[][12]` | number | 原始价格（按币种展示） | - |
| `obj[][13]` | string | 开发员 | - |
| `obj[][14]` | number | 成本价（参与毛利与毛利率计算：毛利率=(unitPrice-costPrice)*soldNum/(unitPrice*soldNum)） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
