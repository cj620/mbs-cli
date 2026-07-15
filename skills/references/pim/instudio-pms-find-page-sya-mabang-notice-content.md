<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-page-sya-mabang-notice-content

分页查询：分页查询

## 用法

```bash
mbs pim instudio-pms-find-page-sya-mabang-notice-content [--id <integer>] [--noticeId <integer>] [--typeName <string>] [--content <string>] [--url <string>] [--createTime <string>] [--status <string>] [--textContent <string>] [--currentPage <integer>] [--pageSize <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/api/syaMabangNoticeContent/findPage`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | (无说明) |
| `noticeId` | noticeId | body | integer | 否 | - | (无说明) |
| `typeName` | typeName | body | string | 否 | - | (无说明) |
| `content` | content | body | string | 否 | - | (无说明) |
| `url` | url | body | string | 否 | - | (无说明) |
| `createTime` | createTime | body | string | 否 | - | (无说明) |
| `status` | status | body | string | 否 | - | 1 |
| `textContent` | textContent | body | string | 否 | - | 文本内容（字段名推断,语义待核实） |
| `currentPage` | currentPage | body | integer | 否 | - | 当前页码（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj.content[]` | array | 数据集合。前端使用：待核实 | - |
| `obj.obj.totalElements` | integer | 总条数。前端使用：待核实 | - |
| `obj.obj.rows[]` | array | 当前页数据列表。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
