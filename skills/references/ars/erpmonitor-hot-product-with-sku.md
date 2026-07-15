<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-hot-product-with-sku

热销商品SKU销售详情查询(hotProductWithSku)：单产品分析页加载/排序时调用：按店铺(shopId)+商品(itemId)查询该店铺下该 listing 关联各 SKU 的销售详情，返回 SKU 商品信息、30天销售额/销量/平均成交价、待发货、库存/在途、重量、商品属性、成本/毛利、毛利率/退款率、7/30/90天销量、开发员等，渲染至「SKU销售详情」表格。

## 用法

```bash
mbs ars erpmonitor-hot-product-with-sku --shopId <string> [--orderWay <string>] [--orderFiled <string>] [--itemId <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/hotProductWithSku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopId` | shopId | query | string | 是 | - | 店铺ID，定位被分析的店铺 |
| `orderWay` | orderWay | query | string | 否 | - | 排序方向。DESC=降序;ASC=升序(默认取下拉首选项DESC) |
| `orderFiled` | orderFiled | query | string | 否 | - | 排序字段(拼写为Filed)。createdate=创建时间;reserve13=退款率;profit=毛利率;HJRESERVE8=7天销量;HJRESERVE9=30天销量;HJRESERVE10=90天销量;thirty_days_sales=30天销售额 |
| `itemId` | itemId | query | string | 否 | - | 商品(listing/item)ID，限定被分析的单个商品 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(失败时弹窗展示) | - |
| `obj[]` | array | SKU销售详情列表 | - |
| `obj[][0]` | string | SKU编号(行勾选value、SKU详情链接、走势图入参) | - |
| `obj[][1]` | string | SKU主图URL(加载失败回退默认图) | - |
| `obj[][2]` | string | SPU编号(SPU详情链接) | - |
| `obj[][3]` | string | 商品名称 | - |
| `obj[][4]` | string | 一级类目名称 | - |
| `obj[][5]` | string | 二级类目名称 | - |
| `obj[][6]` | number | 30天销售额(单店铺单listing统计;参与averageCostprice计算) | - |
| `obj[][7]` | number | listing 30天销量(单店铺单listing统计;参与averageCostprice计算) | - |
| `obj[][8]` | string | 币种(平均成交价的原币种) | - |
| `obj[][9]` | number | 待发货数 | - |
| `obj[][10]` | number | 库存数 | - |
| `obj[][11]` | number | 在途数 | - |
| `obj[][12]` | number | 重量 | - |
| `obj[][13]` | string | 商品属性 | - |
| `obj[][14]` | number | 30天成本(￥) | - |
| `obj[][15]` | number | 30天毛利(￥) | - |
| `obj[][16]` | number | 毛利率 | - |
| `obj[][17]` | number | 退款率 | - |
| `obj[][18]` | number | 近7天销量(源码拼写saevenDaysNum) | - |
| `obj[][19]` | number | 近30天销量 | - |
| `obj[][20]` | number | 近90天销量 | - |
| `obj[][21]` | string | 开发员(源码拼写skuDevoper) | - |
| `obj[][22]` | string | 开发大酋长(源码拼写bigChif) | - |
| `obj[][23]` | string | 创建时间 | - |
| `obj[][24]` | string | 平均成交价(原币种)。前端计算合成:(thirtyDaysSales/listingThirtyDaysNum).toFixed(2)，写回obj后渲染，非后端直接返回 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
