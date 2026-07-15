<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-query-conditions

订单查询条件(筛选项)下拉数据查询：订单列表页初始化时拉取“查询条件(filtertype)”下拉框的可选项列表，返回 key(提交值)/values(中文显示文案)，用于渲染 #queryConditions 选择器；用户选中后其 key 作为 filtertype 提交给订单列表查询接口。

## 用法

```bash
mbs oms erp-order-query-conditions
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/queryConditions`
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
| `desc` | string | 响应提示信息（失败时弹出） | - |
| `obj[]` | array | 查询条件项列表（下拉选项数据源） | - |
| `obj[][0]` | string | 查询条件键值/提交值，选中后作为 option value，最终以 filtertype 字段提交订单列表查询接口（如 closeTimeLess24 等） | - |
| `obj[][1]` | string | 查询条件中文显示文案（下拉框展示文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
