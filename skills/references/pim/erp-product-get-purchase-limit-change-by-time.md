<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-purchase-limit-change-by-time

导出备货额度变更明细：库存/备货额度管理页「导出额度明细」按钮触发：按提交人、审核人、审核状态、额度状态、SKU、提交时间区间等条件，导出采购/备货额度变更明细。响应为二进制文件流(Excel)，前端以 blob 接收并通过 content-disposition 中的 fileName 生成下载链接。

## 用法

```bash
mbs pim erp-product-get-purchase-limit-change-by-time [--oper <array>] [--checkBy <string>] [--checkStatus <number>] [--saleStatus <number>] [--sku <string>] [--beginTime <string>] [--endTime <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getPurchaseLimitChangeByTime`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `oper` | oper | body | array | 否 | - | 提交人(多选)，选项来自 /yypms/pms/photoOrder/getAllEmp 员工列表，初始为空数组 |
| `checkBy` | checkBy | body | string | 否 | - | 审核人，选项同 getAllEmp 员工列表 |
| `checkStatus` | checkStatus | body | number | 否 | - | 审核状态。1=审核通过;2=待审核;3=审核不通过 |
| `saleStatus` | saleStatus | body | number | 否 | - | 额度状态。1=正在销售;2=待销售;3=售空 |
| `sku` | sku | body | string | 否 | - | SKU(多个用英文逗号隔开) |
| `beginTime` | beginTime | body | string | 否 | - | 提交时间-起始(YYYY-MM-DD)，由日期范围选择器 time[0] 覆盖，默认当前时间前30天 |
| `endTime` | endTime | body | string | 否 | - | 提交时间-结束(YYYY-MM-DD)，由日期范围选择器 time[1] 覆盖，默认当前日期 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `data` | unknown | 导出的额度明细文件二进制流(Excel)，前端 URL.createObjectURL(data) 生成下载链接；文件名取自响应头 content-disposition 的 fileName | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
