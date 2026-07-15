<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-order-logistics

订单物流轨迹查询：根据订单ID查询该订单的物流轨迹（物流跟踪节点）列表，用于订单详情页点击「物流轨迹」时以时间线（el-timeline）形式展示每个轨迹节点的时间与描述文本。

## 用法

```bash
mbs oms erp-order-get-order-logistics --orderid <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/getOrderLogistics`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderid` | orderid | query | string | 是 | - | 订单ID（订单唯一标识），URL query 参数，来源 GetQueryString("orderid") / basedata.orderid |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（项目统一响应包装字段）(待人工确认) | - |
| `desc` | string | 响应提示信息（项目统一响应包装字段）(待人工确认) | - |
| `obj[]` | array | 物流轨迹列表（前端赋值给 orderlist，按数组顺序在时间线中渲染，index==0 为最新节点高亮） | - |
| `obj[][0]` | string | 轨迹节点时间（物流跟踪时间戳，模板 :timestamp="activity.time"） | - |
| `obj[][1]` | string | 轨迹节点描述文本（物流跟踪事件内容，模板 {{ activity.txt }}） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
