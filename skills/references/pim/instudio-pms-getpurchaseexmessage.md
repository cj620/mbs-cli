<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-getpurchaseexmessage

获取sku默认供应商：获取sku默认供应商

## 用法

```bash
mbs pim instudio-pms-getpurchaseexmessage --userid <integer> [--callback <string>] [--i <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/purchaseException/getpurchaseexmessage`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `userid` | userid | query | integer | 是 | - | Userid（字段名推断,语义待核实） |
| `callback` | callback | query | string | 否 | - | 回调 |
| `i` | i | query | string | 否 | - | I |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj` | string | 返回值。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
