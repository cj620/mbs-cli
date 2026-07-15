<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-mobile-get-listing-order-in-month

刊登商品近一月销量趋势查询：移动端「商品在线详情」页销量趋势图（echarts）数据来源接口：按商品(itemId/parentSPUId)与平台(platformId)查询该刊登商品近一个月内逐日的销量数据，返回销售时间(saleTime)与销量(saleNum)序列，前端据此绘制销量趋势折线图。

## 用法

```bash
mbs oms erp-mobile-get-listing-order-in-month [--parentSPUId <string>] [--platformId <string>]
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/hotProductListing/getListingOrderInMonth`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `parentSPUId` | parentSPUId | body | string | 否 | - | 父级SPU/商品ID。来源：浏览器URL查询参数 itemId（GetQueryString("itemId")）；取不到时传空字符串 |
| `platformId` | platformId | body | string | 否 | - | 平台ID。来源：浏览器URL查询参数 platformId（GetQueryString("platformId")）；取不到时传空字符串 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（同域统一响应结构，本调用回调未显式校验） | - |
| `desc` | string | 响应提示信息（同域统一响应结构） | - |
| `obj[]` | array | 销量趋势数据列表（按日期排列的销量数据数组） | - |
| `obj[][0]` | string | 销售时间/日期（echarts x 轴类目，前端 arr.push） | - |
| `obj[][1]` | number | 销量（echarts 折线数据，前端 list.push） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
