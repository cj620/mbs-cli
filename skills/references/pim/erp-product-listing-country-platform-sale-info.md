<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-listing-country-platform-sale-info

Listing 国家/平台销量分布查询：店铺热卖商品监控页 listing 悬浮图表数据源：按 itemId/平台/店铺/平台SPU 查询该 listing 的销量分布，返回国家维度与平台维度两组（标题数组+销量数组），前端用 ECharts 渲染上下两个横向柱状图。

## 用法

```bash
mbs pim erp-product-listing-country-platform-sale-info --itemId <string> --platformId <string> --shopName <string> [--platformSpu <string>] [--relationListing <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/listingCountryPlatformSaleInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `itemId` | itemId | query | string | 是 | - | 平台商品(listing)ID，定位要查询销量分布的 listing；来源悬停元素 data-itemid |
| `platformId` | platformId | query | string | 是 | - | 平台ID(如 2=Amazon、26=Shopee、120=TikTok 等)；来源悬停元素 data-platformid |
| `shopName` | shopName | query | string | 是 | - | 店铺名称；来源悬停元素 data-shopname |
| `platformSpu` | platformSpu | query | string | 否 | - | 平台SPU编号；来源悬停元素 data-platformspu |
| `relationListing` | relationListing | query | string | 否 | - | 关联 listing 标识(关联刊登/多仓关联标记)；来源悬停元素 data-relationlisting |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应包装,本回调未直接引用)(待人工确认) | - |
| `desc` | string | 响应提示信息(统一响应包装,本回调未直接引用)(待人工确认) | - |
| `obj` | object | 业务数据对象,含 country / platform 两组销量分布 | - |
| `obj.country` | object | 国家维度销量分布(渲染为上方柱状图) | - |
| `obj.country.title[]` | array | 国家名称列表(string数组,前端 unshift 倒序后作为 yAxis 类目) | - |
| `obj.country.saleNum[]` | array | 各国家对应销量列表(number数组,与 title 同序,作为柱图 data) | - |
| `obj.platform` | object | 平台维度销量分布(渲染为下方柱状图) | - |
| `obj.platform.title[]` | array | 平台名称列表(string数组,前端 unshift 倒序后作为 yAxis 类目) | - |
| `obj.platform.saleNum[]` | array | 各平台对应销量列表(number数组,与 title 同序,作为柱图 data) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
