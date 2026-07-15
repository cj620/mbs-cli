# mbs fars erpaccount-find-for-country

物流统计-按国家查看：物流统计仪表盘「按国家查看」维度查询：按统计时间区间、物流类型(平邮/挂号)、排序方式，返回各国家的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款/回归退款、各平台(wish/ebay/amz/smt/joom/其他)分布等统计数据。

## 用法

```bash
mbs fars erpaccount-find-for-country --sortorder <string> [--types2 <string>] --startTime <string> --endTime <string>
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/logisticsController/findForCountry`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sortorder` | sortorder | body | string | 是 | - | 排序方式(来源控件 #sortorder)。枚举：发货单量降序/发货单量升序/无物流轨迹占比升序/无物流轨迹占比降序/上网时效升序/上网时效降序/妥投时效升序/妥投时效降序/运费升序/运费降序/重量升序/重量降序/单价升序/单价降序；默认发货单量降序 |
| `types2` | types2 | body | string | 否 | - | 物流类型(来源控件 #types2)。枚举：空(全部)/平邮/挂号 |
| `startTime` | startTime | body | string | 是 | - | 统计开始时间(来源控件 #startTime)。格式 yyyy-MM-dd，默认当前日期前一天 |
| `endTime` | endTime | body | string | 是 | - | 统计结束时间(来源控件 #endTime)。格式 yyyy-MM-dd，默认当前日期前一天；前端校验开始时间不得大于结束时间 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 统计数据列表(按国家维度) | - |
| `obj[][0]` | string | 国家(国家代码/名称) | - |
| `obj[][1]` | string | 物流类型(平邮/挂号)，亦作为详情跳转的 expresstype 参数 | - |
| `obj[][2]` | number | 发货单量(可点击跳转至 eshopRefact.html 订单明细) | - |
| `obj[][3]` | number | 运费(￥) | - |
| `obj[][4]` | number | 重量 | - |
| `obj[][5]` | number | 单价(元/克) | - |
| `obj[][6]` | number | 上网时效(天)；为空则不展示 | - |
| `obj[][7]` | number | 妥投时效(天)；为空则不展示 | - |
| `obj[][8]` | number | 无物流轨迹占比(前端拼接 % 展示) | - |
| `obj[][9]` | number | 退款订单数 | - |
| `obj[][10]` | number | 退款率(前端拼接 % 展示) | - |
| `obj[][11]` | number | 回归退款单数 | - |
| `obj[][12]` | number | 回归退款率(前端拼接 % 展示) | - |
| `obj[][13]` | number | wish 平台发货单量 | - |
| `obj[][14]` | number | ebay 平台发货单量 | - |
| `obj[][15]` | number | amz(亚马逊) 平台发货单量 | - |
| `obj[][16]` | number | smt(速卖通) 平台发货单量 | - |
| `obj[][17]` | number | joom 平台发货单量 | - |
| `obj[][18]` | number | 其他平台发货单量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
