# mbs pim erp-product-list-have-published-shop-lazada-publish

查询已刊登(新刊登)店铺列表：Lazada 批量刊登页面切换到“刊登完毕”Tab 时调用，查询当前用户可选的“新刊登店铺”列表，用于渲染 #PublishedShop 下拉框（art-template 模板 PublishedShopTemplate）。无请求参数，返回店铺名称集合，选中值作为 search2() 的 targetShops 参数。

## 用法

```bash
mbs pim erp-product-list-have-published-shop-lazada-publish
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaPublish/listHavePublishedShop`
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
| `obj[]` | array | 已刊登(新刊登)店铺列表(模板变量 list) | - |
| `obj[]` | string | 店铺名称,作为下拉框 option 的 value 与显示文本;选中后作为 search2() 的 targetShops 入参 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
