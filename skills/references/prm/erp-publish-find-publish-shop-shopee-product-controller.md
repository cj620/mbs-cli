# mbs prm erp-publish-find-publish-shop-shopee-product-controller

查询Shopee自动刊登店铺及刊登统计：Shopee自动刊登页面加载时调用，查询当前用户的头像、当前刊登成功数、当前等待刊登数，以及该用户名下的Shopee店铺列表（含每个店铺的店铺名、店铺ID、已刊登成功数量）。返回结果用于渲染顶部统计、左侧店铺树与店铺下拉框。该接口无请求参数，依赖登录态识别当前用户。

## 用法

```bash
mbs prm erp-publish-find-publish-shop-shopee-product-controller
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/shopeeProductController/findPublishShop`
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
| `code` | number | 响应状态码,200=成功（响应通用包装字段） | - |
| `desc` | string | 响应提示信息（响应通用包装字段） | - |
| `obj` | object | 业务数据对象（success 回调以 data.obj 判空后使用） | - |
| `obj.avatar` | string | 当前用户头像URL（写入 #userimg 的 src） | - |
| `obj.successnum` | number | 当前刊登成功数量（写入 #successnum） | - |
| `obj.waitingnum` | number | 当前等待刊登数量（写入 #waitingnum） | - |
| `obj.shopnames[]` | array | 当前用户名下店铺列表（用于 #shopTemplate 下拉框与 #shopNameTemplate 店铺树） | - |
| `obj.shopnames[][0]` | string | 店铺名称（下拉框 option 值/文本，店铺树标题，data-shopname） | - |
| `obj.shopnames[][1]` | string | 店铺ID（用于拼接 waitnum/successnum/failnum/giveupnum{{shopId}} 等元素ID，data-ids） | - |
| `obj.shopnames[][2]` | number | 该店铺已刊登成功数量（店铺树中以 ({{v.publishSuccessNum}}) 展示） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
