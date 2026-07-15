<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erp-publish-list-product-by-listing-joom-product-publish

Joom刊登商品(Listing)列表查询：Joom批量刊登页面列表分页查询：等待刊登/刊登完毕两标签页共用，按刊登状态、商品属性、店铺、刊登人、站点、SPU备注、刊登时间区间、新刊登店铺等筛选，返回SPU行(含子SKU列表joomPublishSkuVo)、价格/毛利、店铺、刊登状态与时间等字段。

## 用法

```bash
mbs prm erp-publish-list-product-by-listing-joom-product-publish [--status <string>] --currentPage <number> [--vtype <string>] [--shopName <string>] [--shopId <string>] [--employeeId <string>] [--site <string>] [--productKeywords <string>] [--publishTimeStart <string>] [--publishTimeEnd <string>] [--targetShops <string>]
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/joomProductPublish/listProductByListing`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `status` | status | body | string | 否 | - | 刊登状态。等待刊登取#realStatus(空→'等待刊登'/'刊登中'/'real等待刊登')，刊登完毕取#status('刊登完毕'/'刊登成功'/'刊登失败') |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码。首查固定1，翻页取api.getCurrent() |
| `vtype` | vtype | body | string | 否 | - | 商品属性类型。来源#property。0=全部,2=多属性,1=单属性 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称。#shopName值'joomShopId,joomShopName'拆分后[1] |
| `shopId` | shopId | body | string | 否 | - | 店铺ID。#shopName值拆分后[0](joomShopId) |
| `employeeId` | employeeId | body | string | 否 | - | 刊登人ID。来源#employeeList(value=employee_id) |
| `site` | site | body | string | 否 | - | 站点。$('#station').val()；本页未见#station控件，多为空(待人工确认) |
| `productKeywords` | product_keywords | body | string | 否 | - | SPU备注搜索关键词。来源#product_keywords。仅等待刊登首查search()携带 |
| `publishTimeStart` | publishTimeStart | body | string | 否 | - | 刊登时间-起始。来源#time1。仅刊登完毕search()携带 |
| `publishTimeEnd` | publishTimeEnd | body | string | 否 | - | 刊登时间-结束。来源#time2。仅刊登完毕search2()携带 |
| `targetShops` | targetShops | body | string | 否 | - | 新刊登(刊登过的)店铺。来源#PublishedShop(value=joomShopName)。仅刊登完毕分支携带 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的总条数(渲染#total/#total2) | - |
| `obj.pages` | number | 总页数(分页组件pageCount) | - |
| `obj.list[]` | array | SPU(刊登商品)行列表 | - |
| `obj.list[][0]` | string | 商品SPU编号 | - |
| `obj.list[][1]` | string | 记录ID(DOM id拼接) | - |
| `obj.list[][2]` | string | 唯一标识(批量刊登/改标题用) | - |
| `obj.list[][3]` | string | 商品标题(可编辑,限100字) | - |
| `obj.list[][4]` | number | 商品属性类型。1=单属性;2=多属性 | - |
| `obj.list[][5]` | string | 商品主图URL | - |
| `obj.list[][6]` | number | 销量 | - |
| `obj.list[][7]` | string | 价格区间(展示) | - |
| `obj.list[][8]` | number | 新SKU价格 | - |
| `obj.list[][9]` | number | 毛利率(小数,前端×100保留2位展示%,≥0.12标蓝否则标红) | - |
| `obj.list[][10]` | number | 新运费 | - |
| `obj.list[][11]` | string | 币种 | - |
| `obj.list[][12]` | number | 建议零售价(MSRP) | - |
| `obj.list[][13]` | string | 已刊登店铺 | - |
| `obj.list[][14]` | string | 新刊登(目标)店铺 | - |
| `obj.list[][15]` | string | 刊登人姓名 | - |
| `obj.list[][16]` | number | 刊登状态。10=等待刊登;11/12/13=刊登中;21/22=刊登成功;23=刊登失败 | - |
| `obj.list[][17]` | string | 刊登成功商品链接 | - |
| `obj.list[][18]` | string | Joom商品itemid(刊登完毕链接文本) | - |
| `obj.list[][19]` | string | Joom商品itemId(拼接joom.com/products/链接) | - |
| `obj.list[][20]` | string | 刊登返回信息(悬浮展示) | - |
| `obj.list[][21]` | string | 生成时间 | - |
| `obj.list[][22]` | string | 刊登时间 | - |
| `obj.list[][23]` | string | 预刊登时间 | - |
| `obj.list[][24]` | string | SPU备注(红色展示) | - |
| `obj.list[][25]` | string | 禁售关键词(非空则禁勾选并标禁售) | - |
| `obj.list[][26][]` | array | 子SKU列表(角标显示数量) | - |
| `obj.list[][26][][0]` | string | 子SKU记录ID | - |
| `obj.list[][26][][1]` | string | 子SKU编号 | - |
| `obj.list[][26][][2]` | string | 子SKU主图URL | - |
| `obj.list[][26][][3]` | string | 在线属性 | - |
| `obj.list[][26][][4]` | number | 在线库存 | - |
| `obj.list[][26][][5]` | number | 原价格 | - |
| `obj.list[][26][][6]` | number | 新价格 | - |
| `obj.list[][26][][7]` | number | 原运费 | - |
| `obj.list[][26][][8]` | number | 新运费 | - |
| `obj.list[][26][][9]` | string | 币种 | - |
| `obj.list[][26][][10]` | number | 毛利率(小数,前端×100展示%) | - |
| `obj.list[][26][][11]` | number | 子SKU刊登状态(11/12/13刊登中禁止移除) | - |
| `obj.list[][27][]` | array | 子SKU列表(#contenTemplate2引用,疑模板复制残留,实际以joomPublishSkuVo为准)(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
