# mbs oms erp-order-get-head-down-show-data-sales-profit-target

市场部月目标-头部目标展示数据查询：进入「市场部月目标」看板时调用，返回页面头部展示所需数据：年度目标及完成情况(yearHead)、各月毛利额目标(monthHead)、当年各月目标时间段列表(down)、头部展示模式(headStatus)及默认选中的年度头(maxyearHead)。headStatus 决定 yearHead/monthHead 的结构形态。

## 用法

```bash
mbs oms erp-order-get-head-down-show-data-sales-profit-target --currentTime <string> --departmentId <number>
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/salesProfitTarget/getHeadDownShowData`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentTime` | currentTime | body | string | 是 | - | 当前日期，格式 YYYY-MM-DD。来源：dateFormat(new Date())，前端取当天日期生成 |
| `departmentId` | departmentId | body | number | 是 | - | 部门ID。本页面固定传 54(市场部)，来源为代码常量 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(赋值给 headdata) | - |
| `obj.headStatus` | number | 头部展示模式。0=多分组下拉切换模式(用 maxyearHead/yearHead 数组);1=单一年度模式(用 yearHead 对象) | - |
| `obj.down[]` | array | 当年各月目标时间段记录列表(历史记录抽屉展示,并据当月匹配自动加载明细) | - |
| `obj.down[][0]` | string | 时间段开始日期(YYYY-MM-DD)。与页面当月(YYYY-MM-01)匹配则触发 getlist 加载该月明细 | - |
| `obj.down[][1]` | string | 时间段结束日期(YYYY-MM-DD) | - |
| `obj.yearHead` | unknown | 年度目标及完成情况头部数据。headStatus==1 时为对象(actualProfit/targetProfit/completionRate/expectedCompletionRate);headStatus==0 时为数组(每项 name+value) | - |
| `obj.monthHead[]` | array | 月度毛利额目标头部列表(按月展示目标/实际/完成率) | - |
| `obj.monthHead[][0]` | number/string | 月份(展示为「第N月」)。headStatus==1 时直接位于 monthHead 项 | - |
| `obj.monthHead[][1]` | number/string | 当月目标毛利(万)。值为 'N' 时表示无目标 | - |
| `obj.monthHead[][2]` | number/string | 当月实际毛利(万)。值为 'N' 时表示无数据 | - |
| `obj.monthHead[][3]` | number | 当月完成率(%) | - |
| `obj.monthHead[][4]` | string | 分组名(headStatus==0 时用于与 plat.name 匹配选中该分组月度数据) | - |
| `obj.monthHead[][5][]` | array | 该分组各月数据列表(headStatus==0 时,赋给 platlist.value 渲染) | - |
| `obj.monthHead[][5][][0]` | number/string | 月份 | - |
| `obj.monthHead[][5][][1]` | number/string | 当月目标毛利(万),'N'=无 | - |
| `obj.monthHead[][5][][2]` | number/string | 当月实际毛利(万),'N'=无 | - |
| `obj.monthHead[][5][][3]` | number | 当月完成率(%) | - |
| `obj.maxyearHead` | object | 默认选中的年度头(仅 headStatus==0 时使用,赋值给 plat) | - |
| `obj.maxyearHead.name` | string | 默认分组名称 | - |
| `obj.maxyearHead.value` | object | 默认分组年度数据 | - |
| `obj.maxyearHead.value.actualProfit` | unknown | 默认分组年度实际毛利(万) | - |
| `obj.maxyearHead.value.targetProfit` | unknown | 默认分组年度目标毛利(万) | - |
| `obj.maxyearHead.value.completionRate` | number | 默认分组年度完成率(%) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
