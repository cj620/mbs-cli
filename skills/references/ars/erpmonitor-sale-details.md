<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-sale-details

3个月内新品刊登&销售情况查询：财务经理看板底部「3个月内新品刊登&销售情况」表格数据源：按 SKU 状态分组，返回近3个月新品的 SKU 数量、第1~4周刊登量/销量以及监控最后记录时间，前端据此渲染表格并计算单 SKU 本周平均刊登量。

## 用法

```bash
mbs ars erpmonitor-sale-details
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/monitor/saleDetails`
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
| `obj[]` | array | 新品刊登&销售数据列表(按SKU状态分组) | - |
| `obj[][0]` | string | SKU状态(分组名称,表格首列) | - |
| `obj[][1]` | number | 该状态SKU数量(前端作除数计算单SKU本周平均刊登量,为0时展示0) | - |
| `obj[][2]` | number | 第1周刊登量 | - |
| `obj[][3]` | number | 第1周销量 | - |
| `obj[][4]` | number | 第2周刊登量 | - |
| `obj[][5]` | number | 第2周销量 | - |
| `obj[][6]` | number | 第3周刊登量 | - |
| `obj[][7]` | number | 第3周销量 | - |
| `obj[][8]` | number | 第4周刊登量 | - |
| `obj[][9]` | number | 第4周销量 | - |
| `obj[][10]` | string | 监控最后记录时间(该分组统计日期,表格末列) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
