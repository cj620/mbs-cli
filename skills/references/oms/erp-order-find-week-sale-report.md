<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-week-sale-report

销售周报-获取周次销售报表描述(findWeek)：销售周报(销售大屏)页面初始化时调用，无入参，返回本周/上周/上上周三个销售报表描述(descr)的数组，前端分别存入 sessionStorage 的 thisweek/lastweek/beforeweek，供后续 findSaleChiefReportNew 等接口作为 descr 查询条件。

## 用法

```bash
mbs oms erp-order-find-week-sale-report
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/findWeek`
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
| `code` | number | 响应状态码,200=成功（统一响应包字段，本接口回调未显式校验）(待人工确认) | - |
| `desc` | string | 响应提示信息（统一响应包字段）(待人工确认) | - |
| `obj[]` | array | 周次销售报表描述列表(字符串数组，长度3，依次为本周/上周/上上周) | - |
| `obj[][0]` | string | 本周销售报表描述，存入 sessionStorage['thisweek']，作为后续 findSaleChiefReportNew 等接口的 descr 入参(示例值：2019-08-12—2019-08-18销售报表) | - |
| `obj[][1]` | string | 上周销售报表描述，存入 sessionStorage['lastweek']，作为上周报表查询的 descr 入参 | - |
| `obj[][2]` | string | 上上周销售报表描述，存入 sessionStorage['beforeweek']，作为上上周报表查询的 descr 入参 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
