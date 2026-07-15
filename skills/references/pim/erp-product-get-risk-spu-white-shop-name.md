# mbs pim erp-product-get-risk-spu-white-shop-name

风险SPU白名单(保护)店铺名称查询：获取「风险产品保护(白名单)店铺」名称列表，用于 SPU 管理列表高级筛选中「风险产品保护店铺(whitePublishShop)」多选下拉框的选项。页面初始化时无参调用一次，返回值为店铺名称字符串数组，直接作为 el-select 的 label 与 value。

## 用法

```bash
mbs pim erp-product-get-risk-spu-white-shop-name
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getRiskSpuWhiteShopName`
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
| `code` | number | 响应状态码,200=成功(框架统一返回字段，前端未显式判断) | - |
| `desc` | string | 响应提示信息(框架统一返回字段) | - |
| `obj[]` | array | 风险产品保护(白名单)店铺名称列表，前端直接赋给 whitePublishShopOptions 作为下拉选项 | - |
| `obj[]` | string | 单个店铺名称(数组元素，作为 el-option 的 label 与 value) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
