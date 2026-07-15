# mbs fars erp-fin-manage-data-parallel-tk-query-lianlian-fetcher

连连反查表(明细)查询：TikTok 平台「连连反查表」明细分页查询：以流水号、店铺名称(拆分后/原)、流水时间区间、所属公司为筛选条件，返回连连流水反查明细列表(流水id/币种/金额/店铺/创建时间/匹配状态/公司)及总记录数。

## 用法

```bash
mbs fars erp-fin-manage-data-parallel-tk-query-lianlian-fetcher [--lid <string>] [--shopName <string>] [--shopNameOld <string>] [--shortCreateDate <string>] [--longCreateDate <string>] [--companyId <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpFinManageData`
- Method: `POST`
- Path: `/erpFinManageData/erpFinManageData/finance/parallelTkQueryLianlianFetcher`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `lid` | lid | body | string | 否 | - | 流水号(对应「流水号」输入框，多个空格分隔) |
| `shopName` | shopName | body | string | 否 | - | 店铺名称(拆分后) |
| `shopNameOld` | shopNameOld | body | string | 否 | - | 店铺名称(原) |
| `shortCreateDate` | shortCreateDate | body | string | 否 | - | 流水时间-起始(「流水时间」日期区间起点) |
| `longCreateDate` | longCreateDate | body | string | 否 | - | 流水时间-结束(「流水时间」日期区间终点) |
| `companyId` | companyId | body | string | 否 | - | 所属公司枚举：1=胤元;33=启元 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(默认100，可选 100/200/300/400) |
| `page` | page | body | number | 是 | - | 当前页码(初始为1) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `count` | number | 满足条件的总记录数(前端赋给分页 total) | - |
| `result[]` | array | 连连反查明细列表 | - |
| `result[][0]` | number | 记录ID(表格 row-key 行主键) | - |
| `result[][1]` | string | 流水id(列「流水id」) | - |
| `result[][2]` | string | 币种(列「币种」) | - |
| `result[][3]` | number | 金额(列「金额」) | - |
| `result[][4]` | string | 店铺(原)(列「店铺(原)」) | - |
| `result[][5]` | string | 店铺(拆分后)(列「店铺(拆分后)」) | - |
| `result[][6]` | number | 创建时间(列「创建时间」，时间戳) | - |
| `result[][7]` | string | 是否匹配店铺&金额(列「是否匹配店铺&金额」) | - |
| `result[][8]` | string | 是否匹配店铺(列「是否匹配店铺」) | - |
| `result[][9]` | number | 公司ID(列「公司」，前端经 getComName(companyId) 转中文展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
