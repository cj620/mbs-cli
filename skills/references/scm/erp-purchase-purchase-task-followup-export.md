# mbs scm erp-purchase-purchase-task-followup-export

采购任务跟进导出：将「今日采购跟进」页面当前筛选条件（downloadparams）下的采购跟进任务列表导出为 Excel 文件。前端点击导出按钮触发 outdown()，POST 请求体为最近一次任务类型为1(今日必跟进)或14(今日已跟进)的查询条件，后端返回 xlsx 二进制流，前端以 Blob 下载。

## 用法

```bash
mbs scm erp-purchase-purchase-task-followup-export --searchType <string> [--filtertype <string>] [--keyword <string>] [--salesStatus <string>] [--downOrderOper <string>] [--endInportTime <string>] [--startInportTime <string>] [--purchaseOper <string>] [--status <string>] [--fieldStr <string>] [--dateType <string>] [--hwcType <string>] [--customFilter <string>] [--paymenttype <string>] [--companyId <string>] [--storageIdList <array>] [--stepname <string>] [--page <number>]
```

## API

- Service: `erpPurchase`
- Method: `POST`
- Path: `/erpPurchase/erpPurchase/purchaseDevelop/purchaseTaskFollowupExport`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `searchType` | searchType | body | string | 是 | - | 任务类型/搜索类型。导出仅在 1=今日必跟进、14=今日已跟进 两个Tab生效 |
| `filtertype` | filtertype | body | string | 否 | - | 筛选类型：1=批次;2=商品编号;3=运单号;4=供应商;5=平台单号 |
| `keyword` | keyword | body | string | 否 | - | 关键词，含义随 filtertype 变化(批次号/商品编号/运单号/供应商/平台单号) |
| `salesStatus` | salesStatus | body | string | 否 | - | 销量级别(取值为销量级别下拉项id，选项来自 /erpProduct/erpProduct/product/getProductType) |
| `downOrderOper` | downOrderOper | body | string | 否 | - | 下单人(文本输入) |
| `endInportTime` | endInportTime | body | string | 否 | - | 结束时间(#endTime，配合dateType的时间区间结束日) |
| `startInportTime` | startInportTime | body | string | 否 | - | 开始时间(#startTime，配合dateType的时间区间开始日) |
| `purchaseOper` | purchaseOper | body | string | 否 | - | 采购员(#buyer，选项来自 /erpProduct/erpProduct/product/getEmpByDep?depId=65) |
| `status` | status | body | string | 否 | - | 采购状态：新采购/审批/采购中/已完成/签收 等 |
| `fieldStr` | fieldStr | body | string | 否 | - | 排序方式字段：nvl(sum(a.ordernum),0)=按采购数量倒序、nvl(sum(b.fineAmount),0)=按罚款金额倒序、nvl(sum(b.outOfStockNum),0)=按缺货量倒序 等 |
| `dateType` | dateType | body | string | 否 | - | 日期类型(默认1)：1=下单时间;2=申请退款时间;3=退款完成时间 |
| `hwcType` | hwcType | body | string | 否 | - | 海外/直邮采购类型：0=直邮采购单;1=FBA采购单;2=三方海外仓采购单 |
| `customFilter` | customFilter | body | string | 否 | - | 自定义筛选：0=已填运单号;1=未填运单号;2=采样批次;3=非采样批次;4=TK30天出单 等 |
| `paymenttype` | paymenttype | body | string | 否 | - | 付款方式：胤元1/胤元电子科技/上海路莫斯/河西走廊1688/供应链平台 等 |
| `companyId` | companyId | body | string | 否 | - | 公司ID：1=胤元;33=启元 |
| `storageIdList` | storageIdList | body | array | 否 | - | 仓库ID列表(来自 window.selectedStock?.value，仓库多选组件，默认空数组[]) |
| `stepname` | stepname | body | string | 否 | - | 跟进原因类型(#appendvalue)，仅 searchType 为 1 或 14 时写入 |
| `page` | page | body | number | 否 | - | 当前页码。仅经翻页 findTaskReport 回调导出时携带；首次搜索导出不含该字段 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `(binary)` | unknown | Excel(.xlsx) 二进制文件流，前端以 Blob 下载，无 JSON 字段结构 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
