# mbs oms erp-order-find-order-chinese-rose

人销售报表(订单时间业绩)曲线查询：按订单时间维度统计人员/团队销售业绩：依据人员类别、平台、品类、大酋长、组员、月份、指标类型等条件查询，返回 ECharts 曲线数据(x轴/series)、表头(title)及报表明细列表(saleReportList，含收入小计/利润/毛利率/订单量/退款金额/平台费/站内推广费/单包裹利润等分时段指标)。

## 用法

```bash
mbs oms erp-order-find-order-chinese-rose --employeeType <string> [--platformId <string>] [--categoryNameList <array>] [--employeeName <array>] [--bigChief <array>] [--dateList <array>] [--monthType <array>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/personSaleReport/findOrderChineseRose`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 是 | - | 人员类别/统计维度(来源#orderStaus)。2=订单时间业绩(本接口),4=发货时间业绩 |
| `platformId` | platformId | body | string | 否 | - | 所属平台ID(来源#reserve11，取PLATFORMID，全部时为空串) |
| `categoryNameList` | categoryNameList | body | array | 否 | - | 品类名称列表(来源#categoryNameList，无选择传[]) |
| `employeeName` | employeeName | body | array | 否 | - | 组员(员工姓名)列表(来源#employeeList，无选择传[]) |
| `bigChief` | bigChief | body | array | 否 | - | 大酋长(团队负责人)ID列表(来源#shopManager，无选择传[]) |
| `dateList` | dateList | body | array | 否 | - | 月份列表(来源#monthList逗号串split，无选择传[]) |
| `monthType` | monthType | body | array | 否 | - | 指标(展示列)类型列表(来源#shopTypes)。枚举:收入小计/利润/单包裹利润/毛利率/订单量/退款金额/平台费/站内推广费 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一封装，待人工确认) | - |
| `desc` | string | 响应提示信息(统一封装，待人工确认) | - |
| `obj` | object | 业务数据对象(success回调取data.obj) | - |
| `obj.x` | object | ECharts X轴对象 | - |
| `obj.x.data[]` | array | X轴类目数据(时间/月份序列，赋给xAxis.data) | - |
| `obj.series[]` | array | ECharts折线系列数组(直接赋给series) | - |
| `obj.series[]` | string | 系列名称(用于legend图例) | - |
| `obj.title` | object | 表头定义对象(渲染#titleTemplate) | - |
| `obj.title.title` | string | 第一列表头(人员/团队名称列标题) | - |
| `obj.title.entryTime` | string | 第二列表头(录入/入职时间列标题) | - |
| `obj.title.tatal` | string | 收入小计分组表头标题 | - |
| `obj.title.tatalTime[]` | array | 收入小计分组各时段列 | - |
| `obj.title.profit` | string | 利润分组表头标题 | - |
| `obj.title.profitTime[]` | array | 利润分组各时段列 | - |
| `obj.title.profitRate` | string | 毛利率分组表头标题 | - |
| `obj.title.profitRateTime[]` | array | 毛利率分组各时段列 | - |
| `obj.title.ordernum` | string | 订单量分组表头标题 | - |
| `obj.title.ordernumTime[]` | array | 订单量分组各时段列 | - |
| `obj.title.refundfee` | string | 退款金额分组表头标题 | - |
| `obj.title.refundfeeTime[]` | array | 退款金额分组各时段列 | - |
| `obj.title.platformfee` | string | 平台费分组表头标题 | - |
| `obj.title.platformfeeTime[]` | array | 平台费分组各时段列 | - |
| `obj.title.publishfee` | string | 站内推广费分组表头标题 | - |
| `obj.title.publishfeeTime[]` | array | 站内推广费分组各时段列 | - |
| `obj.title.singleProfit` | string | 单包裹利润分组表头标题 | - |
| `obj.title.singleProfitTime[]` | array | 单包裹利润分组各时段列 | - |
| `obj.saleReportList[]` | array | 报表明细行列表(渲染#listTemplate) | - |
| `obj.saleReportList[][0]` | string | 行类型标记，值为"合计"时该行渲染为合计行 | - |
| `obj.saleReportList[][1]` | string | 人员/店长(团队)名称 | - |
| `obj.saleReportList[][2]` | string | 大酋长(团队负责人)，存在时显示为标签 | - |
| `obj.saleReportList[][3]` | string | 工作时长/在职时长 | - |
| `obj.saleReportList[][4]` | string | 所属平台名称 | - |
| `obj.saleReportList[][5][]` | array | 收入小计-各时段值列表(对应title.tatalTime) | - |
| `obj.saleReportList[][6][]` | array | 利润-各时段值列表(对应title.profitTime) | - |
| `obj.saleReportList[][7][]` | array | 毛利率-各时段值列表(对应title.profitRateTime) | - |
| `obj.saleReportList[][8][]` | array | 订单量-各时段值列表(对应title.ordernumTime) | - |
| `obj.saleReportList[][9][]` | array | 退款金额-各时段值列表(对应title.refundfeeTime) | - |
| `obj.saleReportList[][10][]` | array | 平台费-各时段值列表(对应title.platformfeeTime) | - |
| `obj.saleReportList[][11][]` | array | 站内推广费-各时段值列表(对应title.publishfeeTime) | - |
| `obj.saleReportList[][12][]` | array | 单包裹利润-各时段值列表(对应title.singleProfitTime) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
