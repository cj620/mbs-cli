# mbs pim instudio-pms-id-api-sys-mabang-notice

查询：查询

## 用法

```bash
mbs pim instudio-pms-id-api-sys-mabang-notice
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/api/sysMabangNotice/{id}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | path | integer | 是 | - | ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj.id` | integer | (无说明)。前端使用：待核实 | - |
| `obj.obj.noticeType` | string | (无说明)。前端使用：待核实 | - |
| `obj.obj.createTime` | string | (无说明)。前端使用：待核实 | - |
| `obj.obj.statue` | string | (无说明)。前端使用：待核实 | - |
| `obj.obj.currentPage` | integer | 当前页码（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.pageSize` | integer | 每页条数（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.releaseTime` | string | Release时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.beginCreateTime` | string | (无说明)。前端使用：待核实 | - |
| `obj.obj.endCreateTime` | string | (无说明)。前端使用：待核实 | - |
| `obj.obj.beginReleaseTime` | string | 开始Release时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.endReleaseTime` | string | 结束Release时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.contetnt` | string | Contetnt（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
