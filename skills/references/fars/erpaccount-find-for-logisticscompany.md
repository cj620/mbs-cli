<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-find-for-logisticscompany

物流公司维度物流统计查询：物流统计看板「按物流公司查看」维度的统计查询：按统计时间区间与排序方式，返回各物流公司的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款情况及各平台(wish/ebay/amazon/aliexpress/joom/其他)发货单量。

## 用法

```bash
mbs fars erpaccount-find-for-logisticscompany [--sortorder <string>] [--types2 <string>] [--startTime <string>] [--endTime <string>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/logisticsController/findForLogisticscompany`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sortorder` | sortorder | body | string | 否 | - | 排序方式。来源控件 #sortorder 下拉。枚举：发货单量降序(默认)/发货单量升序/运费升序/运费降序/重量升序/重量降序/单价升序/单价降序 |
| `types2` | types2 | body | string | 否 | - | 物流类型(平邮小包/挂号小包/挂号大货)。来源控件 #types2；该下拉在页面中已被注释，$('#types2').val() 实际返回 undefined(待人工确认) |
| `startTime` | startTime | body | string | 否 | - | 统计开始时间(格式 yyyy-MM-dd)。来源控件 #startTime 日期框，默认值为当天的前一天 |
| `endTime` | endTime | body | string | 否 | - | 统计结束时间(格式 yyyy-MM-dd)。来源控件 #endTime 日期框 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 物流统计数据列表(前端 data.obj 直接遍历) | - |
| `obj[][0]` | string | 物流公司名称(按物流公司维度) | - |
| `obj[][1]` | number | 发货单量 | - |
| `obj[][2]` | number | 运费(￥) | - |
| `obj[][3]` | number | 重量 | - |
| `obj[][4]` | number | 单价(元/克) | - |
| `obj[][5]` | string | 上网时效(天)，为HTML片段，模板以 {{@}} 原样输出 | - |
| `obj[][6]` | string | 妥投时效(天)，为HTML片段，模板以 {{@}} 原样输出 | - |
| `obj[][7]` | string | 无物流轨迹占比，为HTML片段，模板以 {{@}} 原样输出 | - |
| `obj[][8]` | number | 退款订单数 | - |
| `obj[][9]` | number | 退款率(前端有值时拼接 % 展示) | - |
| `obj[][10]` | number | wish 平台发货单量 | - |
| `obj[][11]` | number | ebay 平台发货单量 | - |
| `obj[][12]` | number | amazon(amz) 平台发货单量 | - |
| `obj[][13]` | number | 速卖通(smt) 平台发货单量 | - |
| `obj[][14]` | number | joom 平台发货单量 | - |
| `obj[][15]` | number | 其他平台发货单量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
