# mbs pim erp-product-find-publish-shop-lazada-autopublish-controller

查询Lazada自动刊登店铺列表(含汇总数)：Lazada自动刊登页加载时调用，无入参。返回当前用户头像、刊登成功/等待汇总数，以及该用户名下的刊登店铺列表(每店含店铺名与刊登成功数)，用于渲染左侧店铺栏与顶部店铺筛选下拉。

## 用法

```bash
mbs pim erp-product-find-publish-shop-lazada-autopublish-controller
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaAutopublishController/findPublishShop`
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
| `code` | number | 响应状态码,200=成功(标准返回封装) | - |
| `desc` | string | 响应提示信息(标准返回封装) | - |
| `obj` | object | 业务数据对象(if(data.obj)为真才渲染) | - |
| `obj.avatar` | string | 当前用户头像URL(写入 #userimg 的 src) | - |
| `obj.successnum` | number | 刊登成功汇总数(写入 #successnum) | - |
| `obj.waitnum` | number | 等待刊登汇总数(写入 #waitnum) | - |
| `obj.shopnames[]` | array | 刊登店铺列表(渲染左侧店铺栏及店铺下拉,{{if obj.shopnames}}判空) | - |
| `obj.shopnames[][0]` | string | 店铺名称(下拉option值与显示文本、侧边栏标题、data-shopname,并作为DOM id后缀与后续 findPublishDetailByShopname 入参) | - |
| `obj.shopnames[][1]` | number | 该店铺刊登成功数量(侧边栏店铺名后绿色括号显示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
