# mbs pim instudio-pms-query-infrine-ment-category

查询侵权case的字典表(infinge_code)：查询侵权case的字典表(infinge_code)

## 用法

```bash
mbs pim instudio-pms-query-infrine-ment-category [--id <integer>] [--infingeId <integer>] [--infingeName <string>] [--infingeFlag <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/infringement/queryInfrineMentCategory`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `infingeId` | infingeId | body | integer | 否 | - | 下拉框id |
| `infingeName` | infingeName | body | string | 否 | - | 下拉框内容 |
| `infingeFlag` | infingeFlag | body | string | 否 | - | 标识 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].infingeId` | integer | 下拉框id。前端使用：待核实 | - |
| `obj.obj[].infingeName` | string | 下拉框内容。前端使用：待核实 | - |
| `obj.obj[].infingeFlag` | string | 标识。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
