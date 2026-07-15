# mbs oms erp-order-get-responsible-shop

查询负责店铺列表：查询当前登录用户所负责（有权限）的店铺名称列表，用于 eBay 个案任务页顶部「请选择店铺」下拉框的选项填充。页面 ready 时由 getResponsibleShops() 自动调用一次，无请求参数。

## 用法

```bash
mbs oms erp-order-get-responsible-shop
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ebayCaseTask/getResponsibleShop`
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
| `code` | number | 响应状态码,200=成功(前端 data.code==200 时才渲染下拉) | - |
| `desc` | string | 响应提示信息(标准响应体字段;本接口成功回调未使用,失败时一般用于提示) | - |
| `obj[]` | array | 负责店铺名称列表(每个元素为店铺名称字符串) | - |
| `obj[]` | string | 店铺名称(模板 {{v}},同时用作下拉项 value 与文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
