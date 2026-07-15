# mbs pim instudio-pms-id-developer-mission-get-no-pass-content-by-id

获取最后一条记录：获取最后一条记录

## 用法

```bash
mbs pim instudio-pms-id-developer-mission-get-no-pass-content-by-id
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developerMission/getNoPassContentById/{id}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | path | string | 是 | - | ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj.id` | integer | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.noPassType` | string | 不通过类型。前端使用：待核实 | - |
| `obj.obj.noPassFile` | string | 不通过文件。前端使用：待核实 | - |
| `obj.obj.relationIdOrSpu` | string | 关联spu还是messionID。前端使用：待核实 | - |
| `obj.obj.noPassContent` | string | 内容。前端使用：待核实 | - |
| `obj.obj.auditName` | string | 审核人姓名。前端使用：待核实 | - |
| `obj.obj.auditDateTime` | string | 审核人时间。前端使用：待核实 | - |
| `obj.obj.auditType` | string | 审核类型1申二审。前端使用：待核实 | - |
| `obj.obj.auditStatus` | string | 审核通过还是不通过。前端使用：待核实 | - |
| `obj.obj.spu` | string | SPU（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.fileList[]` | array | 文件列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.fileList[]` | string | - | - |
| `obj.obj.riskType` | string | 风险系数分类。前端使用：待核实 | - |
| `obj.obj.checkImage` | string | 审核图片。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
