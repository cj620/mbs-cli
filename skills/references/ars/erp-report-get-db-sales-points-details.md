<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erp-report-get-db-sales-points-details

销售积分明细查询：销售积分榜单页面右侧「积分明细」数据查询：按月份与销售人员名单查询，返回每位销售人员的积分项目明细（姓名、积分项目、积分增减、时间），用于右侧明细表格滚动展示。

## 用法

```bash
mbs ars erp-report-get-db-sales-points-details --months <string> [--salePersonList <array>]
```

## API

- Service: `erpReport`
- Method: `POST`
- Path: `/erpReport/erpReport/pointsRanking/getDbSalesPointsDetails`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `months` | months | body | string | 是 | - | 查询月份，格式 YYYY-MM（来自 GetNow()，取当前系统年-月，月份补零） |
| `salePersonList` | salePersonList | body | array | 否 | - | 销售人员姓名列表（元素为店长姓名字符串，来源店长下拉 shopmanager；当前 getPeople() 被注释，实际固定传空数组 []) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码（标准包装字段，本页未直接读取，按统一返回结构）(待人工确认) | - |
| `desc` | string | 响应提示信息（标准包装字段，本页未直接读取）(待人工确认) | - |
| `obj[]` | array | 积分明细列表，赋值给右侧表格 Rightdata | - |
| `obj[][0]` | string | 销售人员姓名（表格列「姓名」） | - |
| `obj[][1]` | string | 积分项目（表格列「积分项目」，单元格含跳转 scoredetail.html?employeeType=1 链接） | - |
| `obj[][2]` | number | 积分值（表格列「积分」，前端按 score>0 显示 +/- 号并取绝对值展示） | - |
| `obj[][3]` | string | 时间（表格列「时间」，积分明细发生时间） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
