# mbs oms erp-order-find-difference

销售报表-差异费用明细查询(findDifference)：日订单时效/销售报表中点击某日某类费用金额时，按上一页报表查询条件(localStorage params)+当日日期 oneDay+费用类型 type 分页查询该费用对应的订单/批次费用明细列表。

## 用法

```bash
mbs oms erp-order-find-difference [--employeeType <string>] [--startTime <string>] [--endTime <string>] [--platformIds <array>] [--siteList <array>] [--categoryNameList <array>] [--categoryNameList2 <array>] [--customerServiceMgr <string>] [--shopName <array>] [--employeeName <array>] [--bigChief <array>] --oneDay <string> --type <string> --pageSize <number> --page <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/findDifference`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 否 | - | 人员类别(取自报表页 #orderStaus；3=按店铺维度时才传 shopName；findDifference 中 employeeType!=='4' 用于站内推广费跳转判断) |
| `startTime` | startTime | body | string | 否 | - | 统计起始日期(报表页 #time1) |
| `endTime` | endTime | body | string | 否 | - | 统计结束日期(报表页 #time2) |
| `platformIds` | platformIds | body | array | 否 | - | 平台ID列表(报表页 #reserve11 多选，无选择时为[]；示例 10/138=SMT,16=wish,18=lazada) |
| `siteList` | siteList | body | array | 否 | - | 站点列表(报表页 #getSiteList) |
| `categoryNameList` | categoryNameList | body | array | 否 | - | 品类列表(报表页品类选择 #show1 的 fs-label，未选为[]) |
| `categoryNameList2` | categoryNameList2 | body | array | 否 | - | 二级品类列表(报表页 #CategoryList) |
| `customerServiceMgr` | customerServiceMgr | body | string | 否 | - | 客服经理(报表页 #custService 多选逗号拼接，未选为空串) |
| `shopName` | shopName | body | array | 否 | - | 店铺(报表页 #shopList，仅 employeeType=3 且有输入时传，否则[]) |
| `employeeName` | employeeName | body | array | 否 | - | 组员(报表页 #employeeList，未选为[]) |
| `bigChief` | bigChief | body | array | 否 | - | 大酋长/店长大区(报表页 #shopManager，未选为[]) |
| `oneDay` | oneDay | body | string | 是 | - | 当日日期(取自 URL 参数 oneDay，即点击的报表单日) |
| `type` | type | body | string | 是 | - | 费用类型(取自 URL 参数 type)。枚举:平台费/付款交易费/罚款/站内推广费/站外推广费/店铺成本 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(findDifference.html 固定置 50) |
| `page` | page | body | number | 是 | - | 当前页码(首次查询固定 1，分页回调取 api.getCurrent()) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(非200时 alert(desc)) | - |
| `desc` | string | 响应提示信息(失败时弹窗展示) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的明细总条数(写入 #total) | - |
| `obj.countPage` | number | 总页数(传入分页控件 pageCount) | - |
| `obj.result[]` | array | 费用明细列表(渲染 #contentTemplate) | - |
| `obj.result[][0]` | string | 订单编号(展示并链接到 /eshop/order.do?method=edit&orderid=) | - |
| `obj.result[][1]` | string | 批次编号(非空时显示 订单号/批次号 并加粗,为批次汇总行) | - |
| `obj.result[][2]` | string | 店铺名称 | - |
| `obj.result[][3]` | string | 费用类型(决定金额列取哪个字段)。枚举:平台费/付款交易费/罚款/站内推广费/站外推广费/店铺成本 | - |
| `obj.result[][4]` | number | 平台费金额(expenseType2=平台费 时展示) | - |
| `obj.result[][5]` | number | 付款交易费金额(expenseType2=付款交易费 时展示) | - |
| `obj.result[][6]` | number | 罚款金额(expenseType2=罚款 时展示) | - |
| `obj.result[][7]` | number | 站内推广费金额(expenseType2=站内推广费 时展示) | - |
| `obj.result[][8]` | number | 站外推广费金额(expenseType2=站外推广费 时展示) | - |
| `obj.result[][9]` | number | 店铺成本金额(expenseType2=店铺成本 时展示) | - |
| `obj.result[][10]` | string | 店长 | - |
| `obj.result[][11]` | string | 费项说明(具体费用项描述) | - |
| `obj.result[][12]` | string | 插入时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
