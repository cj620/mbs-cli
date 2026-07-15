<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-wish-pbof-manager

PB（广告）按人员维度统计查询：按交易时间区间，统计每个运营人员（店铺管理员）的销售收入（总/新品/老品）、销售订单数、毛利额、广告费（总/新品/老品）、广告销售额（总/新品/老品）、广告占比、PB占比、毛利率、ROI 等指标，按所选字段升/降序分页返回人员汇总列表。

## 用法

```bash
mbs oms erp-order-find-wish-pbof-manager --startTime <string> --endTime <string> --field <string> --order <string> --currPage <number> --pageSize <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/wishProductBoost/findWishPBOfManager`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `startTime` | startTime | body | string | 是 | - | 交易时间-起始（来源 #startTime 日期控件，格式 yyyy-MM-dd；前端校验不能为空） |
| `endTime` | endTime | body | string | 是 | - | 交易时间-结束（来源 #endTime 日期控件，格式 yyyy-MM-dd；前端校验不能为空且不小于起始） |
| `field` | field | body | string | 是 | - | 排序字段（来源 #rank 下拉）。枚举：totalSales=销售收入;orderTotalNum=订单数;totalFee=PB费;ml=毛利;mlrate=毛利率;roi=roi;feelimit=PB占比 |
| `order` | order | body | string | 是 | - | 排序方向（来源 #descending 下拉）。枚举：asc=升序;desc=降序 |
| `currPage` | currPage | body | number | 是 | - | 当前页码（首次查询固定为1；分页回调取 api.getCurrent()） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（search() 传 50；分页 paging() 回调传 100） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码（平台统一包裹字段，前端成功回调未直接引用）(待人工确认) | - |
| `desc` | string | 响应提示信息（平台统一包裹字段，前端成功回调未直接引用）(待人工确认) | - |
| `obj` | object | 业务数据对象（分页结果） | - |
| `obj.pages` | number | 总页数（前端 paging(data.obj.pages) 用于初始化分页控件） | - |
| `obj.total` | number | 满足条件的总记录数（前端写入 #total 展示“共N条”） | - |
| `obj.list[]` | array | 人员维度统计列表 | - |
| `obj.list[][0]` | string | 人员（运营人员/店铺管理员；也用于明细链接 shopmanager 参数） | - |
| `obj.list[][1]` | number | 销售收入（总，单位：元） | - |
| `obj.list[][2]` | number | 新品收入（单位：元） | - |
| `obj.list[][3]` | number | 老品收入（单位：元） | - |
| `obj.list[][4]` | number | 销售订单数 | - |
| `obj.list[][5]` | number | 销售订单毛利额（单位：元） | - |
| `obj.list[][6]` | number | 总广告费（PB费，单位：元） | - |
| `obj.list[][7]` | number | 新品广告费（单位：元） | - |
| `obj.list[][8]` | number | 老品广告费（单位：元） | - |
| `obj.list[][9]` | number | 总广告销售额（单位：元） | - |
| `obj.list[][10]` | number | 新品广告销售额（单位：元） | - |
| `obj.list[][11]` | number | 老品广告销售额（单位：元） | - |
| `obj.list[][12]` | number | 总广告占比（前端拼接 % 展示，即总ACOS列） | - |
| `obj.list[][13]` | number | 新品广告占比（前端拼接 % 展示，即新品ACOS列） | - |
| `obj.list[][14]` | number | 老品广告占比（前端拼接 % 展示，即老品ACOS列） | - |
| `obj.list[][15]` | number | 总PB占比（小数，前端×100取整展示%；≥0.03且<0.04黄色，≥0.04红色） | - |
| `obj.list[][16]` | number | 新品PB占比（小数，前端×100取整展示%；≥0.03且<0.04黄色，≥0.04红色） | - |
| `obj.list[][17]` | number | 老品PB占比（小数，前端×100取整展示%；≥0.03且<0.04黄色，≥0.04红色） | - |
| `obj.list[][18]` | number | 毛利率（小数，前端×100保留2位展示%） | - |
| `obj.list[][19]` | number | ROI(PB GMV)=总广告销售额/总广告费 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
