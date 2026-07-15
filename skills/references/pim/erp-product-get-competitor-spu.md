<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-competitor-spu

SPU竞品信息查询：根据SPU查询该商品的竞品信息列表，返回每个竞品的图片、链接、标题、物品所在地、销量、含运费售价等，渲染到SPU详情页「竞品信息」表格(#content5)。

## 用法

```bash
mbs pim erp-product-get-competitor-spu --spu <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getCompetitorSpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | query | string | 是 | - | 商品SPU编号(URL query 拼接，来源：当前页面地址 SPU 查询参数 GetQueryString('SPU')) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应包装，本接口回调未显式判断) | - |
| `desc` | string | 响应提示信息(统一响应包装) | - |
| `obj[]` | array | 竞品信息列表 | - |
| `obj[][0]` | string | 竞品商品图片URL(加载失败时回退占位图 /2018ui/assets/images/timg.jpg) | - |
| `obj[][1]` | string | 竞品链接URL(商品信息超链接 href，新窗口打开) | - |
| `obj[][2]` | string | 竞品SPU/商品编号(作为超链接文本展示) | - |
| `obj[][3]` | string | 竞品商品标题(超长省略号展示) | - |
| `obj[][4]` | string | 物品所在地 | - |
| `obj[][5]` | number | 销量 | - |
| `obj[][6]` | number | 含运费售价(美元) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
