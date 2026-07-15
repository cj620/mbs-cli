# mbs pim instudio-pms-export-tk-single-publish-list

导出接口：导出接口

## 用法

```bash
mbs pim instudio-pms-export-tk-single-publish-list [--operId <string>] [--operIdName <string>] [--erpSpu <string>] [--mainShop <string>] [--categoryId <string>] [--listId <string>] [--spuSaleAttributeList <array<object>>] [--spuProductAttributeList <array<object>>] [--shopsSplice <string>] [--globalShop <string>] [--publishStatus <integer>] [--listIdList <array<string>>] [--createdByName <string>] [--starttime <string>] [--endtime <string>] [--spuList <array<string>>] [--ids <array<integer>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/tiktokSinglepublishGlobalController/exportTkSinglePublishList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `operId` | operId | body | string | 否 | - | 操作ID（字段名推断,语义待核实） |
| `operIdName` | operIdName | body | string | 否 | - | 操作ID名称（字段名推断,语义待核实） |
| `erpSpu` | erpSpu | body | string | 否 | - | ERPSPU（字段名推断,语义待核实） |
| `mainShop` | mainShop | body | string | 否 | - | 主店铺（字段名推断,语义待核实） |
| `categoryId` | categoryId | body | string | 否 | - | 类目ID（字段名推断,语义待核实） |
| `listId` | listId | body | string | 否 | - | 列表ID（字段名推断,语义待核实） |
| `spuSaleAttributeList` | spuSaleAttributeList | body | array<object> | 否 | - | SPU销售属性列表（字段名推断,语义待核实） |
| `spuProductAttributeList` | spuProductAttributeList | body | array<object> | 否 | - | SPU商品属性列表（字段名推断,语义待核实） |
| `shopsSplice` | shopsSplice | body | string | 否 | - | 店铺列表Splice（字段名推断,语义待核实） |
| `globalShop` | globalShop | body | string | 否 | - | 全局店铺（字段名推断,语义待核实） |
| `publishStatus` | publishStatus | body | integer | 否 | - | 刊登状态（字段名推断,语义待核实） |
| `listIdList` | listIdList | body | array<string> | 否 | - | 列表ID列表（字段名推断,语义待核实） |
| `createdByName` | createdByName | body | string | 否 | - | 创建人名称（字段名推断,语义待核实） |
| `starttime` | starttime | body | string | 否 | - | Starttime（字段名推断,语义待核实） |
| `endtime` | endtime | body | string | 否 | - | Endtime（字段名推断,语义待核实） |
| `spuList` | spuList | body | array<string> | 否 | - | SPU列表（字段名推断,语义待核实） |
| `ids` | ids | body | array<integer> | 否 | - | ID列表（字段名推断,语义待核实） |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
