# mbs prm erp-publish-list-product-by-listing-product-publish

eBay刊登商品列表查询：eBay批量刊登页列表多维度分页查询：按生成时间/刊登时间区间、刊登状态、SKU、属性类型、站点、店铺、刊登人、价格区间、批量备注、退款、刊登结果等条件筛选，返回刊登商品(SPU)列表及其下 eBay SKU 明细、总条数与总页数。

## 用法

```bash
mbs prm erp-publish-list-product-by-listing-product-publish [--status <string>] [--sku <string>] --currentPage <number> [--vtype <string>] [--createTimeStart <string>] [--createTimeEnd <string>] [--publishTimeStart <string>] [--publishTimeEnd <string>] [--targetShops <string>] [--shopList <string>] [--employeeId <string>] [--site <string>] [--batchMark <string>] [--productKeywords <string>] [--publishResponse <string>] [--priceMax <string>] [--priceMin <string>] [--refundFlag <string>] --pagesize <string>
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/productPublish/listProductByListing`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `status` | status | body | string | 否 | - | 刊登状态。等待刊登Tab取#realStatus(空则默认'等待刊登')，刊登完毕Tab取#status |
| `sku` | sku | body | string | 否 | - | SKU编号关键词(#sku) |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码。首次固定1，翻页取分页组件当前页 |
| `vtype` | vtype | body | string | 否 | - | 商品属性类型(#property)。1=单属性;2=多属性 |
| `createTimeStart` | createTimeStart | body | string | 否 | - | 生成时间-起始(#create-start-time，仅等待刊登Tab) |
| `createTimeEnd` | createTimeEnd | body | string | 否 | - | 生成时间-结束(#create-end-time，仅等待刊登Tab) |
| `publishTimeStart` | publishTimeStart | body | string | 否 | - | 刊登时间-起始(#time1，仅刊登完毕Tab) |
| `publishTimeEnd` | publishTimeEnd | body | string | 否 | - | 刊登时间-结束(#time2，仅刊登完毕Tab) |
| `targetShops` | targetShops | body | string | 否 | - | 目标(新)刊登店铺(#PublishedShop) |
| `shopList` | shopList | body | string | 否 | - | 店铺列表(#shopName) |
| `employeeId` | employeeId | body | string | 否 | - | 刊登人/员工ID(#employeeList) |
| `site` | site | body | string | 否 | - | 站点(#station) |
| `batchMark` | batchMark | body | string | 否 | - | 批量备注。等待刊登#batchMark，刊登完毕#batchMark2 |
| `productKeywords` | product_keywords | body | string | 否 | - | 产品关键词(#product_keywords，仅等待刊登Tab) |
| `publishResponse` | publishResponse | body | string | 否 | - | 刊登结果/响应筛选(#publishResponse，仅刊登完毕Tab) |
| `priceMax` | priceMax | body | string | 否 | - | 价格上限(#priceMax) |
| `priceMin` | priceMin | body | string | 否 | - | 价格下限(#priceMin) |
| `refundFlag` | refundFlag | body | string | 否 | - | 退款标记筛选(#refundFlag) |
| `pagesize` | pagesize | body | string | 是 | - | 每页条数。等待刊登#selectPagesize，刊登完毕#selectPagesize2(50/100/200/500，默认200) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(标准包装字段) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的总条数(渲染到#total/#total2) | - |
| `obj.pages` | number | 总页数(传入分页组件pageCount) | - |
| `obj.list[]` | array | 刊登商品(SPU)列表 | - |
| `obj.list[][0]` | string | 商品SPU编号(链接/Setupspu?spu=) | - |
| `obj.list[][1]` | string | 记录ID(用于行内DOM元素id) | - |
| `obj.list[][2]` | string | 商品主图URL | - |
| `obj.list[][3]` | string | 商品标题(可编辑,限80字符) | - |
| `obj.list[][4]` | number | 属性类型。1=单属性;2=多属性(=2时展开子SKU) | - |
| `obj.list[][5]` | string | 站点 | - |
| `obj.list[][6]` | number | 销量 | - |
| `obj.list[][7]` | string | 价格区间 | - |
| `obj.list[][8]` | string | 产品关键词(红色提示) | - |
| `obj.list[][9]` | string | 禁售关键词(有值时标记禁售并隐藏勾选框) | - |
| `obj.list[][10]` | number | 退款率(%，≥5标记高退款) | - |
| `obj.list[][11]` | number | 新SKU价格 | - |
| `obj.list[][12]` | number | 毛利率(小数,前端×100保留2位展示%;≥0.12绿色否则红色) | - |
| `obj.list[][13]` | number | 算价物流费(￥) | - |
| `obj.list[][14]` | string | 发货地 | - |
| `obj.list[][15]` | string | 备货时长/最大发货时间 | - |
| `obj.list[][16]` | string | 已刊登店铺 | - |
| `obj.list[][17]` | string | 新刊登(目标)店铺 | - |
| `obj.list[][18]` | string | 刊登人 | - |
| `obj.list[][19]` | number | 刊登状态。10=等待刊登;11/12/13=刊登中;21=刊登成功;22=刊登成功(刊登完毕Tab)/刊登失败(等待刊登Tab);23=刊登失败 | - |
| `obj.list[][20]` | string | 批量备注 | - |
| `obj.list[][21]` | string | SKU后缀备注 | - |
| `obj.list[][22]` | string | 刊登成功后的商品链接 | - |
| `obj.list[][23]` | string | 平台商品itemid(刊登完毕Tab展示) | - |
| `obj.list[][24]` | string | 刊登结果/响应信息(刊登完毕Tab悬浮展示) | - |
| `obj.list[][25]` | string | 生成时间 | - |
| `obj.list[][26]` | string | 刊登时间 | - |
| `obj.list[][27]` | string | 预刊登时间 | - |
| `obj.list[][28][]` | array | 行下eBay SKU明细列表(数量徽标=length) | - |
| `obj.list[][28][][0]` | string | 子SKU记录ID | - |
| `obj.list[][28][][1]` | string | 子SKU图片URL | - |
| `obj.list[][28][][2]` | string | SKU编号(链接/product/SKUdetails.html?SKU=) | - |
| `obj.list[][28][][3]` | string | 在线属性 | - |
| `obj.list[][28][][4]` | number | 在线库存 | - |
| `obj.list[][28][][5]` | number | 原价格 | - |
| `obj.list[][28][][6]` | number | 新价格 | - |
| `obj.list[][28][][7]` | string | 币种 | - |
| `obj.list[][28][][8]` | number | 毛利率(小数,前端×100展示%) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
