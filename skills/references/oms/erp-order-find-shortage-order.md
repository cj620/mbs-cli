# mbs oms erp-order-find-shortage-order

缺货订单数量查询：移动端「必做清零」页面进入时(selgetSure()链式回调第7个)调用，查询当前用户「清仓停产缺货 / >=10天延迟」类待办订单数量，返回 obj.total 填充页面计数块 .odernum7。该接口无请求体，仅依赖登录态按当前用户统计。

## 用法

```bash
mbs oms erp-order-find-shortage-order
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findShortageOrder`
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
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息(统一信封字段,本接口回调未使用) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 缺货(清仓停产缺货 / >=10天延迟)待办订单数量,前端写入 .odernum7 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
