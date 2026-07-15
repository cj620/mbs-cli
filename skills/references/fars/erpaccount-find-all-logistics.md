# mbs fars erpaccount-find-all-logistics

物流(货运渠道)统计明细查询：物流明细看板按统计时间区间查询各货运渠道(默认按货运渠道维度)的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款/回归退款、各平台(wish/ebay/amz/smt/joom/其他)单量及覆盖国家等统计指标；支持类型筛选与多种排序方式。

## 用法

```bash
mbs fars erpaccount-find-all-logistics [--sortorder <string>] [--types2 <string>] [--startTime <string>] [--endTime <string>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/logisticsController/findAllLogistics`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sortorder` | sortorder | body | string | 否 | - | 排序方式。枚举：发货单量降序/发货单量升序/无物流轨迹占比升序/无物流轨迹占比降序/上网时效升序/上网时效降序/妥投时效升序/妥投时效降序/运费升序/运费降序/重量升序/重量降序/单价升序/单价降序 |
| `types2` | types2 | body | string | 否 | - | 类型。枚举：空("")=全部/平邮小包/挂号小包/挂号大货 |
| `startTime` | startTime | body | string | 否 | - | 统计开始时间，格式 yyyy-MM-dd(默认昨天) |
| `endTime` | endTime | body | string | 否 | - | 统计结束时间，格式 yyyy-MM-dd(默认昨天) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 货运渠道统计明细列表 | - |
| `obj[][0]` | string | 货运渠道(物流)名称 | - |
| `obj[][1]` | number | 发货单量(点击跳转 eshopRefact 明细) | - |
| `obj[][2]` | number | 运费(￥) | - |
| `obj[][3]` | number | 重量 | - |
| `obj[][4]` | number | 单价(元/克) | - |
| `obj[][5]` | string | 类型(平邮小包/挂号小包/挂号大货) | - |
| `obj[][6]` | number | 上网时效(天) | - |
| `obj[][7]` | number | 妥投时效(天) | - |
| `obj[][8]` | number | 无物流轨迹占比(前端拼接 % 展示) | - |
| `obj[][9]` | number | 退款订单数 | - |
| `obj[][10]` | number | 退款率(前端拼接 % 展示) | - |
| `obj[][11]` | number | 回归退款单数 | - |
| `obj[][12]` | number | 回归退款率(前端拼接 % 展示) | - |
| `obj[][13]` | number | wish 平台单量 | - |
| `obj[][14]` | number | ebay 平台单量 | - |
| `obj[][15]` | number | 亚马逊(amz)平台单量 | - |
| `obj[][16]` | number | 速卖通(smt)平台单量 | - |
| `obj[][17]` | number | joom 平台单量 | - |
| `obj[][18]` | number | 其他平台单量 | - |
| `obj[][19]` | string | 覆盖国家(字符串拼接) | - |
| `obj[][20]` | number | 状态枚举。0=停用;1=正常 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
