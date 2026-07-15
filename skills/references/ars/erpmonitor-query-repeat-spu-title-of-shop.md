# mbs ars erpmonitor-query-repeat-spu-title-of-shop

店铺重复SPU标题查询：按店铺分页查询该店铺下存在重复标题/重复铺货的 SPU 列表：返回店铺名、主图、ERP SPU、重复数、上架时间、标题、商品链接等，并携带总条数与总页数用于分页。

## 用法

```bash
mbs ars erpmonitor-query-repeat-spu-title-of-shop --shopId <string> --currPage <number>
```

## API

- Service: `erpmonitor`
- Method: `GET`
- Path: `/erpmonitor/erpmonitor/monitor/queryRepeatSpuTitleOfShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopId` | shopId | query | string | 是 | - | 店铺ID，指定要查询重复SPU标题的店铺(来源页面URL查询串 GetQueryString('shopId')) |
| `currPage` | currPage | query | number | 是 | - | 当前页码，首次请求固定为 1，翻页由分页控件 api.getCurrent() 传入(每页100条) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `totalPage` | number | 总页数，用于分页控件 pageCount | - |
| `toatalCount` | number | 满足条件的总条数(渲染到 #total；源码字段名拼写为 toatalCount) | - |
| `content[]` | array | 重复标题/重复铺货 SPU 列表 | - |
| `content[][0]` | string | 店铺名称 | - |
| `content[][1]` | string | SPU 主图 URL | - |
| `content[][2]` | string | ERP SPU 编号(链接至 /product/SPUdetails.html?SPU=) | - |
| `content[][3]` | number | 重复标题/铺货数 | - |
| `content[][4]` | string | 商品ID(SPU业务ID)；用于重复详情列容器 content{spuId}、作为 listRepeateDetails 的 itemId、列商品id展示 | - |
| `content[][5]` | string | 上架时间 | - |
| `content[][6]` | string | 商品标题(同时作为 title 悬浮提示) | - |
| `content[][7]` | string | 商品查看链接 URL(标题与商品id均超链接至此) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
