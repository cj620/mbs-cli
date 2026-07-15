<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-item-specifics-by-category-id-smt-singlepublish-controller

根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics

## 用法

```bash
mbs pim instudio-pms-find-item-specifics-by-category-id-smt-singlepublish-controller [--name <string>] [--site <string>] [--vtype <string>] [--spu <string>] [--categoryid <string>] [--id <string>] [--attributeName <string>] [--searchParam <string>] [--title <string>] [--shopname <string>] [--shopId <string>] [--empName <string>] [--shipto <string>] [--idList <array<string>>] [--skuList <array<string>>] [--commonConfigId <string>] [--smtFreightTempleConfigurationListTotal <array<object>>] [--moneyRateUSD <number>] [--skuMaxWeight <number>] [--picStyle <string>] [--imageUrl <string>] [--imageUrlLocal <string>] [--subject <string>] [--locale <string>] [--forecastMode <string>] [--isFilterByPermission <string>] [--cycleStart <string>] [--cycleEnd <string>] [--except <string>] [--productId <string>] [--srcShop <string>] [--targetShop <string>] [--erpSpu <string>] [--oper <string>] [--operId <string>] [--targetShopList <array<string>>] [--platform <string>] [--url <string>] [--keyword <string>] [--hsCode <string>] [--itemSpecifics <string>] [--selectedValueJson <string>] [--isJitb <integer>] [--itemId <string>] [--languageList <array<string>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/smtSinglepublishController/findItemSpecificsByCategoryId`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `name` | name | body | string | 否 | - | 名称（字段名推断,语义待核实） |
| `site` | site | body | string | 否 | - | 站点（字段名推断,语义待核实） |
| `vtype` | vtype | body | string | 否 | - | Vtype（字段名推断,语义待核实） |
| `spu` | spu | body | string | 否 | - | SPU（字段名推断,语义待核实） |
| `categoryid` | categoryid | body | string | 否 | - | 类目ID（字段名推断,语义待核实） |
| `id` | id | body | string | 否 | - | ID（字段名推断,语义待核实） |
| `attributeName` | attributeName | body | string | 否 | - | 属性名称（字段名推断,语义待核实） |
| `searchParam` | searchParam | body | string | 否 | - | 搜索参数（字段名推断,语义待核实） |
| `title` | title | body | string | 否 | - | 标题（字段名推断,语义待核实） |
| `shopname` | shopname | body | string | 否 | - | 店铺名称（字段名推断,语义待核实） |
| `shopId` | shopId | body | string | 否 | - | 店铺ID（字段名推断,语义待核实） |
| `empName` | empName | body | string | 否 | - | EMP名称（字段名推断,语义待核实） |
| `shipto` | shipto | body | string | 否 | - | Shipto（字段名推断,语义待核实） |
| `idList` | idList | body | array<string> | 否 | - | ID列表（字段名推断,语义待核实） |
| `skuList` | skuList | body | array<string> | 否 | - | SKU列表（字段名推断,语义待核实） |
| `commonConfigId` | commonConfigId | body | string | 否 | - | 通用配置ID（字段名推断,语义待核实） |
| `smtFreightTempleConfigurationListTotal` | smtFreightTempleConfigurationListTotal | body | array<object> | 否 | - | 速卖通运费Temple配置列表总数（字段名推断,语义待核实） |
| `moneyRateUSD` | moneyRateUSD | body | number | 否 | - | 金额比率美元（字段名推断,语义待核实） |
| `skuMaxWeight` | skuMaxWeight | body | number | 否 | - | SKU最大重量（字段名推断,语义待核实） |
| `picStyle` | picStyle | body | string | 否 | - | 图片样式（字段名推断,语义待核实） |
| `imageUrl` | imageUrl | body | string | 否 | - | 图片URL（字段名推断,语义待核实） |
| `imageUrlLocal` | imageUrlLocal | body | string | 否 | - | 图片URL本地（字段名推断,语义待核实） |
| `subject` | subject | body | string | 否 | - | 科目（字段名推断,语义待核实） |
| `locale` | locale | body | string | 否 | - | 地区语言（字段名推断,语义待核实） |
| `forecastMode` | forecastMode | body | string | 否 | - | Forecast模式（字段名推断,语义待核实） |
| `isFilterByPermission` | isFilterByPermission | body | string | 否 | - | 是否过滤人权限（字段名推断,语义待核实） |
| `cycleStart` | cycleStart | body | string | 否 | - | 期数开始（字段名推断,语义待核实） |
| `cycleEnd` | cycleEnd | body | string | 否 | - | 期数结束（字段名推断,语义待核实） |
| `except` | except | body | string | 否 | - | Except（字段名推断,语义待核实） |
| `productId` | productId | body | string | 否 | - | 商品ID（字段名推断,语义待核实） |
| `srcShop` | srcShop | body | string | 否 | - | SRC店铺（字段名推断,语义待核实） |
| `targetShop` | targetShop | body | string | 否 | - | 目标店铺（字段名推断,语义待核实） |
| `erpSpu` | erpSpu | body | string | 否 | - | ERPSPU（字段名推断,语义待核实） |
| `oper` | oper | body | string | 否 | - | 操作（字段名推断,语义待核实） |
| `operId` | operId | body | string | 否 | - | 操作ID（字段名推断,语义待核实） |
| `targetShopList` | targetShopList | body | array<string> | 否 | - | 目标店铺列表（字段名推断,语义待核实） |
| `platform` | platform | body | string | 否 | - | 平台（字段名推断,语义待核实） |
| `url` | url | body | string | 否 | - | URL（字段名推断,语义待核实） |
| `keyword` | keyword | body | string | 否 | - | 关键词（字段名推断,语义待核实） |
| `hsCode` | hsCode | body | string | 否 | - | HS编码（字段名推断,语义待核实） |
| `itemSpecifics` | item_specifics | body | string | 否 | - | 条目Specifics（字段名推断,语义待核实） |
| `selectedValueJson` | selectedValueJson | body | string | 否 | - | Selected值JSON（字段名推断,语义待核实） |
| `isJitb` | isJitb | body | integer | 否 | - | 是否JITB（字段名推断,语义待核实） |
| `itemId` | itemId | body | string | 否 | - | 条目ID（字段名推断,语义待核实） |
| `languageList` | languageList | body | array<string> | 否 | - | 语言列表（字段名推断,语义待核实） |

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
