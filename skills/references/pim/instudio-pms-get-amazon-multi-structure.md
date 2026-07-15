# mbs pim instudio-pms-get-amazon-multi-structure

获取多变体结构：获取多变体结构

## 用法

```bash
mbs pim instudio-pms-get-amazon-multi-structure [--requestId <string>] [--itemName <string>] [--shopName <string>] [--spu <string>] [--id <integer>] [--productType <string>] [--site <string>] [--variationTheme <string>] [--mainCategory <string>] [--publishType <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/amazon/new/getAmazonMultiStructure`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `requestId` | requestId | body | string | 否 | - | amazon_publish_request表的id |
| `itemName` | itemName | body | string | 否 | - | 标题 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称 |
| `spu` | spu | body | string | 否 | - | spu |
| `id` | id | body | integer | 否 | - | productTypeId |
| `productType` | productType | body | string | 否 | - | 类型 |
| `site` | site | body | string | 否 | - | site |
| `variationTheme` | variationTheme | body | string | 否 | - | 主题类型 |
| `mainCategory` | mainCategory | body | string | 否 | - | 主类目（字段名推断,语义待核实） |
| `publishType` | publishType | body | string | 否 | - | 刊登类型 |

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
