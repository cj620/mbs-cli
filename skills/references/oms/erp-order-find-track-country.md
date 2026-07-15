# mbs oms erp-order-find-track-country

物流跟进-国家下拉查询：物流跟进日志页面初始化时调用，拉取可选「国家」清单，用于顶部「请选择国家」下拉框(#country)的渲染。无请求参数，直接返回国家名称字符串数组。

## 用法

```bash
mbs oms erp-order-find-track-country
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/trackController/findTrackCountry`
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
| `code` | number | 响应状态码（统一返回体包裹字段，本接口回调未直接判断，200=成功）(待人工确认) | - |
| `desc` | string | 响应提示信息（统一返回体包裹字段，本接口回调未直接使用）(待人工确认) | - |
| `obj[]` | array | 国家名称列表，字符串数组；渲染为国家下拉框选项 | - |
| `obj[]` | string | 数组元素：国家名称（同时作为下拉项 value 与显示文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
