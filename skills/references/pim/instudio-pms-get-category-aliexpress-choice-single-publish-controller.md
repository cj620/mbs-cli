# mbs pim instudio-pms-get-category-aliexpress-choice-single-publish-controller

查询类目：查询类目(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-get-category-aliexpress-choice-single-publish-controller [--categoryid <string>] [--categoryname <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/aliexpressChoiceSinglePublishController/getCategory`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

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
| `obj.obj[].categoryid` | string | 分类ID。前端使用：否 | - |
| `obj.obj[].categoryname` | string | 分类名称。前端使用：否 | - |
| `obj.obj.list` | string | 列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.allList` | string | 全部列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.filterStr` | string | 过滤字符串（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.categoryName` | string | 类目名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.categoryId` | string | 类目ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
