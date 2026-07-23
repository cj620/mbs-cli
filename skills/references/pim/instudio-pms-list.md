# mbs pim instudio-pms-list

开发中台的列表数据：开发中台的列表数据

## 用法

```bash
mbs pim instudio-pms-list [--skuOper <string>] [--times <string>] [--position <integer>] [--skuOperList <array<string>>] [--page <integer>] [--pageSize <integer>] [--directors <array<string>>] [--managers <array<string>>] [--shopManagerIds <array<string>>] [--startIndex <integer>] [--area <string>] [--areaSpecial <string>] [--companyId <integer>] [--permissionsOperList <array<string>>] [--chartType <string>] [--gtInductionTime <string>] [--ltInductionTime <string>] [--hideSkuOperList <array<string>>] [--warningIndexList <array<string>>] [--exportTitleList <array<string>>] [--exportTimeList <array<string>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/skuManager/list`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `5d73287addda8c70faf8faba9f00506ca4e6706165ec8a21cbbbe4d1c866a528`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `skuOper` | skuOper | body | string | 否 | - | 开发姓名 |
| `times` | times | body | string | 否 | - | 时间 (yyyy-MM) |
| `position` | position | body | integer | 否 | - | 职位 |
| `skuOperList` | skuOperList | body | array<string> | 否 | - | 开发员 |
| `page` | page | body | integer | 否 | - | 页码 |
| `pageSize` | pageSize | body | integer | 否 | - | 页容量 |
| `directors` | directors | body | array<string> | 否 | - | 总监 |
| `managers` | managers | body | array<string> | 否 | - | 经理 |
| `shopManagerIds` | shopManagerIds | body | array<string> | 否 | - | 店长id |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `area` | area | body | string | 否 | - | 区域（字段名推断,语义待核实） |
| `areaSpecial` | areaSpecial | body | string | 否 | - | 启元人只能看启元的 |
| `companyId` | companyId | body | integer | 否 | - | 公司ID（字段名推断,语义待核实） |
| `permissionsOperList` | permissionsOperList | body | array<string> | 否 | - | 开发员 |
| `chartType` | chartType | body | string | 否 | - | 趋势图字段 |
| `gtInductionTime` | gtInductionTime | body | string | 否 | - | 入职时间大于 |
| `ltInductionTime` | ltInductionTime | body | string | 否 | - | 入职时间小于 |
| `hideSkuOperList` | hideSkuOperList | body | array<string> | 否 | - | 隐藏开发员 |
| `warningIndexList` | warningIndexList | body | array<string> | 否 | - | 警戒指标 选中, 显示对应指标触发警戒的, 如果选择多个 or的关系 |
| `exportTitleList` | exportTitleList | body | array<string> | 否 | - | 需要导出的标题头 |
| `exportTimeList` | exportTimeList | body | array<string> | 否 | - | 导出使用的时间字段 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.employee_id` | string | 员工ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.companyname` | string | Companyname（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
