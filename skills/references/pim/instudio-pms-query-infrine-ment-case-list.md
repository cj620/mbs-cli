<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-query-infrine-ment-case-list

侵权case列表查询：侵权case列表查询

## 用法

```bash
mbs pim instudio-pms-query-infrine-ment-case-list [--id <integer>] [--caseNumber <string>] [--brand <string>] [--sku <string>] [--frozenAmount <number>] [--settlementAmount <number>] [--lawyerFee <number>] [--receiptRatio <number>] [--receiptRatioPercent <number>] [--currentState <integer>] [--currentStateCN <string>] [--skuPublicationTime <string>] [--prosecutionTime <string>] [--freezingTime <string>] [--absentDay <string>] [--plaintiffLawFirm <string>] [--defendantLawyer <string>] [--casePriority <string>] [--caseProgress <integer>] [--caseProgressCN <string>] [--createBy <string>] [--createTime <string>] [--updateBy <string>] [--updateTime <string>] [--deleteBy <string>] [--deleteTime <string>] [--caseStatus <integer>] [--caseNumberOrSku <string>] [--checkInTime <string>] [--index <integer>] [--page <integer>] [--orderBy <integer>] [--platFormCount <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/infringement/queryInfrineMentCaseList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `caseNumber` | caseNumber | body | string | 否 | - | 案件号 |
| `brand` | brand | body | string | 否 | - | 品牌 |
| `sku` | sku | body | string | 否 | - | sku |
| `frozenAmount` | frozenAmount | body | number | 否 | - | 冻结金额（美金) |
| `settlementAmount` | settlementAmount | body | number | 否 | - | 和解金额（美金） |
| `lawyerFee` | lawyerFee | body | number | 否 | - | 律师费（美金） |
| `receiptRatio` | receiptRatio | body | number | 否 | - | 回款比例 |
| `receiptRatioPercent` | receiptRatioPercent | body | number | 否 | - | 回款比例(百分) |
| `currentState` | currentState | body | integer | 否 | - | 目前状态 |
| `currentStateCN` | currentStateCN | body | string | 否 | - | 案件进程 |
| `skuPublicationTime` | skuPublicationTime | body | string | 否 | - | SKU刊登时间 |
| `prosecutionTime` | prosecutionTime | body | string | 否 | - | 起诉时间 |
| `freezingTime` | freezingTime | body | string | 否 | - | 冻结时间 |
| `absentDay` | absentDay | body | string | 否 | - | 缺席日 |
| `plaintiffLawFirm` | plaintiffLawFirm | body | string | 否 | - | 原告律所 |
| `defendantLawyer` | defendantLawyer | body | string | 否 | - | 被告律师 |
| `casePriority` | casePriority | body | string | 否 | - | 案件优先级 |
| `caseProgress` | caseProgress | body | integer | 否 | - | 案件进程 |
| `caseProgressCN` | caseProgressCN | body | string | 否 | - | 案件进程 |
| `createBy` | createBy | body | string | 否 | - | 创建人 |
| `createTime` | createTime | body | string | 否 | - | 创建时间,格式化(yyyy-MM-dd) GMT+8:防止前端时间少8小时 |
| `updateBy` | updateBy | body | string | 否 | - | 修改人 |
| `updateTime` | updateTime | body | string | 否 | - | 修改时间,格式化(yyyy-MM-dd) GMT+8:防止前端时间少8小时 |
| `deleteBy` | deleteBy | body | string | 否 | - | 删除人 |
| `deleteTime` | deleteTime | body | string | 否 | - | 删除时间,格式化(yyyy-MM-dd) GMT+8:防止前端时间少8小时 |
| `caseStatus` | caseStatus | body | integer | 否 | - | 案件状态,记录是否删除 0表示当前数据正常,1表示删除 |
| `caseNumberOrSku` | caseNumberOrSku | body | string | 否 | - | 查询条件,侵权列表使用,案件或者sku |
| `checkInTime` | checkInTime | body | string | 否 | - | //查询条件,侵权列表使用,登记时间 |
| `index` | index | body | integer | 否 | - | 页数 |
| `page` | page | body | integer | 否 | - | 每页展示多少条 |
| `orderBy` | orderBy | body | integer | 否 | - | 排序方式,0:倒序 1:升序 |
| `platFormCount` | platFormCount | body | integer | 否 | - | 涉及的店铺数量 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].caseNumber` | string | 案件号。前端使用：待核实 | - |
| `obj.obj[].brand` | string | 品牌。前端使用：待核实 | - |
| `obj.obj[].sku` | string | sku。前端使用：待核实 | - |
| `obj.obj[].frozenAmount` | number | 冻结金额（美金)。前端使用：待核实 | - |
| `obj.obj[].settlementAmount` | number | 和解金额（美金）。前端使用：待核实 | - |
| `obj.obj[].lawyerFee` | number | 律师费（美金）。前端使用：待核实 | - |
| `obj.obj[].receiptRatio` | number | 回款比例。前端使用：待核实 | - |
| `obj.obj[].receiptRatioPercent` | number | 回款比例(百分)。前端使用：待核实 | - |
| `obj.obj[].currentState` | integer | 目前状态。前端使用：待核实 | - |
| `obj.obj[].currentStateCN` | string | 案件进程。前端使用：待核实 | - |
| `obj.obj[].skuPublicationTime` | string | SKU刊登时间。前端使用：待核实 | - |
| `obj.obj[].prosecutionTime` | string | 起诉时间。前端使用：待核实 | - |
| `obj.obj[].freezingTime` | string | 冻结时间。前端使用：待核实 | - |
| `obj.obj[].absentDay` | string | 缺席日。前端使用：待核实 | - |
| `obj.obj[].plaintiffLawFirm` | string | 原告律所。前端使用：待核实 | - |
| `obj.obj[].defendantLawyer` | string | 被告律师。前端使用：待核实 | - |
| `obj.obj[].casePriority` | string | 案件优先级。前端使用：待核实 | - |
| `obj.obj[].caseProgress` | integer | 案件进程。前端使用：待核实 | - |
| `obj.obj[].caseProgressCN` | string | 案件进程。前端使用：待核实 | - |
| `obj.obj[].createBy` | string | 创建人。前端使用：待核实 | - |
| `obj.obj[].createTime` | string | 创建时间,格式化(yyyy-MM-dd) GMT+8:防止前端时间少8小时。前端使用：待核实 | - |
| `obj.obj[].updateBy` | string | 修改人。前端使用：待核实 | - |
| `obj.obj[].updateTime` | string | 修改时间,格式化(yyyy-MM-dd) GMT+8:防止前端时间少8小时。前端使用：待核实 | - |
| `obj.obj[].deleteBy` | string | 删除人。前端使用：待核实 | - |
| `obj.obj[].deleteTime` | string | 删除时间,格式化(yyyy-MM-dd) GMT+8:防止前端时间少8小时。前端使用：待核实 | - |
| `obj.obj[].caseStatus` | integer | 案件状态,记录是否删除 0表示当前数据正常,1表示删除。前端使用：待核实 | - |
| `obj.obj[].caseNumberOrSku` | string | 查询条件,侵权列表使用,案件或者sku。前端使用：待核实 | - |
| `obj.obj[].checkInTime` | string | //查询条件,侵权列表使用,登记时间。前端使用：待核实 | - |
| `obj.obj[].index` | integer | 页数。前端使用：待核实 | - |
| `obj.obj[].page` | integer | 每页展示多少条。前端使用：待核实 | - |
| `obj.obj[].orderBy` | integer | 排序方式,0:倒序 1:升序。前端使用：待核实 | - |
| `obj.obj[].platFormCount` | integer | 涉及的店铺数量。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
