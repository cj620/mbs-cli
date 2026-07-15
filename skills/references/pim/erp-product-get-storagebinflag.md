# mbs pim erp-product-get-storagebinflag

获取直邮类型(直邮仓)下拉选项：SPU(商品)管理列表页筛选条件区「直邮类型」下拉框的数据源接口。页面初始化时无参调用,返回可选直邮类型(直邮仓)名称字符串列表(如 TEMU仓、Shein仓 等),前端将其逐项渲染为下拉选项;用户所选值作为 storagebinflag 参与 SPU 列表查询过滤。

## 用法

```bash
mbs pim erp-product-get-storagebinflag
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/product/getStoragebinflag`
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
| `code` | number | 响应状态码,200=成功(统一返回结构,前端本接口未显式判断,直接取 obj) | - |
| `desc` | string | 响应提示信息(统一返回结构,本接口前端未使用) | - |
| `obj[]` | array | 直邮类型(直邮仓)名称列表;数组元素为字符串(如 TEMU仓、Shein仓 等),作为「直邮类型」下拉选项的 label 与 value | - |
| `obj[]` | string | 数组元素:单个直邮类型(直邮仓)名称,如 TEMU仓、Shein仓(可选值由后端配置返回,前端逐项渲染为下拉项) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
