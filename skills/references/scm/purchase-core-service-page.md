# mbs scm purchase-core-service-page

降本明细分页查询：降本优化报表「降本明细」页签的多条件分页查询：支持降本时间、入库时间区间、SPU、SKU、降本人、排序方式等筛选，返回降本明细列表（SPU/SKU/产品名/供应商/降本前后金额/降本差额/下降比率/累计降本金额）及总条数。

## 用法

```bash
mbs scm purchase-core-service-page [--downCostStartDate <string>] [--downCostEndDate <string>] [--stockStartDate <string>] [--stockEndDate <string>] [--spu <string>] [--sku <string>] [--downCostPerson <string>] [--orderBy <number>] [--total <number>] --page <number> --pageSize <number>
```

## API

- Service: `purchase-core-service`
- Method: `POST`
- Path: `/gateway/purchase-core-service/down/cost/report/page`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `downCostStartDate` | downCostStartDate | body | string | 否 | - | 降本时间-起始（降本时间 datePicker 起始） |
| `downCostEndDate` | downCostEndDate | body | string | 否 | - | 降本时间-结束（降本时间 datePicker 结束） |
| `stockStartDate` | stockStartDate | body | string | 否 | - | 入库时间-起始（入库时间 datePicker 起始） |
| `stockEndDate` | stockEndDate | body | string | 否 | - | 入库时间-结束（入库时间 datePicker 结束） |
| `spu` | spu | body | string | 否 | - | SPU（SPU 输入框） |
| `sku` | sku | body | string | 否 | - | SKU（SKU 输入框） |
| `downCostPerson` | downCostPerson | body | string | 否 | - | 降本人（降本人 输入框） |
| `orderBy` | orderBy | body | number | 否 | - | 排序方式（默认 null 不排序）。1=降本差额降序；2=下降比率降序；3=累计降本金额降序 |
| `total` | total | body | number | 否 | - | 总条数（来源 detailPageInfo.total，初始 0，随请求带出） |
| `page` | page | body | number | 是 | - | 当前页码（来源 detailPageInfo.page，请求前置为传入 index，默认 1） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（来源 detailPageInfo.pageSize，默认 100） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `items[]` | array | 降本明细列表 | - |
| `items[][0]` | string | SPU（商品SPU编号） | - |
| `items[][1]` | string | SKU（商品SKU编号） | - |
| `items[][2]` | string | 产品名称 | - |
| `items[][3]` | string | 供应商（departmentId=54 时前端像素遮罩展示） | - |
| `items[][4]` | number | 降本前金额 | - |
| `items[][5]` | number | 谈妥的采购价（降本后采购价） | - |
| `items[][6]` | number | 降本差额 | - |
| `items[][7]` | number | 下降比率 | - |
| `items[][8]` | number | 累计降本金额 | - |
| `total` | number | 满足条件的总条数（前端回填分页组件 total） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
