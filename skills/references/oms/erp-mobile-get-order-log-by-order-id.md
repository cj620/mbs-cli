# mbs oms erp-mobile-get-order-log-by-order-id

订单操作日志查询：根据订单ID查询该订单的全部操作日志记录，返回操作人、操作时间、操作描述的列表；前端在订单详情页“操作日志”模块中，将列表前10条渲染到 OperTemplate1，第10条之后渲染到 OperTemplate2(点击查看更多展开)。

## 用法

```bash
mbs oms erp-mobile-get-order-log-by-order-id --orderId <string>
```

## API

- Service: `erpMobile`
- Method: `GET`
- Path: `/erpMobile/erpMobile/pushController/getOrderLogByOrderId`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderId` | orderId | body | string | 是 | - | 订单ID。取自前端页面URL查询参数 orderid(GetQueryString('orderid'))；无枚举、无单位；为该接口唯一查询条件 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本接口前端未直接读取,待人工确认) | - |
| `desc` | string | 响应提示信息(本接口前端未直接读取,待人工确认) | - |
| `obj[]` | array | 操作日志列表;前端据其存在与否判断是否渲染,并切分为前10条与其余两段 | - |
| `obj[][0]` | string | 操作人(执行该操作的人员,模板 {{v.OPER}} 展示) | - |
| `obj[][1]` | string | 操作时间(该条操作日志的时间,模板 {{v.OPERTIME}} 展示) | - |
| `obj[][2]` | string | 操作描述/日志内容(本条操作的文字说明,模板 {{v.DESCR}} 展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
