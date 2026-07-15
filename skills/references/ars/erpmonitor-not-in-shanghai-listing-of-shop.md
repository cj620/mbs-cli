<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-not-in-shanghai-listing-of-shop

店铺非上海刊登商品查询：按店铺ID分页查询该店铺“违规地（非上海地址）”刊登的商品列表，返回店铺名称、SPU、图片、上架时间、标题、商品链接、商品ID等，前端 art-template 渲染表格并分页展示。

## 用法

```bash
mbs ars erpmonitor-not-in-shanghai-listing-of-shop --shopId <string> --currPage <number>
```

## API

- Service: `erpmonitor`
- Method: `GET`
- Path: `/erpmonitor/erpmonitor/monitor/notInShanghaiListingOfShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopId` | shopId | body | string | 是 | - | 店铺ID。来源=浏览器地址栏 query 参数（GetQueryString('shopId')），用于指定要查询的店铺 |
| `currPage` | currPage | body | number | 是 | - | 当前页码。首次加载固定为 1；翻页时取分页控件当前页（api.getCurrent()），每页固定 100 条 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `totalPage` | number | 总页数，前端传入分页控件 pageCount 生成分页 | - |
| `toatalCount` | number | 满足条件的商品总条数（源码字段名即为 toatalCount，前端填入 #total 展示“共N条”） | - |
| `content[]` | array | 商品列表（当前页数据），前端赋给模板变量 list 渲染表格 | - |
| `content[][0]` | string | 店铺名称（表格“店铺”列） | - |
| `content[][1]` | string | SKU主图URL；优先展示，为空时回退展示 spuMainImage | - |
| `content[][2]` | string | SPU主图URL；当 skuMainImage 为空时展示 | - |
| `content[][3]` | string | 商品SPU编号（表格“SPU”列） | - |
| `content[][4]` | string | 违规地（非上海的刊登地址，表格“违规地”列） | - |
| `content[][5]` | string | 商品上架时间（表格“上架时间”列） | - |
| `content[][6]` | string | 商品标题（表格“标题”列，同时作为链接文本与 title 提示） | - |
| `content[][7]` | string | 商品详情/查看链接URL（标题与商品ID均超链接跳转，新窗口打开） | - |
| `content[][8]` | string | 商品ID（表格“商品id”列，超链接跳转 spuViewItemURL） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
