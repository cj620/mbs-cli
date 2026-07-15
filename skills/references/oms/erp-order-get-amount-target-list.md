# mbs oms erp-order-get-amount-target-list

市场部月度毛利额目标列表查询：按部门与时间区间查询市场部（人员维度）月度毛利额目标完成情况，返回人员/部门列表（本月/上月/下月/年度的目标额、完成率、环比、销售额/毛利率/毛利额）及一行汇总 sum；列表为树形懒加载首层数据。

## 用法

```bash
mbs oms erp-order-get-amount-target-list --departmentId <number> --startTime <string> --endTime <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/salesAmountTarget/getAmountTargetList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `departmentId` | departmentId | body | number | 是 | - | 部门ID。源码固定写死为 54（市场部），来源：硬编码常量 |
| `startTime` | startTime | body | string | 是 | - | 统计区间-起始时间（月份起始，格式 YYYY-MM-DD），来源：历史记录抽屉项 item.startTime / 当月计算值 YYYY-MM-01 |
| `endTime` | endTime | body | string | 是 | - | 统计区间-结束时间（格式 YYYY-MM-DD），来源：历史记录抽屉项 item.endTime |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.list[]` | array | 目标列表（人员/部门维度，树形首层，赋值给 tablelist 渲染表格） | - |
| `obj.list[][0]` | string | 行主键ID（row-key="id"，懒加载下级 targetId 入参） | - |
| `obj.list[][1]` | string | 姓名（人员/部门名称；下钻店铺层时前端以 shopName 覆盖） | - |
| `obj.list[][2]` | number | 本月-毛利额目标（万） | - |
| `obj.list[][3]` | number | 本月-当前完成率（%） | - |
| `obj.list[][4]` | number | 本月-环比涨跌（%，>0 红色升、<0 绿色降、=0 黄色） | - |
| `obj.list[][5]` | number | 本月-销售额（万，前端 toFixed(2) 展示） | - |
| `obj.list[][6]` | number | 本月-毛利率（%） | - |
| `obj.list[][7]` | number | 本月-毛利率标红标记（1=标红显示） | - |
| `obj.list[][8]` | number | 本月-毛利额（万） | - |
| `obj.list[][9]` | number | 上月-毛利额目标（万，0 时显示 0） | - |
| `obj.list[][10]` | number | 上月-实际完成率（%，空/0 时显示 0） | - |
| `obj.list[][11]` | number | 上月-销售额（万，前端 toFixed(2) 展示） | - |
| `obj.list[][12]` | number | 上月-毛利率（%） | - |
| `obj.list[][13]` | number | 上月-毛利率标红标记（1=标红显示） | - |
| `obj.list[][14]` | number | 上月-毛利额（万） | - |
| `obj.list[][15]` | number | 下月-毛利额目标（万，0 时显示 0） | - |
| `obj.list[][16]` | number | 年度-年度目标（万，0 时显示 0） | - |
| `obj.list[][17]` | number | 年度-累计销售（万，0 时显示 0） | - |
| `obj.list[][18]` | number | 年度-累计完成率（%） | - |
| `obj.list[][19]` | string | 平台ID（懒加载下级 load 时作为入参 platformId） | - |
| `obj.list[][20]` | string | 员工/负责人姓名（懒加载下级 load 时作为入参 director） | - |
| `obj.list[][21]` | number | 是否可编辑（0=不可编辑，控制目标额行内编辑） | - |
| `obj.sum` | object | 汇总行数据（渲染 el-table 底部「汇总」行） | - |
| `obj.sum.targetAmount` | number | 汇总-本月毛利额目标（万） | - |
| `obj.sum.finishRate` | number | 汇总-本月当前完成率（%） | - |
| `obj.sum.momRate` | number | 汇总-本月环比涨跌（%） | - |
| `obj.sum.totalAmount` | number | 汇总-本月销售额（万，前端 toFixed(2)） | - |
| `obj.sum.actualProfitRate` | number | 汇总-本月毛利率（%） | - |
| `obj.sum.actualProfit` | number | 汇总-本月毛利额（万） | - |
| `obj.sum.prevTargetProfit` | number | 汇总-上月毛利额目标（万） | - |
| `obj.sum.prevFinishRate` | number | 汇总-上月实际完成率（%，空时按 0 展示） | - |
| `obj.sum.prevTotalAmount` | number | 汇总-上月销售额（万，前端 toFixed(2)） | - |
| `obj.sum.prevActualProfitRate` | number | 汇总-上月毛利率（%） | - |
| `obj.sum.prevActualProfit` | number | 汇总-上月毛利额（万） | - |
| `obj.sum.lastTargetProfit` | number | 汇总-下月毛利额目标（万） | - |
| `obj.sum.additiveTargetProfit` | number | 汇总-年度目标（万） | - |
| `obj.sum.additiveActualProfit` | number | 汇总-累计销售（万） | - |
| `obj.sum.additiveCompletionRate` | number | 汇总-累计完成率（%） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
