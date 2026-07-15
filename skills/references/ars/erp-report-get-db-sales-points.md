<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erp-report-get-db-sales-points

销售积分榜单-左榜排名查询：销售积分榜单大屏页面加载时调用，按月份 + 销售人员名单查询各销售人员当月积分排名，返回排名/姓名/积分列表，用于左侧「销售积分榜单」表格自动滚动展示。

## 用法

```bash
mbs ars erp-report-get-db-sales-points --months <string> [--salePersonList <array>]
```

## API

- Service: `erpReport`
- Method: `POST`
- Path: `/erpReport/erpReport/pointsRanking/getDbSalesPoints`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `months` | months | body | string | 是 | - | 查询月份，格式 YYYY-MM（由 GetNow() 取当前年月生成，如 2026-07） |
| `salePersonList` | salePersonList | body | array | 否 | - | 销售人员名单（字符串数组，元素为销售人员姓名 name）；来源 shopmanager.value，当前 getPeople() 被注释默认传空数组，空数组表示不限人员 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应外层,前端未显式校验)(待人工确认) | - |
| `desc` | string | 响应提示信息(统一响应外层)(待人工确认) | - |
| `obj[]` | array | 业务数据：销售积分排名列表(前端赋值给左表 Leftdata) | - |
| `obj[][0]` | number | 排名(表格「排名」列) | - |
| `obj[][1]` | string | 销售人员姓名(表格「姓名」列) | - |
| `obj[][2]` | number | 积分(表格「积分」列) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
