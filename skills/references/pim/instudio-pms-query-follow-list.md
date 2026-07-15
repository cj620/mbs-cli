<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-query-follow-list

查询跟进记录：查询跟进记录

## 用法

```bash
mbs pim instudio-pms-query-follow-list --flag <string> --id <string>
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/infringement/queryFollowList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `flag` | flag | query | string | 是 | - | 标志（字段名推断,语义待核实） |
| `id` | id | query | string | 是 | - | ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].caseId` | integer | 侵权caseid。前端使用：待核实 | - |
| `obj.obj[].caseProgress` | integer | 案件进程。前端使用：待核实 | - |
| `obj.obj[].caseProgressCN` | string | 案件进程(中文)。前端使用：待核实 | - |
| `obj.obj[].shopAppealId` | integer | 店铺申诉id。前端使用：待核实 | - |
| `obj.obj[].filePath` | string | 文件路径。前端使用：待核实 | - |
| `obj.obj[].filePathArray[]` | array | 文件路径 (数组)。前端使用：待核实 | - |
| `obj.obj[].filePathArray[]` | string | - | - |
| `obj.obj[].content` | string | 跟进内容。前端使用：待核实 | - |
| `obj.obj[].createBy` | string | 创建人。前端使用：待核实 | - |
| `obj.obj[].createTime` | string | 创建时间。前端使用：待核实 | - |
| `obj.obj[].updateBy` | string | 修改人。前端使用：待核实 | - |
| `obj.obj[].updateTime` | string | 修改时间。前端使用：待核实 | - |
| `obj.obj[].deleteBy` | string | 删除人。前端使用：待核实 | - |
| `obj.obj[].deleteTime` | string | 删除时间。前端使用：待核实 | - |
| `obj.obj[].followStatus` | integer | 跟进记录状态 ：1.删除 0 未删除。前端使用：待核实 | - |
| `obj.obj[].flag` | string | 传入标识:(店铺:shopAppeal 侵权:infrineMent)。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
