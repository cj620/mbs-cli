# mbs ars erpmonitor-ez-data

EZBuy 商品/订单汇总统计查询：EZBuy 商品 & 订单报表页面加载时调用，查询平台维度的汇总统计数据：平台总商品数、平台总订单数、当日订单数，回填到页面头部的三个统计标签。前端不传任何请求参数。

## 用法

```bash
mbs ars erpmonitor-ez-data
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/ezbuy/ezData`
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
| `code` | number | 响应状态码,200=成功（统一响应外壳，本调用未直接引用）(待人工确认) | - |
| `desc` | string | 响应提示信息（统一响应外壳，本调用未直接引用）(待人工确认) | - |
| `obj` | object | 业务数据对象（success 回调直接读取 data.obj） | - |
| `obj.totalProdcutCount` | number | 平台总商品数（回填 #totalProdcutCount 标签，前端拼接“平台总商品数:”前缀；字段名 sic：源码即为 totalProdcutCount） | - |
| `obj.totalOrderCount` | number | 平台总订单数（回填 #totalOrderCount 标签，前端拼接“平台总订单数:”前缀） | - |
| `obj.totalTodayOrderCount` | number | 当日订单数（回填 #totalTodayOrderCount 标签，前端拼接“当日订单数:”前缀） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
