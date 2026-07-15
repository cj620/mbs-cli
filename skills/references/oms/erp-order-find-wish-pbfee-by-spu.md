# mbs oms erp-order-find-wish-pbfee-by-spu

按SPU查询商品推广(PB)费用统计：按交易时间区间与排序条件，分页查询各 SPU 的销售收入(总/新品/老品)、订单数、订单毛利额、广告费(总/新品/老品)、广告销售额(总/新品/老品)、广告占比(ACOS)、PB占比与 ROI 等统计指标，用于 PB费用-按SPU查看 报表页渲染。

## 用法

```bash
mbs oms erp-order-find-wish-pbfee-by-spu --startTime <string> --endTime <string> --field <string> --order <string> --currPage <number> --pageSize <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/wishProductBoost/findWishPBFeeBySpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `startTime` | startTime | body | string | 是 | - | 交易时间-起始(来源 #startTime date 控件，格式 YYYY-MM-DD；为空时前端拦截) |
| `endTime` | endTime | body | string | 是 | - | 交易时间-结束(来源 #endTime date 控件，格式 YYYY-MM-DD；为空或小于起始时前端拦截) |
| `field` | field | body | string | 是 | - | 排序字段(来源 #rank 下拉)。枚举：totalSales=销售收入;orderTotalNum=订单数;totalFee=PB费;ml=毛利;roi=roi;feelimit=PB占比 |
| `order` | order | body | string | 是 | - | 排序方向(来源 #descending 下拉)。枚举：asc=升序;desc=降序(默认) |
| `currPage` | currPage | body | number | 是 | - | 当前页码(首次查询固定为 1；分页时取 api.getCurrent()) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(前端固定 100；页面文案显示每页50条，实际请求传 100) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准响应包装字段，本页未引用，待人工确认) | - |
| `desc` | string | 响应提示信息(标准响应包装字段，本页未引用，待人工确认) | - |
| `obj` | object | 业务数据对象(前端以 data.obj 是否存在作为成功判定) | - |
| `obj.pages` | number | 总页数(用于初始化分页 pageCount) | - |
| `obj.total` | number | 满足条件的总条数(写入 #total) | - |
| `obj.list[]` | array | SPU 统计报表列表 | - |
| `obj.list[][0]` | string | 商品SPU编号(明细链接传参 ?spu=) | - |
| `obj.list[][1]` | number | 销售收入(总)，单位：元 | - |
| `obj.list[][2]` | number | 新品销售收入，单位：元 | - |
| `obj.list[][3]` | number | 老品销售收入，单位：元 | - |
| `obj.list[][4]` | number | SPU订单数 | - |
| `obj.list[][5]` | number | SPU订单毛利额，单位：元 | - |
| `obj.list[][6]` | number | 总广告费(PB费)，单位：元 | - |
| `obj.list[][7]` | number | 新品广告费，单位：元 | - |
| `obj.list[][8]` | number | 老品广告费，单位：元 | - |
| `obj.list[][9]` | number | 总广告销售额，单位：元 | - |
| `obj.list[][10]` | number | 新品广告销售额，单位：元 | - |
| `obj.list[][11]` | number | 老品广告销售额，单位：元 | - |
| `obj.list[][12]` | number | 总广告占比/总ACOS(总广告费/总广告销售额)，前端拼%展示 | - |
| `obj.list[][13]` | number | 新品广告占比/新品ACOS(新品广告费/新品广告销售额)，前端拼%展示 | - |
| `obj.list[][14]` | number | 老品广告占比/老品ACOS(老品广告费/老品广告销售额)，前端拼%展示 | - |
| `obj.list[][15]` | number | 总PB占比(总广告费/总销售额)，小数，前端×100取整展示%，≥3%警告/≥4%危险标色 | - |
| `obj.list[][16]` | number | 新品PB占比(新品广告费/新品销售额)，小数，前端×100取整展示%，≥3%警告/≥4%危险标色 | - |
| `obj.list[][17]` | number | 老品PB占比(老品广告费/老品销售额)，小数，前端×100取整展示%，≥3%警告/≥4%危险标色 | - |
| `obj.list[][18]` | number | ROI(PB GMV)=总广告销售额/总广告费 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
