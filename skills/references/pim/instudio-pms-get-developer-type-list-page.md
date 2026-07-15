<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-developer-type-list-page

获取开发分类表分页：获取开发分类表分页

## 用法

```bash
mbs pim instudio-pms-get-developer-type-list-page [--classificationId <integer>] [--classificationName <string>] [--description <string>] [--employeeId <integer>] [--createdBy <integer>] [--createdOn <string>] [--developName <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/submitProduct/getDeveloperTypeListPage`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `classificationId` | classificationId | body | integer | 否 | - | ClassificationID（字段名推断,语义待核实） |
| `classificationName` | classificationName | body | string | 否 | - | Classification名称（字段名推断,语义待核实） |
| `description` | description | body | string | 否 | - | 描述（字段名推断,语义待核实） |
| `employeeId` | employeeId | body | integer | 否 | - | 员工ID（字段名推断,语义待核实） |
| `createdBy` | createdBy | body | integer | 否 | - | 创建人（字段名推断,语义待核实） |
| `createdOn` | createdOn | body | string | 否 | - | 创建（字段名推断,语义待核实） |
| `developName` | developName | body | string | 否 | - | Develop名称（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj.total` | integer | 总数（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.totalPages` | integer | 总数Pages（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.rows[]` | array | 行数据（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.success` | boolean | 成功（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.desc` | string | 描述（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.code` | integer | 编码（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.footer[]` | array | Footer（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.sort` | string | 排序（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.order` | string | 订单（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
