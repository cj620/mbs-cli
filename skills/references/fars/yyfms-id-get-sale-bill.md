# mbs fars yyfms-id-get-sale-bill

销售账单(绩效结算账单)查询：按账单ID查询销售人员账期内的绩效结算账单详情：含账单周期、收入/支出汇总、收入明细列表、支出明细列表，以及绩效结算(目标销售额、完成率、各档提点、折扣、最终绩效、各项奖金/罚款/补贴等)数据，供绩效结算账单页面渲染。

## 用法

```bash
mbs fars yyfms-id-get-sale-bill
```

## API

- Service: `yyfms`
- Method: `GET`
- Path: `/yyfms/fms/settlement/getSaleBill/{id}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | path | string | 是 | - | 账单ID(路径参数)。来源：当前页面URL查询参数id，经GetQueryString('id')取得后拼接到接口URL末尾。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `startTime` | string | 账单周期-起始时间(展示为「账单周期：startTime/endTime」) | - |
| `endTime` | string | 账单周期-结束时间 | - |
| `settlement` | object | 绩效结算对象 | - |
| `settlement.employeeName` | string | 员工姓名 | - |
| `settlement.positionName` | string | 岗位名称(枚举判断：销售大酋长/销售酋长，影响部分行的展示与标签) | - |
| `settlement.platformName` | string | 平台名称 | - |
| `settlement.actualProfit` | number | 实际毛利(毛利额，CNY，.toLocaleString()展示) | - |
| `settlement.operateProfitRate` | number | 运营毛利率(原值为小数，前端×100保留2位展示%) | - |
| `settlement.targetAmount` | number | 本月目标销售额-第1档(单位：W/万元) | - |
| `settlement.targetAmountTwo` | number | 本月目标销售额-第2档(单位：W/万元) | - |
| `settlement.targetAmountThree` | number | 本月目标销售额-第3档(单位：W/万元) | - |
| `settlement.targetAmountFinshRate` | number | 本月完成率-第1档(%) | - |
| `settlement.targetAmountTwoFinshRate` | number | 本月完成率-第2档(%) | - |
| `settlement.targetAmountThreeFinshRate` | number | 本月完成率-第3档(%) | - |
| `settlement.performancePoint1` | number | 业绩提点-第1档(原值小数，×100保留2位展示%) | - |
| `settlement.performancePoint2` | number | 业绩提点-第2档(×100保留2位展示%) | - |
| `settlement.performancePoint3` | number | 业绩提点-第3档(×100保留2位展示%) | - |
| `settlement.floatPoint` | number | 浮动提点(×100保留2位展示%) | - |
| `settlement.actualPoint` | number | 实际提点(×100保留2位展示%) | - |
| `settlement.dailyTaskFinishrate` | number | 日常管理任务完成率(原值小数，×100展示%) | - |
| `settlement.systemPushtaskFinishrate` | number | 系统推送任务完成率(×100展示%) | - |
| `settlement.teamtartgetFinishrate` | number | 组员目标达成率/个人月度任务完成率(×100展示%；岗位=销售大酋长时标签为「组员目标达成率」，否则为「个人月度任务完成率」) | - |
| `settlement.discount` | number | 运营毛利率不达标折扣(×100保留2位展示%) | - |
| `settlement.finalPerformance` | number | 最终绩效金额(CNY，.toLocaleString()展示，标题与总计均使用) | - |
| `settlement.actualAmount` | number | 实际总销售额(单位：W/万元) | - |
| `settlement.netGrossProfit` | number | 净毛利(CNY) | - |
| `settlement.profitRateBonus` | number | 实际毛利率奖金(CNY) | - |
| `settlement.fine` | number | 罚款金额(CNY) | - |
| `settlement.subsidy` | number | 补贴(CNY，.toFixed(2)展示) | - |
| `settlement.goodIdeaBonus` | number | 金点子奖励(CNY，仅岗位=销售大酋长时展示) | - |
| `settlement.employementCost` | number | 用人成本(CNY，仅岗位=销售大酋长时展示) | - |
| `settlement.monthlyTaskBonus` | number | 月度管理任务奖金(CNY) | - |
| `settlement.teamtargetBonus` | number | 组员目标达成奖金(CNY，仅岗位=销售大酋长时展示) | - |
| `bill` | object | 账单费用汇总对象 | - |
| `bill.totalamount` | number | 收入总额(CNY，包括平台成交费、退包收入；.toLocaleString()展示) | - |
| `bill.totalcost` | number | 支出总额(CNY，包括平台费、付款交易费、包材费、站内推广费、站外推广费、罚款) | - |
| `bill.returnpkg` | number | 退包收入(CNY，不计入毛利额和毛利率) | - |
| `incomeList[]` | array | 收入明细列表(模板渲染于「收入」区；JS中obj.incomeList用于计算行高contentHeight) | - |
| `incomeList[][0]` | string | 费用项名称 | - |
| `incomeList[][1]` | number | 费用金额(CNY，.toLocaleString()展示) | - |
| `incomeList[][2]` | number | 占比(%，!=null时才展示) | - |
| `disburseList[]` | array | 支出明细列表(模板渲染于「支出」区；JS中obj.disburseList用于计算行高contentHeight) | - |
| `disburseList[][0]` | string | 费用项名称 | - |
| `disburseList[][1]` | number | 费用金额(CNY，.toLocaleString()展示) | - |
| `disburseList[][2]` | number | 占比(%，!=null时才展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
