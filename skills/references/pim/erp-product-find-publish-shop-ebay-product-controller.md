<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-publish-shop-ebay-product-controller

查询当前用户刊登店铺列表（侧边栏）：eBay 自动刊登页（eabyAutPublished.html）打开后约 500ms 自动调用，无入参（用户身份由会话/Cookie 推导）。返回当前用户头像、累计刊登成功数及其名下店铺列表（含各店铺累计刊登成功数）。前端用于渲染左侧店铺导航栏，并填充顶部“请选择店铺”下拉。

## 用法

```bash
mbs pim erp-product-find-publish-shop-ebay-product-controller
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/ebayProductController/findPublishShop`
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
| `code` | number | 响应状态码,200=成功（统一响应壳；本回调以 data.obj 是否存在为主判断） | - |
| `desc` | string | 响应提示信息（统一响应壳） | - |
| `obj` | object | 业务数据对象 | - |
| `obj.avatar` | string | 当前用户头像URL（填充 #userimg 的 src） | - |
| `obj.successnum` | number | 当前用户累计刊登成功数（填充 #successnum） | - |
| `obj.shopnames[]` | array | 当前用户名下店铺列表（渲染左侧店铺栏与顶部店铺下拉） | - |
| `obj.shopnames[][0]` | string | 店铺名称（左侧栏标题、下拉 option 值与文本、并作为 searchStatus/findPublishDetails 入参） | - |
| `obj.shopnames[][1]` | string | 店铺ID（拼接各状态计数元素 id：waitnum/successnum/failnum/giveupnum{shopId}，并作为 findPublishDetails 入参） | - |
| `obj.shopnames[][2]` | number | 该店铺累计刊登成功数（左侧栏店铺名后绿色括号显示） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
