<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-validate-sku

销售人员收到侵权任务列表：销售人员收到侵权任务列表

## 用法

```bash
mbs pim instudio-pms-validate-sku --flag <string> --spuOrSku <string>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/productTort/validateSKU`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `flag` | flag | query | string | 是 | - | 标志（字段名推断,语义待核实） |
| `spuOrSku` | spuOrSku | query | string | 是 | - | SPUSKU（字段名推断,语义待核实） |

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
