<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-publish-status-number-by-shop-id

按店铺查询刊登状态数量：亚马逊自动刊登(确认)页面，左侧店铺列表点击某店铺展开时调用，按店铺ID统计该店铺的「等待刊登/刊登成功/刊登失败/放弃刊登」四类商品数量，回填到侧边栏对应徽标。

## 用法

```bash
mbs pim erp-product-get-publish-status-number-by-shop-id --shopId <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/amazonProductPublish/getPublishStatusNumberByShopId`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopId` | shopId | body | string | 是 | - | 店铺ID(URL查询参数 ?shopId=)。来源：侧边店铺列表 <li data-shopid>，即接口 findPublishShop 返回的 shopInfoList[].shopId。用于指定统计哪个店铺的刊登状态数量 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(该店铺各刊登状态数量统计) | - |
| `obj.waitPublishNum` | number | 等待刊登数量(刊登状态=0「等待刊登」)。前端回填 #waitnum{shopId} | - |
| `obj.publishSuccessNum` | number | 刊登成功数量(刊登状态=3「刊登成功」)。前端回填 #successnum{shopId} | - |
| `obj.publishFailedNum` | number | 刊登失败数量(刊登状态=2「刊登失败」)。前端回填 #failnum{shopId} | - |
| `obj.giveUpPublishNum` | number | 放弃刊登数量(刊登状态=5「放弃刊登」)。前端回填 #giveupnum{shopId} | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
