# mbs pim erp-product-get-product-attribute

获取商品(SKU)属性列表：查询全部商品(SKU)属性，供「商品导出新建」页「SKU属性」多选下拉框作为可选项数据源。无请求参数，固定返回属性集合，前端通过 art-template 渲染为 <option>。

## 用法

```bash
mbs pim erp-product-get-product-attribute
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getProductAttribute`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 商品(SKU)属性列表 | - |
| `obj[]` | string | 商品(SKU)属性值（如颜色/尺寸等属性名称，前端作为下拉项 value 与显示文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
