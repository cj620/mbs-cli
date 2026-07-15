# mbs pim instudio-pms-find-category-by-spu-ebay-singlepublish-info-controller

根据SPU查询分类：根据SPU查询分类

## 用法

```bash
mbs pim instudio-pms-find-category-by-spu-ebay-singlepublish-info-controller [--name <string>] [--site <string>] [--vtype <string>] [--spu <string>] [--categoryid <string>] [--id <integer>] [--attributeName <string>] [--searchParam <string>] [--title <string>] [--shopname <string>] [--empName <string>] [--picStyle <string>] [--idList <array<integer>>] [--siteList <array<object>>] [--isTranslate <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/ebaySinglepublishInfoController/findCategoryBySpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `name` | name | body | string | 否 | - | 名称（字段名推断,语义待核实） |
| `site` | site | body | string | 否 | - | 站点（字段名推断,语义待核实） |
| `vtype` | vtype | body | string | 否 | - | Vtype（字段名推断,语义待核实） |
| `spu` | spu | body | string | 否 | - | SPU（字段名推断,语义待核实） |
| `categoryid` | categoryid | body | string | 否 | - | 类目ID（字段名推断,语义待核实） |
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `attributeName` | attributeName | body | string | 否 | - | 属性名称（字段名推断,语义待核实） |
| `searchParam` | searchParam | body | string | 否 | - | 搜索参数（字段名推断,语义待核实） |
| `title` | title | body | string | 否 | - | 标题（字段名推断,语义待核实） |
| `shopname` | shopname | body | string | 否 | - | 店铺名称（字段名推断,语义待核实） |
| `empName` | empName | body | string | 否 | - | EMP名称（字段名推断,语义待核实） |
| `picStyle` | picStyle | body | string | 否 | - | 图片样式（字段名推断,语义待核实） |
| `idList` | idList | body | array<integer> | 否 | - | ID列表（字段名推断,语义待核实） |
| `siteList` | siteList | body | array<object> | 否 | - | 站点列表（字段名推断,语义待核实） |
| `isTranslate` | isTranslate | body | integer | 否 | - | 是否翻译（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].site` | string | 站点。前端使用：待核实 | - |
| `obj.obj[].categoryId` | string | 分类id。前端使用：待核实 | - |
| `obj.obj[].categoryName` | string | 分类名字。前端使用：待核实 | - |
| `obj.obj[].categoryNameAll` | string | 分类名字。前端使用：待核实 | - |
| `obj.obj[].parentCategoryId` | string | 父id。前端使用：待核实 | - |
| `obj.obj[].categoryLevel` | integer | 第几级。前端使用：待核实 | - |
| `obj.obj[].leafCategory` | integer | 1对应的类别是eBay叶子类别，该类别中可能会列出项目。。前端使用：待核实 | - |
| `obj.obj[].bestOffer` | integer | 1:true 有议价 else 0。前端使用：待核实 | - |
| `obj.obj[].createby` | string | Createby（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].createtime` | string | 创建时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].variationsEnabled` | integer | 2支持多属性。前端使用：待核实 | - |
| `obj.obj[].variationsEnabledCn` | string | Variations已启用中文（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
