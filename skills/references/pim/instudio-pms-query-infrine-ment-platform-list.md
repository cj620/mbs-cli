<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-query-infrine-ment-platform-list

获取店铺侵权列表：获取店铺侵权列表

## 用法

```bash
mbs pim instudio-pms-query-infrine-ment-platform-list [--id <integer>] [--caseId <integer>] [--caseNumber <string>] [--infringementPlatform <integer>] [--infringementPlatformCn <string>] [--shopName <string>] [--erpCode <string>] [--shopStatus <integer>] [--shopStatusCN <string>] [--collectionPlatform <integer>] [--grossProfit <number>] [--sellQuantity <integer>] [--sellAmount <number>] [--originalCurrency <string>] [--rmbAmount <number>] [--sku <string>] [--salesChief <integer>] [--salesChiefCn <string>] [--salesPerson <integer>] [--salesPersonCn <string>] [--developChief <integer>] [--developChiefCn <string>] [--developer <integer>] [--developerCn <string>] [--companyLegalPerson <string>] [--companyName <string>] [--casePlatformStatus <integer>] [--updateBy <string>] [--updateTime <string>] [--createBy <string>] [--createTime <string>] [--deleteBy <string>] [--deleteTime <string>] [--shopNameList <string>] [--brand <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/infringement/queryInfrineMentPlatformList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `caseId` | caseId | body | integer | 否 | - | 侵权caseId |
| `caseNumber` | caseNumber | body | string | 否 | - | 案件号 |
| `infringementPlatform` | infringementPlatform | body | integer | 否 | - | 侵权平台 |
| `infringementPlatformCn` | infringementPlatformCn | body | string | 否 | - | 侵权平台 中文 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称 |
| `erpCode` | erpCode | body | string | 否 | - | 马帮代号 |
| `shopStatus` | shopStatus | body | integer | 否 | - | 店铺状态 |
| `shopStatusCN` | shopStatusCN | body | string | 否 | - | 店铺状态 (中文) |
| `collectionPlatform` | collectionPlatform | body | integer | 否 | - | 收款平台 |
| `grossProfit` | grossProfit | body | number | 否 | - | 店铺近半年月毛利额 |
| `sellQuantity` | sellQuantity | body | integer | 否 | - | 侵权产品售卖数量 |
| `sellAmount` | sellAmount | body | number | 否 | - | 售卖销售金额 |
| `originalCurrency` | originalCurrency | body | string | 否 | - | 冻结原币种金额（原币） |
| `rmbAmount` | rmbAmount | body | number | 否 | - | 冻结人民币金额 |
| `sku` | sku | body | string | 否 | - | SKU |
| `salesChief` | salesChief | body | integer | 否 | - | 经理 |
| `salesChiefCn` | salesChiefCn | body | string | 否 | - | 销售主管中文（字段名推断,语义待核实） |
| `salesPerson` | salesPerson | body | integer | 否 | - | 销售员 |
| `salesPersonCn` | salesPersonCn | body | string | 否 | - | 销售人员中文（字段名推断,语义待核实） |
| `developChief` | developChief | body | integer | 否 | - | 开发大酋长 |
| `developChiefCn` | developChiefCn | body | string | 否 | - | Develop主管中文（字段名推断,语义待核实） |
| `developer` | developer | body | integer | 否 | - | 开发员 |
| `developerCn` | developerCn | body | string | 否 | - | 开发者中文（字段名推断,语义待核实） |
| `companyLegalPerson` | companyLegalPerson | body | string | 否 | - | 公司法人 |
| `companyName` | companyName | body | string | 否 | - | 公司名称 |
| `casePlatformStatus` | casePlatformStatus | body | integer | 否 | - | 店铺案件状态,记录是否删除 1:删除 0:不删除 |
| `updateBy` | updateBy | body | string | 否 | - | 修改人 |
| `updateTime` | updateTime | body | string | 否 | - | 修改时间 |
| `createBy` | createBy | body | string | 否 | - | 创建人 |
| `createTime` | createTime | body | string | 否 | - | 创建时间 |
| `deleteBy` | deleteBy | body | string | 否 | - | 删除人 |
| `deleteTime` | deleteTime | body | string | 否 | - | 删除时间 |
| `shopNameList` | shopNameList | body | string | 否 | - | 店铺名称列表（字段名推断,语义待核实） |
| `brand` | brand | body | string | 否 | - | 涉及的品牌 |

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
