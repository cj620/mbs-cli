<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-page-ozon-template

分页查询 Ozon SPU 类目模板列表：分页查询 Ozon SPU 类目模板列表

## 用法

```bash
mbs pim instudio-pms-page-ozon-template [--businessUnitId <integer>] [--spu <string>] [--spuLike <string>] [--tmpNameLike <string>] [--page <integer>] [--size <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/ozonTemplate/page`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `businessUnitId` | businessUnitId | body | integer | 否 | - | 业务单位ID（字段名推断,语义待核实） |
| `spu` | spu | body | string | 否 | - | SPU（字段名推断,语义待核实） |
| `spuLike` | spuLike | body | string | 否 | - | SPULIKE（字段名推断,语义待核实） |
| `tmpNameLike` | tmpNameLike | body | string | 否 | - | TMP名称LIKE（字段名推断,语义待核实） |
| `page` | page | body | integer | 否 | - | 页码（字段名推断,语义待核实） |
| `size` | size | body | integer | 否 | - | 大小（字段名推断,语义待核实） |

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
