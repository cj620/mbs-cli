<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erp-publish-find-publish-detail-by-shopname-shopee-product-controller

店铺刊登状态数量统计查询：Shopee 自动刊登页面，按店铺名称查询该店铺「等待刊登/刊登成功/刊登失败/放弃刊登」四类数量，回填到店铺左侧统计标签；删除/放弃刊登成功后重新调用以刷新数量。

## 用法

```bash
mbs prm erp-publish-find-publish-detail-by-shopname-shopee-product-controller --shopname <string>
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/shopeeProductController/findPublishDetailByShopname`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopname` | shopname | query | string | 是 | - | 店铺名称（URL Query 参数）。来源：店铺列表模板 data-shopname={{v.shopname}}，展开店铺/删除刷新时传入 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象（店铺刊登状态数量） | - |
| `obj.waitnum` | number | 等待刊登数量（回填 #waitnum{shopId}，对应「等待刊登」标签） | - |
| `obj.successnum` | number | 刊登成功数量（回填 #successnum{shopId}，对应「刊登成功」标签） | - |
| `obj.failnum` | number | 刊登失败数量（回填 #failnum{shopId}，对应「刊登失败」标签） | - |
| `obj.giveupnum` | number | 放弃刊登数量（回填 #giveupnum{shopId}，对应「放弃刊登」标签） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
