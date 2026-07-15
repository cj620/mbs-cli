<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-find-express-code51-all

物流商(51渠道)列表查询：查询51渠道物流商(express code51)列表：支持按物流商名称、物流商编码过滤并分页。前端两处复用——物流商下拉数据源(getcustmer，仅传 courierCode 取全量)与时效配置弹窗列表(searchtraffic，传 page/pageSize/logisticsProviderName 分页查询)，返回物流商及其时效限制配置(limitJsonList)。

## 用法

```bash
mbs fars erpaccount-find-express-code51-all [--page <number>] [--pageSize <number>] [--logisticsProviderName <string>] [--courierCode <string>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/logisticsController/findExpressCode51All`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 否 | - | 当前页码(searchtraffic 传 index||1，从1开始；getcustmer 不传) |
| `pageSize` | pageSize | body | number | 否 | - | 每页条数(searchtraffic 固定传50；getcustmer 不传) |
| `logisticsProviderName` | logisticsProviderName | body | string | 否 | - | 物流商名称(时效配置弹窗按名称模糊查询，来源 logisticsProviderName ref；getcustmer 不传) |
| `courierCode` | courierCode | body | string | 否 | - | 物流商编码(getcustmer 传入，val||'' 默认空串取全量；来源物流商下拉选中项 courierCode) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(res.data.code==200 判断) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的总记录数(赋给 traffictotal 用于分页) | - |
| `obj.result[]` | array | 物流商(51渠道)列表(赋给 custmerlist/trafficlist) | - |
| `obj.result[][0]` | string | 物流商记录ID(update(row) 取 row.id 作为 listIds；类型以后端为准,待人工确认) | - |
| `obj.result[][1]` | string | 物流商名称(物流商下拉 el-option 的 label) | - |
| `obj.result[][2]` | string | 物流商编码(物流商下拉 el-option 的 value) | - |
| `obj.result[][3][]` | array | 时效限制配置列表(update(row) 读取 row.limitJsonList[0/1/2].day，可能为 null) | - |
| `obj.result[][3][][0]` | number | 配置项ID(固定1/2/3)，待人工确认 | - |
| `obj.result[][3][][1]` | number | 配置类型，待人工确认 | - |
| `obj.result[][3][][2]` | number | 时效天数(弹窗 day1/day2/day3 回显来源) | - |
| `obj.result[][3][][3]` | string | 备注信息，待人工确认 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
