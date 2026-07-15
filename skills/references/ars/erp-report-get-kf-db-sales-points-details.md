<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erp-report-get-kf-db-sales-points-details

客服/开发销售积分明细查询(getKfDbSalesPointsDetails)：「开发积分榜单」大屏右侧「积分明细」表格数据源：按月份与销售人员列表查询各销售人员的积分明细流水（积分项目、加减分值、发生时间），前端 Rightdata 绑定 el-table 自动滚动展示。

## 用法

```bash
mbs ars erp-report-get-kf-db-sales-points-details --months <string> [--salePersonList <array>]
```

## API

- Service: `erpReport`
- Method: `POST`
- Path: `/erpReport/erpReport/pointsRanking/getKfDbSalesPointsDetails`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `months` | months | body | string | 是 | - | 查询月份，格式 YYYY-MM（由 GetNow() 生成，取当前年月，如 2026-07），单位=月 |
| `salePersonList` | salePersonList | body | array | 否 | - | 销售人员姓名列表(string[])，来源团队人员下拉 shopmanager（teamNumberDropDown 返回项的 name）；空数组表示不限人员/查询全部 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(待人工确认，页面未显式读取) | - |
| `desc` | string | 响应提示信息(待人工确认，页面未显式读取) | - |
| `obj[]` | array | 积分明细行列表(赋值给 Rightdata) | - |
| `obj[][0]` | string | 销售人员姓名(表格「姓名」列) | - |
| `obj[][1]` | string | 积分项目名称(表格「积分项目」列，点击跳转 ./scoredetail.html?employeeType=2) | - |
| `obj[][2]` | number | 积分分值(表格「积分」列；前端按 >0 显示 +、否则 -，并取 Math.abs 展示绝对值) | - |
| `obj[][3]` | string | 积分发生时间(表格「时间」列) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
