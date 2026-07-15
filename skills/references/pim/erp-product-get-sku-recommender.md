<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-sku-recommender

SKU推荐人查询：SKU详情页加载时查询该SKU的推荐人信息，返回推荐人姓名与推荐人头像URL，用于在「推荐人」卡片区(.rementInfo)展示；无数据时隐藏该卡片。

## 用法

```bash
mbs pim erp-product-get-sku-recommender
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/productDetails/{SKU}/getSkuRecommender`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sKU` | SKU | path | string | 是 | - | SKU编号（路径变量）。来源：页面地址栏查询参数 SKU（GetQueryString('SKU') 读取 window.location.search），拼入 productDetails/{SKU}/getSkuRecommender |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（通用信封） | - |
| `desc` | string | 响应提示信息（通用信封） | - |
| `obj` | object | 推荐人信息对象；为空时前端隐藏 .rementInfo 卡片 | - |
| `obj.RECOMMENDER` | string | 推荐人姓名（渲染到 .recomender 文本） | - |
| `obj.RESERVE1` | string | 推荐人头像图片URL（赋给 #remImg 的 src） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
