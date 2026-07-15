<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-ebay-singlepublish-condition

获取物品状况：获取物品状况

## 用法

```bash
mbs pim instudio-pms-get-ebay-singlepublish-condition [--id <string>] [--site <string>] [--categoryId <string>] [--conditionId <integer>] [--conditionName <string>] [--createby <string>] [--createtime <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/ebaySinglepublishInfoController/getEbaySinglepublishCondition`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | string | 否 | - | ID（字段名推断,语义待核实） |
| `site` | site | body | string | 否 | - | 站点（字段名推断,语义待核实） |
| `categoryId` | categoryId | body | string | 否 | - | 类目ID（字段名推断,语义待核实） |
| `conditionId` | conditionId | body | integer | 否 | - | 条件ID（字段名推断,语义待核实） |
| `conditionName` | conditionName | body | string | 否 | - | 条件名称（字段名推断,语义待核实） |
| `createby` | createby | body | string | 否 | - | Createby（字段名推断,语义待核实） |
| `createtime` | createtime | body | string | 否 | - | 创建时间（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].id` | string | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].site` | string | 站点（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].categoryId` | string | 类目ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].conditionId` | integer | 条件ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].conditionName` | string | 条件名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].createby` | string | Createby（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].createtime` | string | 创建时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
