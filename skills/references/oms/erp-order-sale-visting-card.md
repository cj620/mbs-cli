<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-sale-visting-card

销售名片·东南亚/赛道战况播报查询：首页战况播报模块查询。基础路径 /erpOrder/erpOrder/saleVistingCard/，含两种 GET 形态：getTrackByTrackDny(东南亚战况，无入参) 与 {type}/getTrackByTrack(指定赛道战况，赛道经路径参数 type 传入)。返回 obj 列表(平台/团队/销售额/毛利率/增量/奖金等)及 content 更新文案，前端用 art-template 渲染战况播报表格。

## 用法

```bash
mbs oms erp-order-sale-visting-card [--type <string>]
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/saleVistingCard/`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `type` | type | body | string | 否 | - | 赛道类型，路径参数，仅 .../{type}/getTrackByTrack 形态使用。枚举 A/B/C/D/E/東(东南亚)。来源控件：首页 #circleBtn 赛道切换圆圈。getTrackByTrackDny 形态无此参数。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 战况播报数据列表(success 回调判 if(data.obj) 后渲染) | - |
| `obj[][0]` | string | 销售平台。两形态通用；getTrackByTrack 中作 tooltip 悬浮展示 | - |
| `obj[][1]` | string | 主平台/赛道归属(getTrackByTrack)。特殊值 产品开发；当 mainPlatform==salePlatform 或为产品开发时直接展示，否则展示 mainPlatform... 并 tooltip 显示 salePlatform | - |
| `obj[][2]` | string | 店长/队长(员工)姓名。两形态通用 | - |
| `obj[][3]` | string | 团队名称(getTrackByTrack) | - |
| `obj[][4]` | number | 团队人数(getTrackByTrack) | - |
| `obj[][5]` | number | 奖金(元)。两形态通用；有值才展示奖杯图标及{{bonus}}元 | - |
| `obj[][6]` | number | 目标毛利率(getTrackByTrack)。与 shipProfitRate 比较：aProfitRate>shipProfitRate 时毛利率标红 | - |
| `obj[][7]` | number | 发货(实际)毛利率，前端拼 % 展示(getTrackByTrack) | - |
| `obj[][8]` | string | 发货毛利率明细，tooltip 悬浮展示(HTML，template.defaults.escape=false)；getTrackByTrackDny 中以 {{@value.shipProfitRateNew}} 原样输出 | - |
| `obj[][9]` | string | A赛道毛利率明细(getTrackByTrackDny)，逗号分隔多值，前端 split(',') 取前两项+...，tooltip 悬浮全量 | - |
| `obj[][10]` | number | 环比增量/差额(getTrackByTrack)。>0 进度条/数值显示绿色(#00CC66)，否则橙色(#FF6600)；toLocaleString() 千分位展示 | - |
| `obj[][11]` | number | 增量进度百分比(0~100)，作进度条 width:{{ratio}}%(getTrackByTrack) | - |
| `obj[][12]` | number | 当前销售额(getTrackByTrack)，tooltip 内 toLocaleString() 展示 | - |
| `obj[][13]` | number | 预测本月业绩(getTrackByTrack)，tooltip 内 toLocaleString() 展示 | - |
| `obj[][14]` | number | 需加油金额(元/日)。两形态通用，toLocaleString() 展示 | - |
| `content` | string | 更新文案，渲染到 #updateTime(更新时间)；两形态均使用 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
