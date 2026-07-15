# mbs oms erp-mobile-find-order-details

订单详情查询：移动端订单详情页加载接口：根据订单ID(orderid)查询单个订单的完整详情，返回订单状态/属性/物流、客户信息、SKU商品明细列表、金额(毛利/实收/运费/平台交易费)及店铺/时间等信息，供详情页渲染。

## 用法

```bash
mbs oms erp-mobile-find-order-details --orderid <string>
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/pushController/findOrderDetails`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderid` | orderid | query | string | 是 | - | 订单ID(订单主键)。来源：页面URL查询参数，经 GetQueryString('orderid') 取得后拼接到接口URL末尾；为查询单条订单详情的唯一定位键 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj` | object | 订单详情业务数据对象(前端 var infos = data.obj) | - |
| `obj.status` | string | 订单状态(渲染到 .status) | - |
| `obj.ordersource` | string | 订单属性/订单来源(渲染到 .ordersource) | - |
| `obj.expresstype` | string | 物流方式(渲染到 .expresstype) | - |
| `obj.notestoyourself` | string | 平台留言(渲染到 .notestoyourself；为空则隐藏 #notshow1) | - |
| `obj.content` | string | 订单备注(渲染到 .content；为空则隐藏 #notContent) | - |
| `obj.customeremail` | string | 客户E-mail(渲染到 .customeremail；为空则隐藏 .email) | - |
| `obj.money` | number | 毛利金额(渲染到 .money；>=0 显红色 text-danger，<0 显绿色 text-success) | - |
| `obj.skunum` | number | SKU总个数(渲染到 .skunum，"共计x个sku") | - |
| `obj.moneyexpressask` | number | 运费金额(渲染到 .moneyexpressask，单位元) | - |
| `obj.actualamount` | number | 实收金额(渲染到 .actualamount) | - |
| `obj.orderid` | string | 订单编号(渲染到 .orderid) | - |
| `obj.name` | string | 店铺名称(渲染到 .name) | - |
| `obj.shopmanager` | string | 店长(渲染到 .shopmanager) | - |
| `obj.ordertime` | string | 订单时间(渲染到 .ordertime) | - |
| `obj.creatordertime` | string | 拉单时间(订单创建/抓单时间，渲染到 .creatordertime) | - |
| `obj.tradeid` | string | 交易单号(渲染到 .tradeid) | - |
| `obj.expresstime` | string | 发货时间(渲染到 .expresstime) | - |
| `obj.originfinalvaluefee` | number | 平台交易费(原币金额，渲染到 .originfinalvaluefee) | - |
| `obj.moneytype` | string | 币种/货币类型(渲染到 .moneytype) | - |
| `obj.finalvaluefee` | number | 平台交易费(折RMB金额，渲染到 .finalvaluefee) | - |
| `obj.customerid` | string | 买家账号(渲染到 .customerid) | - |
| `obj.customername` | string | 客户姓名(渲染到 .customername) | - |
| `obj.customertel1` | string | 联系电话(渲染到 .customertel1) | - |
| `obj.customerreserve2` | string | 中文国家(客户所在国家中文名，渲染到 .customerreserve2) | - |
| `obj.skus[]` | array | SKU商品明细列表(data.obj.skus，经 #skuTemplate 循环渲染) | - |
| `obj.skus[][0]` | string | 商品图片URL(模板 v.picture1，加载失败回退默认图) | - |
| `obj.skus[][1]` | string | 商品名称(模板 v.name) | - |
| `obj.skus[][2]` | string | 产品ID/产品编号(模板 v.productid) | - |
| `obj.skus[][3]` | string | 开发员/操作员(模板 v.oper3) | - |
| `obj.skus[][4]` | string | 平台商品链接URL(模板 v.itemidurl，作为 <a href>) | - |
| `obj.skus[][5]` | string | 平台商品ID(eBay item id，模板 v.ebayitemid，链接文本) | - |
| `obj.skus[][6]` | number | 商品售价(模板 v.sellprice，展示 ￥) | - |
| `obj.skus[][7]` | number | 订购数量(模板 v.ordernum，展示 "x{数量}") | - |
| `content` | string | 用户头像图片地址(顶层 data.content，用于设置 #photos 头像 src；为空时回退默认头像) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
