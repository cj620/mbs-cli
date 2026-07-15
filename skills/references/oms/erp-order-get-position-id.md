# mbs oms erp-order-get-position-id

获取当前用户职位ID：订单详情页点击“作废订单”时调用，获取当前登录操作员的职位(岗位)ID(positionId)。前端取返回 obj 作为 positionId，若为空则提示“职位id丢失”并中断作废流程；非空时随订单作废表单一并提交至 /eshop/order.do?method=cancelOrder。

## 用法

```bash
mbs oms erp-order-get-position-id
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/orderNew/getPositionId`
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
| `code` | number | 响应状态码,200=成功(信封字段) | - |
| `desc` | string | 响应提示信息(信封字段) | - |
| `obj` | string | 当前登录操作员的职位(岗位)ID。前端 positionId = res.data.obj；为空时提示“职位id丢失”并中断作废 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
