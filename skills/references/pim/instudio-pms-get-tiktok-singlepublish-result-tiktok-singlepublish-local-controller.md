# mbs pim instudio-pms-get-tiktok-singlepublish-result-tiktok-singlepublish-local-controller

获取刊登明细：获取刊登明细

## 用法

```bash
mbs pim instudio-pms-get-tiktok-singlepublish-result-tiktok-singlepublish-local-controller [--page <integer>] [--pageSize <integer>] [--startIndex <integer>] [--operId <string>] [--operIdName <string>] [--erpSpu <string>] [--mainShop <string>] [--categoryId <string>] [--listId <string>] [--localProductId <string>] [--spuSaleAttributeList <array<object>>] [--spuProductAttributeList <array<object>>] [--shopsSplice <string>] [--globalShop <string>] [--publishStatus <integer>] [--listIdList <array<string>>] [--createdByName <string>] [--starttime <string>] [--endtime <string>] [--price5 <integer>] [--site <string>] [--timeOccur <string>] [--targetMainShops <array<string>>] [--otherDtoLocals <array<string>>] [--skuLocalList <array<object>>] [--usdMoneyRate <number>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/tiktokSinglepublishLocalController/getTiktokSinglepublishResult`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | integer | 否 | - | 页码（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `operId` | operId | body | string | 否 | - | 操作ID（字段名推断,语义待核实） |
| `operIdName` | operIdName | body | string | 否 | - | 操作ID名称（字段名推断,语义待核实） |
| `erpSpu` | erpSpu | body | string | 否 | - | ERPSPU（字段名推断,语义待核实） |
| `mainShop` | mainShop | body | string | 否 | - | 主店铺（字段名推断,语义待核实） |
| `categoryId` | categoryId | body | string | 否 | - | 类目ID（字段名推断,语义待核实） |
| `listId` | listId | body | string | 否 | - | 列表ID（字段名推断,语义待核实） |
| `localProductId` | localProductId | body | string | 否 | - | 本地商品ID（字段名推断,语义待核实） |
| `spuSaleAttributeList` | spuSaleAttributeList | body | array<object> | 否 | - | SPU销售属性列表（字段名推断,语义待核实） |
| `spuProductAttributeList` | spuProductAttributeList | body | array<object> | 否 | - | SPU商品属性列表（字段名推断,语义待核实） |
| `shopsSplice` | shopsSplice | body | string | 否 | - | 店铺列表Splice（字段名推断,语义待核实） |
| `globalShop` | globalShop | body | string | 否 | - | 全局店铺（字段名推断,语义待核实） |
| `publishStatus` | publishStatus | body | integer | 否 | - | 刊登状态（字段名推断,语义待核实） |
| `listIdList` | listIdList | body | array<string> | 否 | - | 列表ID列表（字段名推断,语义待核实） |
| `createdByName` | createdByName | body | string | 否 | - | 创建人名称（字段名推断,语义待核实） |
| `starttime` | starttime | body | string | 否 | - | Starttime（字段名推断,语义待核实） |
| `endtime` | endtime | body | string | 否 | - | Endtime（字段名推断,语义待核实） |
| `price5` | price5 | body | integer | 否 | - | 价格5（字段名推断,语义待核实） |
| `site` | site | body | string | 否 | - | 站点（字段名推断,语义待核实） |
| `timeOccur` | timeOccur | body | string | 否 | - | 时间Occur（字段名推断,语义待核实） |
| `targetMainShops` | targetMainShops | body | array<string> | 否 | - | 目标主店铺列表（字段名推断,语义待核实） |
| `otherDtoLocals` | otherDtoLocals | body | array<string> | 否 | - | 其他DTOLocals（字段名推断,语义待核实） |
| `skuLocalList` | skuLocalList | body | array<object> | 否 | - | SKU本地列表（字段名推断,语义待核实） |
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
