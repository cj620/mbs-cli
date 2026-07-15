# mbs oms erp-order-find-pbreportof-shop

店铺ProductBoost(PB)推广费报表查询：根据店铺ID与活动时间区间，查询该店铺下 Wish ProductBoost(商品推广)各活动的费用报表：返回活动基础信息、GMV/PB GMV、活动最大预算、广告总消耗与期间消耗、曝光费/报名费/曝光数等明细；前端对 totalCampaignSpend、incrementFee 做合计生成汇总行并以 art-template 渲染表格。

## 用法

```bash
mbs oms erp-order-find-pbreportof-shop --startTime <string> --endTime <string> --shopId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/wishProductBoost/findPBReportofShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `startTime` | startTime | body | string | 是 | - | 活动统计-开始时间，来源 URL 查询参数 startTime |
| `endTime` | endTime | body | string | 是 | - | 活动统计-结束时间，来源 URL 查询参数 endTime |
| `shopId` | shopId | body | string | 是 | - | 店铺ID，来源 URL 查询参数 shopId，用于筛选指定店铺的 PB 报表 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | ProductBoost 活动费用报表列表 | - |
| `obj[][0]` | string | 活动ID（汇总行固定填“汇总”） | - |
| `obj[][1]` | string | 活动名称 | - |
| `obj[][2]` | string | 活动开始时间 | - |
| `obj[][3]` | string | 活动结束时间 | - |
| `obj[][4]` | string | 活动状态 | - |
| `obj[][5]` | string | GMV(成交总额) | - |
| `obj[][6]` | string | PB GMV(ProductBoost 带来的成交总额) | - |
| `obj[][7]` | string | 活动最大预算 | - |
| `obj[][8]` | number | 活动总消耗(当前消耗)，前端遇空置0累加生成汇总并 toFixed(2) | - |
| `obj[][9]` | number | 期间消耗(增量费用)，前端遇空置0累加生成汇总并 toFixed(2)，模板展示 | - |
| `obj[][10]` | string | 币种 | - |
| `obj[][11]` | string | 是否可编辑 | - |
| `obj[][12]` | string | 标记位(默认 null)(待人工确认具体含义) | - |
| `obj[][13]` | string | 是否有反馈(默认 null) | - |
| `obj[][14]` | string | 记录ID(默认 null) | - |
| `obj[][15]` | number | 曝光费金额(默认 null) | - |
| `obj[][16]` | string | 曝光费开始时间(默认 null) | - |
| `obj[][17]` | string | 曝光费结束时间(默认 null) | - |
| `obj[][18]` | string | 曝光费费用状态(默认 null) | - |
| `obj[][19]` | string | 是否自动化广告活动 | - |
| `obj[][20]` | string | 商户ID | - |
| `obj[][21]` | number | 付费曝光数(默认 null) | - |
| `obj[][22]` | number | 销售额/销量(默认 null) | - |
| `obj[][23]` | string | 店铺ID(默认 null) | - |
| `obj[][24]` | string | 店铺名称(默认 null) | - |
| `obj[][25]` | number | 已收取报名费总额(默认 null) | - |
| `obj[][26]` | number | 已收取曝光费总额(默认 null) | - |
| `obj[][27]` | number | 总曝光数(默认 null) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
