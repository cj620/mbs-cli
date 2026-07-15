# mbs oms erp-order-director-sku-by-hwc-order-sku

转直邮发货-按海外仓订单SKU获取直邮SKU：订单详情页点击「转直邮发货」时调用：以当前订单未删除(flag!=3)商品列表为入参(每项含 sku/storage/orderId)，请求后端返回转直邮的 SKU 列表(res.data.obj)，写入 basedata.zhiyouSKUList 并在「转直邮发货设置」弹窗中展示「修改前SKU」，供录入「修改后SKU」后确认转单。

## 用法

```bash
mbs oms erp-order-director-sku-by-hwc-order-sku --requestBody <array<unknown>>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/directorSkuByHwcOrderSku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `requestBody` | requestBody | body | array<unknown> | 是 | - | 请求体根：订单商品列表(由 basedata.ordernum.list 过滤 flag!=3 后映射) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(确认转单回调中据此判断) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 转直邮SKU列表(赋值给 basedata.zhiyouSKUList) | - |
| `obj[]` | string | 修改前SKU(模板展示「修改前SKU」列，确认时校验非空) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
