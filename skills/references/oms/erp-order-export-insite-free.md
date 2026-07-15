# mbs oms erp-order-export-insite-free

站内推广费/费项差异核对 导出：差异核对页 findDifference 点击导出，以当前查询条件 params 为请求体，导出指定费项类型的订单/批次费项差异明细 Excel；请求体复用 localStorage params（由 dailyorderTimeReport.html 写入）并追加 oneDay/type/pageSize；响应为二进制 Excel 文件流。

## 用法

```bash
mbs oms erp-order-export-insite-free [--employeeType <string>] [--startTime <string>] [--endTime <string>] [--platformIds <array>] [--siteList <array>] [--categoryNameList <array>] [--categoryNameList2 <array>] [--customerServiceMgr <string>] [--shopName <array>] [--employeeName <array>] [--bigChief <array>] [--oneDay <string>] --type <string> --pageSize <number> [--page <number>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/exportInsiteFree`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 否 | - | 人员类别(来源控件 #orderStaus;==3启用店铺过滤,!=='4'影响smt跳转判定;枚举待人工确认) |
| `startTime` | startTime | body | string | 否 | - | 起始日期(来源控件 #time1,格式 yyyy-MM-dd) |
| `endTime` | endTime | body | string | 否 | - | 结束日期(来源控件 #time2,格式 yyyy-MM-dd) |
| `platformIds` | platformIds | body | array | 否 | - | 平台ID列表(来源控件 #reserve11 多选,空时为[]);含'16'+罚款走罚款分支,'10'/'138'+站内推广费跳转smt报表 |
| `siteList` | siteList | body | array | 否 | - | 站点列表(来源控件 #getSiteList 多选) |
| `categoryNameList` | categoryNameList | body | array | 否 | - | 品类列表(来源树选择 valueData,最终覆盖为树选中值) |
| `categoryNameList2` | categoryNameList2 | body | array | 否 | - | 品类列表2(来源控件 #CategoryList 级联值) |
| `customerServiceMgr` | customerServiceMgr | body | string | 否 | - | 客服经理(来源控件 #custService,多选逗号拼接,空时为"") |
| `shopName` | shopName | body | array | 否 | - | 店铺名称列表(来源控件 #shopList,仅 employeeType==3且有值时取分割结果,否则[]) |
| `employeeName` | employeeName | body | array | 否 | - | 组员(来源控件 #employeeList,空时为[]) |
| `bigChief` | bigChief | body | array | 否 | - | 大酋长/店长(来源控件 #shopManager,空时为[]) |
| `oneDay` | oneDay | body | string | 否 | - | 单日标识(findDifference.html 取自URL查询参数 oneDay) |
| `type` | type | body | string | 是 | - | 费项类型/费项说明(取自URL查询参数 type)。枚举:平台费/付款交易费/罚款/站内推广费/站外推广费/店铺成本(仅站内推广费显示导出按钮) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(findDifference.html 固定置50) |
| `page` | page | body | number | 否 | - | 当前页码(search()置1,分页回调置当前页,导出时取当前 params.page) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `(binary)` | unknown | 二进制 Excel 文件流(Content-Type: application/vnd.ms-excel),前端经 Blob 直接下载为 .xls,无 JSON 字段结构 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
