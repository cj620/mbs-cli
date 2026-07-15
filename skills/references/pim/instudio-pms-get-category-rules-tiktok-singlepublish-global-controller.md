<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-category-rules-tiktok-singlepublish-global-controller

获取分类规则：获取分类规则

## 用法

```bash
mbs pim instudio-pms-get-category-rules-tiktok-singlepublish-global-controller [--operId <string>] [--operIdName <string>] [--spu <string>] [--erpSpu <string>] [--spuList <array<string>>] [--mainShop <string>] [--firstCategory <string>] [--categoryIdList <array<string>>] [--sites <array<string>>] [--categoryId <string>] [--listId <string>] [--spuSaleAttributeList <array<object>>] [--spuProductAttributeList <array<object>>] [--shopsSplice <string>] [--teamEmployeeNameList <array<string>>] [--globalShop <string>] [--publishStatus <integer>] [--listIdList <array<string>>] [--createdByName <string>] [--starttime <string>] [--endtime <string>] [--publishStarttime <string>] [--publishEndtime <string>] [--publishType <integer>] [--infringed <boolean>] [--targetMainShops <array<string>>] [--skuGlobalList <array<object>>] [--usdMoneyRate <number>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/tiktokSinglepublishGlobalController/getCategoryRules`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `operId` | operId | body | string | 否 | - | 操作ID（字段名推断,语义待核实） |
| `operIdName` | operIdName | body | string | 否 | - | 操作ID名称（字段名推断,语义待核实） |
| `spu` | spu | body | string | 否 | - | SPU（字段名推断,语义待核实） |
| `erpSpu` | erpSpu | body | string | 否 | - | ERPSPU（字段名推断,语义待核实） |
| `spuList` | spuList | body | array<string> | 否 | - | SPU列表（字段名推断,语义待核实） |
| `mainShop` | mainShop | body | string | 否 | - | 主店铺（字段名推断,语义待核实） |
| `firstCategory` | firstCategory | body | string | 否 | - | 首个类目（字段名推断,语义待核实） |
| `categoryIdList` | categoryIdList | body | array<string> | 否 | - | 类目ID列表（字段名推断,语义待核实） |
| `sites` | sites | body | array<string> | 否 | - | Sites（字段名推断,语义待核实） |
| `categoryId` | categoryId | body | string | 否 | - | 类目ID（字段名推断,语义待核实） |
| `listId` | listId | body | string | 否 | - | 列表ID（字段名推断,语义待核实） |
| `spuSaleAttributeList` | spuSaleAttributeList | body | array<object> | 否 | - | SPU销售属性列表（字段名推断,语义待核实） |
| `spuProductAttributeList` | spuProductAttributeList | body | array<object> | 否 | - | SPU商品属性列表（字段名推断,语义待核实） |
| `shopsSplice` | shopsSplice | body | string | 否 | - | 店铺列表Splice（字段名推断,语义待核实） |
| `teamEmployeeNameList` | teamEmployeeNameList | body | array<string> | 否 | - | 团队员工名称列表（字段名推断,语义待核实） |
| `globalShop` | globalShop | body | string | 否 | - | 全局店铺（字段名推断,语义待核实） |
| `publishStatus` | publishStatus | body | integer | 否 | - | 刊登状态（字段名推断,语义待核实） |
| `listIdList` | listIdList | body | array<string> | 否 | - | 列表ID列表（字段名推断,语义待核实） |
| `createdByName` | createdByName | body | string | 否 | - | 创建人名称（字段名推断,语义待核实） |
| `starttime` | starttime | body | string | 否 | - | 创建时间开始时间 |
| `endtime` | endtime | body | string | 否 | - | 创建时间结束时间 |
| `publishStarttime` | publishStarttime | body | string | 否 | - | 刊登时间 |
| `publishEndtime` | publishEndtime | body | string | 否 | - | 刊登Endtime（字段名推断,语义待核实） |
| `publishType` | publishType | body | integer | 否 | - | 0 批量复制 1精品手刊 |
| `infringed` | infringed | body | boolean | 否 | - | 筛选条件：是否侵权 false-否，true-是 |
| `targetMainShops` | targetMainShops | body | array<string> | 否 | - | 目标主店铺列表（字段名推断,语义待核实） |
| `skuGlobalList` | skuGlobalList | body | array<object> | 否 | - | SKU全局列表（字段名推断,语义待核实） |
| `usdMoneyRate` | usdMoneyRate | body | number | 否 | - | 美元金额比率（字段名推断,语义待核实） |

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
