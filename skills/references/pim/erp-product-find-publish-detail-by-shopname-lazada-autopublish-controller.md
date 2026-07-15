<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-publish-detail-by-shopname-lazada-autopublish-controller

店铺刊登明细统计查询（按店铺名）：Lazada 自动刊登页面，左侧店铺列表点击展开某店铺时，按店铺名查询该店铺的刊登明细统计：等待刊登数、刊登成功数、刊登失败数、放弃刊登数，回填到对应店铺节点的徽标。

## 用法

```bash
mbs pim erp-product-find-publish-detail-by-shopname-lazada-autopublish-controller --shopname <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaAutopublishController/findPublishDetailByShopname`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopname` | shopname | query | string | 是 | - | 店铺名（URL Query 参数）。来源：店铺列表项 data-shopname（shopNameTemplate 中 v.shopname），用于定位要统计的店铺 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本回调未直接判 code,仅判 obj) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(店铺刊登统计) | - |
| `obj.waitnum` | number | 等待刊登数量(回填 #waitnum{shopname},对应“等待刊登”) | - |
| `obj.successnum` | number | 刊登成功数量(回填 #successnum{shopname},对应“刊登成功”) | - |
| `obj.failnum` | number | 刊登失败数量(回填 #failnum{shopname},对应“刊登失败”) | - |
| `obj.giveupnum` | number | 放弃刊登数量(回填 #giveupnum{shopname},对应“放弃刊登”) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
