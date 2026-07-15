<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-state

显示国家：显示国家

## 用法

```bash
mbs pim instudio-pms-get-state
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/countryCController/getState`
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
| `obj.obj[].descriptionEnglish` | string | 国家英文。前端使用：待核实 | - |
| `obj.obj[].location` | string | 二字。前端使用：待核实 | - |
| `obj.obj[].regionEnglish` | string | 所属州英文。前端使用：待核实 | - |
| `obj.obj[].regionChina` | string | 所属州中文。前端使用：待核实 | - |
| `obj.obj[].descriptionChina` | string | 国家中文。前端使用：待核实 | - |
| `obj.obj[].platform` | string | 平台。前端使用：待核实 | - |
| `obj.obj[].country` | string | 国家（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].state` | string | 状态（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].freightMethod` | string | 运费方式。前端使用：待核实 | - |
| `obj.obj[].freight` | string | 运费。前端使用：待核实 | - |
| `obj.obj[].wishexpress` | string | 1打开 0关闭。前端使用：待核实 | - |
| `obj.obj[].publishListingId` | string | 刊登刊登ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
