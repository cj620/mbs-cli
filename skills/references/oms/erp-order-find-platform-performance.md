# mbs oms erp-order-find-platform-performance

平台绩效月报查询：平台绩效月报页面按月查询各电商平台绩效数据：传入起始月份(starttime)、平台(platformid)、类型(type=2)，返回 obj.data 各平台行（本月/上月各项数据反馈、月度涨幅、近30天数据、毛利率等）与 obj.sum 汇总行，以及最后更新日期 obj.time。本月/上月/上上月/上三~六月各 Tab 均调用本接口，仅 starttime 不同。

## 用法

```bash
mbs oms erp-order-find-platform-performance --starttime <string> [--platformid <string>] --type <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/platformPerformance/findPlatformPerformance`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `starttime` | starttime | body | string | 是 | - | 统计起始月份时间，来源 sessionStorage(thisweek/lastweek/beforeweek/moreWeek1~4)，值由 findMonth 接口返回；来源控件：Tab 切换 |
| `platformid` | platformid | body | string | 否 | - | 平台ID，取自隐藏控件 #platformId（为空则查全部平台） |
| `type` | type | body | string | 是 | - | 查询类型，各 Tab 固定传 '2'（平台绩效月报维度） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码（统一响应包装，本页未引用）(待人工确认) | - |
| `desc` | string | 响应提示信息（统一响应包装，本页未引用）(待人工确认) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.time` | string | 最后更新日期（渲染至 #lastTime） | - |
| `obj.data[]` | array | 各平台绩效数据行列表 | - |
| `obj.data[][0]` | string | 平台名称（左侧固定列展示） | - |
| `obj.data[][1]` | number | 本月刊登量 | - |
| `obj.data[][2]` | number | 本月总在线量（截止本月结束日） | - |
| `obj.data[][3]` | number | 本月订单量 | - |
| `obj.data[][4]` | number | 本月客单价（单位：$） | - |
| `obj.data[][5]` | number | 本月订单销售额 | - |
| `obj.data[][6]` | number | 本月发货毛利额 | - |
| `obj.data[][7]` | number | 本月新品出单量 | - |
| `obj.data[][8]` | number | 本月新品销售额 | - |
| `obj.data[][9]` | number | 本月新品率（前端以 % 展示） | - |
| `obj.data[][10]` | number | 上月刊登量 | - |
| `obj.data[][11]` | number | 上月总在线量（截止上月结束日） | - |
| `obj.data[][12]` | number | 上月订单量 | - |
| `obj.data[][13]` | number | 上月客单价（单位：$） | - |
| `obj.data[][14]` | number | 上月订单销售额 | - |
| `obj.data[][15]` | number | 上月发货毛利额 | - |
| `obj.data[][16]` | number | 上月新品出单量 | - |
| `obj.data[][17]` | number | 上月新品销售额 | - |
| `obj.data[][18]` | number | 上月新品率（前端以 % 展示） | - |
| `obj.data[][19]` | number | 刊登量月度涨幅（前端 %，≥0 红色↑ / <0 蓝色↓） | - |
| `obj.data[][20]` | number | 在线量月度涨幅（前端 %，↑/↓） | - |
| `obj.data[][21]` | number | 订单量月度涨幅（前端 %，↑/↓） | - |
| `obj.data[][22]` | number | 客单价月度涨幅（前端 %，↑/↓） | - |
| `obj.data[][23]` | number | 销售额月度涨幅（前端 %，↑/↓） | - |
| `obj.data[][24]` | number | 毛利额月度涨幅（前端 %，↑/↓） | - |
| `obj.data[][25]` | number | 新品出单量月度涨幅（前端 %，↑/↓） | - |
| `obj.data[][26]` | number | 新品销售额月度涨幅（前端 %，↑/↓） | - |
| `obj.data[][27]` | number | 近30天新品率（前端以 % 展示） | - |
| `obj.data[][28]` | number | 近30天动销率（前端以 % 展示） | - |
| `obj.data[][29]` | number | 近30天退款率（前端以 % 展示） | - |
| `obj.data[][30]` | number | 上月发货毛利率（前端以 % 展示） | - |
| `obj.data[][31]` | number | 本月至今发货毛利率（前端以 % 展示） | - |
| `obj.sum` | object | 汇总行（各平台合计，结构同 data 行但无 platformname） | - |
| `obj.sum.publishnum` | number | 汇总-本月刊登量 | - |
| `obj.sum.onlinenum` | number | 汇总-本月总在线量 | - |
| `obj.sum.ordernum` | number | 汇总-本月订单量 | - |
| `obj.sum.customerPrice` | number | 汇总-本月客单价（$） | - |
| `obj.sum.orderSaleMoney` | number | 汇总-本月订单销售额 | - |
| `obj.sum.shipProfit` | number | 汇总-本月发货毛利额 | - |
| `obj.sum.newProductOrdernum` | number | 汇总-本月新品出单量 | - |
| `obj.sum.newProductSaleMoney` | number | 汇总-本月新品销售额 | - |
| `obj.sum.newProductRate` | number | 汇总-本月新品率（%） | - |
| `obj.sum.publishnum2` | number | 汇总-上月刊登量 | - |
| `obj.sum.onlinenum2` | number | 汇总-上月总在线量 | - |
| `obj.sum.ordernum2` | number | 汇总-上月订单量 | - |
| `obj.sum.customerPrice2` | number | 汇总-上月客单价（$） | - |
| `obj.sum.orderSaleMoney2` | number | 汇总-上月订单销售额 | - |
| `obj.sum.shipProfit2` | number | 汇总-上月发货毛利额 | - |
| `obj.sum.newProductOrdernum2` | number | 汇总-上月新品出单量 | - |
| `obj.sum.newProductSaleMoney2` | number | 汇总-上月新品销售额 | - |
| `obj.sum.newProductRate2` | number | 汇总-上月新品率（%） | - |
| `obj.sum.publishnumGain` | number | 汇总-刊登量涨幅（%，↑/↓） | - |
| `obj.sum.onlinenumGain` | number | 汇总-在线量涨幅（%，↑/↓） | - |
| `obj.sum.ordernumGain` | number | 汇总-订单量涨幅（%，↑/↓） | - |
| `obj.sum.customerPriceGain` | number | 汇总-客单价涨幅（%，↑/↓） | - |
| `obj.sum.orderSaleMoneyGain` | number | 汇总-销售额涨幅（%，↑/↓） | - |
| `obj.sum.shipProfitGain` | number | 汇总-毛利额涨幅（%，↑/↓） | - |
| `obj.sum.newProductOrdernumGain` | number | 汇总-新品出单量涨幅（%，↑/↓） | - |
| `obj.sum.newProductSaleMoneyGain` | number | 汇总-新品销售额涨幅（%，↑/↓） | - |
| `obj.sum.thirtyNewProductRate` | number | 汇总-近30天新品率（%） | - |
| `obj.sum.thirtySoldListingRate` | number | 汇总-近30天动销率（%） | - |
| `obj.sum.thirtyRefundRate` | number | 汇总-近30天退款率（%） | - |
| `obj.sum.lastmonthProfitrate` | number | 汇总-上月发货毛利率（%） | - |
| `obj.sum.themonthProfitrate` | number | 汇总-本月至今发货毛利率（%） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
