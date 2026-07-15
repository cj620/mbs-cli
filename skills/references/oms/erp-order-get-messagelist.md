<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-messagelist

订单留言列表查询：订单详情页加载该订单客户的站内信/留言列表。以客户ID(sender)与订单操作时间(opertime)为条件，返回该客户对应的留言记录(创建时间、星期、序号ID、留言主题)，前端在客户留言卡片中循环渲染，点击留言主题可跳转留言详情页。

## 用法

```bash
mbs oms erp-order-get-messagelist --sender <string> --opertime <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/getMessagelist`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sender` | sender | query | string | 是 | - | 留言发送方=客户ID，来源订单详情对象 obj.customerid（下单客户标识，留言归属过滤条件） |
| `opertime` | opertime | query | string | 是 | - | 订单操作时间，来源订单详情对象 obj.opertime，作为留言时间维度过滤条件(格式待人工确认) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(统一响应包裹字段，待人工确认) | - |
| `desc` | string | 响应提示信息(统一响应包裹字段，待人工确认) | - |
| `success` | boolean | 是否成功(统一响应包裹字段，待人工确认) | - |
| `obj[]` | array | 留言列表，前端赋值给 basedata.messagelist 并 v-for 渲染 | - |
| `obj[][0]` | string | 留言创建时间，模板 {{item.createdate}} 展示 | - |
| `obj[][1]` | string | 留言日期对应星期，模板 {{item.weekByDate}} 展示 | - |
| `obj[][2]` | string | 留言序号ID，openwindow(item.sequenceid) 打开留言详情 /eshop/message.do?method=edit&sequenceid= | - |
| `obj[][3]` | string | 留言主题/内容，模板 {{item.subject}} 以链接展示，点击查看详情 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
