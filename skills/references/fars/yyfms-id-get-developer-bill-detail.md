<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars yyfms-id-get-developer-bill-detail

开发员账单详情查询：按账单ID查询某开发员账期账单详情，返回结算汇总(settlement)、账单总额(bill)、账期起止、收入明细列表(incomeList)、支出明细列表(disburseList)；前端按岗位渲染不同的过程管理与最终绩效模块。

## 用法

```bash
mbs fars yyfms-id-get-developer-bill-detail
```

## API

- Service: `yyfms`
- Method: `GET`
- Path: `/yyfms/fms/settlement/getDeveloperBillDetail/{id}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | path | string | 是 | - | 账单ID，路径变量，拼接于接口URL末尾。来源：页面URL查询参数 id（GetQueryString('id')） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `settlement` | object | 结算汇总对象 | - |
| `settlement.employeeName` | string | 员工(开发员)姓名 | - |
| `settlement.positionName` | string | 岗位名称。枚举：开发大酋长/实习高级小酋长/产品开发（决定过程管理与最终绩效模块的展示分支） | - |
| `settlement.actualProfit` | number | 实际毛利额(名下所有店铺账期内毛利，CNY) | - |
| `settlement.operateProfitRate` | number | 运营毛利率(小数，前端×100保留2位展示%) | - |
| `settlement.targetAmount` | number | 本月目标销售额-第1档(单位:万W) | - |
| `settlement.targetAmountTwo` | number | 本月目标销售额-第2档(单位:万W) | - |
| `settlement.targetAmountThree` | number | 本月目标销售额-第3档(单位:万W) | - |
| `settlement.targetAmountFinshRate` | number | 本月完成率-第1档(%) | - |
| `settlement.targetAmountTwoFinshRate` | number | 本月完成率-第2档(%) | - |
| `settlement.targetAmountThreeFinshRate` | number | 本月完成率-第3档(%) | - |
| `settlement.performancePoint1` | number | 业绩提点1(小数，前端×100保留2位%) | - |
| `settlement.performancePoint2` | number | 业绩提点2(小数，前端×100保留2位%) | - |
| `settlement.performancePoint3` | number | 业绩提点3(小数，前端×100保留2位%) | - |
| `settlement.actualPoint` | number | 实际提点(小数，前端×100保留2位%) | - |
| `settlement.dailyTaskFinishrate` | number | 日常管理任务完成率(小数，×100展示%；岗位=开发大酋长/实习高级小酋长时展示) | - |
| `settlement.systemPushtaskFinishrate` | number | 系统推送任务完成率(小数，×100展示%；岗位=开发大酋长/实习高级小酋长时展示) | - |
| `settlement.teamtartgetFinishrate` | number | 组员目标达成率(小数，×100展示%；岗位=开发大酋长/实习高级小酋长时展示) | - |
| `settlement.outofstockRateStandard` | number | 缺货率标准(小数，×100展示%；岗位=开发大酋长/实习高级小酋长时展示) | - |
| `settlement.outofstockRate` | number | 实际缺货率(小数，×100展示%；岗位=开发大酋长/实习高级小酋长时展示) | - |
| `settlement.oldProductPoint` | number | 6个月以上老品实际提点(小数，×100保留2位%；岗位=产品开发时展示) | - |
| `settlement.newProductPoint` | number | 6个月以下新品实际提点(含180天)(小数，×100保留2位%；岗位=产品开发时展示) | - |
| `settlement.monthlyTaskFinishrate` | number | 月度任务完成率(小数，×100保留2位%；岗位=产品开发时展示) | - |
| `settlement.finalPerformance` | number | 最终绩效(CNY) | - |
| `settlement.actualAmount` | number | 实际总销售额(单位:万W) | - |
| `settlement.newProductProfitOther` | number | 推荐毛利 | - |
| `settlement.subsidy` | number | 补贴 | - |
| `settlement.netGrossProfit2` | number | 净毛利(岗位=开发大酋长/实习高级小酋长时展示) | - |
| `settlement.distinctProfit` | number | 折扣后毛利(岗位=开发大酋长/实习高级小酋长时展示) | - |
| `settlement.fine` | number | 罚款金额 | - |
| `settlement.goodIdeaBonus` | number | 金点子奖励(岗位=开发大酋长/实习高级小酋长时展示) | - |
| `settlement.employementCost` | number | 用人成本(岗位=开发大酋长/实习高级小酋长时展示) | - |
| `settlement.monthlyTaskBonus` | number | 月度管理任务奖金 | - |
| `settlement.teamtargetBonus` | number | 组员目标达成奖金(岗位=开发大酋长/实习高级小酋长时展示) | - |
| `settlement.outofstockRateStandardBonus` | number | 缺货率奖金(岗位=开发大酋长/实习高级小酋长时展示) | - |
| `settlement.oldProductProfit` | number | 6个月以上老品毛利额(岗位=产品开发时展示) | - |
| `settlement.newProductProfit` | number | 6个月以下新品毛利额(含180天)(岗位=产品开发时展示) | - |
| `bill` | object | 账单总额对象 | - |
| `bill.totalamount` | number | 收入总额(包括平台成交费、退包收入，CNY) | - |
| `bill.totalcost` | number | 支出总额(包括平台费、付款交易费、包材费、站内推广费、站外推广费、罚款，CNY) | - |
| `bill.returnpkg` | number | 退包收入(不计入毛利额和毛利率) | - |
| `startTime` | string | 账单周期-起始时间 | - |
| `endTime` | string | 账单周期-结束时间 | - |
| `incomeList[]` | array | 收入明细列表(渲染于「收入」区块) | - |
| `incomeList[][0]` | string | 收入费用项名称 | - |
| `incomeList[][1]` | number | 收入费用金额(前端千分位展示) | - |
| `incomeList[][2]` | number | 占比(%，为 null 时不展示) | - |
| `disburseList[]` | array | 支出明细列表(渲染于「支出」区块；前端用其长度与 incomeList 差值计算占位行高) | - |
| `disburseList[][0]` | string | 支出费用项名称 | - |
| `disburseList[][1]` | number | 支出费用金额(前端千分位展示) | - |
| `disburseList[][2]` | number | 占比(%，为 null 时不展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
