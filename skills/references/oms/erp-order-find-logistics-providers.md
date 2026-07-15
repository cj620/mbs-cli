# mbs oms erp-order-find-logistics-providers

物流商下拉列表查询：物流跟进日志页加载时调用，无入参，返回全部物流商名称列表，用于填充“请选择物流商”下拉框。返回的 obj 数组每一项既作为 option 的 value 又作为显示文本。

## 用法

```bash
mbs oms erp-order-find-logistics-providers
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/trackController/findLogisticsProviders`
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
| `code` | number | 响应状态码,200=成功（统一响应封装，本接口前端未显式读取） | - |
| `desc` | string | 响应提示信息（统一响应封装，本接口前端未显式读取） | - |
| `obj[]` | array | 物流商名称列表（前端赋给模板 list 遍历填充下拉框 #providers） | - |
| `obj[]` | string | 物流商名称（数组元素，{{v}} 同时作为 option 的 value 与显示文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
