<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-transportation-time

运送时间：运送时间

## 用法

```bash
mbs pim instudio-pms-find-transportation-time
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/transportationTimeController/findTransportationTime`
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
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].defaultStatus` | integer | 是否默认，默认1，不默认是0。前端使用：待核实 | - |
| `obj.obj[].timemin` | integer | 最小天数。前端使用：待核实 | - |
| `obj.obj[].timemax` | integer | 最大天数。前端使用：待核实 | - |
| `obj.obj[].platform` | string | 平台。前端使用：待核实 | - |
| `obj.obj[].time` | string | 时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].moren` | string | Moren（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
