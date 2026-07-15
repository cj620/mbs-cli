<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-deliver-chinese-rose-shop

月度店销报表-发货时间业绩查询(findDeliverChineseRoseShop)：月度店销报表「发货时间业绩」维度查询：按人员类别、平台、品类、客户经理、组织架构(总监/经理/主管/店长)、店铺、月份、统计类型、公司、海外仓、店龄等条件筛选，返回 ECharts 折线图系列(series/x)、表头(title)与店铺明细行列表(saleReportList，含发货小计/利润/毛利率/运营毛利率/订单量/退款金额/平台费/站内推广费等分时段汇总)。

## 用法

```bash
mbs oms erp-order-find-deliver-chinese-rose-shop [--employeeType <string>] [--platformId <string>] [--categoryNameList <array>] [--customerServiceMgr <string>] [--shopName <array>] [--employeeName <array>] [--bigChief <array>] [--leaders <array>] [--littleLeaders <array>] [--operateStatus <number>] [--dateList <array>] [--monthType <array>] [--companyId <string>] [--notFbaHwc <string>] [--opendaySmall <string>] [--opendaysLarge <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/personSaleReport/findDeliverChineseRoseShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 否 | - | 人员类别/业绩时间类型。1=订单时间业绩;3=发货时间业绩(本接口由3触发)。来源 #orderStaus 下拉 |
| `platformId` | platformId | body | string | 否 | - | 所属平台ID(PLATFORMID)。来源 #reserve11 平台下拉,空串=全部 |
| `categoryNameList` | categoryNameList | body | array | 否 | - | 品类名称列表。来源 #categoryNameList,多选品类名按逗号拆分为数组,未选为[] |
| `customerServiceMgr` | customerServiceMgr | body | string | 否 | - | 客户经理(多选,逗号拼接字符串),未选为空串。来源 #custService |
| `shopName` | shopName | body | array | 否 | - | 店铺名称列表。来源 Vue shop,多店铺以空格分隔后拆为数组,未选为[] |
| `employeeName` | employeeName | body | array | 否 | - | 组员/店长列表(店长姓名数组)。来源 Vue shopmanager |
| `bigChief` | bigChief | body | array | 否 | - | 大酋长/经理列表(经理ID数组)。来源 Vue manager |
| `leaders` | leaders | body | array | 否 | - | 总监列表(总监ID数组)。来源 Vue leaders |
| `littleLeaders` | littleLeaders | body | array | 否 | - | 主管列表(主管ID数组)。来源 Vue littleLeaders |
| `operateStatus` | operateStatus | body | number | 否 | - | 运营状态。1=运营中;2=暂停运营;3=永久关闭。来源 Vue operateStatus 下拉 |
| `dateList` | dateList | body | array | 否 | - | 月份列表(选中的年月,逗号拆分为数组),未选为[]。来源 #monthList |
| `monthType` | monthType | body | array | 否 | - | 统计类型列表(逗号拆分),未选为[]。可选:发货小计/利润/毛利率/运营毛利率/订单量/退款金额/平台费/站内推广费。来源 #shopTypes2 |
| `companyId` | companyId | body | string | 否 | - | 公司ID。来源 #componey 公司下拉 |
| `notFbaHwc` | notFbaHwc | body | string | 否 | - | 海外仓类型。空串=未选;0=全部;1=真实海外仓;2=虚拟海外仓。来源 #notFbaHwc |
| `opendaySmall` | opendaySmall | body | string | 否 | - | 店龄区间-起(天)。来源 #opendaySmall |
| `opendaysLarge` | opendaysLarge | body | string | 否 | - | 店龄区间-止(天)。来源 #opendaysLarge |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(统一响应结构,成功通常200。前端成功回调未显式校验) | - |
| `desc` | string | 响应提示信息(统一响应结构) | - |
| `obj` | object | 业务数据对象(前端 data.obj) | - |
| `obj.x` | object | ECharts X轴对象 | - |
| `obj.x.data[]` | array | X轴类目数据(横轴时间/分组,xAxis.data) | - |
| `obj.series[]` | array | 折线图系列数据(透传 ECharts setOption,前端最多取前20条) | - |
| `obj.series[][0]` | string | 系列名称(店铺/分组名,前端取作图例 legend) | - |
| `obj.series[][1][]` | array | 系列数据点(透传 ECharts 绘图,(待人工确认 内部结构)) | - |
| `obj.series[][2]` | string | 系列图表类型(透传 ECharts,如 line,(待人工确认)) | - |
| `obj.title` | object | 表头标题对象(渲染 titleTemplate2) | - |
| `obj.title.shopName` | string | 店铺列-表头名称 | - |
| `obj.title.name` | string | 名称列-表头名称(店长列) | - |
| `obj.title.tatal` | string | 发货小计-分组表头名称 | - |
| `obj.title.tatalTime[]` | array | 发货小计-时间子列(各时段表头) | - |
| `obj.title.profit` | string | 利润-分组表头名称 | - |
| `obj.title.profitTime[]` | array | 利润-时间子列 | - |
| `obj.title.profitRate` | string | 毛利率-分组表头名称 | - |
| `obj.title.profitRateTime[]` | array | 毛利率-时间子列 | - |
| `obj.title.operation` | string | 运营毛利率-分组表头名称 | - |
| `obj.title.operationTime[]` | array | 运营毛利率-时间子列 | - |
| `obj.title.orderNum` | string | 订单量-分组表头名称 | - |
| `obj.title.orderNumTime[]` | array | 订单量-时间子列 | - |
| `obj.title.refundfee` | string | 退款金额-分组表头名称 | - |
| `obj.title.refundfeeTime[]` | array | 退款金额-时间子列 | - |
| `obj.title.platformfee` | string | 平台费-分组表头名称 | - |
| `obj.title.platformfeeTime[]` | array | 平台费-时间子列 | - |
| `obj.title.publishfee` | string | 站内推广费-分组表头名称 | - |
| `obj.title.publishfeeTime[]` | array | 站内推广费-时间子列 | - |
| `obj.saleReportList[]` | array | 店铺明细行列表(渲染 listTemplate2) | - |
| `obj.saleReportList[][0]` | string | 合计标记。值为"合计"时该行为合计行(跨3列展示) | - |
| `obj.saleReportList[][1]` | string | 店铺名称 | - |
| `obj.saleReportList[][2]` | string | 店长 | - |
| `obj.saleReportList[][3]` | string | 大酋长(以标签 label 形式展示,有值才显示) | - |
| `obj.saleReportList[][4]` | string | 号龄/店龄(天) | - |
| `obj.saleReportList[][5]` | string | 平台(店龄列下方展示) | - |
| `obj.saleReportList[][6][]` | array | 发货小计-各时段数值列表 | - |
| `obj.saleReportList[][7][]` | array | 利润-各时段数值列表 | - |
| `obj.saleReportList[][8][]` | array | 毛利率-各时段数值列表 | - |
| `obj.saleReportList[][9][]` | array | 运营毛利率-各时段数值列表 | - |
| `obj.saleReportList[][10][]` | array | 订单量-各时段数值列表 | - |
| `obj.saleReportList[][11][]` | array | 退款金额-各时段数值列表 | - |
| `obj.saleReportList[][12][]` | array | 平台费-各时段数值列表 | - |
| `obj.saleReportList[][13][]` | array | 站内推广费-各时段数值列表 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
