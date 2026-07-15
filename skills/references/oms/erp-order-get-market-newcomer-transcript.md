# mbs oms erp-order-get-market-newcomer-transcript

市场新人成绩单(Summary)查询：营销/市场新人成绩单页面加载时调用：以员工姓名为入参，返回该新人的基本信息(头像/姓名/入职/指导人/HRBP/简介)、新人summary六大指标(日均销售额、毛利率、手动刊登量、手动动销率、新品出单比、新手刊listing产出，含本人值与平台平均值)、大酋长评语、总经办意见以及转正第一/第二阶段自然月。

## 用法

```bash
mbs oms erp-order-get-market-newcomer-transcript --employeeName <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/newComerTranscript/getMarketNewcomerTranscript`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeName` | employeeName | body | string | 是 | - | 员工姓名(新人姓名)。来源：页面 URL 查询参数 employeeName，经 GetQueryString 获取并 decodeURI 解码 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准响应包装字段) | - |
| `desc` | string | 响应提示信息(标准响应包装字段) | - |
| `obj` | object | 业务数据对象,前端以 data.obj 判空 | - |
| `obj.empPic` | string | 员工头像URL(加载失败回退默认头像 user2.png) | - |
| `obj.employeeName` | string | 员工姓名 | - |
| `obj.workMonth` | string | 入职年月(展示"入职：xxx") | - |
| `obj.mentor` | string | 指导人姓名(为空时展示"暂无") | - |
| `obj.hireB` | string | HRBP(为空时展示"暂无") | - |
| `obj.memberDesc` | string | 新人简介描述文本 | - |
| `obj.averageDailySales` | number | 日均销售额(本人值,与平台平均值比较显示升/降箭头) | - |
| `obj.averageDailySalesAvg` | number | 我司当前平台日均销售额平均值 | - |
| `obj.platform` | string | 平台名称(用于展示"我司{platform}平台平均值") | - |
| `obj.profitRate` | number | 毛利率(本人值,前端追加%号展示) | - |
| `obj.profitRateAvg` | number | 我司当前平台毛利率平均值(%) | - |
| `obj.manulPublish` | number | 手动刊登量(本人值) | - |
| `obj.manualPublishAvg` | number | 我司当前平台手动刊登量平均值 | - |
| `obj.manulMarketingRate` | number | 手动动销率(本人值,前端追加%号展示) | - |
| `obj.manulMarkingRateAvg` | number | 我司当前平台手动动销率平均值(%) | - |
| `obj.newProductRatio` | number | 新品出单比(本人值,前端追加%号展示) | - |
| `obj.newProductRatioAvg` | number | 我司当前平台新品出单比平均值(%) | - |
| `obj.newcomerListingOutput` | number | 新手刊listing产出(本人值) | - |
| `obj.newcomerListingOutputAvg` | number | 我司当前平台新手刊listing产出平均值 | - |
| `obj.chiefRemark` | string | 大酋长评语(HTML文本,直填 #chiefRemark) | - |
| `obj.adminRemark` | string | 总经办意见(HTML文本,直填 #adminRemark) | - |
| `obj.nextMonth` | string | 转正第一阶段-新人入职次个自然月(直填 #nextMonth) | - |
| `obj.nextNextMonth` | string | 转正第二阶段-新人入职次次个自然月(直填 #nextNextMonth) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
