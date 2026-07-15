<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-lazada-coupon-list

Lazada优惠券(促销)执行记录列表查询：查询各店铺Lazada促销(优惠券)定时执行结果：按店铺/店长(组员)/大酋长/站点/状态/日期类型与时间区间分页筛选，返回店铺、店长、站点、促销设置、上一次成功/失败时间及失败原因，并支持分页与排序。

## 用法

```bash
mbs fars erpaccount-lazada-coupon-list --page <number> --pageSize <string> [--orderBy <string>] [--dateType <string>] [--startDate <string>] [--endDate <string>] [--status <string>] [--sites <array>] [--shopNames <array>] [--shopManager <array>] [--bigChief <array>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/lazadaUnRead/lazadaCouponList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码(首次查询固定为1，分页回调取 api.getCurrent()) |
| `pageSize` | pageSize | body | string | 是 | - | 每页条数(来源 #everyPage1 下拉：50/100/200/500/1000/2000) |
| `orderBy` | orderBy | body | string | 否 | - | 排序方式。1=店铺名称升序;2=店铺名称降序;3=完成时间升序;4=完成时间降序;5=失败时间升序;6=失败时间降序 |
| `dateType` | dateType | body | string | 否 | - | 日期类型(源码注释为人员类别)。1=成功时间;2=失败时间 |
| `startDate` | startDate | body | string | 否 | - | 起始日期(来源 #time1，date 控件，格式 yyyy-MM-dd) |
| `endDate` | endDate | body | string | 否 | - | 结束日期(来源 #time2，date 控件，格式 yyyy-MM-dd) |
| `status` | status | body | string | 否 | - | 执行状态。空=全部;1=成功;2=失败 |
| `sites` | sites | body | array | 否 | - | 站点列表(来源 #siteList，逗号拆分)。取值:ID/MY/SG/PH/VN/TH;未选传[] |
| `shopNames` | shopNames | body | array | 否 | - | 店铺名称列表(来源 #shopList，逗号或空格拆分)；未选传[] |
| `shopManager` | shopManager | body | array | 否 | - | 店长/组员(来源 #employeeList)；当选了大酋长但未选店长时取该大酋长下全部组员;未选传[] |
| `bigChief` | bigChief | body | array | 否 | - | 大酋长(来源 #shopManager 多选)；未选传[] |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(失败时 alert 展示) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的记录总数(写入 #total) | - |
| `obj.countPage` | number | 总页数(作为分页插件 pageCount) | - |
| `obj.result[]` | array | 执行记录列表 | - |
| `obj.result[][0]` | string | 店铺ID(首次查询作为复选框 value) | - |
| `obj.result[][1]` | number | 记录序号ID(分页回调中作为复选框 value) | - |
| `obj.result[][2]` | string | 店铺名称 | - |
| `obj.result[][3]` | string | 店长 | - |
| `obj.result[][4]` | string | 站点 | - |
| `obj.result[][5]` | string | 促销设置 | - |
| `obj.result[][6]` | string | 上一次成功时间 | - |
| `obj.result[][7]` | string | 上一次失败时间 | - |
| `obj.result[][8]` | string | 上一次失败原因 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
