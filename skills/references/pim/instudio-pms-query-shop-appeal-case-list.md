<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-query-shop-appeal-case-list

查询店铺申诉列表：查询店铺申诉列表

## 用法

```bash
mbs pim instudio-pms-query-shop-appeal-case-list [--id <integer>] [--platformId <integer>] [--erpCode <integer>] [--erpCodeCn <string>] [--salesPerson <integer>] [--salesPersonCn <string>] [--shopStatus <integer>] [--freezeReason <integer>] [--dockingChannel <integer>] [--rmbAmount <number>] [--appealFee <number>] [--dockingAppealTime <string>] [--caseRecoveryTime <string>] [--progresChannel <string>] [--createBy <string>] [--createTime <string>] [--updateBy <string>] [--updateTime <string>] [--deleteBy <string>] [--deleteTime <string>] [--shopAppealStatus <integer>] [--index <integer>] [--page <integer>] [--orderBy <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/infringement/queryShopAppealCaseList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `platformId` | platformId | body | integer | 否 | - | 平台id |
| `erpCode` | erpCode | body | integer | 否 | - | 马帮代号 |
| `erpCodeCn` | erpCodeCn | body | string | 否 | - | 马帮代号(中文) |
| `salesPerson` | salesPerson | body | integer | 否 | - | 销售 |
| `salesPersonCn` | salesPersonCn | body | string | 否 | - | 销售(中文) |
| `shopStatus` | shopStatus | body | integer | 否 | - | 店铺状态 |
| `freezeReason` | freezeReason | body | integer | 否 | - | 冻结原因 |
| `dockingChannel` | dockingChannel | body | integer | 否 | - | 对接渠道 |
| `rmbAmount` | rmbAmount | body | number | 否 | - | 总押款(人民币） |
| `appealFee` | appealFee | body | number | 否 | - | 申诉费用 |
| `dockingAppealTime` | dockingAppealTime | body | string | 否 | - | 对接申诉时间 |
| `caseRecoveryTime` | caseRecoveryTime | body | string | 否 | - | case恢复时间 |
| `progresChannel` | progresChannel | body | string | 否 | - | 申诉进度及渠道反馈 |
| `createBy` | createBy | body | string | 否 | - | 创建人 |
| `createTime` | createTime | body | string | 否 | - | 创建时间 |
| `updateBy` | updateBy | body | string | 否 | - | 修改人 |
| `updateTime` | updateTime | body | string | 否 | - | 修改时间 |
| `deleteBy` | deleteBy | body | string | 否 | - | 修改人 |
| `deleteTime` | deleteTime | body | string | 否 | - | 修改时间 |
| `shopAppealStatus` | shopAppealStatus | body | integer | 否 | - | 店铺状态 |
| `index` | index | body | integer | 否 | - | 页数 |
| `page` | page | body | integer | 否 | - | 每页展示多少条 |
| `orderBy` | orderBy | body | integer | 否 | - | 排序方式,0:倒序 1:升序 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
