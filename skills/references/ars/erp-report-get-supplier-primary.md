# mbs ars erp-report-get-supplier-primary

供应商初付/批次明细查询：按供应商名称、平台单号、应付金额区间、入库时间区间分页查询供应商应付（初付）汇总数据，返回每条供应商应付记录及其下挂的批次入库明细列表（批次号/单价/入库数量/邮费/入库时间/采购时间）。

## 用法

```bash
mbs ars erp-report-get-supplier-primary [--supplierName <string>] [--orderNumber <string>] [--beginYingFuAmount <string>] [--endYingFuAmount <string>] [--beginReceivedTime <string>] [--endReceivedTime <string>] --page <number> --size <number>
```

## API

- Service: `erpReport`
- Method: `POST`
- Path: `/erpReport/erpReport/SupplierPrimaryBatchController/getSupplierPrimary`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `supplierName` | supplierName | body | string | 否 | - | 供应商名称（来源输入框「供应商名称」，模糊查询） |
| `orderNumber` | orderNumber | body | string | 否 | - | 平台单号（来源输入框「平台单号」） |
| `beginYingFuAmount` | beginYingFuAmount | body | string | 否 | - | 最小应付金额（来源输入框「最小应付金额」，金额下限，单位：元） |
| `endYingFuAmount` | endYingFuAmount | body | string | 否 | - | 最大应付金额（来源输入框「最大应付金额」，金额上限，单位：元） |
| `beginReceivedTime` | beginReceivedTime | body | string | 否 | - | 入库起始时间（来源日期选择器「入库起始时间」，type=date） |
| `endReceivedTime` | endReceivedTime | body | string | 否 | - | 入库结束时间（来源日期选择器「入库结束时间」，type=date） |
| `page` | page | body | number | 是 | - | 当前页码（分页组件 current-change 传入，默认 1，由 unproxy 覆盖写入） |
| `size` | size | body | number | 是 | - | 每页条数（分页组件 size，默认 50，可选 50/100/150/200） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `rows[]` | array | 供应商应付记录列表（表格数据源） | - |
| `rows[][0]` | string | 供应商名称（表格列「商品名称」prop=supplierName 展示） | - |
| `rows[][1]` | string | 平台单号 | - |
| `rows[][2]` | number | 结算金额（单位：元） | - |
| `rows[][3]` | number | 应付金额（单位：元） | - |
| `rows[][4]` | string | 店铺名称（表格列「批次号」prop=shopName，实际单元格渲染批次明细列表） | - |
| `rows[][5][]` | array | 批次入库明细列表（同一供应商应付记录下的多条批次） | - |
| `rows[][5][][0]` | string | 批次号（表格列「批次号」逐行展示） | - |
| `rows[][5][][1]` | number | 单价/已收金额（表格列「单价」，单位：元） | - |
| `rows[][5][][2]` | number | 入库数量（表格列「入库数量」） | - |
| `rows[][5][][3]` | number | 邮费（表格列「邮费」，单位：元） | - |
| `rows[][5][][4]` | string | 入库时间（表格列「入库时间」，前端取前11位 slice(0,11) 展示） | - |
| `rows[][5][][5]` | string | 采购时间（表格列「采购时间」，前端取前11位 slice(0,11) 展示） | - |
| `total` | number | 满足条件的总记录数（分页组件 total） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
