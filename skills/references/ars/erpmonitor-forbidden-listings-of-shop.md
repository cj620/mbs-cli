<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-forbidden-listings-of-shop

店铺违禁词刊登列表查询：按店铺ID分页查询该店铺下命中违禁词(禁词)的刊登商品列表，返回商品店铺、主图、SPU、命中禁词标识、上架时间、标题、商品链接、商品ID等，以及分页汇总(总页数/总条数)。前端每页固定100条，使用art-template(#contentTemplate)渲染表格并配合分页控件翻页。

## 用法

```bash
mbs ars erpmonitor-forbidden-listings-of-shop --shopId <string> --currPage <number>
```

## API

- Service: `erpmonitor`
- Method: `GET`
- Path: `/erpmonitor/erpmonitor/monitor/forbiddenListingsOfShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopId` | shopId | query | string | 是 | - | 店铺ID。来源于当前页面URL query(GetQueryString('shopId'))，指定要查询违禁词刊登的店铺 |
| `currPage` | currPage | query | number | 是 | - | 当前页码。首次加载固定传1；翻页时取分页控件api.getCurrent()。来源控件：分页组件.M-box(jquery.pagination) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `totalPage` | number | 总页数(传入分页控件findTaskReport(data.obj.totalPage)作为pageCount) | - |
| `toatalCount` | number | 满足条件的商品总条数(源码字段原始拼写为toatalCount；渲染到#total，页面固定每页100条) | - |
| `content[]` | array | 违禁词刊登商品列表(赋值给模板list) | - |
| `content[][0]` | string | 店铺名称(表格“店铺”列) | - |
| `content[][1]` | string | SPU主图URL(表格“图片”列<img src>，width:45px) | - |
| `content[][2]` | string | SKU主图URL(模板中相关<img>及{{if !v.skuMainImage}}判断已被HTML注释，当前不渲染，保留字段)(待人工确认) | - |
| `content[][3]` | string | 商品SPU编号(表格“SPU”列) | - |
| `content[][4]` | string | 命中的禁词标识(表格“禁词”列，展示违禁词/其MD5标识)(具体含义待人工确认) | - |
| `content[][5]` | string | 商品上架时间(表格“上架时间”列) | - |
| `content[][6]` | string | 商品标题(表格“标题”列，作为链接文本，并作title悬浮提示) | - |
| `content[][7]` | string | 商品详情链接URL(“标题”与“商品id”列超链接href，target=_blank) | - |
| `content[][8]` | string | 商品ID(表格“商品id”列，作为链接文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
