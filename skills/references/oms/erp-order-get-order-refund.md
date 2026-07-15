# mbs oms erp-order-get-order-refund

订单退款记录查询：订单详情页加载时，根据订单ID查询该订单的全部退款记录（退款申请单列表），渲染至「退款」卡片表格；返回为空则隐藏该模块。

## 用法

```bash
mbs oms erp-order-get-order-refund --orderid <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/getOrderRefund`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderid` | orderid | query | string | 是 | - | 订单ID（URL 查询参数，取自页面全局变量 orderid，来源订单详情页上下文） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（前端据此渲染模板） | - |
| `obj[]` | array | 退款记录列表（长度>0 才显示退款模块） | - |
| `obj[][0]` | string | 交易编号（PayPal 交易ID） | - |
| `obj[][1]` | string | 退款后ID | - |
| `obj[][2]` | string | 退款申请时间 | - |
| `obj[][3]` | string | 退款金额 | - |
| `obj[][4]` | string | 申请人（创建人） | - |
| `obj[][5]` | string | 采购员 | - |
| `obj[][6]` | string | 退款原因 | - |
| `obj[][7]` | string | 退款备注 | - |
| `obj[][8]` | string | 间隔（申请间隔时长） | - |
| `obj[][9]` | string | 记录有效标记。0=作废（显示作废图标）；1=有效（再按 flag 显示状态） | - |
| `obj[][10]` | string | 退款状态枚举（openflag=1 时生效）。1=新创建；2=一审通过；3=二审通过,等待同步；4=异常；5=失败（附 errorreason）；9=退款成功 | - |
| `obj[][11]` | string | 失败原因（flag=5 失败时图标 alt 中展示） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
