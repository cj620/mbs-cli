<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-three-week-time

获取近三周时间区间(开发大酋长报表)：开发大酋长报表页面加载时自动调用，返回本周、上周、上上周三个时间标记(times)。前端将三者分别存入 sessionStorage(devthisweek/devlastweek/devbeforeweek)，作为后续 getDevelopRepoer 接口的 times 入参。本接口无请求参数(空请求体)。

## 用法

```bash
mbs oms erp-order-get-three-week-time
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/developReport/getThreeWeekTime`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(平台统一响应包装，待人工确认) | - |
| `desc` | string | 响应提示信息(平台统一响应包装，待人工确认) | - |
| `obj[]` | array | 近三周时间标记数组(前端确认使用 data.obj) | - |
| `obj[][0]` | string | 本周时间标记，存入 sessionStorage devthisweek | - |
| `obj[][1]` | string | 上周时间标记，存入 sessionStorage devlastweek | - |
| `obj[][2]` | string | 上上周时间标记，存入 sessionStorage devbeforeweek | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
