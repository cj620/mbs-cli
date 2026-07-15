# mbs oms erp-order-get-develop-repoer

开发大酋长报表查询：「开发大酋长报表」页面按周(本周/上周/上上周)查询开发员开发与业绩报表：返回开发员(含组员明细 reportList)的开发表现、业绩表现、工作表现、质量表现等多维指标及一行汇总(sum)。

## 用法

```bash
mbs oms erp-order-get-develop-repoer --times <string> --status <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/developReport/getDevelopRepoer`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `times` | times | body | string | 是 | - | 统计周时间标识。来源 getThreeWeekTime 返回的 obj[0](本周)/obj[1](上周)/obj[2](上上周)，经 sessionStorage(devthisweek/devlastweek/devbeforeweek) 回填。 |
| `status` | status | body | number | 是 | - | 状态标识，前端固定传 1。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj` | object | 业务数据对象(前端据 if(data.obj) 判定有数据才渲染) | - |
| `obj.date[]` | array | 开发员报表行列表(模板 list) | - |
| `obj.date[][0]` | string | 开发员姓名(汇总行固定显示「汇总」) | - |
| `obj.date[][1]` | number | 开发SPU数量(本周开发spu数量) | - |
| `obj.date[][2]` | number | 人均开发SPU数量 | - |
| `obj.date[][3]` | number | 人均开发SPU环比增长率(%)，>=0 红色↑、<0 绿色↓ | - |
| `obj.date[][4]` | number | 开发负责总SPU | - |
| `obj.date[][5]` | number | 出单SPU(本周出单SPU数;仅统计走正常开发流程的SPU) | - |
| `obj.date[][6]` | number | 订单销售额 | - |
| `obj.date[][7]` | number | 月完成率(%) | - |
| `obj.date[][8]` | number | 周达标度。1=达标;0=未达标 | - |
| `obj.date[][9]` | number | 人均周销售额 | - |
| `obj.date[][10]` | number | 人均周销售额环比增长率(%)，>0 红色↑、否则绿色↓ | - |
| `obj.date[][11]` | number | 周毛利额 | - |
| `obj.date[][12]` | number | 周毛利率(%)，<13 绿色、否则红色 | - |
| `obj.date[][13]` | number | 缺货率(%) | - |
| `obj.date[][14]` | number | 本月任务完成率(%) | - |
| `obj.date[][15]` | number | 在职状态。null 或 1=在职(显示 workhour);2=离职;3=新入职;4=待定 | - |
| `obj.date[][16]` | number | 人均日工时(仅 isonline 为 null/1 时展示) | - |
| `obj.date[][17]` | number | 单SPU30天销售额 | - |
| `obj.date[][18]` | number | 单SPU30天销售额环比增长率(%)，>=0 红色↑、<0 绿色↓ | - |
| `obj.date[][19]` | number | 爆旺款占比(%) | - |
| `obj.date[][20]` | number | 新品出单量(新品=创建时间近30天) | - |
| `obj.date[][21]` | number | 新品销售额 | - |
| `obj.date[][22]` | number | 新品率(%)，本周新品销售额/本周总订单销售额 | - |
| `obj.date[][23]` | number | 动销率(%)，本周出单spu/开发负责总SPU | - |
| `obj.date[][24]` | number | 退款率(%)，按发货时间计算 | - |
| `obj.date[][25]` | string | 综合表现(HTML 富文本，模板以 {{@}} 原样输出) | - |
| `obj.date[][26]` | boolean | 是否可发起绩效面谈(true 时显示「添加」按钮) | - |
| `obj.date[][27]` | string | 统计区间-开始时间(绩效面谈记录链接参数 startTime) | - |
| `obj.date[][28]` | string | 统计区间-结束时间(绩效面谈记录链接参数 endTime) | - |
| `obj.date[][29]` | string | 绩效面谈记录(链接展示文案，跳转 /task/taskReport.html) | - |
| `obj.date[][30][]` | array | 组员明细列表(子表展开，字段同行结构) | - |
| `obj.date[][30][][0]` | string | 组员姓名 | - |
| `obj.date[][30][][1]` | number | 开发SPU数量 | - |
| `obj.date[][30][][2]` | number | 人均开发SPU数量 | - |
| `obj.date[][30][][3]` | number | 人均开发SPU环比增长率(%) | - |
| `obj.date[][30][][4]` | number | 开发负责总SPU | - |
| `obj.date[][30][][5]` | number | 出单SPU | - |
| `obj.date[][30][][6]` | number | 订单销售额 | - |
| `obj.date[][30][][7]` | number | 月完成率(%) | - |
| `obj.date[][30][][8]` | number | 周达标度。1=达标;0=未达标 | - |
| `obj.date[][30][][9]` | number | 人均周销售额(子表以 % 展示) | - |
| `obj.date[][30][][10]` | number | 周毛利额 | - |
| `obj.date[][30][][11]` | number | 周毛利率(%)，<13 绿色、否则红色 | - |
| `obj.date[][30][][12]` | number | 缺货率(%) | - |
| `obj.date[][30][][13]` | number | 本月任务完成率(%) | - |
| `obj.date[][30][][14]` | number | 在职状态。null/1=在职;2=离职;3=新入职;4=待定 | - |
| `obj.date[][30][][15]` | number | 人均日工时 | - |
| `obj.date[][30][][16]` | number | 单SPU30天销售额 | - |
| `obj.date[][30][][17]` | number | 单SPU30天销售额环比增长率(%) | - |
| `obj.date[][30][][18]` | number | 爆旺款占比(%) | - |
| `obj.date[][30][][19]` | number | 新品出单量 | - |
| `obj.date[][30][][20]` | number | 新品销售额 | - |
| `obj.date[][30][][21]` | number | 新品率(%) | - |
| `obj.date[][30][][22]` | number | 动销率(%) | - |
| `obj.date[][30][][23]` | number | 退款率(%) | - |
| `obj.date[][30][][24]` | string | 综合表现(HTML 富文本) | - |
| `obj.date[][30][][25]` | boolean | 是否可发起绩效面谈 | - |
| `obj.date[][30][][26]` | string | 统计区间-开始时间 | - |
| `obj.date[][30][][27]` | string | 统计区间-结束时间 | - |
| `obj.date[][30][][28]` | string | 绩效面谈记录 | - |
| `obj.sum` | object | 汇总行(模板 sum，单条对象，前端 push 入数组渲染) | - |
| `obj.sum.developSpuNum` | number | 汇总-开发SPU数量 | - |
| `obj.sum.avgDevelopSpuNum` | number | 汇总-人均开发SPU数量 | - |
| `obj.sum.developSpuCount` | number | 汇总-开发负责总SPU | - |
| `obj.sum.billingSpu` | number | 汇总-出单SPU | - |
| `obj.sum.orderSales` | number | 汇总-订单销售额 | - |
| `obj.sum.targetFinishRate` | number | 汇总-月完成率(%) | - |
| `obj.sum.salesTargetReachStandard` | number | 汇总-周达标度。1=达标;否则未达标 | - |
| `obj.sum.avgOrderSales` | number | 汇总-人均周销售额 | - |
| `obj.sum.profit` | number | 汇总-周毛利额 | - |
| `obj.sum.profitRate` | number | 汇总-周毛利率(%)，<=13 绿色、否则红色 | - |
| `obj.sum.outofStockRate` | number | 汇总-缺货率(%) | - |
| `obj.sum.monthTaskFinisRate` | number | 汇总-本月任务完成率(%) | - |
| `obj.sum.isonline` | number | 汇总-在职状态(同上枚举) | - |
| `obj.sum.workhour` | number | 汇总-人均日工时 | - |
| `obj.sum.avgSpuAmount` | number | 汇总-单SPU30天销售额 | - |
| `obj.sum.avgSpuAmountRate` | number | 汇总-单SPU30天销售额环比增长率(%) | - |
| `obj.sum.explosionSkuRate` | number | 汇总-爆旺款占比(%) | - |
| `obj.sum.newOrderNum` | number | 汇总-新品出单量 | - |
| `obj.sum.newOrderAmount` | number | 汇总-新品销售额 | - |
| `obj.sum.newProductRate` | number | 汇总-新品率(%) | - |
| `obj.sum.marketingRate` | number | 汇总-动销率(%) | - |
| `obj.sum.refundRate` | number | 汇总-退款率(%) | - |
| `code` | number | 标准响应状态码 (待人工确认：本调用 success 回调未使用) | - |
| `desc` | string | 标准响应提示信息 (待人工确认：本调用 success 回调未使用) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
