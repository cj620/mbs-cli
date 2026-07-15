<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-logistics-express-name

物流货运渠道(三级)统计查询：物流跟进看板(taskFollow)第三层下钻接口：在「国家→货运类型」展开后，按所选国家、货运类型及统计时间区间、排序方式，返回该货运类型下各具体货运渠道(物流商)的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款订单数/退款率以及 wish/ebay/amazon/aliexpress/joom/其他 各平台单量；同时回传上层员工头像、跟进描述与跟进总次数用于头部展示。

## 用法

```bash
mbs oms erp-order-find-logistics-express-name [--country <string>] [--expressType <string>] [--empAvatar <string>] [--descr <string>] [--followUpNum <string>] [--startTime <string>] [--endTime <string>] [--orderby <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/trackController/findLogisticsExpressName`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `country` | country | body | string | 否 | - | 国家(来源：上层行 data-country，原值来自国家下拉 #country)。空字符串表示不限国家 |
| `expressType` | expressType | body | string | 否 | - | 货运类型/物流类型(来源：上层二级行 data-expresstype，原值来自类型下拉 #expressType) |
| `empAvatar` | empAvatar | body | string | 否 | - | 员工头像URL(来源：上层行 data-empavatar，回传供头部展示) |
| `descr` | descr | body | string | 否 | - | 跟进描述/员工描述(来源：上层行 data-descr，回传供头部展示) |
| `followUpNum` | followUpNum | body | string | 否 | - | 跟进总次数(来源：上层行 data-followupnum，回传供头部展示) |
| `startTime` | startTime | body | string | 否 | - | 统计开始时间(来源：日期控件 #startTime，格式 yyyy-MM-dd) |
| `endTime` | endTime | body | string | 否 | - | 统计结束时间(来源：日期控件 #endTime，格式 yyyy-MM-dd) |
| `orderby` | orderby | body | string | 否 | - | 排序方式(来源：排序下拉 #orderby)。枚举：按发货单量倒序/按发货重量倒序/按运费总价倒序/按退款率倒序/按上网时效倒序/按妥投时效倒序 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(参照同页统一包装) | - |
| `desc` | string | 响应提示信息(参照同页统一包装) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.empAvatar` | string | 跟进员工头像URL(obj.empAvatar，头部展示，descr!='' 时显示) | - |
| `obj.descr` | string | 跟进描述(obj.descr，为空字符串时整块头部不渲染) | - |
| `obj.followUpNum` | string | 总计跟进次数(obj.followUpNum，头部"总计跟进N次"展示) | - |
| `obj.data[]` | array | 货运渠道明细列表(obj.data) | - |
| `obj.data[][0]` | string | 货运渠道(物流渠道名称，列"货运渠道"，链接至 logisticsDetails.html) | - |
| `obj.data[][1]` | string | 物流商ID(用于渠道详情链接 logisticsDetails.html?sid=) | - |
| `obj.data[][2]` | string | 物流商名称(用于渠道详情链接 &name=) | - |
| `obj.data[][3]` | string | 国家(data[0].country 用于"点击查看"汇总链接) | - |
| `obj.data[][4]` | string | 货运类型(data[0].expressType 用于"点击查看"汇总链接) | - |
| `obj.data[][5]` | number | 发货单量(点击调 opennewwin(v,'3') 跳转店铺明细) | - |
| `obj.data[][6]` | number | 运费(￥) | - |
| `obj.data[][7]` | number | 重量 | - |
| `obj.data[][8]` | number | 单价(元/克) | - |
| `obj.data[][9]` | number | 上网时效(天) | - |
| `obj.data[][10]` | number | 妥投时效(天) | - |
| `obj.data[][11]` | number | 无物流轨迹占比(前端拼接 % 展示) | - |
| `obj.data[][12]` | number | 退款订单数 | - |
| `obj.data[][13]` | number | 退款率(前端拼接 % 展示) | - |
| `obj.data[][14]` | number | wish 平台发货单量 | - |
| `obj.data[][15]` | number | ebay 平台发货单量 | - |
| `obj.data[][16]` | number | amz(亚马逊)平台发货单量 | - |
| `obj.data[][17]` | number | smt(速卖通)平台发货单量 | - |
| `obj.data[][18]` | number | joom 平台发货单量 | - |
| `obj.data[][19]` | number | 其他平台发货单量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
