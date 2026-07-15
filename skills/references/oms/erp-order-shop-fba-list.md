# mbs oms erp-order-shop-fba-list

店铺(FBA)列表查询：订单详情页进入「修改」编辑态时调用，拉取当前可选店铺列表，用于渲染所属店铺下拉框(select2)。接口无请求参数，返回店铺名称集合。

## 用法

```bash
mbs oms erp-order-shop-fba-list
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/shopFbaList`
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
| `code` | number | 响应状态码，200=成功(前端据此判断成功/失败) | - |
| `desc` | string | 响应提示信息(失败时 alert 弹出) | - |
| `obj[]` | array | 店铺列表(可选店铺集合) | - |
| `obj[]` | string | 店铺名称(同时作为 <option> 的 value 与显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
