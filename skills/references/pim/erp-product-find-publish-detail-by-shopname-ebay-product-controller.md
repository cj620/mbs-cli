# mbs pim erp-product-find-publish-detail-by-shopname-ebay-product-controller

按店铺名查询eBay刊登统计数：eBay自动刊登管理页左侧店铺列表，展开某店铺时按店铺名查询该店铺下四类刊登状态的计数（等待刊登 waitnum、刊登成功 successnum、刊登失败 failnum、放弃刊登 giveupnum），回填到左侧店铺树对应徽标。删除SPU后也会重新调用刷新该店铺计数。

## 用法

```bash
mbs pim erp-product-find-publish-detail-by-shopname-ebay-product-controller --shopname <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/ebayProductController/findPublishDetailByShopname`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopname` | shopname | query | string | 是 | - | 店铺名（URL query 参数，eBay刊登店铺名称）。来源：左侧店铺树 li 的 data-shopname / 列表行 targetShop |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象（店铺刊登统计），仅当存在时回填徽标 | - |
| `obj.waitnum` | number | 等待刊登数量（回填 #waitnum{shopId}） | - |
| `obj.successnum` | number | 刊登成功数量（回填 #successnum{shopId}） | - |
| `obj.failnum` | number | 刊登失败数量（回填 #failnum{shopId}） | - |
| `obj.giveupnum` | number | 放弃刊登数量（回填 #giveupnum{shopId}） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
