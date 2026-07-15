<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-find-line

物流方式统计查询(findLine)：物流仪表盘统计接口：按统计时间区间与排序方式，统计各物流方式(/货运渠道/国家/物流公司，随页面 viewMode 切换)的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款及各平台(wish/ebay/amz/smt/joom/其他)单量。

## 用法

```bash
mbs fars erpaccount-find-line [--sortorder <string>] [--types2 <string>] [--startTime <string>] [--endTime <string>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/logisticsController/findLine`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sortorder` | sortorder | body | string | 否 | - | 排序方式。枚举：发货单量降序(默认)/发货单量升序/运费升序/运费降序/重量升序/重量降序/单价升序/单价降序。来源 #sortorder 下拉 |
| `types2` | types2 | body | string | 否 | - | 物流类型。枚举：平邮小包/挂号小包/挂号大货。当前页面 #types2 下拉已注释，实际传空，字段保留以备恢复 |
| `startTime` | startTime | body | string | 否 | - | 统计开始时间，格式 yyyy-MM-dd。来源 #startTime 日期控件(默认昨天) |
| `endTime` | endTime | body | string | 否 | - | 统计结束时间，格式 yyyy-MM-dd。来源 #endTime 日期控件(默认昨天) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 物流统计行列表(前端遍历并渲染表格) | - |
| `obj[][0]` | string | 物流方式名称(随 viewMode 切换含义：货运渠道/国家/物流公司/物流方式) | - |
| `obj[][1]` | number | 发货单量 | - |
| `obj[][2]` | number | 运费(￥) | - |
| `obj[][3]` | number | 重量 | - |
| `obj[][4]` | number | 单价(元/克) | - |
| `obj[][5]` | string | 上网时效(天)。HTML 片段，模板 {{@}} 原文输出 | - |
| `obj[][6]` | string | 妥投时效(天)。HTML 片段，模板 {{@}} 原文输出 | - |
| `obj[][7]` | string | 无物流轨迹占比。HTML 片段，模板 {{@}} 原文输出 | - |
| `obj[][8]` | number | 退款订单数 | - |
| `obj[][9]` | number | 退款率(前端非空时拼接 % 展示) | - |
| `obj[][10]` | number | wish 平台发货单量 | - |
| `obj[][11]` | number | ebay 平台发货单量 | - |
| `obj[][12]` | number | 亚马逊(amz)平台发货单量 | - |
| `obj[][13]` | number | 速卖通(smt)平台发货单量 | - |
| `obj[][14]` | number | joom 平台发货单量 | - |
| `obj[][15]` | number | 其他平台发货单量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
