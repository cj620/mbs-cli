# mbs oms erp-order-get-historylist

历史订单列表查询：订单详情页据当前订单的客户ID(customerid)查询该客户的历史订单列表，返回每条历史订单的商品图、SKU、产品名、下单时间、订单编号、店铺、状态、国家邮编、订单金额、货运单号/方式、邮寄地址等，用于「历史订单」区块表格展示。

## 用法

```bash
mbs oms erp-order-get-historylist --orderid <string> --customerid <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/getHistorylist`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderid` | orderid | query | string | 是 | - | 当前订单ID(来自页面URL query 参数 orderid) |
| `customerid` | customerid | query | string | 是 | - | 客户ID(取自 orderDetails 接口返回对象 obj.customerid，按该客户查其全部历史订单) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 历史订单列表(赋值给 basedata.historylist) | - |
| `obj[][0]` | string | 商品图片URL(表格首列商品图) | - |
| `obj[][1]` | string | 商品SKU/产品ID(链接 /product/SKUdetails.html?SKU= 及展示) | - |
| `obj[][2]` | string | 产品名称(超过20字符截取前19位并加省略号) | - |
| `obj[][3]` | string | 下单时间 | - |
| `obj[][4]` | string | 订单编号(链接 /mabang-new/orderdetail.html?orderid=) | - |
| `obj[][5]` | string | 店铺(店铺类型) | - |
| `obj[][6]` | string | 订单状态。枚举:新订单/已支付/配货中/已发货/作废/已完成(前端据值显示不同徽标颜色) | - |
| `obj[][7]` | string | 客户国家 | - |
| `obj[][8]` | string | 客户邮编 | - |
| `obj[][9]` | number | 订单金额(前端 ceil 保留2位,单位￥) | - |
| `obj[][10]` | string | 货运单号 | - |
| `obj[][11]` | string | 货运方式 | - |
| `obj[][12]` | string | 邮寄地址 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
