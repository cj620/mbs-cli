<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-track-by-track-dny

东南亚战况播报(各赛道排名查询)：首页仪表盘(common.html)加载时调用，拉取「东南亚X月战况播报」榜单：按销售平台返回店长/员工的奖金、入围店铺毛利率明细、毛利率、总积分等，渲染到 #DeskRank 表格；同时返回播报更新时间(content)写入 #updateTime。无任何请求入参。

## 用法

```bash
mbs oms erp-order-get-track-by-track-dny
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/saleVistingCard/getTrackByTrackDny`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 战况播报榜单数组(每元素为一个销售平台/团队的排名行)，前端据此渲染 #DeskRank 表格 | - |
| `obj[][0]` | string | 销售平台(表格「平台」列，如 shopee/lazada/TikTok 等) | - |
| `obj[][1]` | string | 店长/员工姓名(表格「店长」列) | - |
| `obj[][2]` | number | 奖金(单位:元，紧随店长展示「{bonus}元」并带奖杯图标) | - |
| `obj[][3]` | string | 入围店铺(毛利率明细)，逗号分隔字符串；前端 split(',')，超过1项时取前两项加「...」展示，悬浮 title 显示全部 | - |
| `obj[][4]` | string | 毛利率(表格「毛利率」列)，为 HTML 片段，模板用 {{@...}} 原样(不转义)输出 | - |
| `obj[][5]` | number | 总积分(表格「总积分」列) | - |
| `content` | string | 播报更新时间，前端写入 #updateTime 显示「更新:xxx」 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
