<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-defict-ban-order-item

缺货禁售订单明细查询：根据订单ID(orderId)查询该订单下缺货/禁售商品明细列表，返回每个商品的图片、标题、SKU、销量、售卖等级、单价、币种原价、库存/在途、成本价等，前端在表格中渲染并计算毛利与毛利率。

## 用法

```bash
mbs oms erp-order-find-defict-ban-order-item --orderId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findDefictBanOrderItem`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderId` | orderId | query | string | 是 | - | 订单ID。URL查询参数；来源=父级订单列表行点击时传入的该订单orderId |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(同域统一envelope,待人工确认是否随该接口返回) | - |
| `desc` | string | 响应提示信息(同域统一envelope,待人工确认) | - |
| `obj[]` | array | 缺货禁售订单明细列表(data.obj直接为数组,前端赋给list2遍历渲染) | - |
| `obj[][0]` | string | 商品图片URL(img src,加载失败回退占位图) | - |
| `obj[][1]` | string | 商品标题(悬停title,超长省略) | - |
| `obj[][2]` | string | SKU编号(链接到/product/SKUdetails.html?SKU={sku}) | - |
| `obj[][3]` | string | 商品/平台itemId(展示于SKU后括号内) | - |
| `obj[][4]` | number | 销量(已售数量);参与毛利、毛利率计算 | - |
| `obj[][5]` | string | 产品售卖等级。枚举:超爆/超级爆款/爆A/爆B(红);旺A/旺B(橙);平A/平B(蓝);滞A/滞B(浅蓝边框);无销新品(灰),前端据此着色 | - |
| `obj[][6]` | string | 产品状态(等级下方展示文本) | - |
| `obj[][7]` | number | 单价;参与毛利=(unitPrice-costPrice)*soldNum计算 | - |
| `obj[][8]` | string | 币种 | - |
| `obj[][9]` | number | 原价(按币种展示,与currency同列) | - |
| `obj[][10]` | number | 库存数量 | - |
| `obj[][11]` | number | 在途数量 | - |
| `obj[][12]` | number | 成本价;参与毛利、毛利率计算 | - |
| `obj[][13]` | number | 缺货数量(模板中为注释,当前未实际渲染,待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
