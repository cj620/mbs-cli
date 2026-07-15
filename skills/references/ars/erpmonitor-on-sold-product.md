# mbs ars erpmonitor-on-sold-product

已售商品(SPU)监控列表查询：依据店铺、平台、统计日期分页查询该店铺已售出的平台商品(SPU)列表，返回平台SPU ID、平台/胤元SPU编号、商品名称、关键字、售出数量、上架时间与最后更新时间，供运营监控页面表格渲染。

## 用法

```bash
mbs ars erpmonitor-on-sold-product --shopId <string> --platformId <string> --analysisCreatedOn <string> --currPage <number>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/monitor/onSoldProduct`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopId` | shopId | query | string | 是 | - | 店铺ID，取自页面URL参数 shopId(GetQueryString("shopId")) |
| `platformId` | platformId | query | string | 是 | - | 平台ID，取自页面URL参数 platformId(全局 platformId = GetQueryString("platformId")) |
| `analysisCreatedOn` | analysisCreatedOn | query | string | 是 | - | 统计/分析创建日期，取自页面URL参数 analysisCreatedOn 并 decodeURI 解码(格式待人工确认) |
| `currPage` | currPage | query | number | 是 | - | 当前页码；首次搜索固定为1，分页时取分页组件 api.getCurrent() |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 已售商品(SPU)列表，模板遍历渲染表格行 | - |
| `obj[][0]` | string | 平台SPU ID(行主键，用于展开子SKU getSkuOnlineProduct 及元素定位) | - |
| `obj[][1]` | string | 平台主SKU(表头“平台主SKU”列) | - |
| `obj[][2]` | string | 胤元SPU(ERP内部SPU编号) | - |
| `obj[][3]` | string | 商品名称(同时作为单元格 title 悬浮提示) | - |
| `obj[][4]` | string | 商品关键字(同时作为单元格 title 悬浮提示) | - |
| `obj[][5]` | number | 平台SPU售出数量 | - |
| `obj[][6]` | string | 上架时间 | - |
| `obj[][7]` | string | 商品最后更新时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
