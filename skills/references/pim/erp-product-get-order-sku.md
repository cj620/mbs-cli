<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-order-sku

产品详情-销售单(订单)列表查询(getOrderSku)：移动端马帮ERP产品详情页加载时按SKU查询该商品关联的销售单(订单)列表，前端取data.obj，前3条渲染到默认销售单信息区，其余在点击查看更多后展开，逐条展示订单号/状态/英文标题/售价/数量/总收入/总毛利/国家/成交账号/店铺管理员/下单时间。

## 用法

```bash
mbs pim erp-product-get-order-sku --sku <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getOrderSku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | 商品SKU编码。URL查询参数，来源GetQueryString('sku')从当前页面浏览器地址栏?sku=读取 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本接口成功回调以data.obj是否存在为准) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 销售单(订单)列表 | - |
| `obj[][0]` | string | 订单号(用于跳转orderDetails.html?orderid={orderId}) | - |
| `obj[][1]` | string | 订单状态 | - |
| `obj[][2]` | string | 订单英文标题/品名 | - |
| `obj[][3]` | number | 售价(单价,展示为￥{sellprice}) | - |
| `obj[][4]` | number | 数量(下单数量) | - |
| `obj[][5]` | number | 总收入(订单总金额) | - |
| `obj[][6]` | number | 总毛利 | - |
| `obj[][7]` | string | 下单国家 | - |
| `obj[][8]` | string | 成交账号(店铺类型/账号) | - |
| `obj[][9]` | string | 店铺管理员(成交账号负责人,展示为{shoptype}({shopManager})) | - |
| `obj[][10]` | string | 下单时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
