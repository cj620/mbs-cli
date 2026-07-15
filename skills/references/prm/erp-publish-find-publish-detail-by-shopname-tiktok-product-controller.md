<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erp-publish-find-publish-detail-by-shopname-tiktok-product-controller

店铺刊登明细数量查询(按店铺名)：TikTok自动刊登页面左侧店铺树展开某店铺时调用，按店铺名称查询该店铺下「等待刊登/刊登成功/刊登失败/放弃刊登」四类数量，用于侧边店铺节点徽标展示。

## 用法

```bash
mbs prm erp-publish-find-publish-detail-by-shopname-tiktok-product-controller --shopname <string>
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/tiktokProductController/findPublishDetailByShopname`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopname` | shopname | query | string | 是 | - | 店铺名称(URL Query参数)。来源：左侧店铺树节点 data-shopname / 勾选行 data-shopname，用于按店铺过滤统计。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一返回包裹字段) | - |
| `desc` | string | 响应提示信息(统一返回包裹字段) | - |
| `obj` | object | 业务数据对象(前端以 if(data.obj) 判空后取子字段) | - |
| `obj.failnum` | number | 该店铺刊登失败数量,写入侧边徽标 #failnum{shopId} | - |
| `obj.giveupnum` | number | 该店铺放弃刊登数量,写入侧边徽标 #giveupnum{shopId} | - |
| `obj.successnum` | number | 该店铺刊登成功数量,写入侧边徽标 #successnum{shopId} | - |
| `obj.waitnum` | number | 该店铺等待刊登数量,写入侧边徽标 #waitnum{shopId} | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
