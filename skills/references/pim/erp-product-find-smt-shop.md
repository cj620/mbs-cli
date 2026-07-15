<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-smt-shop

SMT店铺列表查询：查询当前用户可见的 SMT(速卖通)店铺名称列表，用于「SMT批量下架」页面顶部店铺多选框及「生成下架商品信息」模态框店铺多选框的数据源。无入参，返回店铺名称字符串数组。

## 用法

```bash
mbs pim erp-product-find-smt-shop
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/smtExportController/findSmtShop`
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
| `code` | number | 响应状态码,200=成功（统一响应外层字段） | - |
| `desc` | string | 响应提示信息（统一响应外层字段） | - |
| `obj[]` | array | 店铺名称列表，元素为店铺名称字符串 | - |
| `obj[]` | string | 店铺名称（数组元素，模板 {{value}}：作为多选框 checkbox 的 value 与展示文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
