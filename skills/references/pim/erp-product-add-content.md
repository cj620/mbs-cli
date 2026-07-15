# mbs pim erp-product-add-content

根据SKU/平台/备货内容获取可备货数量(getSaleNumBySku)：SKU详情页「申请备货」弹窗中，选择备货平台与备货内容后，按 SKU + 平台 + 备货内容 三个路径参数请求后端，返回该 SKU 在该平台下的最大可备货量(max)、可输入上限(other)、平台已备货量(platform)，用于回填输入框上限、placeholder 及前置校验。

## 用法

```bash
mbs pim erp-product-add-content
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getSaleNumBySku/{sku}/{platform}/{addContent}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | path | string | 是 | - | SKU编号(路径第1段)。来源：浏览器URL查询参数 SKU，前端 GetQueryString('SKU') 取得 |
| `platform` | platform | path | string | 是 | - | 平台ID(路径第2段)。来源 platform.value=this.id。枚举：97=walmart;26=shopee;18=lazada;120=tiktok;10=aliexpress(smt);128=temu |
| `addContent` | addContent | path | string | 是 | - | 备货内容/备货类型(路径第3段)。来源 addContent.value。枚举：新品备货/低库存备货/大促活动备货/销量上升期备货/到货周期长备货/爆款延伸款 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息(非200时弹窗展示) | - |
| `obj` | object | 备货数量数据对象(成功时返回) | - |
| `obj.max` | number | 最大可备货数量(回填 maxNum，前端取 Math.max(max,0)) | - |
| `obj.other` | number | 可输入上限/其他可采购量(回填 inputMax，并作 placeholder ≤值 及备货数量上限校验) | - |
| `obj.platform` | number | 该平台已备货/平台数量(回填 platformNum，前端取 Math.max(platform,0)) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
