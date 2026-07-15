# mbs fars erp-fin-manage-data-parallel-tk-reference-refund

凭证退款参考(账单反查表)查询：TikTok 平台「凭证退款参考」页面账单反查表分页查询：按流水号、店铺名称、所属公司过滤，返回退款金额/冲回金额/差值、凭证字、辅助核算、应收账款等账单反查行数据及总数。

## 用法

```bash
mbs fars erp-fin-manage-data-parallel-tk-reference-refund --type <number> [--lid <string>] [--shopName <string>] [--companyId <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpFinManageData`
- Method: `POST`
- Path: `/erpFinManageData/erpFinManageData/finance/parallelTkReferenceRefund`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `type` | type | query | number | 是 | - | 账单反查类型，URL 固定传 1 |
| `lid` | lid | body | string | 否 | - | 流水号，来源搜索框(Input)，多个以空格分隔 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称，来源搜索框(Input) |
| `companyId` | companyId | body | string | 否 | - | 所属公司，来源下拉(Select)。枚举：1=胤元;33=启元 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，来源分页器，默认100，可选100/200/300/400 |
| `page` | page | body | number | 是 | - | 当前页码，来源分页器，默认1 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `result[]` | array | 账单反查表数据行列表 | - |
| `result[][0]` | number | 记录ID(表格 row-key，行勾选/下载选中标识) | - |
| `result[][1]` | string | 店铺 | - |
| `result[][2]` | string | 币种(原始) | - |
| `result[][3]` | number | 退款金额(原始) | - |
| `result[][4]` | number | 退款冲回金额(原始) | - |
| `result[][5]` | number | 退款差值 | - |
| `result[][6]` | string | 凭证字(收,付,转,记) | - |
| `result[][7]` | string | 标签(备注) | - |
| `result[][8]` | string | 分析账户(平台) | - |
| `result[][9]` | string | 辅助核算(店铺/供应商) | - |
| `result[][10]` | string | 凭证时间 | - |
| `result[][11]` | number | 营业退款 | - |
| `result[][12]` | string | 币种(应收账款科目501对应) | - |
| `result[][13]` | number | 应收账款 | - |
| `result[][14]` | string | 币种(科目106对应) | - |
| `result[][15]` | number | 公司ID(前端经 getComName 转公司名展示) | - |
| `count` | number | 满足条件总记录数(前端赋值给分页 total) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
