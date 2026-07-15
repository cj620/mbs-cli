# mbs pim erp-product-warehouse-type

海外仓类型下拉查询：爆款商品监控页(shopHotProducts2)初始化「请选择海外仓类型」下拉框时调用，返回全部海外仓类型(ID+名称)，前端用 art-template warehouseTypeTemplate 渲染为 option 后挂到 #warehouse 并初始化 ySelect。无请求参数。

## 用法

```bash
mbs pim erp-product-warehouse-type
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/warehouseType`
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
| `code` | number | 响应状态码,200=成功(平台统一包裹字段) | - |
| `desc` | string | 响应提示信息(平台统一包裹字段) | - |
| `obj[]` | array | 海外仓类型列表(前端遍历渲染下拉选项) | - |
| `obj[][0]` | string | 海外仓类型ID(作为 option 的 value 提交) | - |
| `obj[][1]` | string | 海外仓类型名称(作为 option 的显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
