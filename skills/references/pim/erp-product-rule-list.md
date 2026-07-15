# mbs pim erp-product-rule-list

备货人(规则)下拉列表查询：为「国内库存(不良库存)分析」页面提供「末次采购备货人」「滞销分析占比最高备货人」下拉框选项数据源，返回规则/备货人名称字符串数组。前端拼接固定项「公司统一备货」「无采购记录」及员工名后作为下拉选项。无请求参数(空 body POST)。

## 用法

```bash
mbs pim erp-product-rule-list
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/indonesia/ruleList`
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
| `obj[]` | array | 规则/备货人名称列表(字符串数组)。前端取 .data.obj 后拼接固定项「公司统一备货」「无采购记录」及员工名合并为下拉选项 | - |
| `obj[]` | string | 数组元素:单个规则/备货人名称(直接作为下拉框 label 与 value) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
