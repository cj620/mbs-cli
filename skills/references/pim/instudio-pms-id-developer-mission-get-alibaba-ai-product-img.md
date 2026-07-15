# mbs pim instudio-pms-id-developer-mission-get-alibaba-ai-product-img

获取根据1688链接获取的图片：获取根据1688链接获取的图片

## 用法

```bash
mbs pim instudio-pms-id-developer-mission-get-alibaba-ai-product-img
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developerMission/getAlibabaAiProductImg/{id}`
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
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（取值，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `obj.obj[].id` | integer | 主键id。前端使用：否 | - |
| `obj.obj[].pictureUrl` | string | 图片地址。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].missionId` | string | spu。前端使用：否 | - |
| `obj.obj[].sourceLink` | string | 链接地址。前端使用：否 | - |
| `obj.obj[].pictureType` | string | 图片类型：1： AI，2： 本地。前端使用：否 | - |
| `obj.obj[].createTime` | string | 创建时间。前端使用：否 | - |
| `obj.obj[].updateTime` | string | 更新时间。前端使用：否 | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.label` | string | 标签（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.field` | string | 字段（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.required` | string | 必填（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.placeholder` | string | Placeholder（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.status` | string | 状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
