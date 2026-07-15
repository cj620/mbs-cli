<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-export-chinese-roses

月度店销报表导出：导出「月度店销报表」。按人员类别(订单时间业绩/发货时间业绩)、平台、品类、客户经理、总监/大酋长/组员、店铺、年月、展示指标类型、公司、海外仓类型、店龄区间等条件，导出 Excel(.xls) 文件流；无数据或异常时返回 JSON 提示。

## 用法

```bash
mbs oms erp-order-export-chinese-roses --employeeType <string> [--startTime <string>] [--endTime <string>] [--platformId <string>] [--categoryNameList <array>] [--customerServiceMgr <string>] [--shopName <array>] [--employeeName <array>] [--bigChief <array>] [--leaders <array>] [--dateList <array>] [--monthType <array>] [--companyId <string>] [--notFbaHwc <string>] [--opendaySmall <string>] [--opendaysLarge <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/personSaleReport/exportChineseRoses`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 是 | - | 人员类别/业绩口径。1=订单时间业绩;3=发货时间业绩。来源下拉 #orderStaus |
| `startTime` | startTime | body | string | 否 | - | 起始日期(YYYY-MM-DD)。来源 #time1(该输入框在页面中已注释，实际多为空) |
| `endTime` | endTime | body | string | 否 | - | 结束日期(YYYY-MM-DD)。来源 #time2(该输入框在页面中已注释，实际多为空) |
| `platformId` | platformId | body | string | 否 | - | 所属平台ID。来源平台下拉 #reserve11(取值为 PLATFORMID，全部=空) |
| `categoryNameList` | categoryNameList | body | array | 否 | - | 品类名称列表。来源 #categoryNameList 多选，按逗号拆分为数组；未选时传 [] |
| `customerServiceMgr` | customerServiceMgr | body | string | 否 | - | 客户经理(多选，逗号拼接字符串)。来源 #custService；未选时传 "" |
| `shopName` | shopName | body | array | 否 | - | 店铺名称列表。来源 Vue shop，以空格拆分为数组；未选时传 [] |
| `employeeName` | employeeName | body | array | 否 | - | 店长/组员列表(店长名称)。来源 Vue shopmanager |
| `bigChief` | bigChief | body | array | 否 | - | 大酋长/经理列表(经理ID)。来源 Vue manager |
| `leaders` | leaders | body | array | 否 | - | 总监列表(总监ID)。来源 Vue leaders |
| `dateList` | dateList | body | array | 否 | - | 年月列表(如 2024-01)。来源 #monthList 月份多选，按逗号拆分；未选时传 [] |
| `monthType` | monthType | body | array | 否 | - | 展示指标类型列表。employeeType=1 取自 #shopTypes(收入小计/利润/毛利率/订单量/退款金额/平台费/站内推广费)；employeeType=3 取自 #shopTypes2(发货小计/利润/毛利率/运营毛利率/订单量/退款金额/平台费/站内推广费)；未选时传 [] |
| `companyId` | companyId | body | string | 否 | - | 公司ID。来源公司下拉 #componey(companyid) |
| `notFbaHwc` | notFbaHwc | body | string | 否 | - | 海外仓类型。""=请选择;0=全部;1=真实海外仓;2=虚拟海外仓。来源 #notFbaHwc |
| `opendaySmall` | opendaySmall | body | string | 否 | - | 店龄(店铺天数)区间-起始。来源 #opendaySmall |
| `opendaysLarge` | opendaysLarge | body | string | 否 | - | 店龄(店铺天数)区间-结束。来源 #opendaysLarge |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(JSON 分支，HTTP 200，业务异常时返回)(待人工确认) | - |
| `desc` | string | 提示信息(JSON 分支，前端 alert(obj.desc) 展示，如无数据提示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
