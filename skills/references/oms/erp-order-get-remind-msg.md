# mbs oms erp-order-get-remind-msg

销售名片-获取提醒消息：业务员仪表盘(salesman2.html)首屏加载时调用，获取当前登录业务员的提醒消息(销售名片提醒)。返回提醒类型(color)与提醒文本(msg)，前端据 color 渲染为黄色警告或绿色成功提示条，15 秒后自动收起。

## 用法

```bash
mbs oms erp-order-get-remind-msg
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/saleVistingCard/getRemindMsg`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准外层包裹,200=成功；本回调未引用,待人工确认) | - |
| `desc` | string | 响应提示信息(标准外层包裹；本回调未引用,待人工确认) | - |
| `obj` | object | 提醒消息业务对象。前端 if (res.obj) 为真才渲染提示条；为空则不展示提醒并改显上次登录信息 | - |
| `obj.color` | number | 提醒类型枚举(控制提示条样式)。1=警告样式(黄色背景 background-warning)；2=成功样式(绿色背景 background-success,带奖杯图标) | - |
| `obj.msg` | string | 提醒消息文本内容(渲染于提示条 {{obj.msg}}) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
