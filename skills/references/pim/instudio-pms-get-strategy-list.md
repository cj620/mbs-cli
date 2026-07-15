# mbs pim instudio-pms-get-strategy-list

获取优化策略结果数据结果集合：获取优化策略结果数据结果集合

## 用法

```bash
mbs pim instudio-pms-get-strategy-list [--monthList <array<string>>] [--processStatus <integer>] [--categoryType <integer>] [--normTypeList <array<string>>] [--sequenceIdList <array<string>>] [--operName <string>] [--operTime <string>] [--start <integer>] [--end <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/strategyReasonCategory/getStrategyList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `monthList` | monthList | body | array<string> | 否 | - | 月份列表（字段名推断,语义待核实） |
| `processStatus` | processStatus | body | integer | 否 | - | 处理状态（字段名推断,语义待核实） |
| `categoryType` | categoryType | body | integer | 否 | - | 类目类型（字段名推断,语义待核实） |
| `normTypeList` | normTypeList | body | array<string> | 否 | - | NORM类型列表（字段名推断,语义待核实） |
| `sequenceIdList` | sequenceIdList | body | array<string> | 否 | - | 序列ID列表（字段名推断,语义待核实） |
| `operName` | operName | body | string | 否 | - | 操作名称（字段名推断,语义待核实） |
| `operTime` | operTime | body | string | 否 | - | 操作时间（字段名推断,语义待核实） |
| `start` | start | body | integer | 否 | - | 开始（字段名推断,语义待核实） |
| `end` | end | body | integer | 否 | - | 结束（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.nextCursor` | string | 下一个Cursor（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.previousCursor` | string | PreviousCursor（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.list[]` | array | 当前页数据列表。前端使用：否 | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.reasonCategory` | string | 原因类目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.strategyCategory` | string | 策略类目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.row` | string | 行（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：是（表格列/表单项，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
