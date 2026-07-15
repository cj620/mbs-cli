# mbs pim erp-product-find-ship-to-by-id-onekey

一键提价-查看发往地(收货地)列表：Speedmaster(SMT)一键提价页面，点击列表行「查看」按钮时调用：根据商品记录ID(id)与子SKU(skuId)查询该商品对应的发往地/收货地列表，前端弹出 #lookModal 并把返回的 obj.data 数组逐项渲染到 shoptoTemplate 表格中。

## 用法

```bash
mbs pim erp-product-find-ship-to-by-id-onekey --id <string> --skuId <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/smtProductController/findShipToByIdOnekey`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | string | 是 | - | 商品记录ID。来源:「查看」按钮 data-id(渲染模板 {{v.id}}),即该商品行记录主键ID,用于定位要查询发往地的商品 |
| `skuId` | skuId | body | string | 是 | - | 子SKU编号。来源:「查看」按钮 data-sku(渲染模板 {{item.skuId}}),即该行对应子SKU,用于确定查询发往地的SKU维度 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本接口成功回调未显式判断,沿用统一返回壳) | - |
| `desc` | string | 响应提示信息(统一返回壳字段) | - |
| `obj` | object | 业务数据对象,前端据 if(data.obj) 判空 | - |
| `obj.data[]` | array | 发往地(收货地)列表;数组元素为字符串(发往国家/地区名称),前端逐项渲染到查看弹窗表格({{i}}序号+{{v}}发往地名称) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
