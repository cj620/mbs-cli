# mbs pim erp-product-sku-country-platform-sale-info

SKU国家/平台/刊登销量分布查询：SKU销量统计弹窗(sales-chart-sku 自定义组件)右侧三张柱状图的数据源：按指定SKU返回该SKU的平台销量分布(platform)、国家销量分布(country)、刊登量分布(publish)三组数据，每组含分类名称数组(title)与对应销量数组(saleNum)，前端分别渲染到右下、右上、中间三个 ECharts 柱状图。

## 用法

```bash
mbs pim erp-product-sku-country-platform-sale-info --sku <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/skuCountryPlatformSaleInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | body | string | 是 | - | SKU编码。来源：组件 <sales-chart-sku sku="..."> 的 sku 属性(prop.sku)。以 URL Query 传参，定位要统计的单个SKU |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准响应包字段,本调用未显式读取) | - |
| `desc` | string | 响应提示信息(标准响应包字段,本调用未显式读取) | - |
| `obj` | object | 业务数据对象,含平台/国家/刊登三组分布(前端 getRight() 读取的 .data.obj) | - |
| `obj.platform` | object | 平台销量分布(渲染到右下柱状图 rightBottom) | - |
| `obj.platform.title[]` | array | 平台名称列表(柱状图 yAxis 类目,前端渲染前 reverse) | - |
| `obj.platform.saleNum[]` | array | 各平台对应销量数值(柱状图 series 数据,前端渲染前 reverse) | - |
| `obj.country` | object | 国家销量分布(渲染到右上柱状图 rightTop) | - |
| `obj.country.title[]` | array | 国家名称列表(柱状图 yAxis 类目,前端渲染前 reverse) | - |
| `obj.country.saleNum[]` | array | 各国家对应销量数值(柱状图 series 数据,前端渲染前 reverse) | - |
| `obj.publish` | object | 刊登量分布(渲染到中间柱状图 center) | - |
| `obj.publish.title[]` | array | 刊登维度名称列表(柱状图 yAxis 类目,前端渲染前 reverse) | - |
| `obj.publish.saleNum[]` | array | 各刊登维度对应数值(柱状图 series 数据,前端渲染前 reverse) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
