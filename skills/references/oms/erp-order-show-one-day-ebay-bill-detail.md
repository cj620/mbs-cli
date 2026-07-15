<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-show-one-day-ebay-bill-detail

某一天eBay账单明细查询：日销报表下钻：根据父页面筛选条件(员工类型/时间区间/平台/分类/店铺/员工/大主管)+指定某一天(currentdate)，分页查询该日 eBay 账单明细，并返回总条数与总页数供前端分页与展示。

## 用法

```bash
mbs oms erp-order-show-one-day-ebay-bill-detail [--employeeType <string>] [--startTime <string>] [--endTime <string>] [--platformId <string>] [--categoryNameList <array>] [--shopName <array>] [--employeeName <array>] [--bigChief <array>] [--currentdate <string>] --page <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/showOneDayEbayBillDetail`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 否 | - | 员工类型(父页面筛选透传，导出时取 params.employeeType) |
| `startTime` | startTime | body | string | 否 | - | 统计起始时间(父页面时间区间-起) |
| `endTime` | endTime | body | string | 否 | - | 统计结束时间(父页面时间区间-止) |
| `platformId` | platformId | body | string | 否 | - | 平台ID(eBay 平台标识，父页面透传) |
| `categoryNameList` | categoryNameList | body | array | 否 | - | 分类名称列表(缺省为空数组 []) |
| `shopName` | shopName | body | array | 否 | - | 店铺名称列表(缺省为空数组 []) |
| `employeeName` | employeeName | body | array | 否 | - | 员工名称列表(缺省为空数组 []) |
| `bigChief` | bigChief | body | array | 否 | - | 大主管(列表，缺省为空数组 []) |
| `currentdate` | currentdate | body | string | 否 | - | 指定的某一天日期(本页由 URL 参数 oneDay 赋值 params.currentdate) |
| `page` | page | body | number | 是 | - | 当前页码(首次固定为 1，分页回调取 api.getCurrent()) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `count` | number | 满足条件的总条数(前端写入 #total，每页100条) | - |
| `countPage` | number | 总页数(传入 pagination 组件 pageCount，控制分页) | - |
| `resultEbay[]` | array | eBay账单明细列表(渲染表格行) | - |
| `resultEbay[][0]` | string | 店铺名 | - |
| `resultEbay[][1]` | string | Ebay账户 | - |
| `resultEbay[][2]` | string | 费用类型 | - |
| `resultEbay[][3]` | string | 费用类型描述 | - |
| `resultEbay[][4]` | string | 发生时间 | - |
| `resultEbay[][5]` | number | 净明细(原币金额) | - |
| `resultEbay[][6]` | number | 增值税率(前端展示拼接 %) | - |
| `resultEbay[][7]` | number | 净明细(人民币) | - |
| `resultEbay[][8]` | number | 汇率 | - |
| `resultEbay[][9]` | string | 相关 itemid | - |
| `resultEbay[][10]` | string | 商品标题 | - |
| `resultEbay[][11]` | string | RefNumber(参考号) | - |
| `resultEbay[][12]` | string | 订单行项目ID(orderLineItemID) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
