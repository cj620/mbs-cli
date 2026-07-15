# mbs pim instudio-pms-check-risk-words

获取推荐类目：获取推荐类目

## 用法

```bash
mbs pim instudio-pms-check-risk-words
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/tiktokSinglepublishGlobalController/checkRiskWords`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj.level` | string | 严重等级。前端使用：待核实 | - |
| `obj.hit` | string | 提示信息。前端使用：待核实 | - |
| `obj.count` | integer | 违禁次数。前端使用：待核实 | - |
| `obj.banWords[]` | array | 违禁词清单。前端使用：待核实 | - |
| `obj.banWords[]` | string | - | - |
| `obj.title` | string | 原始标题。前端使用：待核实 | - |
| `obj.proceedTitle` | string | 处理之后的标题。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
