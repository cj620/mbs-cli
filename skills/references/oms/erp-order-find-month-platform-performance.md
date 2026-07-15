<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-month-platform-performance

平台绩效月报-获取各月度统计起始时间：平台绩效月报页面初始化调用，返回近7个月（本月、上月、上上月、上三月~上六月）的统计起始时间数组obj，前端逐个写入sessionStorage并作为后续findPlatformPerformance的starttime入参。请求体为空（data被注释）。

## 用法

```bash
mbs oms erp-order-find-month-platform-performance
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/platformPerformance/findMonth`
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
| `code` | number | 响应状态码（约定200=成功，源码未直接判断）(待人工确认) | - |
| `desc` | string | 响应提示信息（源码未使用）(待人工确认) | - |
| `obj[]` | array | 月度起始时间数组（长度7）。下标0=本月、1=上月、2=上上月、3=上三月、4=上四月、5=上五月、6=上六月的统计起始时间，分别写入sessionStorage的thisweek/lastweek/beforeweek/moreWeek1/moreWeek2/moreWeek3/moreWeek4 | - |
| `obj[]` | string | 数组元素：单个月度统计起始时间，为可被new Date()解析的时间字符串，前端用于计算各月起止区间并作为findPlatformPerformance的starttime入参(格式待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
