<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-difference-for-ebay

eBay账单差异明细查询：日销售报表-成本明细下钻：根据上级报表查询条件(平台/站点/品类/人员/店铺)+账单日期oneDay+费用类型type，分页查询某日各订单的费用差异明细(订单号、店铺、店长、交易单号、付款交易费及原始金额、币种、费用类型、费用说明、账单时间)。

## 用法

```bash
mbs oms erp-order-find-difference-for-ebay [--employeeType <string>] [--startTime <string>] [--endTime <string>] [--platformIds <array>] [--siteList <array>] [--categoryNameList <array>] [--categoryNameList2 <array>] [--customerServiceMgr <string>] [--shopName <array>] [--employeeName <array>] [--bigChief <array>] --oneDay <string> --type <string> --pageSize <number> --page <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/findDifferenceForEbay`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 否 | - | 人员类别(取自 #orderStaus 下拉,如3=按店铺等) |
| `startTime` | startTime | body | string | 否 | - | 起始日期(取自 #time1) |
| `endTime` | endTime | body | string | 否 | - | 结束日期(取自 #time2) |
| `platformIds` | platformIds | body | array | 否 | - | 平台ID列表(多选 #reserve11,无选择为空数组;枚举:10=站内推广相关、16=wish、18=lazada等,用于分流判断) |
| `siteList` | siteList | body | array | 否 | - | 站点列表(取自 #getSiteList) |
| `categoryNameList` | categoryNameList | body | array | 否 | - | 品类列表(取自品类选择器 #show1/#categoryNameList 标签文本拆分,无选择为空数组) |
| `categoryNameList2` | categoryNameList2 | body | array | 否 | - | 品类列表2(取自 #CategoryList) |
| `customerServiceMgr` | customerServiceMgr | body | string | 否 | - | 客服经理(取自 #custService,多选逗号拼接;无选择为空字符串) |
| `shopName` | shopName | body | array | 否 | - | 店铺(取自 #shopList,按逗号/空白拆分;仅 employeeType=3 时填充,否则空数组) |
| `employeeName` | employeeName | body | array | 否 | - | 组员(取自 #employeeList,无选择为空数组) |
| `bigChief` | bigChief | body | array | 否 | - | 大酋长/店长(取自 #shopManager,无选择为空数组) |
| `oneDay` | oneDay | body | string | 是 | - | 账单日期(从上级报表单元格 currentdate 经查询字符串 oneDay 传入,本页解码后写入 params) |
| `type` | type | body | string | 是 | - | 费用类型(从查询字符串 type 传入,枚举:付款交易费/平台费/站外推广费/罚款/店铺成本/站内推广费等,决定下钻费用维度) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(前端固定50) |
| `page` | page | body | number | 是 | - | 当前页码(首次查询固定为1,分页回调取 api.getCurrent()) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(非200时 alert(desc)) | - |
| `desc` | string | 响应提示信息(失败时弹窗展示) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的明细总条数(写入 #total,页脚"共N条") | - |
| `obj.totalPages` | number | 总页数(传入分页插件 pageCount) | - |
| `obj.rows[]` | array | 费用差异明细列表 | - |
| `obj.rows[][0]` | string | 订单编号(表格链接至 /eshop/order.do?method=edit&orderid=) | - |
| `obj.rows[][1]` | string | 店铺名称 | - |
| `obj.rows[][2]` | string | 店长 | - |
| `obj.rows[][3]` | string | 交易单号 | - |
| `obj.rows[][4]` | number | 付款交易费(RMB,已折算人民币金额) | - |
| `obj.rows[][5]` | number | 原始付款交易费(原始币种金额) | - |
| `obj.rows[][6]` | string | 币种 | - |
| `obj.rows[][7]` | string | 费用类型 | - |
| `obj.rows[][8]` | string | 费用说明 | - |
| `obj.rows[][9]` | string | 账单时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
