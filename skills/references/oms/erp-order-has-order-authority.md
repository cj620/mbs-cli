<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-has-order-authority

校验当前用户对指定订单的查看权限：订单详情页加载时调用：除部门=66且用户名=罗梦娅外，所有用户进入详情页都会以 orderid 调用本接口校验是否有该订单的查看权限；返回 obj==0 表示无权限，前端清空订单数据并提示“无法查询订单”，否则继续加载订单详情。

## 用法

```bash
mbs oms erp-order-has-order-authority --orderid <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/hasOrderAuthority`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderid` | orderid | query | string | 是 | - | 订单ID(URL查询参数)。来源 basedata.orderid，由详情页 GetQueryString("orderid") 从浏览器地址栏取得 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应包裹字段,待人工确认) | - |
| `desc` | string | 响应提示信息(统一响应包裹字段,待人工确认) | - |
| `obj` | number | 订单查看权限标识。obj==0 表示无权限(清空订单数据并提示“无法查询订单”);非0 表示有权限继续加载详情 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
