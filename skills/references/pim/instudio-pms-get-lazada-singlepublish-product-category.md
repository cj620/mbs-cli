<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-lazada-singlepublish-product-category

获取商品分类：获取商品分类

## 用法

```bash
mbs pim instudio-pms-get-lazada-singlepublish-product-category [--id <integer>] [--site <string>] [--categoryId <string>] [--categoryName <string>] [--categoryNameAll <string>] [--parentCategoryId <string>] [--categoryLevel <integer>] [--leafCategory <integer>] [--var <integer>] [--createby <string>] [--createtime <string>] [--variationsEnabled <integer>] [--variationsEnabledCn <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/lazadaSinglepublishInfoController/getLazadaSinglepublishProductCategory`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `site` | site | body | string | 否 | - | 站点 |
| `categoryId` | categoryId | body | string | 否 | - | 分类id |
| `categoryName` | categoryName | body | string | 否 | - | 分类名字 |
| `categoryNameAll` | categoryNameAll | body | string | 否 | - | 分类名字 |
| `parentCategoryId` | parentCategoryId | body | string | 否 | - | 父id |
| `categoryLevel` | categoryLevel | body | integer | 否 | - | 第几级 |
| `leafCategory` | leafCategory | body | integer | 否 | - | 1对应的类别是eBay叶子类别，该类别中可能会列出项目。 |
| `var` | var | body | integer | 否 | - | 1:true 0:false |
| `createby` | createby | body | string | 否 | - | Createby（字段名推断,语义待核实） |
| `createtime` | createtime | body | string | 否 | - | 创建时间（字段名推断,语义待核实） |
| `variationsEnabled` | variationsEnabled | body | integer | 否 | - | 2支持多属性 |
| `variationsEnabledCn` | variationsEnabledCn | body | string | 否 | - | Variations已启用中文（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].site` | string | 站点。前端使用：否 | - |
| `obj.obj[].categoryId` | string | 分类id。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].categoryName` | string | 分类名字。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].categoryNameAll` | string | 分类名字。前端使用：否 | - |
| `obj.obj[].parentCategoryId` | string | 父id。前端使用：否 | - |
| `obj.obj[].categoryLevel` | integer | 第几级。前端使用：否 | - |
| `obj.obj[].leafCategory` | integer | 1对应的类别是eBay叶子类别，该类别中可能会列出项目。。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].var` | integer | 1:true 0:false。前端使用：否 | - |
| `obj.obj[].createby` | string | Createby（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].createtime` | string | 创建时间（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].variationsEnabled` | integer | 2支持多属性。前端使用：否 | - |
| `obj.obj[].variationsEnabledCn` | string | Variations已启用中文（字段名推断,语义待核实）。前端使用：否 | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
