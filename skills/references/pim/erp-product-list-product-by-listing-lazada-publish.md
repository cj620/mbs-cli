<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-list-product-by-listing-lazada-publish

Lazada批量刊登-按Listing查询商品列表：Lazada批量刊登页商品列表分页查询：按刊登状态、商品属性、店铺、刊登人、站点、spu备注关键词、刊登时间区间等条件分页返回待刊登/已刊登SPU列表及子SKU明细。等待刊登Tab由search()调用、刊登完毕Tab由search2()调用，复用同一接口。

## 用法

```bash
mbs pim erp-product-list-product-by-listing-lazada-publish [--status <string>] [--currentPage <number>] [--vtype <string>] [--shopName <string>] [--shopId <string>] [--employeeId <string>] [--site <string>] [--productKeywords <string>] [--publishTimeStart <string>] [--publishTimeEnd <string>] [--targetShops <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaPublish/listProductByListing`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `status` | status | body | string | 否 | - | 刊登状态。等待刊登Tab取#realStatus(''/刊登中/real等待刊登,空则默认'等待刊登')，刊登完毕Tab取#status(刊登完毕/刊登成功/刊登失败) |
| `currentPage` | currentPage | body | number | 否 | - | 当前页码，首次为1，翻页取分页组件当前页 |
| `vtype` | vtype | body | string | 否 | - | 商品属性，来源#property：0=全部,2=多属性,1=单属性 |
| `shopName` | shopName | body | string | 否 | - | 未刊登店铺名称，取#shopName的value(ebayShopId,ebayShopName)逗号分割第二段 |
| `shopId` | shopId | body | string | 否 | - | 未刊登店铺ID，取#shopName的value逗号分割第一段(ebayShopId) |
| `employeeId` | employeeId | body | string | 否 | - | 刊登人(员工)ID，来源#employeeList下拉(value=employee_id) |
| `site` | site | body | string | 否 | - | 站点/国家，来源#station：PH/SG/MY/TH/ID/VN，''=全部 |
| `productKeywords` | product_keywords | body | string | 否 | - | spu备注搜索关键词(仅等待刊登search()传，分页回调不回传)，来源#product_keywords |
| `publishTimeStart` | publishTimeStart | body | string | 否 | - | 刊登开始时间(仅刊登完毕传)，来源#time1日期控件 |
| `publishTimeEnd` | publishTimeEnd | body | string | 否 | - | 刊登结束时间(仅刊登完毕传)，来源#time2日期控件 |
| `targetShops` | targetShops | body | string | 否 | - | 新刊登(目标)店铺(仅刊登完毕传)，来源#PublishedShop下拉(value=ebayShopName) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象，为空时前端将总数置0 | - |
| `obj.total` | number | 满足条件的商品总数(显示共N条) | - |
| `obj.pages` | number | 总页数(传入分页组件作pageCount) | - |
| `obj.list[]` | array | 商品(SPU)刊登列表 | - |
| `obj.list[][0]` | string | 商品SPU编号(链接到SPUdetails) | - |
| `obj.list[][1]` | string | 商品记录ID | - |
| `obj.list[][2]` | string | 商品标题(可编辑，setTitle提交，限长255/80) | - |
| `obj.list[][3]` | string | 商品主图URL | - |
| `obj.list[][4]` | string | 站点/国家 | - |
| `obj.list[][5]` | number | 属性类型。1=单属性;2=多属性(显示展开子SKU箭头) | - |
| `obj.list[][6]` | number | 刊登状态。10=等待刊登;11/12/13=刊登中;21/22=刊登成功;23=刊登失败 | - |
| `obj.list[][7]` | string | 商品类别名称 | - |
| `obj.list[][8]` | string | 刊登人(操作人) | - |
| `obj.list[][9]` | string | 已刊登店铺(逗号拼接，≥2个悬浮展开下拉) | - |
| `obj.list[][10]` | string | 新刊登(目标)店铺 | - |
| `obj.list[][11]` | string | 新价格 | - |
| `obj.list[][12]` | number | 毛利率(小数,前端×100保留2位展示%,≥0.12蓝标否则红标) | - |
| `obj.list[][13]` | string | 价格区间 | - |
| `obj.list[][14]` | number | 销量(有值时展示销量：N) | - |
| `obj.list[][15]` | string | spu备注(红字展示) | - |
| `obj.list[][16]` | string | 禁售关键词(非空展示'禁售xxx'且该行不可勾选) | - |
| `obj.list[][17]` | string | 生成时间 | - |
| `obj.list[][18]` | string | 刊登时间(为空显示—— ——) | - |
| `obj.list[][19]` | string | 预刊登时间(为空显示—— ——) | - |
| `obj.list[][20]` | string | 刊登成功跳转链接(等待刊登模板status=21/22用) | - |
| `obj.list[][21]` | string | 在线链接/刊登成功链接(刊登完毕模板用) | - |
| `obj.list[][22]` | string | 源链接(刊登完毕模板itemid跳转地址) | - |
| `obj.list[][23]` | string | 在线itemid(刊登完毕模板展示，setTitle时上送) | - |
| `obj.list[][24]` | string | 在线编号(刊登完毕模板'在线编号'列) | - |
| `obj.list[][25]` | string | 刊登结果/响应信息(刊登完毕模板'刊登结果'列，悬浮展开) | - |
| `obj.list[][26][]` | array | 子SKU明细列表(数量徽标=length;多属性展开行) | - |
| `obj.list[][26][][0]` | string | 子SKU记录ID(deleteSpu移除) | - |
| `obj.list[][26][][1]` | string | 子SKU编号(链接到SKUdetails) | - |
| `obj.list[][26][][2]` | string | 子SKU主图URL | - |
| `obj.list[][26][][3]` | string | 在线属性 | - |
| `obj.list[][26][][4]` | string | 在线库存(只读输入框展示) | - |
| `obj.list[][26][][5]` | string | 原价格 | - |
| `obj.list[][26][][6]` | string | 新价格 | - |
| `obj.list[][26][][7]` | string | 币种 | - |
| `obj.list[][26][][8]` | number | 子SKU毛利率(前端×100加%展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
