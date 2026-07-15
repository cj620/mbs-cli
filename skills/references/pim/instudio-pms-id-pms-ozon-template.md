<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-id-pms-ozon-template

根据 ID 查询 Ozon SPU 类目模板详情：根据 ID 查询 Ozon SPU 类目模板详情

## 用法

```bash
mbs pim instudio-pms-id-pms-ozon-template
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/ozonTemplate/{id}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | path | integer | 是 | - | ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.id` | integer | ID（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.tmpName` | string | TMP名称（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.spu` | string | SPU（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.categoryId` | integer | 类目ID（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.publicAttributeList[]` | array | Public属性列表（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.creatorId` | integer | CreatorID（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.creatorName` | string | Creator名称（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.createdAt` | string | 创建时间（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.updatedAt` | string | 更新时间（字段名推断,语义待核实）。前端使用：否 | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
