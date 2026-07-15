# mbs oms erp-order-find-auto-create-order-item

自动创建(自建商品)订单明细查询：在「自动创建/自建商品订单」列表中点击某一行的展开图标时，按订单ID(orderId)查询该订单下的商品明细行(图片、标题、SKU、等级、价格、库存、在途、毛利等)，结果渲染到子表 buildContentTemplate2。

## 用法

```bash
mbs oms erp-order-find-auto-create-order-item --orderId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findAutoCreateOrderItem`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderId` | orderId | query | string | 是 | - | 订单ID(URL 查询参数)。来源：所点击展开行的 data-id，即自建订单列表行的 orderId |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 该订单的商品明细列表(前端取 data.obj 作为 list2 遍历渲染) | - |
| `obj[][0]` | string | 商品图片URL(加载失败回退默认图 /2018ui/assets/images/timg.jpg) | - |
| `obj[][1]` | string | 商品标题(超长省略，悬浮显示全称) | - |
| `obj[][2]` | string | 商品SKU编号(链接至 /product/SKUdetails.html?SKU={sku}) | - |
| `obj[][3]` | string | 商品/订单项 itemId(展示于 SKU 后括号内) | - |
| `obj[][4]` | string | 产品等级/售卖状态。枚举：超爆/超级爆款/爆A/爆B(危险标)、旺A/旺B(警告标)、平A/平B(信息标)、滞A/滞B(信息边框标)、无销新品(默认标) | - |
| `obj[][5]` | string | 产品状态描述(等级下方展示) | - |
| `obj[][6]` | number | 销售单价(售价；参与毛利计算 (unitPrice-costPrice)*soldNum) | - |
| `obj[][7]` | number | 销售数量 | - |
| `obj[][8]` | number | 库存数量 | - |
| `obj[][9]` | number | 在途数量 | - |
| `obj[][10]` | string | 币种(与 originPrice 拼接展示) | - |
| `obj[][11]` | number | 原始价格/原价(随币种展示) | - |
| `obj[][12]` | string | 开发员 | - |
| `obj[][13]` | number | 成本价(前端用于计算毛利额与毛利率，不单独展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
