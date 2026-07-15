# mbs pim erp-product-list-fyndiq-shop

Fyndiq刊登店铺列表查询：查询当前用户可用的 Fyndiq 刊登店铺列表，用于 Fyndiq 刊登页面顶部“选择刊登店铺”下拉框的选项填充。无请求参数，返回店铺数组，前端用 art-template 模板 shopnmeTemplate 渲染为 option，仅使用 shopName 字段。

## 用法

```bash
mbs pim erp-product-list-fyndiq-shop
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/fyndiqProductPublish/listFyndiqShop`
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
| `code` | number | 响应状态码,200=成功（本接口回调未显式校验，但属统一响应结构） | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 刊登店铺列表 | - |
| `obj[]` | string | 店铺名称（刊登店铺；作为下拉 option 的 value 与显示文本，后续按店铺名筛选刊登数据） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
