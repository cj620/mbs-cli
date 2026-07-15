<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-product-newcomer-transcript

产品新人成绩单查询：根据员工姓名查询产品新人试用期成绩单：返回新人summary（头像、姓名、入职、指导人、HRBP、简介）及业绩明细（开发量SPU、动销率、百元动销率、新品销售额、日均销售额、发货毛利率及各自我司产品部平均值），并返回大酋长评语、总经办意见。

## 用法

```bash
mbs oms erp-order-get-product-newcomer-transcript --employeeName <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/newComerTranscript/getProductNewcomerTranscript`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeName` | employeeName | body | string | 是 | - | 员工姓名（新人姓名，作为成绩单查询主键），来源URL查询串employeeName经decodeURI解码 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象（新人成绩单，前端以data.obj判空后渲染） | - |
| `obj.empPic` | string | 员工头像URL（加载失败回退默认头像） | - |
| `obj.employeeName` | string | 员工姓名 | - |
| `obj.workMonth` | string | 入职（时间/月份） | - |
| `obj.mentor` | string | 指导人（为空时展示"暂无"） | - |
| `obj.hireB` | string | HRBP（为空时展示"暂无"） | - |
| `obj.memberDesc` | string | 新人简介/个人描述 | - |
| `obj.devSpuNum` | number | 开发量（SPU）个人值 | - |
| `obj.devSpuNumAvg` | number | 开发量（SPU）我司产品部平均值（前端与个人值比较显示升降箭头） | - |
| `obj.manulMarketingRate` | number | 动销率（%，前端直接拼接%展示） | - |
| `obj.manulMarkingRateAvg` | number | 动销率我司产品部平均值（%） | - |
| `obj.hundredSalesRate` | number | 百元动销率（%） | - |
| `obj.hundredSalesRateAvg` | number | 百元动销率我司产品部平均值（%） | - |
| `obj.newProductSale` | number | 新品销售额（个人值） | - |
| `obj.newProductSaleAvg` | number | 新品销售额我司产品部平均值 | - |
| `obj.averageDailySales` | number | 日均销售额（个人值） | - |
| `obj.averageDailySalesAvg` | number | 日均销售额我司产品部平均值 | - |
| `obj.profitRate` | number | 发货毛利率（%） | - |
| `obj.profitRateAvg` | number | 发货毛利率我司产品部平均值（%） | - |
| `obj.chiefRemark` | string | 大酋长评语（HTML，直填#chiefRemark） | - |
| `obj.adminRemark` | string | 总经办意见（HTML，直填#adminRemark） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
