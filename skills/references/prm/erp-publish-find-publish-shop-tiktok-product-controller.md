# mbs prm erp-publish-find-publish-shop-tiktok-product-controller

查询刊登店铺及刊登概况：TikTok自动刊登页初始化时调用，返回当前用户头像、当前刊登成功/等待刊登数量，以及该用户可见的刊登店铺列表(含店铺名称、店铺ID、各店铺刊登成功数)，用于渲染顶部概况、左侧店铺导航及店铺下拉框。

## 用法

```bash
mbs prm erp-publish-find-publish-shop-tiktok-product-controller
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/tiktokProductController/findPublishShop`
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
| `obj` | object | 业务数据对象(前端以 if(data.obj) 判定) | - |
| `obj.avatar` | string | 当前用户头像URL(渲染至 #userimg 的 src) | - |
| `obj.successnum` | number | 当前刊登成功数(渲染至 #successnum) | - |
| `obj.waitingnum` | number | 当前等待刊登数(渲染至 #waitingnum) | - |
| `obj.shopnames[]` | array | 刊登店铺列表(渲染左侧导航 #shopContent 与店铺下拉框 #shopName) | - |
| `obj.shopnames[][0]` | string | 店铺名称(data-shopname、下拉框 option 值与文本) | - |
| `obj.shopnames[][1]` | string | 店铺ID(data-ids，用于后续 findPublishDetails 拼接各状态数量元素ID) | - |
| `obj.shopnames[][2]` | number | 该店铺刊登成功数(显示于店铺名后 ({{v.publishSuccessNum}})) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
