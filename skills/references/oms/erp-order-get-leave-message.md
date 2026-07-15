<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-leave-message

订单留言查询：订单详情页加载时，根据订单号查询该订单的「订单留言」列表，返回每条留言的内容、操作人、操作时间，前端用 art-template 渲染到「订单留言」区域。

## 用法

```bash
mbs oms erp-order-get-leave-message --orderid <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/getLeaveMessage`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderid` | orderid | query | string | 是 | - | 订单号(订单ID)。来源：当前页面 URL 查询参数 GetQueryString('orderid')，拼接在接口 URL ?orderid= 之后。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(前端据此判断是否渲染) | - |
| `desc` | string | 响应提示信息(标准返回包字段，前端未直接使用) (待人工确认) | - |
| `obj[]` | array | 订单留言列表 | - |
| `obj[][0]` | string | 留言内容(渲染为 <li> 文本) | - |
| `obj[][1]` | string | 留言操作人(留言人) | - |
| `obj[][2]` | string | 留言操作时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
