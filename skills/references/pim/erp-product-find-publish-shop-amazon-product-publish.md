# mbs pim erp-product-find-publish-shop-amazon-product-publish

亚马逊待刊登-侧边店铺列表渲染（findPublishShop）：进入亚马逊自动刊登页左侧渲染当前用户的可刊登店铺树：返回用户头像、刊登成功总数、UPC使用/可用数量，以及店铺列表（每店含店铺ID/名称/刊登成功数/是否开启推荐刊登/是否UPC豁免）。无请求参数，后端按当前登录用户上下文返回。

## 用法

```bash
mbs pim erp-product-find-publish-shop-amazon-product-publish
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/amazonProductPublish/findPublishShop`
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
| `obj` | object | 业务数据对象（无 obj 时前端不渲染） | - |
| `obj.picture` | string | 当前用户头像URL（赋给 #userimg 的 src，有值才设置） | - |
| `obj.successnum` | number | 刊登成功总数（赋给 #successnum） | - |
| `obj.useUpcNum` | number | 已使用UPC数量（赋给 #useUpcNum） | - |
| `obj.canUseUpcNum` | number | 可用UPC数量（赋给 #canUseUpcNum） | - |
| `obj.shopInfoList[]` | array | 店铺列表（左侧店铺树数据源） | - |
| `obj.shopInfoList[][0]` | string | 店铺ID（渲染 data-shopid，点击展开/筛选用） | - |
| `obj.shopInfoList[][1]` | string | 店铺名称（展示 + showModal 传 data-shopname） | - |
| `obj.shopInfoList[][2]` | number | 该店铺刊登成功数（店铺名后括号展示） | - |
| `obj.shopInfoList[][3]` | number | 是否开启推荐(自动)刊登。1=开启时展示“开启推荐刊登”图标 | - |
| `obj.shopInfoList[][4]` | number | 是否店铺UPC豁免。1=豁免时展示“店铺UPC豁免”图标 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
