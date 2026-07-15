<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-purchase-get-sku-purchase-task

查询SKU采购任务：依据 SKU 查询该商品在采购下单模块生成的采购任务列表，返回采购任务生成时间、采购员、采购备注、采购仓库/数量、延迟天数、异常信息与标记完成情况，用于 SKU 详情页采购任务表格渲染。

## 用法

```bash
mbs scm erp-purchase-get-sku-purchase-task --sku <string>
```

## API

- Service: `erpPurchase`
- Method: `POST`
- Path: `/erpPurchase/erpPurchase/purchaseDownOrder/getSkuPurchaseTask`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | SKU 编码（查询串参数；来源浏览器地址栏 SKU，前端 GetQueryString('SKU') 取值后拼接到 URL） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（统一 wrapper，本接口回调未显式判断）(待人工确认) | - |
| `desc` | string | 响应提示信息（统一 wrapper）(待人工确认) | - |
| `obj[]` | array | 采购任务列表（前端遍历渲染，为空则不渲染表格） | - |
| `obj[][0]` | string | 采购任务生成时间 | - |
| `obj[][1]` | string | 采购员 | - |
| `obj[][2]` | string | 采购备注 | - |
| `obj[][3]` | string | 采购仓库名称（模板展示为 仓库(采购数量)） | - |
| `obj[][4]` | number | 采购数量 | - |
| `obj[][5]` | string | 延迟天数 | - |
| `obj[][6]` | string | 异常信息；同时用于采购是否标记完成判断：值为 1 显示已完成，否则未完成 | - |
| `obj[][7]` | string | 采购标记完成说明（展示于采购是否标记完成列下方） | - |
| `obj[][8]` | string | 商品图片地址；success 回调中前端补全：有值则拼接 https://cbu01.alicdn.com/ 前缀，无值则用默认占位图 /2018ui/assets/images/timg.jpg | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
