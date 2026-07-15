<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-account-campaign-stat

人员任务报表-账号Campaign统计查询：按时间区间与排序方式统计各业务员(ERP用户)的广告投放业绩：返回每个人的 campaigns 数量、消耗金额、转化价值、单量、ROI、周出单≥10 的 campaigns 数量、出单比例、点击、转化率等汇总指标，用于报表页表格渲染。

## 用法

```bash
mbs oms erp-order-get-account-campaign-stat [--starttime <string>] [--endtime <string>] [--orderby <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/seebeeDevelopmentShop/getAccountCampaignStat`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `starttime` | starttime | body | string | 否 | - | 统计开始时间。来源控件 #starttime(input type=date)，格式 YYYY-MM-DD；默认值=今天前7天 |
| `endtime` | endtime | body | string | 否 | - | 统计结束时间。来源控件 #endtime(input type=date)，格式 YYYY-MM-DD；默认值=今天 |
| `orderby` | orderby | body | string | 否 | - | 排序方式。来源控件 #desc(下拉选择)，枚举：campaigns数量升序/campaigns数量降序/消耗金额升序/消耗金额降序/转化价值升序/转化价值降序/单量升序/单量降序/ROI升序/ROI降序/周出单>=10的campagigns数量升序/周出单>=10的campagigns数量降序/出单比例升序/出单比例降序/点击升序/点击降序/转化率升序/转化率降序 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（标准响应包装，本页未直接引用，待人工确认） | - |
| `desc` | string | 响应提示信息（标准响应包装，本页未直接引用，待人工确认） | - |
| `obj[]` | array | 人员Campaign业绩统计列表（成功回调判定 if(data.obj) 并遍历渲染） | - |
| `obj[][0]` | string | 姓名（ERP用户/业务员名称） | - |
| `obj[][1]` | number | campaigns 数量（广告系列数量） | - |
| `obj[][2]` | number | 消耗金额（广告花费） | - |
| `obj[][3]` | number | 转化价值 | - |
| `obj[][4]` | number | 单量（订单数量） | - |
| `obj[][5]` | number | ROI（投入产出比） | - |
| `obj[][6]` | number | 周出单≥10 的 campaigns 数量 | - |
| `obj[][7]` | number | 出单比例（前端有值时拼接 % 展示） | - |
| `obj[][8]` | number | 点击（点击数） | - |
| `obj[][9]` | number | 转化率（前端有值时拼接 % 展示） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
