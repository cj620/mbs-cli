<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-market-newcomer-transcript-detail

营销新人成绩单-业绩/店铺状态明细查询：营销新人成绩单详情页「业绩明细」与「店铺状态明细」两块表格的数据来源。按员工姓名查询该新人各入职阶段的刊登/出单/动销/毛利/销售额等业绩汇总，以及各时间节点的店铺数量/黑马/健康/疲软/等级变化等店铺状态汇总，返回按阶段排列的明细列表。

## 用法

```bash
mbs oms erp-order-get-market-newcomer-transcript-detail --employeeName <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/newComerTranscript/getMarketNewcomerTranscriptDetail`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeName` | employeeName | body | string | 是 | - | 新人员工姓名(成绩单归属人),来源 URL 查询参数 employeeName(decodeURI 解码) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(系统统一响应壳) | - |
| `desc` | string | 响应提示信息(系统统一响应壳) | - |
| `obj[]` | array | 业务数据列表:新人各阶段业绩明细+店铺状态明细行 | - |
| `obj[][0]` | number | 业绩明细阶段类型。1=平均(接手前15天);2=0-15天;3=16-30天;4=31-45天;5=46-60天;6=61-75天 | - |
| `obj[][1]` | number | 手动刊登 listing 数量 | - |
| `obj[][2]` | number | 手动出单 listing 数量 | - |
| `obj[][3]` | number | 手动动销率(前端拼接 % 展示) | - |
| `obj[][4]` | number | 手动刊登 listing 毛利率(前端拼接 % 展示) | - |
| `obj[][5]` | number | 日均销售额(listing 数据汇总) | - |
| `obj[][6]` | number | 日均销售额环比增长额(listing 数据汇总) | - |
| `obj[][7]` | string | 马帮代称/管理店铺(逗号拼接,前端超过2个截断显示并 title 悬浮全量) | - |
| `obj[][8]` | number | 店铺订单数量(仅针对有独立店铺的新人) | - |
| `obj[][9]` | number | 店铺订单销售额 | - |
| `obj[][10]` | number | 店铺发货毛利额 | - |
| `obj[][11]` | number | 平均退款率(前端拼接 % 展示) | - |
| `obj[][12]` | number | 店铺毛利率(前端拼接 % 展示) | - |
| `obj[][13]` | number | 店铺日均销售额 | - |
| `obj[][14]` | number | 店铺日均销售额环比增长额 | - |
| `obj[][15]` | number | 店铺状态阶段类型(有值才渲染店铺状态行)。1=第0天;2=第30天;3=第60天;4=第75天 | - |
| `obj[][16]` | number | 店铺数量 | - |
| `obj[][17]` | number | 黑马店铺量 | - |
| `obj[][18]` | number | 健康发展店铺量 | - |
| `obj[][19]` | number | 疲软店铺量 | - |
| `obj[][20]` | string | 店铺等级变化(逗号拼接,前端超过2个截断显示并 title 悬浮全量) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
