# mbs pim erp-product-find-shop-product

查询可公开店铺列表：SPU 详情页加载"对外公开店铺(publiclyAvailableShops)"下拉框时调用，返回可选店铺列表(店铺名称集合)，前端通过 art-template 模板 contentTemplate17 渲染为 <option> 选项。请求不携带任何参数。

## 用法

```bash
mbs pim erp-product-find-shop-product
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/findShop`
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
| `code` | number | 响应状态码,200=成功(项目统一响应壳) | - |
| `desc` | string | 响应提示信息(项目统一响应壳) | - |
| `obj[]` | array | 可公开店铺列表(模板 {{each obj value i}} 遍历) | - |
| `obj[]` | string | 店铺名称(模板取 value.name，同时作为 <option> 的 value 与显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
