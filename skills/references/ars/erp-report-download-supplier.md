# mbs ars erp-report-download-supplier

供应商应付下载任务创建：在采购/供应商应付报表页，根据供应商名称、应付金额区间、入库时间区间等筛选条件，向后端提交一个异步下载任务。成功返回 code=200 时弹出创建成功提示，失败用 desc 文案提示。

## 用法

```bash
mbs ars erp-report-download-supplier [--supplierName <string>] [--beginYingFuAmount <string>] [--endYingFuAmount <string>] [--beginReceivedTime <string>] [--endReceivedTime <string>]
```

## API

- Service: `erpReport`
- Method: `POST`
- Path: `/erpReport/erpReport/SupplierPrimaryBatchController/downloadSupplier`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `supplierName` | supplierName | body | string | 否 | - | 供应商名称(来源 el-input「供应商名称」，模糊筛选) |
| `beginYingFuAmount` | beginYingFuAmount | body | string | 否 | - | 最小应付金额(来源 el-input「最小应付金额」，金额下限，单位:元) |
| `endYingFuAmount` | endYingFuAmount | body | string | 否 | - | 最大应付金额(来源 el-input「最大应付金额」，金额上限，单位:元) |
| `beginReceivedTime` | beginReceivedTime | body | string | 否 | - | 入库起始时间(来源 el-date-picker「入库起始时间」，格式 YYYY-MM-DD) |
| `endReceivedTime` | endReceivedTime | body | string | 否 | - | 入库结束时间(来源 el-date-picker「入库结束时间」，格式 YYYY-MM-DD) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=创建下载任务成功 | - |
| `desc` | string | 响应提示信息(失败时直接展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
