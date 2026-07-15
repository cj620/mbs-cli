<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-vague-search-category

Vague搜索类目：Vague搜索类目(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-vague-search-category [--categoryid <string>] [--categoryname <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/aliexpressChoiceSinglePublishController/vagueSearchCategory`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `categoryid` | categoryid | body | string | 否 | - | 分类ID |
| `categoryname` | categoryname | body | string | 否 | - | 分类名称 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.list` | string | 列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.allList` | string | 全部列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.filterStr` | string | 过滤字符串（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.categoryName` | string | 类目名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.categoryId` | string | 类目ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.label` | string | 标签（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.nameEn` | string | 名称英文（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.nameCn` | string | 名称中文（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.cnFirstCategory` | string | 中文首个类目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.cnSecondCategory` | string | 中文秒类目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.cnCategoryName` | string | 中文类目名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.scrollIntoView` | string | ScrollINTO查看（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.is` | string | 是否（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.origin` | string | 原始（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.firstCategory` | string | 首个类目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.SecondCategory` | string | 秒类目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
