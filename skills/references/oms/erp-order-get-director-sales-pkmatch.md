<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-director-sales-pkmatch

二级部门销售PK榜(总监)查询：销售PK大屏播报：按平台与日期查询各二级部门(及负责人/总监)的上月销售额、当月销售额、预计当月销售额、预计增长额、排名与预估输赢，渲染于 Element-Plus 表格大屏轮播。

## 用法

```bash
mbs oms erp-order-get-director-sales-pkmatch --time <string> --platform <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/pKmatchController/getDirectorSalesPKMatch`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `time` | time | query | string | 是 | - | 查询日期(Query)。格式 yyyyMMdd；前端取当前时间-1天(昨天)拼接而成。来源：JS自动计算 |
| `platform` | platform | query | string | 是 | - | 平台(Query)。固定取值 aliexpress(速卖通)。来源：代码硬编码 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 二级部门销售PK榜数据列表(前端赋值给 tabledata) | - |
| `obj[][0]` | string | 二级部门(名称) | - |
| `obj[][1]` | string | 二级部门负责人(总监) | - |
| `obj[][2]` | number | 上月销售额(模板列标题“7月销售额”) | - |
| `obj[][3]` | number | 当月销售额(模板列标题“8月销售额”) | - |
| `obj[][4]` | number | 预计当月销售额(模板列标题“预计8月销售额”) | - |
| `obj[][5]` | number | 预计增长销售额 | - |
| `obj[][6]` | number | 排名 | - |
| `obj[][7]` | number | 预估进展(对战输赢)。1=胜(展示奖杯图标 Trophy)；非1=不展示 | - |
| `obj[][8]` | string | 本次播报数据更新时间(页面右上角展示，取列表首行 tabledata[0].times) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
