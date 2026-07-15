# mbs oms erp-order-get-head-down-show-data-sales-amount-target

启元市场部头部年度/月度目标展示数据查询：加载启元市场部月目标页面头部展示数据：年度目标及完成情况（实际/目标毛利额、完成率、预计完成率提点档位）、各月毛利额目标列表（目标/实际/完成率），并返回当年各月时间段记录（down）。前端据 headStatus 切换单一汇总视图与多平台下拉切换视图。

## 用法

```bash
mbs oms erp-order-get-head-down-show-data-sales-amount-target --currentTime <string> --departmentId <number>
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/salesAmountTarget/getHeadDownShowData`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentTime` | currentTime | body | string | 是 | - | 当前日期，格式 YYYY-MM-DD，由 dateFormat(new Date()) 生成。来源：系统当前时间 |
| `departmentId` | departmentId | body | number | 是 | - | 部门ID，前端固定传 54（启元市场部）。来源：代码常量 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象，整体赋给前端 headdata | - |
| `obj.headStatus` | number | 头部展示状态：1=单一汇总视图；0=多平台下拉切换视图 | - |
| `obj.yearHead` | object | 年度目标及完成情况。headStatus=1 时为对象；headStatus=0 时为平台数组（每项含 name/value） | - |
| `obj.yearHead.actualProfit` | number | 年度实际毛利额(万) | - |
| `obj.yearHead.targetProfit` | number | 年度目标毛利额(万) | - |
| `obj.yearHead.completionRate` | number | 年度完成率(%)，用于进度条与百分比展示 | - |
| `obj.yearHead.expectedCompletionRate` | number | 年度预计完成率(%)，用于提点档位判断（0-30%/30-50%/50-60%/60-70%/70-80%/80-90%/90-100%/≥100%） | - |
| `obj.maxyearHead` | object | headStatus=0 时默认选中平台的年度数据，赋给前端 plat | - |
| `obj.maxyearHead.name` | string | 平台名称（下拉默认项，对应 plat.name） | - |
| `obj.maxyearHead.value` | object | 该平台年度汇总对象（对应 plat.value） | - |
| `obj.maxyearHead.value.actualProfit` | number | 实际毛利额(万) | - |
| `obj.maxyearHead.value.targetProfit` | number | 目标毛利额(万) | - |
| `obj.maxyearHead.value.completionRate` | number | 完成率(%) | - |
| `obj.monthHead[]` | array | 月度目标列表。headStatus=1 时每项为各月数据；headStatus=0 时每项为平台（含 name 与 value 月份数组） | - |
| `obj.monthHead[][0]` | string | 平台名称（headStatus=0，下拉项与匹配 plat.name 用） | - |
| `obj.monthHead[][1]` | number | 月份（展示"第N月"） | - |
| `obj.monthHead[][2]` | number | 月度目标毛利额(万)，值为 'N' 时表示无目标（前端原样展示） | - |
| `obj.monthHead[][3]` | number | 月度实际毛利额(万)，值为 'N' 时表示无数据（前端原样展示） | - |
| `obj.monthHead[][4]` | number | 月度完成率(%) | - |
| `obj.monthHead[][5][]` | array | headStatus=0 时该平台各月数据数组（元素含 month/targetProfit/actualProfit/completionRate，对应 platlist.value） | - |
| `obj.down[]` | array | 当年各月目标时间段记录，用于默认月份列表加载与"当年记录"抽屉切换 | - |
| `obj.down[][0]` | string | 时间段起始日期（与当前月 YYYY-MM-01 比对以加载默认列表；点击切换 getlist） | - |
| `obj.down[][1]` | string | 时间段结束日期 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
