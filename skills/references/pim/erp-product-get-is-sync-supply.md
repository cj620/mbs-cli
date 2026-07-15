# mbs pim erp-product-get-is-sync-supply

查询SKU是否同步供应商标记：SKU详情页加载时查询当前SKU“是否同步供应商”的开关状态，用于回显页面右上角 #skuIsSync 复选框（勾选=已同步）。返回 obj 为同步标记：1=同步、0=不同步、null=未设置（未设置时隐藏开关区域）。与写接口 /erpProduct/erpProduct/productDetails/updateIsSyncSupply 成对使用。

## 用法

```bash
mbs pim erp-product-get-is-sync-supply --sku <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getIsSyncSupply`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | body | string | 是 | - | SKU 编码（商品SKU唯一标识），以URL查询参数传递，来源于页面URL的 SKU 参数(GetQueryString("SKU")) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（服务统一包装字段） | - |
| `desc` | string | 响应提示信息（服务统一包装字段） | - |
| `obj` | number | 是否同步供应商标记。1=已同步(前端复选框勾选);0=未同步(不勾选);null=未设置(隐藏开关区域)。前端逻辑：obj!==null 才显示开关，obj===1 时复选框 checked | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
