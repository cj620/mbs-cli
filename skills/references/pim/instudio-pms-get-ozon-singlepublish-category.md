# mbs pim instudio-pms-get-ozon-singlepublish-category

获取所有分类：获取所有分类

## 用法

```bash
mbs pim instudio-pms-get-ozon-singlepublish-category [--id <integer>] [--categoryId <string>] [--categoryName <string>] [--categoryNameCN <string>] [--parentCategoryId <string>] [--categoryLevel <integer>] [--categoryNameAll <string>] [--leafCategory <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/ozonSinglepublishInfoController/getOzonSinglepublishCategory`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `categoryId` | categoryId | body | string | 否 | - | 分类id |
| `categoryName` | categoryName | body | string | 否 | - | 分类名字 |
| `categoryNameCN` | categoryNameCN | body | string | 否 | - | 分类名字 |
| `parentCategoryId` | parentCategoryId | body | string | 否 | - | 父id |
| `categoryLevel` | categoryLevel | body | integer | 否 | - | 第几级 |
| `categoryNameAll` | categoryNameAll | body | string | 否 | - | 分类名字 |
| `leafCategory` | leafCategory | body | integer | 否 | - | LEAF类目（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].categoryId` | string | 分类id。前端使用：是（列表行字段,条件判断，行号待核实） | - |
| `obj.obj[].categoryName` | string | 分类名字。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].categoryNameCN` | string | 分类名字。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].parentCategoryId` | string | 父id。前端使用：否 | - |
| `obj.obj[].categoryLevel` | integer | 第几级。前端使用：否 | - |
| `obj.obj[].categoryNameAll` | string | 分类名字。前端使用：否 | - |
| `obj.obj[].leafCategory` | integer | LEAF类目（字段名推断,语义待核实）。前端使用：是（列表行字段,条件判断，行号待核实） | - |
| `obj.obj.symple` | string | Symple（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.filterText` | string | 过滤文本（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.list` | string | 列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.selected` | string | Selected（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sonCategory` | string | SON类目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
