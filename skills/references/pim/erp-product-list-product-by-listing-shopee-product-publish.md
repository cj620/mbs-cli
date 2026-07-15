<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-list-product-by-listing-shopee-product-publish

Shopee刊登商品列表查询(按Listing)：Shopee商品刊登管理页面列表查询：按刊登状态(等待刊登/刊登完毕)、商品属性、店铺、刊登人、站点、SPU、批量备注、风险预警、刊登时间区间等条件分页查询，返回商品(含子SKU)刊登信息列表、总数与总页数。

## 用法

```bash
mbs pim erp-product-list-product-by-listing-shopee-product-publish [--status <string>] [--currentPage <number>] [--vtype <string>] [--shopName <string>] [--shopId <string>] [--employeeId <string>] [--site <string>] [--publishTimeStart <string>] [--publishTimeEnd <string>] [--targetShops <string>] [--spu <string>] [--submitContent <string>] [--includeRiskwarning <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/shopeeProductPublish/listProductByListing`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `status` | status | body | string | 否 | - | 刊登状态。等待刊登Tab取#realStatus(空→默认等待刊登;刊登中;real等待刊登);刊登完毕Tab取#status(刊登完毕/刊登成功/刊登失败) |
| `currentPage` | currentPage | body | number | 否 | - | 当前页码。首次查询固定为1;分页回调取api.getCurrent() |
| `vtype` | vtype | body | string | 否 | - | 商品属性。0=全部,2=多属性,1=单属性(来源#property) |
| `shopName` | shopName | body | string | 否 | - | 店铺(名称)。首次取#shopName.val();分页取shops.split(',')[1] |
| `shopId` | shopId | body | string | 否 | - | 店铺ID。仅分页回调传,取shops.split(',')[0](来源#shopName) |
| `employeeId` | employeeId | body | string | 否 | - | 刊登人(员工ID,来源#employeeList) |
| `site` | site | body | string | 否 | - | 站点。空=全部;PH/SG/MY/TH/ID/VN/BR/MX/TW等(来源#station) |
| `publishTimeStart` | publishTimeStart | body | string | 否 | - | 刊登开始时间。仅刊登完毕Tab传(来源#time1) |
| `publishTimeEnd` | publishTimeEnd | body | string | 否 | - | 刊登结束时间。仅刊登完毕Tab传(来源#time2) |
| `targetShops` | targetShops | body | string | 否 | - | 新刊登(目标)店铺。仅刊登完毕Tab传(来源#PublishedShop) |
| `spu` | spu | body | string | 否 | - | SPU编号(按SPU过滤,来源#spuName) |
| `submitContent` | submitContent | body | string | 否 | - | 批量备注/批注(按提交内容过滤,来源#batchNote) |
| `includeRiskwarning` | includeRiskwarning | body | string | 否 | - | 是否含风险预警。空=全部,1=有风险,0=无风险(来源#riskwarning) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(无数据时为空) | - |
| `obj.total` | number | 满足条件的商品总条数 | - |
| `obj.pages` | number | 总页数(传入分页组件pageCount) | - |
| `obj.list[]` | array | 商品刊登列表 | - |
| `obj.list[][0]` | string | 商品SPU编号(链接至SPU详情) | - |
| `obj.list[][1]` | string | 商品记录ID(用于DOM元素id拼接) | - |
| `obj.list[][2]` | string | 刊登记录唯一ID(重新刊登/变更主图/批量刊登入参) | - |
| `obj.list[][3]` | number | 刊登状态。10=等待刊登;11/12/13=刊登中;21/22=刊登成功;23=刊登失败 | - |
| `obj.list[][4]` | number | 商品属性。1=单属性;2=多属性 | - |
| `obj.list[][5]` | string | 商品主图URL | - |
| `obj.list[][6]` | string | 商品标题(可编辑,限100/80字) | - |
| `obj.list[][7]` | string | 站点 | - |
| `obj.list[][8]` | number | 销量 | - |
| `obj.list[][9]` | string | 价格区间 | - |
| `obj.list[][10]` | number | 来源平台。1=ebay源;10=smt源;120=tiktok源 | - |
| `obj.list[][11]` | string | 新SKU价格 | - |
| `obj.list[][12]` | number | 毛利率(原值为小数,前端×100保留2位展示%) | - |
| `obj.list[][13]` | string | 已刊登店铺(逗号分隔,刊登完毕Tab超10个折叠) | - |
| `obj.list[][14]` | string | 新刊登(目标)店铺 | - |
| `obj.list[][15]` | string | 刊登人 | - |
| `obj.list[][16]` | string | 批量备注(无则显示'---') | - |
| `obj.list[][17]` | string | 生成时间 | - |
| `obj.list[][18]` | string | 刊登时间 | - |
| `obj.list[][19]` | string | 预刊登时间(定时刊登时间) | - |
| `obj.list[][20]` | string | 刊登成功后的商品链接 | - |
| `obj.list[][21]` | string | 平台商品itemid(刊登完毕Tab展示) | - |
| `obj.list[][22]` | string | 刊登结果/平台返回信息(刊登完毕Tab,悬浮展开) | - |
| `obj.list[][23]` | string | 商品关键词(红色提示) | - |
| `obj.list[][24]` | string | 禁售关键词(非空则禁止勾选并标"禁售") | - |
| `obj.list[][25]` | string | 风险词(非空标红框并提示) | - |
| `obj.list[][26]` | string | 风险预警信息 | - |
| `obj.list[][27][]` | array | 子SKU列表(展开行;徽标显示数量) | - |
| `obj.list[][27][][0]` | string | 子SKU图片URL | - |
| `obj.list[][27][][1]` | string | SKU编号(链接至SKU详情) | - |
| `obj.list[][27][][2]` | string | 在线属性 | - |
| `obj.list[][27][][3]` | number | 在线库存 | - |
| `obj.list[][27][][4]` | string | 子SKU记录ID(移除操作入参/DOM id) | - |
| `obj.list[][27][][5]` | string | 原价格 | - |
| `obj.list[][27][][6]` | string | 新价格 | - |
| `obj.list[][27][][7]` | string | 币种 | - |
| `obj.list[][27][][8]` | number | 子SKU毛利率(前端×100展示%) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
