<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-category-by-name-en

根据英文名查询分类：根据英文名查询分类

## 用法

```bash
mbs pim instudio-pms-find-category-by-name-en --name <string> --site <string> --vtype <string>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/ebaySinglepublishInfoController/findCategoryByNameEn`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `name` | name | query | string | 是 | - | 名称（字段名推断,语义待核实） |
| `site` | site | query | string | 是 | - | 站点（字段名推断,语义待核实） |
| `vtype` | vtype | query | string | 是 | - | Vtype（字段名推断,语义待核实） |

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
