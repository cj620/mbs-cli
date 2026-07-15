<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-list-ez-buy-shop

EzBuy刊登店铺列表查询：进入EzBuy刊登管理页时调用，获取当前可选的EzBuy刊登店铺列表，用于「选择刊登店铺」筛选下拉框（#shopName）与「生成下架商品信息」弹窗的店铺选择框（#selectShop）。无请求参数，返回店铺数组，前端仅取店铺名 shopName 渲染为下拉选项。

## 用法

```bash
mbs pim erp-product-list-ez-buy-shop
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/ezBuyProductPublish/listEzBuyShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(本接口回调未使用,标准返回字段) | - |
| `obj[]` | array | EzBuy刊登店铺列表(前端整体赋值给模板变量 list) | - |
| `obj[]` | string | 店铺名称(下拉 option 的 value 与显示文本,模板中唯一使用字段) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
