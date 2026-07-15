<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-hwc-developer-mission

查询海外仓类型列表：查询海外仓类型列表

## 用法

```bash
mbs pim instudio-pms-get-hwc-developer-mission [--typeName <string>] [--category <string>] [--parentCategory <string>] [--oper <string>] [--id <string>] [--spu <string>] [--checkStatus <string>] [--page <integer>] [--pageSize <integer>] [--developer <string>] [--auditor <string>] [--managerEmpList <array<string>>] [--devTeam <array<string>>] [--depart <string>] [--createDateStart <string>] [--createeDateEnd <string>] [--auditStatus <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developerMission/getHwcDeveloperMission`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `typeName` | typeName | body | string | 否 | - | 类型名称（字段名推断,语义待核实） |
| `category` | category | body | string | 否 | - | 类目（字段名推断,语义待核实） |
| `parentCategory` | parentCategory | body | string | 否 | - | 父级类目（字段名推断,语义待核实） |
| `oper` | oper | body | string | 否 | - | 操作（字段名推断,语义待核实） |
| `id` | id | body | string | 否 | - | ID（字段名推断,语义待核实） |
| `spu` | spu | body | string | 否 | - | SPU（字段名推断,语义待核实） |
| `checkStatus` | checkStatus | body | string | 否 | - | 校验状态（字段名推断,语义待核实） |
| `page` | page | body | integer | 否 | - | 页码（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `developer` | developer | body | string | 否 | - | 开发者（字段名推断,语义待核实） |
| `auditor` | auditor | body | string | 否 | - | 审核人 |
| `managerEmpList` | managerEmpList | body | array<string> | 否 | - | 管理EMP列表（字段名推断,语义待核实） |
| `devTeam` | devTeam | body | array<string> | 否 | - | DEV团队（字段名推断,语义待核实） |
| `depart` | depart | body | string | 否 | - | Depart（字段名推断,语义待核实） |
| `createDateStart` | createDateStart | body | string | 否 | - | 创建日期开始（字段名推断,语义待核实） |
| `createeDateEnd` | createeDateEnd | body | string | 否 | - | Createe日期结束（字段名推断,语义待核实） |
| `auditStatus` | auditStatus | body | string | 否 | - | 审核状态（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
