<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-fin-manage-data-parallel-info-process-fetcher

账单反查表查询：TikTok 核对域「账单反查表」列表分页查询：按付款单号/结算单号/店铺名称/所属公司等条件，返回账单反查明细列表（结算/付款单号、店铺、币种、总应收、平台费、物流费、广告费、税费、退款、打款金额、公司等）及总数。

## 用法

```bash
mbs fars erp-fin-manage-data-parallel-info-process-fetcher --type <number> [--paymentIds <array>] [--settlementIds <array>] [--shopName <string>] [--companyId <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpFinManageData`
- Method: `POST`
- Path: `/erpFinManageData/erpFinManageData/finance/parallelInfoProcessFetcher`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `type` | type | body | number | 是 | - | URL 固定查询参数，固定取值 1（接口写死在请求 URL 上） |
| `paymentIds` | paymentIds | body | array | 否 | - | 付款单号；输入框多个以空格分隔，前端按空格拆分为数组（来源控件：Input「付款单号」） |
| `settlementIds` | settlementIds | body | array | 否 | - | 结算单号；输入框多个以空格分隔，前端按空格拆分为数组（来源控件：Input「结算单号」） |
| `shopName` | shopName | body | string | 否 | - | 店铺名称（来源控件：Input「店铺名称」） |
| `companyId` | companyId | body | string | 否 | - | 所属公司。枚举：1=胤元；33=启元（来源控件：Select「所属公司」，默认空） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数；默认 100，分页可选 100/200/300/400（来源控件：t-pagination） |
| `page` | page | body | number | 是 | - | 当前页码；默认 1（来源控件：t-pagination 翻页 / 搜索时传 1） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `count` | number | 满足条件的总记录数（前端用于分页 total） | - |
| `result[]` | array | 账单反查明细列表 | - |
| `result[][0]` | number | 记录ID（表格 row-key，行唯一标识） | - |
| `result[][1]` | string | 结算单号（列「账-结算单号」） | - |
| `result[][2]` | string | 付款单号（列「账-付款单号」） | - |
| `result[][3]` | string | 流水号 | - |
| `result[][4]` | string | 币种（列「币种」） | - |
| `result[][5]` | string | 店铺名称（列「账-店铺名称」） | - |
| `result[][6]` | string | 店铺名称（原/拆分前） | - |
| `result[][7]` | string | 账单总应收（金额，类型待人工确认）（列「账单总应收」） | - |
| `result[][8]` | string | 平台费(结)（金额，类型待人工确认）（列「账-平台费(结)」） | - |
| `result[][9]` | string | 物流费(结)（金额，类型待人工确认）（列「账-物流费(结)」） | - |
| `result[][10]` | string | 广告费(结)（金额，类型待人工确认）（列「账-广告费(结)」） | - |
| `result[][11]` | string | 账单总税费（金额，类型待人工确认）（列「账单总税费」） | - |
| `result[][12]` | string | 退款(结)（金额，类型待人工确认）（列「账-退款(结)」） | - |
| `result[][13]` | string | 打款金额(结)（金额，类型待人工确认）（列「账-打款金额(结)」） | - |
| `result[][14]` | number | 创建时间（时间戳） | - |
| `result[][15]` | number | 来源（业务含义待人工确认） | - |
| `result[][16]` | string | 是否匹配店铺（枚举待人工确认） | - |
| `result[][17]` | string | 是否匹配店铺金额（枚举待人工确认） | - |
| `result[][18]` | number | 所属公司ID（列「公司」，前端 getComName(companyId) 映射公司名展示） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
