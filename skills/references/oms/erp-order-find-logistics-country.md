# mbs oms erp-order-find-logistics-country

物流国家统计列表查询：物流跟进看板（任务跟进页）按国家维度统计查询：依据国家、物流类型、统计时间区间与排序方式，返回各国家的跟进次数、发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款数/退款率及各平台（wish/ebay/amz/smt/joom/其他）发货单量。

## 用法

```bash
mbs oms erp-order-find-logistics-country [--country <string>] [--expressType <string>] [--startTime <string>] [--endTime <string>] [--orderby <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/trackController/findLogisticsCountry`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `country` | country | body | string | 否 | - | 国家。来源 #country 国家下拉（findTrackCountry 填充）；val() 为 null 时传空字符串（全部国家） |
| `expressType` | expressType | body | string | 否 | - | 物流类型。来源 #expressType 类型下拉（findTrackExpressType 填充） |
| `startTime` | startTime | body | string | 否 | - | 统计开始时间（日期，yyyy-MM-dd）。来源 #startTime 日期框，默认当天前一天 |
| `endTime` | endTime | body | string | 否 | - | 统计结束时间（日期，yyyy-MM-dd）。来源 #endTime 日期框 |
| `orderby` | orderby | body | string | 否 | - | 排序方式。来源 #orderby 下拉。枚举：按发货单量倒序/按发货重量倒序/按运费总价倒序/按退款率倒序/按上网时效倒序/按妥投时效倒序 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（统一外壳） | - |
| `desc` | string | 响应提示信息（统一外壳） | - |
| `obj[]` | array | 国家统计列表（按国家维度的统计行数组） | - |
| `obj[][0]` | string | 国家 | - |
| `obj[][1]` | number | 跟进次数（链接跳转 logView.html?country=...） | - |
| `obj[][2]` | string | 最后联系时间 | - |
| `obj[][3]` | number | 发货单量（点击 opennewwin(value,'1') 跳转店铺数据） | - |
| `obj[][4]` | number | 运费（￥） | - |
| `obj[][5]` | number | 重量 | - |
| `obj[][6]` | number | 单价（元/克） | - |
| `obj[][7]` | number | 上网时效（天） | - |
| `obj[][8]` | number | 妥投时效（天） | - |
| `obj[][9]` | number | 无物流轨迹占比（前端后接 % 展示） | - |
| `obj[][10]` | number | 退款订单数 | - |
| `obj[][11]` | number | 退款率（前端后接 % 展示） | - |
| `obj[][12]` | number | wish 平台发货单量 | - |
| `obj[][13]` | number | ebay 平台发货单量 | - |
| `obj[][14]` | number | amazon（amz）平台发货单量 | - |
| `obj[][15]` | number | 速卖通（smt）平台发货单量 | - |
| `obj[][16]` | number | joom 平台发货单量 | - |
| `obj[][17]` | number | 其他平台发货单量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
