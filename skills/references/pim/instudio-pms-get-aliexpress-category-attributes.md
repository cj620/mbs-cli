# mbs pim instudio-pms-get-aliexpress-category-attributes

获取分类：获取分类

## 用法

```bash
mbs pim instudio-pms-get-aliexpress-category-attributes [--queryType <string>] [--level <integer>] [--parentCategoryId <integer>] [--keyWord <string>] [--categoryId <integer>] [--shopName <string>] [--shopNames <array<string>>] [--description <string>] [--shopsSplice <string>] [--erpSpu <string>] [--erpSku <string>] [--platformId <integer>] [--picStyle <string>] [--picQueryType <string>] [--descriptionPics <array<string>>] [--selectTypes <array<integer>>] [--selectType <integer>] [--operId <integer>] [--publishSkuList <array<object>>] [--listId <string>] [--listIds <array<string>>] [--findPropertiesBySkus <string>] [--moneyRate <number>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/aliexpressSinglepublishController/getAliexpressCategoryAttributes`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `queryType` | queryType | body | string | 否 | - | 查询类型（字段名推断,语义待核实） |
| `level` | level | body | integer | 否 | - | 级别（字段名推断,语义待核实） |
| `parentCategoryId` | parentCategoryId | body | integer | 否 | - | 父级类目ID（字段名推断,语义待核实） |
| `keyWord` | keyWord | body | string | 否 | - | 键词（字段名推断,语义待核实） |
| `categoryId` | categoryId | body | integer | 否 | - | 类目ID（字段名推断,语义待核实） |
| `shopName` | shopName | body | string | 否 | - | 店铺名称（字段名推断,语义待核实） |
| `shopNames` | shopNames | body | array<string> | 否 | - | 店铺名称列表（字段名推断,语义待核实） |
| `description` | description | body | string | 否 | - | 描述（字段名推断,语义待核实） |
| `shopsSplice` | shopsSplice | body | string | 否 | - | 店铺列表Splice（字段名推断,语义待核实） |
| `erpSpu` | erpSpu | body | string | 否 | - | ERPSPU（字段名推断,语义待核实） |
| `erpSku` | erpSku | body | string | 否 | - | ERPSKU（字段名推断,语义待核实） |
| `platformId` | platformId | body | integer | 否 | - | 平台ID（字段名推断,语义待核实） |
| `picStyle` | picStyle | body | string | 否 | - | 图片样式（字段名推断,语义待核实） |
| `picQueryType` | picQueryType | body | string | 否 | - | 图片查询类型（字段名推断,语义待核实） |
| `descriptionPics` | descriptionPics | body | array<string> | 否 | - | 描述PICS（字段名推断,语义待核实） |
| `selectTypes` | selectTypes | body | array<integer> | 否 | - | 查询Types（字段名推断,语义待核实） |
| `selectType` | selectType | body | integer | 否 | - | 查询类型（字段名推断,语义待核实） |
| `operId` | operId | body | integer | 否 | - | 操作ID（字段名推断,语义待核实） |
| `publishSkuList` | publishSkuList | body | array<object> | 否 | - | 刊登SKU列表（字段名推断,语义待核实） |
| `listId` | listId | body | string | 否 | - | 列表ID（字段名推断,语义待核实） |
| `listIds` | listIds | body | array<string> | 否 | - | 列表ID列表（字段名推断,语义待核实） |
| `findPropertiesBySkus` | findPropertiesBySkus | body | string | 否 | - | 查询属性人SKU列表（字段名推断,语义待核实） |
| `moneyRate` | moneyRate | body | number | 否 | - | 金额比率（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].attribute_show_type_value` | string | 属性展示类型值（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].customized_name` | boolean | Customized名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].customized_pic` | boolean | Customized图片（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].features` | string | Features（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].input_type` | string | Input类型（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].key_attribute` | boolean | 键属性（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].names` | string | 名称列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].required` | boolean | 必填（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].sku` | boolean | SKU（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].spec` | integer | 规格（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].support_enum_input` | boolean | SupportENUMInput（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].values[]` | array | 值列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].visible` | boolean | Visible（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].nameShow` | string | 名称展示（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
