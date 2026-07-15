<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-ke-dan-price-info

客单价报表查询(国家/品类)：销售客单价报表：按时间区间、平台、排序及总监/经理/店长/店铺/国家/品类/邮寄方式等筛选，查询各客单价分组的收入、支出、订单数量、利润与毛利率明细行及合计行；前端用于渲染明细表格与收入/利润柱状图。

## 用法

```bash
mbs oms erp-order-get-ke-dan-price-info [--keDanPriceType <string>] [--employeeType <string>] [--startTime <string>] [--endTime <string>] [--platformId <string>] [--sort <string>] [--country <array>] [--categoryNameList <array>] [--shopName <array>] [--employeeName <array>] [--bigChief <array>] [--leaders <array>] [--modetype <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getKeDanPriceInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `keDanPriceType` | keDanPriceType | body | string | 否 | - | 客单价类型(来源 #keDanPriceType)。country=国家客单价;category=品类客单价 |
| `employeeType` | employeeType | body | string | 否 | - | 人员类别，前端固定传 '1' |
| `startTime` | startTime | body | string | 否 | - | 起始日期(yyyy-MM-dd，来源日期控件 #time1)，默认当前日期前一个月 |
| `endTime` | endTime | body | string | 否 | - | 结束日期(yyyy-MM-dd，来源日期控件 #time2)，不可大于当前日期 |
| `platformId` | platformId | body | string | 否 | - | 平台ID(来源平台下拉 #reserve11，空串=全部) |
| `sort` | sort | body | string | 否 | - | 排序方式(来源 #sort)。7=客单价正序;1=收入小计倒序;2=收入小计正序;3=毛利倒序;4=毛利正序;5=毛利率倒序;6=毛利率正序 |
| `country` | country | body | array | 否 | - | 国家列表(来源国家多选 #countryList，未选传空数组) |
| `categoryNameList` | categoryNameList | body | array | 否 | - | 品类名称列表(来源品类多选 #categoryList，品类客单价模式使用) |
| `shopName` | shopName | body | array | 否 | - | 店铺名称列表(来源 Vue shop，以空格拆分；未选传空数组) |
| `employeeName` | employeeName | body | array | 否 | - | 店长/组员(来源 Vue shopmanager 选中值) |
| `bigChief` | bigChief | body | array | 否 | - | 大酋长/经理(来源 Vue manager 选中值) |
| `leaders` | leaders | body | array | 否 | - | 总监(来源 Vue leaders 选中值) |
| `modetype` | modetype | body | string | 否 | - | 邮寄方式(来源 #modetype)。平邮/挂号/大货;空串=全部 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `saleReportList[]` | array | 客单价分组明细行列表 | - |
| `saleReportList[][0]` | number | 行标记：1=该行为汇总/特殊行(前端置灰背景) | - |
| `saleReportList[][1]` | string | 客单价(分组名，国家或品类区间) | - |
| `saleReportList[][2]` | number | 交易金额(收入) | - |
| `saleReportList[][3]` | number | 实入运费(收入) | - |
| `saleReportList[][4]` | number | 收入小计(柱状图"收入"取值) | - |
| `saleReportList[][5]` | number | 总商品成本(支出) | - |
| `saleReportList[][6]` | number | 实付运费(支出) | - |
| `saleReportList[][7]` | number | 平台费(支出) | - |
| `saleReportList[][8]` | number | 付款交易费(支出) | - |
| `saleReportList[][9]` | number | 包材费(支出) | - |
| `saleReportList[][10]` | number | 站内推广费(支出) | - |
| `saleReportList[][11]` | number | 站外推广费(支出) | - |
| `saleReportList[][12]` | number | 退款金额(支出) | - |
| `saleReportList[][13]` | number | 店铺成本(模板中该列已注释未启用，保留字段；具体含义待人工确认) | - |
| `saleReportList[][14]` | number | 罚款(支出) | - |
| `saleReportList[][15]` | number | 支出小计 | - |
| `saleReportList[][16]` | number | 订单数量 | - |
| `saleReportList[][17]` | number | 利润(柱状图"利润"取值) | - |
| `saleReportList[][18]` | number | 毛利率(原值为小数，前端 ×100 保留2位以%展示) | - |
| `sumSaleReport` | object | 合计对象(表格最后一行"合计") | - |
| `sumSaleReport.amount` | number | 交易金额合计 | - |
| `sumSaleReport.moneyexpressask` | number | 实入运费合计 | - |
| `sumSaleReport.totalamount` | number | 收入小计合计 | - |
| `sumSaleReport.costprice` | number | 总商品成本合计 | - |
| `sumSaleReport.shippingfee` | number | 实付运费合计 | - |
| `sumSaleReport.platformfee` | number | 平台费合计 | - |
| `sumSaleReport.paypalfee` | number | 付款交易费合计 | - |
| `sumSaleReport.packagingfee` | number | 包材费合计 | - |
| `sumSaleReport.publishfee` | number | 站内推广费合计 | - |
| `sumSaleReport.publishfeeother` | number | 站外推广费合计 | - |
| `sumSaleReport.refundfee` | number | 退款金额合计 | - |
| `sumSaleReport.fines` | number | 罚款合计 | - |
| `sumSaleReport.totalcost` | number | 支出小计合计 | - |
| `sumSaleReport.ordernum` | number | 订单数量合计 | - |
| `sumSaleReport.profit` | number | 利润合计 | - |
| `sumSaleReport.profitrate` | number | 毛利率合计(前端 ×100 保留2位以%展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
