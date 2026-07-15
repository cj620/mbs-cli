# mbs pim instudio-pms-query-page

列表信息：列表信息

## 用法

```bash
mbs pim instudio-pms-query-page [--index <string>] [--sku <string>] [--spu <string>] [--categoryId <string>] [--tagId <string>] [--brandId <string>] [--productname <string>] [--createoper <string>] [--createtimestart <string>] [--createtimeend <string>] [--companyname <string>] --warehouseid <integer> [--positionmname <string>] --skustatus <integer> --orderby <integer>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/product/queryPage`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `index` | index | query | string | 否 | - | 索引（字段名推断,语义待核实） |
| `sku` | sku | query | string | 否 | - | SKU（字段名推断,语义待核实） |
| `spu` | spu | query | string | 否 | - | SPU（字段名推断,语义待核实） |
| `categoryId` | category_id | query | string | 否 | - | 类目ID（字段名推断,语义待核实） |
| `tagId` | tag_id | query | string | 否 | - | 标签ID（字段名推断,语义待核实） |
| `brandId` | brand_id | query | string | 否 | - | 品牌ID（字段名推断,语义待核实） |
| `productname` | productname | query | string | 否 | - | 商品名称（字段名推断,语义待核实） |
| `createoper` | createoper | query | string | 否 | - | 创建人（字段名推断,语义待核实） |
| `createtimestart` | createtimestart | query | string | 否 | - | Createtimestart（字段名推断,语义待核实） |
| `createtimeend` | createtimeend | query | string | 否 | - | Createtimeend（字段名推断,语义待核实） |
| `companyname` | companyname | query | string | 否 | - | Companyname（字段名推断,语义待核实） |
| `warehouseid` | warehouseid | query | integer | 是 | - | Warehouseid（字段名推断,语义待核实） |
| `positionmname` | positionmname | query | string | 否 | - | Positionmname（字段名推断,语义待核实） |
| `skustatus` | skustatus | query | integer | 是 | - | Skustatus（字段名推断,语义待核实） |
| `orderby` | orderby | query | integer | 是 | - | Orderby（字段名推断,语义待核实） |

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
