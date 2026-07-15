# mbs fars erp-fin-manage-data-parallel-tk-voucher-provision-fetcher

TikTok计提冲销凭证拉取(列表查询)：TikTok平台「计提冲销」凭证并行拉取的列表分页查询：按订单编号、结算单号、店铺名称、创建(付款)时间区间、所属公司等条件筛选，分页返回交易号、发货时间、店铺、平台费、物流费、币种、汇率、上传人、公司等字段。?type=1 为固定查询参数。

## 用法

```bash
mbs fars erp-fin-manage-data-parallel-tk-voucher-provision-fetcher [--orderIds <array>] [--settlementIds <array>] [--shopName <string>] [--shortCreateTime <string>] [--longCreateTime <string>] [--companyId <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpFinManageData`
- Method: `POST`
- Path: `/erpFinManageData/erpFinManageData/finance/parallelTkVoucherProvisionFetcher`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderIds` | orderIds | body | array | 否 | - | 订单编号(交易号)，输入框按空格拆分为字符串数组，空时为[] |
| `settlementIds` | settlementIds | body | array | 否 | - | 结算单号，输入框按空格拆分为字符串数组，空时为[] |
| `shopName` | shopName | body | string | 否 | - | 店铺名称(模糊匹配) |
| `shortCreateTime` | shortCreateTime | body | string | 否 | - | 创建(付款)时间-起始，默认'' |
| `longCreateTime` | longCreateTime | body | string | 否 | - | 创建(付款)时间-结束，默认'' |
| `companyId` | companyId | body | string | 否 | - | 所属公司。1=胤元;33=启元 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，默认100，可选100/200/300/400 |
| `page` | page | body | number | 是 | - | 当前页码(从1开始) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `result[]` | array | 数据列表(凭证拉取结果行) | - |
| `result[][0]` | string | 主键ID(表格 row-key、下载选中行 ids) | - |
| `result[][1]` | string | 交易号(订单编号) | - |
| `result[][2]` | string | 发货时间 | - |
| `result[][3]` | string | 店铺(店铺名称) | - |
| `result[][4]` | number | 平台费 | - |
| `result[][5]` | number | 物流费 | - |
| `result[][6]` | string | 币种 | - |
| `result[][7]` | number | 汇率 | - |
| `result[][8]` | number | 公司ID。1=胤元;33=启元(前端转中文展示) | - |
| `result[][9]` | any | 上传人(创建人) | - |
| `result[][10]` | any | 创建时间(待人工确认是否随接口返回) | - |
| `result[][11]` | any | 更新时间(待人工确认是否随接口返回) | - |
| `count` | number | 满足条件的总条数(前端用于分页 page.total) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
