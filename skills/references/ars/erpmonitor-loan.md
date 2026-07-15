# mbs ars erpmonitor-loan

押款（可放款）监控查询：对账单监控：按“可放款时间”查询各账号（店铺）押款金额、币种及可放款时间，分页返回（每页50条）。页面加载即自动调用一次。

## 用法

```bash
mbs ars erpmonitor-loan [--time <string>] --currpage <number> [--presentPrice <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/accountStatementMonitor/loan`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `time` | time | query | string | 否 | - | 可放款时间（统计日期），格式 YYYY-MM-DD；来源页面日期控件 #time（input type=date），可为空 |
| `currpage` | currpage | query | number | 是 | - | 当前页码；首次调用固定为 1，翻页时取分页组件 api.getCurrent()；每页 50 条 |
| `presentPrice` | presentPrice | query | string | 否 | - | 当前谈妥采购单价；来源 #presentPrice 控件，代码中构造于 params 对象但 ajax 未设置 data，实际未随请求发送（待人工确认） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `pages` | number | 总页数（前端传入分页组件 pageCount） | - |
| `total` | number | 满足条件的总条数（前端写入 #total 显示） | - |
| `list[]` | array | 押款记录列表 | - |
| `list[][0]` | string | 账号（店铺名称），模板渲染为“账号”列 | - |
| `list[][1]` | string | 押款金额（原币种），与 currency 拼接展示为“金额（币种）” | - |
| `list[][2]` | string | 币种（原币种代码） | - |
| `list[][3]` | string | 可放款时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
