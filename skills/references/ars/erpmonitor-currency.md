# mbs ars erpmonitor-currency

原币种列表查询：热销商品监控页初始化时加载「原币种(currency)」下拉选择框的可选值列表。该接口为无参 POST，返回全部可选原币种字符串数组，前端用 art-template 模板 contentTemplate4 渲染为 select#currency 的 option 项，供搜索时按原币种过滤。

## 用法

```bash
mbs ars erpmonitor-currency
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/currency`
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
| `code` | number | 响应状态码,200=成功(框架标准包裹字段,本接口模板未直接引用)(待人工确认) | - |
| `desc` | string | 响应提示信息(框架标准包裹字段,本接口模板未直接引用)(待人工确认) | - |
| `obj[]` | array | 原币种列表(模板 {{each obj}} 遍历渲染下拉选项) | - |
| `obj[]` | string | 原币种(币种代码/名称),数组元素直接作为下拉框 option 的 value 与显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
