# mbs oms erp-order-find-wish-pbof-itemid

Wish按listing查询PB投放报表(findWishPBOfItemid)：Wish平台Product Boost(广告/推广)按 listing 维度的分页统计查询：依据交易时间区间、店长、店铺、产品ID等条件，按指定字段排序，返回每个 listing 的广告费(总/新品/老品)、广告销售额、ACOS、PB占比、刊登时间、要价、CPM、费用流量、订单成交、店铺店长、ERP成交额单量等汇总指标列表。

## 用法

```bash
mbs oms erp-order-find-wish-pbof-itemid --startTime <string> --endTime <string> [--shopmanager <string>] [--shopName <string>] [--field <string>] [--productId <string>] [--order <string>] --currPage <number> --pageSize <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/wishProductBoost/findWishPBOfItemid`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `startTime` | startTime | body | string | 是 | - | 交易时间-起始(来源 #startTime 日期控件，格式 yyyy-MM-dd；为空时前端弹窗拦截) |
| `endTime` | endTime | body | string | 是 | - | 交易时间-结束(来源 #endTime 日期控件，格式 yyyy-MM-dd；为空或早于起始时前端拦截) |
| `shopmanager` | shopmanager | body | string | 否 | - | 店长(来源 #Shopowner 店长下拉选择，空=不限) |
| `shopName` | shopName | body | string | 否 | - | 店铺名称(来源 #shopName 店铺下拉选择，依店长联动，空=不限) |
| `field` | field | body | string | 否 | - | 排序字段(来源 #rank 选择器)。枚举：mabangOrderNum=ERP总单量(默认);spend=总费用;mabanggvm=ERP成交总额;sales=订单数 |
| `productId` | productId | body | string | 否 | - | 产品ID(来源 #productId 输入框，空=不限) |
| `order` | order | body | string | 否 | - | 排序方向(来源 #descending 选择器)。枚举：asc=升序;desc=降序(默认) |
| `currPage` | currPage | body | number | 是 | - | 当前页码(首次查询固定1，分页回调取 api.getCurrent()) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(前端固定100；列表底部文案标注'每页50条'，以实际请求100为准) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(ERP统一包装，本页未读取，待人工确认) | - |
| `desc` | string | 响应提示信息(ERP统一包装，本页未读取，待人工确认) | - |
| `obj` | object | 业务数据对象(前端以 data.obj 判空) | - |
| `obj.total` | number | 满足条件的总条数(写入 #total 展示) | - |
| `obj.pages` | number | 总页数(传入分页组件 pageCount) | - |
| `obj.list[]` | array | listing 报表行列表 | - |
| `obj.list[][0]` | string | 产品ID(Wish商品ID，用于跳转 wish.com/#cid= 及趋势图) | - |
| `obj.list[][1]` | string | SPU标题(商品标题) | - |
| `obj.list[][2]` | string | SPU主图URL | - |
| `obj.list[][3]` | string | 关键字 | - |
| `obj.list[][4]` | number | 总广告费(展示拼接'元') | - |
| `obj.list[][5]` | number | 新品广告费(展示拼接'元') | - |
| `obj.list[][6]` | number | 老品广告费(展示拼接'元') | - |
| `obj.list[][7]` | number | 总广告销售额(展示拼接'元') | - |
| `obj.list[][8]` | number | 新品广告销售额(展示拼接'元') | - |
| `obj.list[][9]` | number | 老品广告销售额(展示拼接'元') | - |
| `obj.list[][10]` | number | 总ACOS=总广告费/总广告销售额(展示拼接'%') | - |
| `obj.list[][11]` | number | 新品ACOS=新品广告费/新品广告销售额(展示拼接'%') | - |
| `obj.list[][12]` | number | 老品ACOS=老品广告费/老品广告销售额(展示拼接'%') | - |
| `obj.list[][13]` | number | 总PB占比(原值为小数,前端×100取整展示%；≥0.03橙色,≥0.04红色预警) | - |
| `obj.list[][14]` | number | 新品PB占比(原值为小数,前端×100取整展示%；≥0.03橙色,≥0.04红色预警) | - |
| `obj.list[][15]` | number | 老品PB占比(原值为小数,前端×100取整展示%；≥0.03橙色,≥0.04红色预警) | - |
| `obj.list[][16]` | string | 产品刊登时间(同时作为趋势图跳转参数) | - |
| `obj.list[][17]` | number | 要价(实际计费率) | - |
| `obj.list[][18]` | number | 平均CPM(商家出价率) | - |
| `obj.list[][19]` | number | 总费用 | - |
| `obj.list[][20]` | number | 总计费流量(付费曝光数) | - |
| `obj.list[][21]` | number | 订单数 | - |
| `obj.list[][22]` | number | 成交总额 | - |
| `obj.list[][23]` | string | 店铺(店铺名称) | - |
| `obj.list[][24]` | string | 店长 | - |
| `obj.list[][25]` | number | ERP总成交额(马帮成交额) | - |
| `obj.list[][26]` | number | ERP总单量(马帮单量) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
