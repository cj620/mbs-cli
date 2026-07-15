<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-hot-listing

热销Listing列表查询：在线商品监控页「热销」标签页列表查询：按销售风向(上涨/下跌/不变)筛选，分页返回热销listing列表，含商品信息、店铺/负责人、售价、7/30/90天销量、浏览量、收藏量、销售风向、毛利率、退款风向、退款率等汇总字段(前端最多展示100条)。

## 用法

```bash
mbs ars erpmonitor-hot-listing [--salesWind <string>] --currpage <number>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/managerHotProduct/hotListing`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `salesWind` | salesWind | query | string | 否 | - | 销售风向筛选。来源 #salesWind 下拉框。枚举：''=销售风向(不限/全部);1=上涨;-1=下跌;0=不变 |
| `currpage` | currpage | query | number | 是 | - | 当前页码。来源分页控件 api.getCurrent()，首次查询固定为 1 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(仅导出/下架回调中判断,列表回调未强制判断) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的总条数(前端>100时截断显示100) | - |
| `obj.pages` | number | 总页数(用于初始化分页控件 pageCount) | - |
| `obj.list[]` | array | 热销listing列表 | - |
| `obj.list[][0]` | string | listing记录ID(dataId,导出/单品分析用) | - |
| `obj.list[][1]` | string | SKU编码集合(逗号拼接,复选框 value,调价时 split) | - |
| `obj.list[][2]` | string | 平台ID(复选框 platformid,调价用) | - |
| `obj.list[][3]` | string | 店铺ID(复选框 shopid,单品分析/调价用) | - |
| `obj.list[][4]` | string | 平台商品ID(itemid,单品分析用) | - |
| `obj.list[][5]` | string | 币种(售价单位,复选框 currency2) | - |
| `obj.list[][6]` | string | 价格集合(逗号拼接,复选框 price,调价时 split) | - |
| `obj.list[][7]` | string | 商品主图URL(加载失败回退默认图) | - |
| `obj.list[][8]` | string | 商品外部链接(平台商品跳转地址) | - |
| `obj.list[][9]` | string | 商品标题 | - |
| `obj.list[][10]` | string | 店铺名称 | - |
| `obj.list[][11]` | string | 负责人(销售负责人) | - |
| `obj.list[][12]` | string | 刊登(上架)时间 | - |
| `obj.list[][13]` | number | 30天累计销量额/销量 | - |
| `obj.list[][14]` | number | 售价-最低价 | - |
| `obj.list[][15]` | number | 售价-最高价 | - |
| `obj.list[][16]` | number | 近7天销售数量 | - |
| `obj.list[][17]` | number | 近90天销售数量 | - |
| `obj.list[][18]` | number | 浏览量 | - |
| `obj.list[][19]` | number | 收藏量 | - |
| `obj.list[][20]` | number | 销售风向(较上周同比销售额涨跌%,>0上涨/<0下跌/==0不变) | - |
| `obj.list[][21]` | number | 毛利率(30天,%,可为null) | - |
| `obj.list[][22]` | number | 退款风向(较上周同比退款金额涨跌%,>0/<0/==0) | - |
| `obj.list[][23]` | number | 退款率(90天,%,可为null) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
