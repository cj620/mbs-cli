# mbs ars erpmonitor-find-product-and-order

EZBuy 商品 & 订单报表查询：EZBuy 各店铺按品类的商品数/订单数监控报表分页查询：按统计时间区间、店铺过滤，返回每条统计日期-店铺-品类下的平台总商品数、平台总订单数、当日订单数及排名，并返回总条数与总页数用于前端分页。

## 用法

```bash
mbs ars erpmonitor-find-product-and-order --startDate <string> --endDate <string> [--shopName <string>] --currPage <number>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/ezbuy/findProductAndOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `startDate` | startDate | query | string | 是 | - | 统计开始日期，来源控件#startDate(input type=date)，默认昨天，格式YYYY-MM-DD |
| `endDate` | endDate | query | string | 是 | - | 统计结束日期，来源控件#endDate(input type=date)，默认当天，格式YYYY-MM-DD，开始时间不能大于结束时间 |
| `shopName` | shopName | query | string | 否 | - | 店铺(EZBuy店铺编码)，来源控件#shopName。枚举：空=全部;ezbuy001男装;ezbuy002女装;ezbuy003母婴;ezbuy004鞋包配饰;ezbuy005家具家居;ezbuy006 3C数码;ezbuy007运动户外;ezbuy008办公文具;ezbuy009美容个护;ezbuy010汽车配件 |
| `currPage` | currPage | query | number | 是 | - | 当前页码，首次search()固定1，分页回调取api.getCurrent()，每页50条 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准响应封装,前端未直接使用)(待人工确认) | - |
| `desc` | string | 响应提示信息(标准响应封装,前端未直接使用)(待人工确认) | - |
| `obj` | object | 业务数据对象(前端据data.obj是否存在判断有无数据) | - |
| `obj.total` | number | 满足条件的报表总条数(前端写入#total展示) | - |
| `obj.pages` | number | 总页数(前端传入分页组件pageCount) | - |
| `obj.list[]` | array | 报表数据列表(模板遍历渲染) | - |
| `obj.list[][0]` | string | 统计日期(表格“日期”列；前端取末位字符.substr(-1)计算str用于隔行变色) | - |
| `obj.list[][1]` | string | 店铺名称(表格“店铺”列) | - |
| `obj.list[][2]` | string | 品类(表格“品类”列) | - |
| `obj.list[][3]` | number | 平台总商品数(表格“平台总商品数”列) | - |
| `obj.list[][4]` | number | 平台总订单数(表格“平台总订单数”列) | - |
| `obj.list[][5]` | number | 当日订单数(表格“当日订单数”列) | - |
| `obj.list[][6]` | number | 当日订单排名(表格“当日订单排名”列) | - |
| `obj.list[][7]` | number | 总商品数排名(表格“总商品数排名”列) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
