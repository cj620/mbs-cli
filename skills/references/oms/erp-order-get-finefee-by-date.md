<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-finefee-by-date

按日期查询店铺罚款明细：销售日报(dailySalesReport)中“罚款”金额单元格下钻：携带日报查询条件(参数取自 sessionStorage 的 params)加上所点击行的日期 oneDay，查询当日各交易单的罚款明细列表，渲染为交易单号/罚款日期/店铺/罚款金额/店铺负责人表格。

## 用法

```bash
mbs oms erp-order-get-finefee-by-date --oneDay <string> [--employeeType <string>] [--startTime <string>] [--endTime <string>] [--platformId <string>] [--shopName <array>] [--employeeName <array>] [--bigChief <array>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getFinefeeByDate`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `oneDay` | oneDay | body | string | 是 | - | 单日日期(yyyy-MM-dd)，本接口下钻关键参数，取自当前页URL ?oneDay=，来源为日报行 currentdate |
| `employeeType` | employeeType | body | string | 否 | - | 人员类别(上游日报 #orderStaus 选择) |
| `startTime` | startTime | body | string | 否 | - | 起始日期(yyyy-MM-dd，上游日报 #time1) |
| `endTime` | endTime | body | string | 否 | - | 结束日期(yyyy-MM-dd，上游日报 #time2) |
| `platformId` | platformId | body | string | 否 | - | 平台ID(上游日报 #reserve11) |
| `shopName` | shopName | body | array | 否 | - | 店铺(店铺名称数组，未选为[]，上游日报 #shoptypeid) |
| `employeeName` | employeeName | body | array | 否 | - | 组员(员工名称数组，未选为[]，上游日报 #employeeList) |
| `bigChief` | bigChief | body | array | 否 | - | 大酋长/店铺负责人(数组，未选为[]，上游日报 #shopManager) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 罚款明细列表(当日满足条件的交易单罚款记录数组) | - |
| `obj[][0]` | string | 交易单号(表格第1列) | - |
| `obj[][1]` | string | 罚款日期(表格第2列) | - |
| `obj[][2]` | string | 店铺名称(表格第3列) | - |
| `obj[][3]` | number | 罚款金额(表格第4列) | - |
| `obj[][4]` | string | 店铺负责人(表格第5列) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
