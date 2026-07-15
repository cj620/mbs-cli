<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-week-platform-performance

平台绩效周报-周时间点查询：平台绩效周报页面加载时调用，返回本周、上周、上上周三个周起始时间点；前端分别存入 sessionStorage(thisweek/lastweek/beforeweek) 作为后续 findPlatformPerformance 的 starttime 入参，并用于页面起止日期展示。前端未提交任何请求体参数。

## 用法

```bash
mbs oms erp-order-find-week-platform-performance
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/platformPerformance/findWeek`
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
| `obj[]` | array | 周起始时间点数组，固定3个元素(本周/上周/上上周)，前端逐项写入 sessionStorage | - |
| `obj[][0]` | string | 本周起始时间点(时间戳/日期，前端存为 sessionStorage thisweek，用 new Date() 解析为本周起止日期) | - |
| `obj[][1]` | string | 上周起始时间点(存为 sessionStorage lastweek，用于上周/对比周起止日期) | - |
| `obj[][2]` | string | 上上周起始时间点(存为 sessionStorage beforeweek，用于上上周起止日期) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
