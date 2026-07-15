<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-platform-pull-down

平台下拉列表查询：仪表盘销售员页加载时调用，返回当前用户可见的平台名称列表，用于填充销量趋势图/销售占比图的平台下拉选择框。请求无任何业务参数，后端依据登录态返回平台名称字符串数组。

## 用法

```bash
mbs fars erpaccount-platform-pull-down
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/dashboard/platformPullDown`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 平台名称列表（字符串数组），用于填充平台下拉框选项 | - |
| `obj[]` | string | 平台名称（数组元素 v，同时作为 option 的 value 与显示文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
