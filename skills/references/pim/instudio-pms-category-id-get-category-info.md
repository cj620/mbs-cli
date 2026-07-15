<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-category-id-get-category-info

获取分类详情：获取分类详情

## 用法

```bash
mbs pim instudio-pms-category-id-get-category-info
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/category/getCategoryInfo/{categoryId}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `categoryId` | categoryId | path | string | 否 | - | 类目ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj.sequenceid` | string | 序列ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.name` | string | 名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.displayName` | string | 展示名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.parentcategoryid` | string | Parentcategoryid（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.parentcategoryname` | string | Parentcategoryname（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.levelnum` | integer | 分类级别。前端使用：待核实 | - |
| `obj.obj.levelname1` | string | Levelname1（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.levelname2` | string | Levelname2（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.levelname3` | string | Levelname3（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.levelname4` | string | Levelname4（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.levelid1` | string | Levelid1（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.levelid2` | string | Levelid2（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.levelid3` | string | Levelid3（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.levelid4` | string | Levelid4（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.isLeaf` | integer | 是否LEAF（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
