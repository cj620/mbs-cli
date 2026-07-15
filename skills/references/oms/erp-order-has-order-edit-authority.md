# mbs oms erp-order-has-order-edit-authority

订单是否可编辑权限校验(hasOrderEditAuthority)：订单详情页加载完成后调用，校验当前登录用户对该订单是否拥有编辑/操作权限。返回 obj==1 表示有权限(展示编辑相关按钮)，否则隐藏 #draw、.draw 等操作区并将 orderdata 置空。

## 用法

```bash
mbs oms erp-order-has-order-edit-authority --orderid <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/hasOrderEditAuthority`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderid` | orderid | query | string | 是 | - | 订单ID，取自 GetQueryString("orderid")(basedata.orderid)，以 URL Query 拼接传递；POST body 为空对象 {} |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一包络字段，本调用未直接判断) | - |
| `desc` | string | 响应提示信息(统一包络字段，本调用未直接使用) | - |
| `success` | boolean | 是否成功(统一包络字段，本调用未直接使用) | - |
| `obj` | number | 编辑权限标识(前端实际消费)：1=有编辑权限(展示操作区/编辑按钮)；非1(如0)=无编辑权限(隐藏 #draw、.draw，并将 orderdata 置空) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
