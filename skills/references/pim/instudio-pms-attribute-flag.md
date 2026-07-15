<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-attribute-flag

获取品类的颜色和尺码列表：获取品类的颜色和尺码列表

## 用法

```bash
mbs pim instudio-pms-attribute-flag
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/product/getCategoryAttributeList/{categoryId}/{attributeFlag}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `categoryId` | categoryId | path | string | 是 | - | 类目ID（字段名推断,语义待核实） |
| `attributeFlag` | attributeFlag | path | string | 是 | - | 属性标志（字段名推断,语义待核实） |

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
