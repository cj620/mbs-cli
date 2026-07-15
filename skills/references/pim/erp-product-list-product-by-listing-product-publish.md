# mbs pim erp-product-list-product-by-listing-product-publish

eBay刊登Listing列表查询：eBay批量刊登页按刊登状态(等待刊登/刊登完毕)分页查询待刊登/已刊登的 Listing 列表，可按属性类型(单/多属性)、店铺过滤，返回 SPU 行及其下 SKU(ebayPublishSkuVo)明细、价格/毛利率/发货地/刊登店铺/刊登状态/刊登结果等字段。

## 用法

```bash
mbs pim erp-product-list-product-by-listing-product-publish --status <string> --currentPage <number> [--vtype <string>] [--shopName <string>] [--shopId <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productPublish/listProductByListing`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `status` | status | body | string | 是 | - | 刊登状态(列表Tab)。等待刊登/刊登完毕。来源当前Tab并写入sessionStorage |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码。首次为1；翻页取自分页组件api.getCurrent() |
| `vtype` | vtype | body | string | 否 | - | 属性类型(#property)。0=全部;1=单属性;2=多属性 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称。取#shopName选中值split(',')[1]，未选传空 |
| `shopId` | shopId | body | string | 否 | - | 店铺ID。取#shopName选中值split(',')[0]，未选传空 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.total` | number | 满足条件的记录总数 | - |
| `obj.pages` | number | 总页数(传入分页组件pageCount) | - |
| `obj.list[]` | array | Listing(SPU)行列表 | - |
| `obj.list[][0]` | number | 记录ID(行主键) | - |
| `obj.list[][1]` | string | 商品SPU编号(链接SPU详情页) | - |
| `obj.list[][2]` | string | 商品主图URL | - |
| `obj.list[][3]` | number | 属性类型。1=单属性;2=多属性 | - |
| `obj.list[][4]` | string | Listing标题(可编辑,限80字) | - |
| `obj.list[][5]` | string | 站点(US/UK/Germany等) | - |
| `obj.list[][6]` | number | 销量 | - |
| `obj.list[][7]` | string | 价格区间 | - |
| `obj.list[][8]` | string | 新价格(行级) | - |
| `obj.list[][9]` | number | 毛利率(小数,前端×100保留2位显示%;≥0.12蓝标否则红标) | - |
| `obj.list[][10]` | string | 发货地 | - |
| `obj.list[][11]` | string | 备货时长 | - |
| `obj.list[][12]` | string | 已刊登店铺 | - |
| `obj.list[][13]` | string | 新(目标)刊登店铺 | - |
| `obj.list[][14]` | string | 刊登人 | - |
| `obj.list[][15]` | number | 刊登状态。10=等待刊登;11/12/13=刊登中;21/22=刊登成功;23=刊登失败 | - |
| `obj.list[][16]` | string | 刊登成功后的Listing链接 | - |
| `obj.list[][17]` | string | eBay itemid(刊登完毕Tab展示) | - |
| `obj.list[][18]` | string | 批量备注 | - |
| `obj.list[][19]` | string | 禁售关键词(非空则隐藏勾选框并显示禁售标签) | - |
| `obj.list[][20]` | string | SPU备注/产品关键词 | - |
| `obj.list[][21]` | string | 刊登结果/返回信息(刊登完毕Tab悬浮展示) | - |
| `obj.list[][22]` | string | 生成时间 | - |
| `obj.list[][23]` | string | 刊登时间(空显示—— ——) | - |
| `obj.list[][24]` | string | 预刊登时间(空显示—— ——) | - |
| `obj.list[][25][]` | array | 该SPU下的SKU明细列表(角标显示数量,展开子表) | - |
| `obj.list[][25][][0]` | number | SKU记录ID(库存/毛利率元素id、移除操作) | - |
| `obj.list[][25][][1]` | string | SKU编号(链接SKU详情页) | - |
| `obj.list[][25][][2]` | string | SKU图片URL | - |
| `obj.list[][25][][3]` | string | 在线属性 | - |
| `obj.list[][25][][4]` | string | 在线库存 | - |
| `obj.list[][25][][5]` | string | 原价格 | - |
| `obj.list[][25][][6]` | string | 新价格 | - |
| `obj.list[][25][][7]` | string | 币种 | - |
| `obj.list[][25][][8]` | number | 毛利率(小数,前端×100显示%) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
