# mbs pim erp-product-get-country

获取主要购买国家列表：商品导出创建页加载时调用，拉取可选的"主要购买国家"列表，用于渲染 #purchaseCountry 多选下拉框（最多支持10个国家）。无请求参数，返回国家名称集合。

## 用法

```bash
mbs pim erp-product-get-country
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productReport/getCountry`
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
| `code` | number | 响应状态码,200=成功（统一包装字段，前端未显式判断） | - |
| `desc` | string | 响应提示信息（统一包装字段） | - |
| `obj[]` | array | 主要购买国家列表（前端 {{each obj value i}} 遍历渲染下拉项） | - |
| `obj[]` | string | 国家名称（同时作为下拉项 value 与显示文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
