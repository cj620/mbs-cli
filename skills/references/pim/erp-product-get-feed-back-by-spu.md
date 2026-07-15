# mbs pim erp-product-get-feed-back-by-spu

商品(SPU)差评(用户反馈)查询：在「SMT自动刊登」列表点击某 SPU 的「差评」按钮时，按 SPU 分页查询该商品在各平台(ebay/wish/aliexpress)的用户差评反馈列表，并返回各平台差评数量汇总，弹窗展示差评店铺、平台、内容、时间。

## 用法

```bash
mbs pim erp-product-get-feed-back-by-spu --spu <string> --pageindex <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/feedback/getFeedBackBySpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | query | string | 是 | - | 商品SPU编号。来源：列表行「差评」按钮 getFeedBackBySpu(spu,obj) 传入的 spu，原样拼到 URL |
| `pageindex` | pageindex | query | number | 是 | - | 当前页码。首次查询固定为 1；分页器回调传 api.getCurrent()(当前页) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(其它接口据此判断,本接口前端以 obj 是否存在为准) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(为空/假值时前端显示 0 条) | - |
| `obj.count` | number | 差评总条数(渲染到 #total5) | - |
| `obj.totalpage` | number | 总页数(传入分页器 pageCount) | - |
| `obj.feedBackNum` | object | 各平台差评数量汇总 | - |
| `obj.feedBackNum.EBAYNUM` | number | eBay 平台差评数(展示「ebay{n}个」) | - |
| `obj.feedBackNum.WISHNUM` | number | Wish 平台差评数(展示「wish{n}个」) | - |
| `obj.feedBackNum.ALIEXPRESSNUM` | number | AliExpress 平台差评数(展示「aliexpress{n}个」) | - |
| `obj.list[]` | array | 差评(用户反馈)明细列表 | - |
| `obj.list[][0]` | string | 店铺类型/所属平台 | - |
| `obj.list[][1]` | string | 店铺管理员/负责人 | - |
| `obj.list[][2]` | string | 商品SPU编号(链接到 /product/SPUdetails.html?SPU={SPU}) | - |
| `obj.list[][3]` | string | 平台商品 itemID(链接到 ITEMURL) | - |
| `obj.list[][4]` | string | 平台商品详情链接URL | - |
| `obj.list[][5]` | string | 差评内容 | - |
| `obj.list[][6]` | string | 差评(反馈)时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
