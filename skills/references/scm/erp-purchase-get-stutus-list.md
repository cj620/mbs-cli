<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-purchase-get-stutus-list

菜鸟入库单-状态列表查询：查询菜鸟优选入库单的状态枚举列表，用于「入库单查询」页面顶部「状态」下拉筛选框的选项渲染（el-option 的 label/value 数据源）。无请求参数，成功后返回状态数组。

## 用法

```bash
mbs scm erp-purchase-get-stutus-list
```

## API

- Service: `erpPurchase`
- Method: `POST`
- Path: `/erpPurchase/erpPurchase/caiNiao/getStutusList`
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
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 状态枚举列表，赋值给 statuslist 供「状态」下拉渲染 | - |
| `obj[][0]` | string | 状态ID，作为 el-option 的 value（选中后写入查询条件 status）(枚举取值待人工确认) | - |
| `obj[][1]` | string | 状态名称，作为 el-option 的 label 展示文本(枚举取值待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
