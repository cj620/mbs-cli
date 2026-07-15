<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-reason-cat-list

获取原因分类列表：获取原因分类列表

## 用法

```bash
mbs pim instudio-pms-get-reason-cat-list
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/strategyReasonCategory/getReasonCatList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（取值，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `obj.obj[].sequenceId` | string | 序列ID（字段名推断,语义待核实）。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].category` | integer | 类型 1 策略 2 原因。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].content` | string | 类型内容。前端使用：是（列表行字段,表格列/表单项，行号待核实） | - |
| `obj.obj[].createOper` | string | 创建操作（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].createTime` | string | 创建时间（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.success` | string | 成功（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.label` | string | 标签（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.targetamountTthousand` | string | TargetamountTthousand（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.targetamountThousand` | string | TargetamountThousand（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.targetamountHundred` | string | TargetamountHundred（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.targetamountTen` | string | TargetamountTEN（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.reasonCategory` | string | 原因类目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.reason` | string | 原因（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.strategyCategory` | string | 策略类目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：是（列表行字段,表格列/表单项，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
