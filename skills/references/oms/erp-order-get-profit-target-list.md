# mbs oms erp-order-get-profit-target-list

市场部月度毛利目标列表查询：市场部月目标页面按部门与时间区间查询各负责人(部门/团队)月度毛利额目标完成情况列表，返回本月/上月/下月/年度累计等字段及汇总(sum)行；前端以懒加载树表展示，可下钻经理与店铺。

## 用法

```bash
mbs oms erp-order-get-profit-target-list --departmentId <number> --startTime <string> --endTime <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/salesProfitTarget/getProfitTargetList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `departmentId` | departmentId | body | number | 是 | - | 部门ID(代码固定值54=市场部) |
| `startTime` | startTime | body | string | 是 | - | 目标周期-起始日期(yyyy-MM-01,来源当前月首日或历史记录项) |
| `endTime` | endTime | body | string | 是 | - | 目标周期-结束日期(yyyy-MM-dd,来源当前周期或历史记录项) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.list[]` | array | 月度毛利目标行列表(树表根级,前端补child/show/haschild/step) | - |
| `obj.list[][0]` | string | 行记录ID(row-key;下钻load传targetId、修改submit传id) | - |
| `obj.list[][1]` | string | 名称(部门/团队/负责人;店铺级前端改用shopName) | - |
| `obj.list[][2]` | number | 本月毛利额目标(万;可编辑提交updateShopTargetProfit) | - |
| `obj.list[][3]` | number | 本月当前完成率(%) | - |
| `obj.list[][4]` | number | 环比涨跌率(%;>0红上箭头,<0绿,=0黄) | - |
| `obj.list[][5]` | number | 本月销售额(万;前端toFixed(2)) | - |
| `obj.list[][6]` | number | 本月实际毛利率(%) | - |
| `obj.list[][7]` | number | 本月毛利率颜色标识(1=标红) | - |
| `obj.list[][8]` | number | 本月实际毛利额(万) | - |
| `obj.list[][9]` | number | 上月毛利额目标(万;为0显示0) | - |
| `obj.list[][10]` | number | 上月实际完成率(%;为0显示0) | - |
| `obj.list[][11]` | number | 上月销售额(万;前端toFixed(2)) | - |
| `obj.list[][12]` | number | 上月实际毛利率(%) | - |
| `obj.list[][13]` | number | 上月毛利率颜色标识(1=标红) | - |
| `obj.list[][14]` | number | 上月实际毛利额(万) | - |
| `obj.list[][15]` | number | 下月毛利额目标(万;为0显示0) | - |
| `obj.list[][16]` | number | 年度目标(累计目标毛利,万) | - |
| `obj.list[][17]` | number | 累计毛利(年度实际累计,万) | - |
| `obj.list[][18]` | number | 累计完成率(%) | - |
| `obj.list[][19]` | number | 是否可编辑本月目标(0=不可编辑,update拦截) | - |
| `obj.list[][20]` | string | 平台ID(下钻load透传) | - |
| `obj.list[][21]` | string | 负责人姓名(下钻load作为director透传) | - |
| `obj.sum` | object | 汇总行对象(前端拼接为表格汇总行) | - |
| `obj.sum.targetProfit` | number | 汇总-本月毛利额目标(万) | - |
| `obj.sum.finishRate` | number | 汇总-本月完成率(%) | - |
| `obj.sum.momRate` | number | 汇总-环比涨跌率(%) | - |
| `obj.sum.totalAmount` | number | 汇总-本月销售额(万;前端toFixed(2)) | - |
| `obj.sum.actualProfitRate` | number | 汇总-本月实际毛利率(%) | - |
| `obj.sum.actualProfit` | number | 汇总-本月实际毛利额(万) | - |
| `obj.sum.prevTargetProfit` | number | 汇总-上月毛利额目标(万) | - |
| `obj.sum.prevFinishRate` | number | 汇总-上月完成率(%;空则显示0) | - |
| `obj.sum.prevTotalAmount` | number | 汇总-上月销售额(万;前端toFixed(2)) | - |
| `obj.sum.prevActualProfitRate` | number | 汇总-上月实际毛利率(%) | - |
| `obj.sum.prevActualProfit` | number | 汇总-上月实际毛利额(万) | - |
| `obj.sum.lastTargetProfit` | number | 汇总-下月毛利额目标(万) | - |
| `obj.sum.additiveTargetProfit` | number | 汇总-年度目标(万) | - |
| `obj.sum.additiveActualProfit` | number | 汇总-累计毛利(万) | - |
| `obj.sum.additiveCompletionRate` | number | 汇总-累计完成率(%) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
