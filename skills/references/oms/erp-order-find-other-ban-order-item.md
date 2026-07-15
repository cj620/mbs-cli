<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-other-ban-order-item

其他禁止订单明细查询：在“其他禁止”订单列表中点击某行展开时，按 orderId 查询该订单下的商品明细(SKU 行)，返回图片/标题/SKU/产品等级/单价/销量/库存/在途/原价/开发员/成本价等字段，前端用 art-template otherContentTemplate2 渲染子表并现算利润额与利润率。

## 用法

```bash
mbs oms erp-order-find-other-ban-order-item --orderId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findOtherBanOrderItem`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderId` | orderId | query | string | 是 | - | 订单ID，指定要查询明细的“其他禁止”订单；来源为主表行 data-id |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 该订单的商品明细(SKU 行)列表，直接作为渲染数组 | - |
| `obj[][0]` | string | 商品图片URL(加载失败时回退默认图) | - |
| `obj[][1]` | string | 商品标题(超长省略,hover 显示全名) | - |
| `obj[][2]` | string | 商品SKU(点击跳转 /product/SKUdetails.html?SKU=) | - |
| `obj[][3]` | string | 平台商品ID(展示在 SKU 后括号内) | - |
| `obj[][4]` | string | 产品等级。取值:超爆/超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品(前端按值显示不同标签样式) | - |
| `obj[][5]` | string | 产品状态(展示于等级下方) | - |
| `obj[][6]` | number | 单价(售价；参与利润额/利润率计算) | - |
| `obj[][7]` | number | 已售数量/销量(参与利润额/利润率计算) | - |
| `obj[][8]` | number | 库存数量 | - |
| `obj[][9]` | number | 在途数量 | - |
| `obj[][10]` | string | 币种(展示于原价前) | - |
| `obj[][11]` | number | 原价 | - |
| `obj[][12]` | string | 开发员 | - |
| `obj[][13]` | number | 成本价(参与利润额/利润率计算,前端不直接展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
