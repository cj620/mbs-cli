# mbs oms erp-order-get-person-info

当前登录人业绩信息查询：订单列表页加载时调用，获取当前登录人头像及当月业绩汇总(营业额、总毛利额、总毛利率)，渲染到页面左上角用户信息区(.user-head)。无请求参数。

## 用法

```bash
mbs oms erp-order-get-person-info
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/getPersonInfo`
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
| `desc` | string | 响应提示信息(失败时 alert 展示) | - |
| `obj` | object | 当前登录人业绩信息对象 | - |
| `obj.reserve1` | string | 用户头像URL(模板 #userimg 的 src；加载失败回退默认图 /2018ui/assets/images/timg.jpg) | - |
| `obj.saleamount` | number | 营业额(单位：万) | - |
| `obj.profit` | number | 总毛利额(单位：万) | - |
| `obj.profitRate` | number | 总毛利率(单位：%) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
