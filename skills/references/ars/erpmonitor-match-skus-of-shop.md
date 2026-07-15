# mbs ars erpmonitor-match-skus-of-shop

店铺下架商品SKU匹配查询：修正刊登监控-下架明细页加载时调用：根据页面 URL 携带的店铺名称(shopName)与 SKU 集合(skus)查询该店铺下匹配到的商品 SKU 列表，返回店铺名称、商品标题、商品编号、平台SKU、主图、库存等，用于下架明细列表渲染。

## 用法

```bash
mbs ars erpmonitor-match-skus-of-shop --shopName <string> [--skus <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/ReviseListingMonitor/matchSkusOfShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | query | string | 是 | - | 店铺名称，指定要查询/下架的目标店铺(URL query，来源 GetQueryString('shopName')) |
| `skus` | skus | query | string | 否 | - | SKU集合(多值通常逗号分隔,待人工确认),用于匹配店铺下商品SKU(URL query,来源 GetQueryString('skus')) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 匹配到的商品(下架明细)列表 | - |
| `obj[][0]` | string | 商品记录ID(下架勾选框 value,提交时收集为 soldOutList) | - |
| `obj[][1]` | string | 店铺名称 | - |
| `obj[][2]` | string | 商品主图URL | - |
| `obj[][3]` | string | (属性)商品标题 | - |
| `obj[][4]` | string | 商品编号(父SPU编号) | - |
| `obj[][5]` | string | 平台SKU | - |
| `obj[][6]` | number | 库存(有值才展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
