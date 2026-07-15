# mbs oms erp-order-get-category-name

大类名称下拉列表查询：大类(月)报表页初始化时调用，获取全部商品「大类名称」枚举列表，用于渲染页头 #categoryName 大类下拉框选项（首项固定为「请选择大类」）。无请求参数，响应 obj 为大类名称字符串数组。

## 用法

```bash
mbs oms erp-order-get-category-name
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/personSaleReport/getCategoryName`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 大类名称列表(用于渲染大类下拉框选项),data.obj存在时才渲染 | - |
| `obj[]` | string | 单个大类名称(数组元素,模板中作为<option>的value与显示文本,即大类中文名) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
