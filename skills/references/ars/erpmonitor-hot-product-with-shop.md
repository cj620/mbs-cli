# mbs ars erpmonitor-hot-product-with-shop

店铺热销商品(listing)查询：按平台、店铺、店铺负责人、原币种、销售金额区间、统计时间等条件，分页查询店铺维度的热销商品(listing)列表，返回商品图文、售价区间、7/30/90天销量、浏览量、收藏量等运营监控字段。

## 用法

```bash
mbs ars erpmonitor-hot-product-with-shop [--plaformId <string>] [--shopId <string>] [--currency <string>] [--minPrice <string>] [--maxPrice <string>] [--saleLeader <string>] [--orderWay <string>] [--statisDate <string>] [--orderFiled <string>] --currPage <number>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/hotProductWithShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `plaformId` | plaformId | body | string | 否 | - | 平台ID（来源下拉 #plaformId，取自 platform 接口返回的 platformId；原文拼写为 plaformId） |
| `shopId` | shopId | body | string | 否 | - | 店铺ID（来源下拉 #shopId，取自 shopByPlatform 接口返回的 shopId） |
| `currency` | currency | body | string | 否 | - | 原币种（来源下拉 #currency，取自 currency 接口返回值） |
| `minPrice` | minPrice | body | string | 否 | - | 销售金额区间-最小值（来源输入框 #minPrice，单位：金额） |
| `maxPrice` | maxPrice | body | string | 否 | - | 销售金额区间-最大值（来源输入框 #maxPrice，单位：金额） |
| `saleLeader` | saleLeader | body | string | 否 | - | 店铺负责人（来源下拉 #saleLeader，取自 saleLeader3 接口返回值） |
| `orderWay` | orderWay | body | string | 否 | - | 排序方式。枚举：DESC=降序 / ASC=升序（来源 #orderFiled 选中项的 value-data 属性） |
| `statisDate` | statisDate | body | string | 否 | - | 统计/查询日期，格式 yyyy-M-d（来源时间下拉 #getTime：今天/昨天/前天，或自定义 #startTime；未选时为空） |
| `orderFiled` | orderFiled | body | string | 否 | - | 排序字段。枚举：saven_days_sales_num=7天销量 / thirty_days_sales_num=30天销量 / ninety_days_sales_num=90天销量（来源下拉 #orderFiled） |
| `currPage` | currPage | body | number | 是 | - | 当前页码（search() 固定传 1；翻页回调取 api.getCurrent()） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `pages` | number | 总页数（content = data.obj.pages，作分页控件 pageCount） | - |
| `total` | number | 满足条件的商品总条数（写入 #total） | - |
| `list[]` | array | 热销商品(listing)列表 | - |
| `list[][0]` | string | 店铺名称 | - |
| `list[][1]` | string | 店铺负责人 | - |
| `list[][2]` | string | 商品主图URL（加载失败回退默认图） | - |
| `list[][3]` | string | 商品链接（跳转平台商品页） | - |
| `list[][4]` | string | 商品标题 | - |
| `list[][5]` | string | 商品发布时间 | - |
| `list[][6]` | string | 商品ID（平台 itemId） | - |
| `list[][7]` | number | 近30天累计销售数量 | - |
| `list[][8]` | number | 售价区间-最低价（原币种） | - |
| `list[][9]` | number | 售价区间-最高价（原币种） | - |
| `list[][10]` | string | 售价币种（原币种） | - |
| `list[][11]` | number | 近7天销售数量（原文拼写 saven） | - |
| `list[][12]` | number | 近90天销售数量 | - |
| `list[][13]` | number | 浏览量 | - |
| `list[][14]` | number | 收藏量 | - |
| `list[][15]` | string | 统计时间 | - |
| `list[][16]` | string | 热销 listing 记录ID（跳转“查看分析”携带 hotListingId） | - |
| `list[][17]` | string | 店铺ID（跳转“查看分析”携带） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
