<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-packaging-list

包材下拉：包材下拉

## 用法

```bash
mbs pim instudio-pms-packaging-list
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/product/packagingList`
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
| `obj.obj[].sequenceId` | string | 序列ID。前端使用：待核实 | - |
| `obj.obj[].name` | string | 名称。前端使用：待核实 | - |
| `obj.obj[].descr` | string | 描述。前端使用：待核实 | - |
| `obj.obj[].oper` | string | 操作人。前端使用：待核实 | - |
| `obj.obj[].operTime` | string | 操作时间。前端使用：待核实 | - |
| `obj.obj[].filed1` | string | 字段1。前端使用：待核实 | - |
| `obj.obj[].filed2` | string | 字段2。前端使用：待核实 | - |
| `obj.obj[].filed3` | string | 字段3。前端使用：待核实 | - |
| `obj.obj[].filed4` | string | 字段4。前端使用：待核实 | - |
| `obj.obj[].filed5` | string | 字段5。前端使用：待核实 | - |
| `obj.obj[].filed6` | string | 字段6。前端使用：待核实 | - |
| `obj.obj[].filed7` | string | 字段7。前端使用：待核实 | - |
| `obj.obj[].filed8` | integer | 字段8。前端使用：待核实 | - |
| `obj.obj[].filed9` | integer | 字段9。前端使用：待核实 | - |
| `obj.obj[].filed10` | integer | 字段10。前端使用：待核实 | - |
| `obj.obj[].corpid` | string | 企业ID。前端使用：待核实 | - |
| `obj.obj[].openFlag` | string | 开放标志。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
