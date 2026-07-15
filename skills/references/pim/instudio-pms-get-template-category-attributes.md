<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-template-category-attributes

品牌列表：品牌列表

## 用法

```bash
mbs pim instudio-pms-get-template-category-attributes --categoryId <integer>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/tiktokSinglepublishGlobalController/getTemplateCategoryAttributes`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `categoryId` | categoryId | query | integer | 是 | - | 类目ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj.platformEnums` | object | 平台。前端使用：待核实 | - |
| `obj.categoryId` | integer | 类目ID。前端使用：待核实 | - |
| `obj.categoryProductAttribute` | object | 平台类目 - 商品属性。前端使用：待核实 | - |
| `obj.saleAttribute` | object | 平台类目 - 销售属性。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
