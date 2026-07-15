<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-show-amz-bill-detail

亚马逊平台费账单明细查询：销售业绩报表中点击某日「平台费」(发货时间业绩 + 平台=Amazon)下钻，按账单日期分页查询亚马逊平台费账单明细，返回店铺/币种/费用金额/费用类型/订单号/SKU/出账时间等明细行及总条数。

## 用法

```bash
mbs oms erp-order-show-amz-bill-detail [--employeeType <string>] [--startTime <string>] [--endTime <string>] [--openBeginTime <string>] [--openEndTime <string>] --platformIds <array> [--companyIdList <array>] [--siteList <array>] [--categoryNameList <array>] [--customerServiceMgr <string>] [--shopName <array>] [--employeeName <array>] [--bigChief <array>] [--notFbaHwc <string>] [--categoryNameList2 <array>] [--littleLeaders <array>] [--leaders <array>] [--operateStatus <number>] [--whiteList <boolean>] [--groupCompanyId <string>] [--managers <array>] [--shopManagers <array>] --currentdate <string> --page <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/showAmzBillDetail`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 否 | - | 业绩(日期)类型。1=订单时间业绩;3=发货时间业绩(本下钻入口固定为3)。来源:日期类型下拉(dateType) |
| `startTime` | startTime | body | string | 否 | - | 开始时间(yyyy-MM-dd)。来源:开始时间日期选择器 |
| `endTime` | endTime | body | string | 否 | - | 结束时间(yyyy-MM-dd)。来源:结束时间日期选择器 |
| `openBeginTime` | openBeginTime | body | string | 否 | - | 店龄-起始(单位:天)。来源:店龄起始输入框 |
| `openEndTime` | openEndTime | body | string | 否 | - | 店龄-结束(单位:天)。来源:店龄结束输入框 |
| `platformIds` | platformIds | body | array | 是 | - | 平台ID列表。在 amzdetail.vue 中被强制覆盖为 [2](Amazon)。来源:平台多选(pingtai) |
| `companyIdList` | companyIdList | body | array | 否 | - | 地区/公司ID列表。来源:公司(地区)多选下拉(company) |
| `siteList` | siteList | body | array | 否 | - | 站点列表。来源:站点多选下拉(zhandian) |
| `categoryNameList` | categoryNameList | body | array | 否 | - | 一级类目名称列表(仅 employeeType=3 显示)。来源:一级类目多选(firstCategory) |
| `customerServiceMgr` | customerServiceMgr | body | string | 否 | - | 客户经理(多选逗号拼接)。来源:客户经理多选(jl) |
| `shopName` | shopName | body | array | 否 | - | 店铺名称列表(多个以空格分隔后拆分)。来源:店铺多选/可输入(shop) |
| `employeeName` | employeeName | body | array | 否 | - | 店长(取 shopmanager)。来源:店长多选下拉 |
| `bigChief` | bigChief | body | array | 否 | - | 经理(取 manager)。来源:经理多选下拉 |
| `notFbaHwc` | notFbaHwc | body | string | 否 | - | 海外仓类型(仅 employeeType=1 显示)。0=海外仓;1=真实海外仓;2=虚拟海外仓;3=直销。来源:海外仓类型下拉(ordertype) |
| `categoryNameList2` | categoryNameList2 | body | array | 否 | - | 二级类目名称列表(仅 employeeType=3 显示)。来源:二级类目多选(secondCategory) |
| `littleLeaders` | littleLeaders | body | array | 否 | - | 主管。来源:主管多选下拉(littleLeaders) |
| `leaders` | leaders | body | array | 否 | - | 总监。来源:总监多选下拉(leader) |
| `operateStatus` | operateStatus | body | number | 否 | - | 运营状态。1=运营中;2=暂停运营;3=永久关闭中。来源:运营状态下拉(operateStatus) |
| `whiteList` | whiteList | body | boolean | 否 | - | 是否白名单。true=是;false=否。来源:是否白名单下拉(whitelist) |
| `groupCompanyId` | groupCompanyId | body | string | 否 | - | 集团/总公司ID(仅当选择了总公司 headCompany 时才写入)。来源:公司(总公司)下拉 |
| `managers` | managers | body | array | 否 | - | 经理(ship 类型补充，取 manager，与 bigChief 同源) |
| `shopManagers` | shopManagers | body | array | 否 | - | 店长(ship 类型补充，取 shopmanager，与 employeeName 同源) |
| `currentdate` | currentdate | body | string | 是 | - | 账单日期。来源:route.query.day(上级业绩页点击某日「平台费」传入) |
| `page` | page | body | number | 是 | - | 当前页码(分页组件 current-change，默认 1，每页 100 条) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(待人工确认) | - |
| `desc` | string | 响应提示信息(待人工确认) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的明细总条数(前端用于分页 total) | - |
| `obj.rows[]` | array | 平台费账单明细行列表 | - |
| `obj.rows[][0]` | string | 店铺名称 | - |
| `obj.rows[][1]` | string | 店长 | - |
| `obj.rows[][2]` | string | 币种 | - |
| `obj.rows[][3]` | number | 汇率 | - |
| `obj.rows[][4]` | number | 原始费用金额(原币种金额) | - |
| `obj.rows[][5]` | number | RMB金额(折算人民币) | - |
| `obj.rows[][6]` | string | 费用类型 | - |
| `obj.rows[][7]` | string | 费用类型描述 | - |
| `obj.rows[][8]` | string | ITEM类型 | - |
| `obj.rows[][9]` | string | ITEMID | - |
| `obj.rows[][10]` | string | 订单号(前端链接至 /mabang-new/orderdetail.html?orderid={orderId}) | - |
| `obj.rows[][11]` | string | SKU | - |
| `obj.rows[][12]` | string | 交易单号 | - |
| `obj.rows[][13]` | string | 出账时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
