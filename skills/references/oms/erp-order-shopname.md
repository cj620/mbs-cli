# mbs oms erp-order-shopname

店铺登录地址获取：订单详情页点击面包屑店铺名称时，按店铺名(路径变量)查询该店铺后台免登录地址；成功(code=200)则 window.open(obj) 打开店铺地址，失败则 ElMessage.warning(desc) 提示。无请求体。

## 用法

```bash
mbs oms erp-order-shopname
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/shop/login/url/get/{shopname}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopname` | shopname | path | string | 是 | - | 店铺名称(URL路径变量)，取自 orderdata.shoptype，由订单详情页面包屑店铺名点击事件传入并拼接到接口地址末尾 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(window.open(obj)),非200=失败(警告desc) | - |
| `obj` | string | 店铺后台免登录地址URL,成功时 window.open 打开 | - |
| `desc` | string | 响应提示信息,失败时 ElMessage.warning 展示 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
