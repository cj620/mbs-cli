# mbs pim erp-product-get-primary-classification

获取商品一级分类(SKU分类下拉)：进入「商品导出新建」页时($(document).ready)无条件调用，拉取商品一级分类列表，用 art-template 渲染 #contentTemplate3 填充「SKU分类」多选下拉(#skuCategory)的可选项。无请求参数，返回分类数组，每项以 name 同时作为下拉的 value 与显示文本。

## 用法

```bash
mbs pim erp-product-get-primary-classification
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getPrimaryClassification`
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
| `code` | number | 响应状态码,200=成功(统一响应规范) | - |
| `desc` | string | 响应提示信息(统一响应规范) | - |
| `obj[]` | array | 商品一级分类列表(模板遍历对象,渲染 SKU分类下拉) | - |
| `obj[]` | string | 一级分类名称(前端取为下拉 <option> 的 value 与显示文本,即 value.name) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
