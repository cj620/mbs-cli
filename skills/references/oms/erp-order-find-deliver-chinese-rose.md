# mbs oms erp-order-find-deliver-chinese-rose

人员发货时间业绩报表查询：按发货时间维度统计人员（大酋长/组员）销售业绩，支持平台、品类、组员、大酋长、月份、统计类型等多维筛选；返回 ECharts 折线图序列（series + x 轴）、表头标题对象（title）及报表行列表（saleReportList），用于发货时间业绩页表格与图表渲染。

## 用法

```bash
mbs oms erp-order-find-deliver-chinese-rose --employeeType <string> [--platformId <string>] [--categoryNameList <array>] [--employeeName <array>] [--bigChief <array>] [--dateList <array>] [--monthType <array>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/personSaleReport/findDeliverChineseRose`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 是 | - | 人员类别/业绩类型。来源下拉 #orderStaus。2=订单时间业绩；4=发货时间业绩（本页调用本接口时为 4） |
| `platformId` | platformId | body | string | 否 | - | 所属平台ID。来源下拉 #reserve11（数据来自 getPlatformList），空字符串=全部平台 |
| `categoryNameList` | categoryNameList | body | array | 否 | - | 品类名称列表。来源 #categoryNameList 多选输入（逗号拼接后 split 为数组），未选时为 [] |
| `employeeName` | employeeName | body | array | 否 | - | 组员（员工姓名）列表。来源多选 #employeeList，未选时为 [] |
| `bigChief` | bigChief | body | array | 否 | - | 大酋长（店长/团队负责人）列表。来源多选 #shopManager，未选时为 [] |
| `dateList` | dateList | body | array | 否 | - | 月份列表（年月）。来源 #monthList（按逗号 split），未选时为 [] |
| `monthType` | monthType | body | array | 否 | - | 统计指标类型列表。来源多选 #shopTypes2（按逗号 split），取值：发货小计/利润/单包裹利润/毛利率/运营毛利率/退款金额/平台费/站内推广费；未选时为 [] |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（前端未显式校验）(待人工确认) | - |
| `desc` | string | 响应提示信息(待人工确认) | - |
| `obj` | object | 业务数据对象（图表 + 表头 + 报表行） | - |
| `obj.series[]` | array | ECharts 折线图序列数组（直接作为 echarts series 配置） | - |
| `obj.series[][0]` | string | 序列名称（图例 legend 取值，对应统计指标） | - |
| `obj.series[][1][]` | array | 序列数据点数组（echarts 折线值)(待人工确认) | - |
| `obj.x` | object | X 轴对象 | - |
| `obj.x.data[]` | array | X 轴类目数据（时间/月份等类目） | - |
| `obj.title` | object | 表头标题对象（渲染 #titleTemplate2） | - |
| `obj.title.title` | string | 主列标题（店长/人员列表头） | - |
| `obj.title.entryTime` | string | 入职时间列表头 | - |
| `obj.title.tatal` | string | 发货小计分组表头名称 | - |
| `obj.title.tatalTime[]` | array | 发货小计分组的时间子列数组 | - |
| `obj.title.profit` | string | 利润分组表头名称 | - |
| `obj.title.profitTime[]` | array | 利润分组的时间子列数组 | - |
| `obj.title.profitRate` | string | 毛利率分组表头名称 | - |
| `obj.title.profitRateTime[]` | array | 毛利率分组的时间子列数组 | - |
| `obj.title.operation` | string | 运营毛利率分组表头名称 | - |
| `obj.title.operationTime[]` | array | 运营毛利率分组的时间子列数组 | - |
| `obj.title.ordernum` | string | 订单量分组表头名称 | - |
| `obj.title.ordernumTime[]` | array | 订单量分组的时间子列数组 | - |
| `obj.title.refundfee` | string | 退款金额分组表头名称 | - |
| `obj.title.refundfeeTime[]` | array | 退款金额分组的时间子列数组 | - |
| `obj.title.platformfee` | string | 平台费分组表头名称 | - |
| `obj.title.platformfeeTime[]` | array | 平台费分组的时间子列数组 | - |
| `obj.title.publishfee` | string | 站内推广费分组表头名称 | - |
| `obj.title.publishfeeTime[]` | array | 站内推广费分组的时间子列数组 | - |
| `obj.title.singleProfit` | string | 单包裹利润分组表头名称 | - |
| `obj.title.singleProfitTime[]` | array | 单包裹利润分组的时间子列数组 | - |
| `obj.saleReportList[]` | array | 报表行列表（渲染 #listTemplate2） | - |
| `obj.saleReportList[][0]` | string | 合计标记，值为「合计」时该行渲染为合计行 | - |
| `obj.saleReportList[][1]` | string | 店长/人员名称（行主名称） | - |
| `obj.saleReportList[][2]` | string | 大酋长标签（存在时展示标签） | - |
| `obj.saleReportList[][3]` | string | 工作时长（入职时长） | - |
| `obj.saleReportList[][4]` | string | 所属平台名称 | - |
| `obj.saleReportList[][5][]` | array | 发货小计数据列数组（按时间） | - |
| `obj.saleReportList[][6][]` | array | 利润数据列数组（按时间） | - |
| `obj.saleReportList[][7][]` | array | 毛利率数据列数组（按时间） | - |
| `obj.saleReportList[][8][]` | array | 运营毛利率数据列数组（按时间） | - |
| `obj.saleReportList[][9][]` | array | 订单量数据列数组（按时间） | - |
| `obj.saleReportList[][10][]` | array | 退款金额数据列数组（按时间） | - |
| `obj.saleReportList[][11][]` | array | 平台费数据列数组（按时间） | - |
| `obj.saleReportList[][12][]` | array | 站内推广费数据列数组（按时间） | - |
| `obj.saleReportList[][13][]` | array | 单包裹利润数据列数组（按时间） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
