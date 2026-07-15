# mbs oms erp-order-find-logistics-express-type

物流类型(第二层)统计查询：物流跟进看板中，点击第一层「国家」行展开时按所选国家+物流类型+统计时间区间+排序方式查询该国家下各物流类型(expressType)的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款数/退款率及各平台(wish/ebay/amz/smt/joom/其他)分布，并返回跟进次数、最后联系时间、跟进描述等跟单信息，用于渲染第二层(tbodyTwoTemplate)列表。

## 用法

```bash
mbs oms erp-order-find-logistics-express-type --country <string> [--expressType <string>] [--startTime <string>] [--endTime <string>] [--orderby <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/trackController/findLogisticsExpressType`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `country` | country | body | string | 是 | - | 国家。函数入参 country，来源：第一层默认展开取 data.obj[0].country，或点击第一层国家行的 data-country |
| `expressType` | expressType | body | string | 否 | - | 物流类型。来源控件 #expressType 下拉，选项由 findTrackExpressType 动态填充；默认空字符串(全部) |
| `startTime` | startTime | body | string | 否 | - | 统计开始时间。来源控件 #startTime 日期框(type=date)，格式 yyyy-MM-dd，默认为当天前一天 |
| `endTime` | endTime | body | string | 否 | - | 统计结束时间。来源控件 #endTime 日期框(type=date)，格式 yyyy-MM-dd |
| `orderby` | orderby | body | string | 否 | - | 排序方式。来源控件 #orderby 下拉。枚举：按发货单量倒序/按发货重量倒序/按运费总价倒序/按退款率倒序/按上网时效倒序/按妥投时效倒序 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(同站点其他接口约定；本回调未直接判断) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 物流类型统计列表(第二层) | - |
| `obj[][0]` | string | 国家(回写入行 data-country，用于下钻第三层) | - |
| `obj[][1]` | string | 物流类型名称(单元格展示 + 下钻第三层入参 data-expresstype) | - |
| `obj[][2]` | string | 跟进人头像URL(存入 data-empavatar，传第三层 findLogisticsExpressName) | - |
| `obj[][3]` | string | 跟进描述/备注(存入 data-descr，传第三层) | - |
| `obj[][4]` | number | 跟进次数(单元格展示 + 存入 data-followupnum，日志视图链接 expressType 维度) | - |
| `obj[][5]` | string | 最后联系时间 | - |
| `obj[][6]` | number | 发货单量(单元格展示，点击经 opennewwin(item,'2') 跳转店铺重构页) | - |
| `obj[][7]` | number | 运费(￥) | - |
| `obj[][8]` | number | 重量 | - |
| `obj[][9]` | number | 单价(元/克) | - |
| `obj[][10]` | number | 上网时效(天) | - |
| `obj[][11]` | number | 妥投时效(天) | - |
| `obj[][12]` | number | 无物流轨迹占比(前端拼 % 展示) | - |
| `obj[][13]` | number | 退款订单数 | - |
| `obj[][14]` | number | 退款率(前端拼 % 展示) | - |
| `obj[][15]` | number | wish 平台发货单量 | - |
| `obj[][16]` | number | ebay 平台发货单量 | - |
| `obj[][17]` | number | 亚马逊(amz)平台发货单量 | - |
| `obj[][18]` | number | 速卖通(smt)平台发货单量 | - |
| `obj[][19]` | number | joom 平台发货单量 | - |
| `obj[][20]` | number | 其他平台发货单量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
