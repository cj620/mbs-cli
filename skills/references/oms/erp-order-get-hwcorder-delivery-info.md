# mbs oms erp-order-get-hwcorder-delivery-info

订单SKU标签/装箱单标签信息查询：订单详情页根据订单ID与标签类型(sku标签/装箱单标签)，查询该订单已上传的标签信息列表，用于在装运信息区渲染标签内容及删除入口。业务参数以URL查询串传递，无JSON请求体。

## 用法

```bash
mbs oms erp-order-get-hwcorder-delivery-info --orderid <string> --labeltype <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/getHwcorderDeliveryInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderid` | orderid | query | string | 是 | - | 订单ID，标识要查询标签的订单(来源:页面URL查询参数 GetQueryString('orderid')) |
| `labeltype` | labeltype | query | string | 是 | - | 标签类型。枚举:sku标签=SKU标签;装箱单标签=装箱单标签 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(上传/删除回调中用于提示弹窗) | - |
| `obj[]` | array | 标签记录列表(为空则不渲染) | - |
| `obj[][0]` | string | 标签内容/标签图片地址(列表项展示文本) | - |
| `obj[][1]` | string | 标签记录序号ID(删除时作为 deleteHwcorderDeliveryInfo?id= 入参) | - |
| `obj[][2]` | string | 标签类型(sku标签/装箱单标签,删除时回传以刷新对应列表) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
