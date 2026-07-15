<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-white-shop-by-spu

SPU可刊登白名单店铺查询：商品SPU列表页中，鼠标悬浮“可刊登店铺”气泡时，按SPU查询该商品在各平台可刊登（白名单）的店铺列表，按平台分组展示平台名与店铺名。

## 用法

```bash
mbs pim erp-product-get-white-shop-by-spu --spu <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getWhiteShopBySpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | body | string | 是 | - | 商品SPU编号；来源于组件 prop spu（prop.spu），即列表行 {{value.spu}}。按此SPU查询其可刊登的白名单店铺 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（统一响应壳，前端未显式判断）(待人工确认) | - |
| `desc` | string | 响应提示信息（统一响应壳）(待人工确认) | - |
| `obj[]` | array | 可刊登白名单店铺列表，前端 str.value=data.obj 后按平台分组渲染 | - |
| `obj[][0]` | string | 平台（站点/渠道）名称，模板 {{item.platform}}，并作为 v-for 的 key | - |
| `obj[][1]` | string | 店铺名称，模板 {{item.shopname}} | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
