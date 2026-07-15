<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-mobile-get-listing-order-by-item-id

商品在线详情-销售单列表查询：移动端马帮ERP「在线详情」页根据商品ID(SPU)与平台ID查询该商品对应的销售单(订单)列表，返回订单号、状态、售价/数量、总收入/总毛利、国家、成交账号、下单时间等，前端按前10条/其余两段渲染。

## 用法

```bash
mbs oms erp-mobile-get-listing-order-by-item-id [--parentSPUId <string>] [--platformId <string>]
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/hotProductListing/getListingOrderByItemId`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `parentSPUId` | parentSPUId | body | string | 否 | - | 父SPU商品ID(取自URL参数 itemId，取不到时传空字符串) |
| `platformId` | platformId | body | string | 否 | - | 平台ID(取自URL参数 platformId，取不到时传空字符串) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本接口回调未直接判断,同域统一外层字段) | - |
| `desc` | string | 响应提示信息(同域统一外层字段) | - |
| `obj[]` | array | 销售单(订单)列表 | - |
| `obj[][0]` | string | 销售单号/订单号(链接跳转 orderDetails.html?orderid=) | - |
| `obj[][1]` | string | 订单状态 | - |
| `obj[][2]` | string | 商品名称 | - |
| `obj[][3]` | number | 售价(展示 ￥售价/数量) | - |
| `obj[][4]` | number | 数量(下单数量) | - |
| `obj[][5]` | number | 总收入(订单总金额) | - |
| `obj[][6]` | number | 总毛利 | - |
| `obj[][7]` | string | 国家 | - |
| `obj[][8]` | string | 成交账号(店铺/平台账号) | - |
| `obj[][9]` | string | 店铺负责人/客服(展示于成交账号括号内) | - |
| `obj[][10]` | string | 下单时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
