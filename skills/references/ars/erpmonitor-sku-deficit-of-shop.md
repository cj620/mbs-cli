<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-sku-deficit-of-shop

店铺亏损SKU明细查询：按店铺查询亏损SKU明细列表，分页返回该店铺下商品(SPU/SKU)的店铺、图片、上架时间、售价、总成本、预估亏损金额、售出数量、是否加钻、库存等，用于亏损监控与批量下架/立即拉取商品。

## 用法

```bash
mbs ars erpmonitor-sku-deficit-of-shop --shopId <string> --currPage <number> [--orderBy <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/monitor/skuDeficitOfShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopId` | shopId | query | string | 是 | - | 店铺ID。来源：页面URL查询参数，GetQueryString('shopId')读取；决定查询哪个店铺的亏损明细 |
| `currPage` | currPage | query | number | 是 | - | 当前页码。首屏固定为1；翻页时取分页组件api.getCurrent()。单位：页 |
| `orderBy` | orderBy | query | string | 否 | - | 排序方式。来源控件：#orderBy下拉框。枚举：12=上架时间倒序排列(默认)；11=上架时间正序排列 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `content[]` | array | 亏损SKU明细列表 | - |
| `content[][0]` | string | 商品记录ID（复选框value，用于批量下架/立即拉取商品接口传参ids） | - |
| `content[][1]` | number | 平台ID（复选框data-platformId；模板判断==16或==85时展示加钻标记；下架/拉取时随ids一起传） | - |
| `content[][2]` | string | 店铺名称（红色展示） | - |
| `content[][3]` | string | SKU主图URL（优先展示） | - |
| `content[][4]` | string | SPU主图URL（当skuMainImage为空时展示） | - |
| `content[][5]` | string | 胤元SPU编号 | - |
| `content[][6]` | string | 胤元SKU编号 | - |
| `content[][7]` | number | 上架时间（时间戳，前端timestampToTime转YYYY-MM-DD展示） | - |
| `content[][8]` | string | 商品标题（超链接文本，鼠标悬停title） | - |
| `content[][9]` | string | 商品外链URL（标题与商品id列超链接href，新窗口打开） | - |
| `content[][10]` | string | 平台商品ID（父SPU ID，展示于“商品id”列） | - |
| `content[][11]` | number | SKU售价（与skuShippingPrice相加得sku售价，参与亏损金额计算） | - |
| `content[][12]` | number | SKU运费价格（与skuPrice相加得sku售价） | - |
| `content[][13]` | number | SKU总成本（预估成本；参与预估亏损金额计算：售价-总成本取负） | - |
| `content[][14]` | string | SKU是否启用。枚举：'True'且yySpuStatus==1显示“在售”，否则“下架” | - |
| `content[][15]` | number | 胤元SPU状态。枚举：1=在售（与skuEnabled=='True'共同判定“在售/下架”） | - |
| `content[][16]` | number | SKU售出数量（“商品售出数量”列，与spuNumberSold并列展示） | - |
| `content[][17]` | number | SPU售出数量（与skuQuantitySold并列展示） | - |
| `content[][18]` | string | 是否加钻。枚举：'True'=加钻，否则不加钻；仅当platformId==16或==85时展示 | - |
| `content[][19]` | number | 库存 | - |
| `total` | number | 总数（回调中赋给#total，随后被toatalCount覆盖） | - |
| `totalPage` | number | 总页数（skuDeficitOfShop()返回值，作为分页组件pageCount） | - |
| `toatalCount` | number | 总条数（源码原拼写，最终展示于“共 X 条”） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
