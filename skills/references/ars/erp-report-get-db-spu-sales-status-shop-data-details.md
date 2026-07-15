<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erp-report-get-db-spu-sales-status-shop-data-details

SPU店铺销售状态店铺数据明细(退款明细)查询：SKU业绩页中点击某行退款金额时，按所选月份/平台/总监/经理/主管/店长及SKU筛选条件，分页查询该SKU+平台维度下的退款订单明细列表，渲染于退款详情抽屉表格。

## 用法

```bash
mbs ars erp-report-get-db-spu-sales-status-shop-data-details [--monthsList <array>] [--sku <string>] [--platformList <array<unknown>>] [--platformNames <array>] [--directorList <array>] [--bigChiefs <array>] [--manager <array>] [--leaders <array>] [--littleLeaders <array>] [--shopManager <array>] [--employeeNames <array>] [--orderMapList <array<unknown>>] --pageNo <number> --pageSize <number> [--total <number>]
```

## API

- Service: `erpReport`
- Method: `POST`
- Path: `/erpReport/erpReport/feeReport/getDbSpuSalesStatusShopDataDetails`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `monthsList` | monthsList | body | array | 否 | - | 月份列表，元素为 年-月 字符串(如 2025-06)。来源：月份树选择器，多选，默认当前月 |
| `sku` | sku | body | string | 否 | - | SKU 编号，多个用逗号分隔。来源：搜索框；点击退款行时改写为该行 sku，合计行则取 json 中各 sku 逗号拼接 |
| `platformList` | platformList | body | array<unknown> | 否 | - | 平台对象列表，来源：平台多选(value 为平台对象) |
| `platformNames` | platformNames | body | array | 否 | - | 平台名称列表。由 platformList 映射 PLATFORMNAME 得到；点击退款行时改写为该行平台名，合计行则取 json 各平台名数组 |
| `directorList` | directorList | body | array | 否 | - | 总监ID列表(原始字段)。来源：总监多选(value=item.id) |
| `bigChiefs` | bigChiefs | body | array | 否 | - | 总监ID列表(后端别名，等于 directorList) |
| `manager` | manager | body | array | 否 | - | 经理ID列表(原始字段)。来源：经理多选(value=item.id) |
| `leaders` | leaders | body | array | 否 | - | 经理ID列表(后端别名，等于 manager) |
| `littleLeaders` | littleLeaders | body | array | 否 | - | 主管ID列表。来源：主管多选(value=item.id) |
| `shopManager` | shopManager | body | array | 否 | - | 店长名称列表(原始字段)。来源：店长多选(value=item.name) |
| `employeeNames` | employeeNames | body | array | 否 | - | 店长名称列表(后端别名，等于 shopManager) |
| `orderMapList` | orderMapList | body | array<unknown> | 否 | - | 排序条件列表，来源：表格列排序。无排序时为空数组 |
| `pageNo` | pageNo | body | number | 是 | - | 当前页码。明细分页 refundpage.pageNo，从1开始 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数。明细分页 refundpage.pageSize，默认50(可选50/100/200) |
| `total` | total | body | number | 否 | - | 总条数。refundpage.total 被一并展开进请求体透传(前端遗留字段，后端通常忽略) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的退款明细总条数(前端用于分页) | - |
| `obj.resultList[]` | array | 退款订单明细列表 | - |
| `obj.resultList[][0]` | string | 订单编号(可跳转 /eshop/order.do?method=edit&orderid=) | - |
| `obj.resultList[][1]` | string | 交易编号 | - |
| `obj.resultList[][2]` | number | 退款/人民币金额 | - |
| `obj.resultList[][3]` | number | 退款/原始币金额 | - |
| `obj.resultList[][4]` | string | 国家 | - |
| `obj.resultList[][5]` | string | 物流方式 | - |
| `obj.resultList[][6]` | string | 店铺名 | - |
| `obj.resultList[][7]` | string | 店长 | - |
| `obj.resultList[][8]` | string | 订单状态 | - |
| `obj.resultList[][9]` | string | 作废原因(订单状态描述) | - |
| `obj.resultList[][10]` | string | 退款原因 | - |
| `obj.resultList[][11]` | string | 退款时间 | - |
| `obj.resultList[][12]` | string | 客服 | - |
| `obj.resultList[][13]` | string | 平台 | - |
| `obj.resultList[][14]` | string | 订单时间 | - |
| `obj.resultList[][15]` | string | 商品编号(SKU) | - |
| `obj.resultList[][16]` | string | 开发员 | - |
| `obj.resultList[][17]` | string | 是否异常退款 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
