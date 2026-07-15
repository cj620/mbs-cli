<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-purchase-get-purchase-task-log-list

采购任务日志列表查询：查询当前采购员的工作日志统计列表，按日期返回采购总任务量、下单量、付款完成量，以及超时付款/超时发货/虚假发货/物流延迟/入库延迟/tk出单/SMT出单等各维度的任务量与完成量及合计。页面加载即调用，不传任何查询参数。

## 用法

```bash
mbs scm erp-purchase-get-purchase-task-log-list
```

## API

- Service: `erpPurchase`
- Method: `POST`
- Path: `/erpPurchase/erpPurchase/purchaseDownOrder/getPurchaseTaskLogList`
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
| `obj[]` | array | 工作日志统计列表（按时间分行） | - |
| `obj[][0]` | string | 时间（日志日期） | - |
| `obj[][1]` | string | 采购（采购员） | - |
| `obj[][2]` | number | 今天采购总任务量 | - |
| `obj[][3]` | number | 今天下单量（完成下单量） | - |
| `obj[][4]` | number | 今天付款完成量 | - |
| `obj[][5]` | number | 超时付款-任务量 | - |
| `obj[][6]` | number | 超时付款-完成量 | - |
| `obj[][7]` | number | 超时发货-任务量 | - |
| `obj[][8]` | number | 超时发货-完成量 | - |
| `obj[][9]` | number | 虚假发货-任务量 | - |
| `obj[][10]` | number | 虚假发货-完成量 | - |
| `obj[][11]` | number | 物流延迟-任务量 | - |
| `obj[][12]` | number | 物流延迟-完成量 | - |
| `obj[][13]` | number | 入库延迟-任务量 | - |
| `obj[][14]` | number | 入库延迟-完成量 | - |
| `obj[][15]` | number | tk出单-任务量 | - |
| `obj[][16]` | number | tk出单-完成量 | - |
| `obj[][17]` | number | SMT出单-任务量 | - |
| `obj[][18]` | number | SMT出单-完成量 | - |
| `obj[][19]` | number | 合计-任务量 | - |
| `obj[][20]` | number | 合计-完成量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
