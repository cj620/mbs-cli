<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-lazada-autopublish-spu

Lazada自动刊登SPU列表查询：Lazada自动刊登管理页的SPU分页查询：按搜索类型(SPU/itemid)、店铺、在线状态、产品状态、销量级别、创建/刊登时间区间、差价等条件分页查询待刊登/已刊登SPU列表，返回每个SPU及其下挂SKU列表(价格、库存、刊登状态等)。

## 用法

```bash
mbs pim erp-product-find-lazada-autopublish-spu --currentPage <number> --pageSize <number> [--targetShop <string>] [--onlineResult <string>] [--topShopname <string>] [--spu <string>] [--itemid <string>] [--isPriceDifference <number>] [--createTimeStart <string>] [--createTimeEnd <string>] [--publishTimeStart <string>] [--publishTimeEnd <string>] [--productStatus <string>] [--salesLevel <string>] [--onlineStatus <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaAutopublishController/findLazadaAutopublishSpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码。num=1取baseData.currentPage，num=2取baseData.leftcurrentPage，分页回调赋当前页 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，前端固定传50 |
| `targetShop` | targetShop | body | string | 否 | - | 目标店铺。仅店铺侧栏searchStatus点击时赋店铺名，主搜索num=1时清空 |
| `onlineResult` | onlineResult | body | string | 否 | - | 在线刊登状态结果。searchStatus传入(等待刊登/刊登成功/刊登失败/放弃刊登)，主搜索num=1时清空 |
| `topShopname` | topShopname | body | string | 否 | - | 顶部店铺筛选，取自#shopName下拉框值 |
| `spu` | spu | body | string | 否 | - | 关键词-按SPU编码查询。#filtertype=1时取#keyword；非1/3时传空串 |
| `itemid` | itemid | body | string | 否 | - | 关键词-按平台itemid查询。#filtertype=3时取#keyword；非1/3时传空串 |
| `isPriceDifference` | isPriceDifference | body | number | 否 | - | 是否仅看差价大商品。勾选#isPriceDifference时传1，否则不传 |
| `createTimeStart` | createTimeStart | body | string | 否 | - | 创建时间-起始。#setTime=1且#startTime有值时取#startTime+' 00:00:00' |
| `createTimeEnd` | createTimeEnd | body | string | 否 | - | 创建时间-结束。#setTime=1且#endTime有值时取#endTime+' 23:59:59' |
| `publishTimeStart` | publishTimeStart | body | string | 否 | - | 刊登时间-起始。#setTime=2且#startTime有值时取#startTime+' 00:00:00' |
| `publishTimeEnd` | publishTimeEnd | body | string | 否 | - | 刊登时间-结束。#setTime=2且#endTime有值时取#endTime+' 23:59:59' |
| `productStatus` | productStatus | body | string | 否 | - | 产品状态，取自#status下拉框值 |
| `salesLevel` | salesLevel | body | string | 否 | - | 销量级别，取自#salesStatus(超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品) |
| `onlineStatus` | onlineStatus | body | string | 否 | - | 在线状态，取自#onlineStatus下拉框值 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的SPU总记录数(渲染到#total) | - |
| `obj.totalPages` | number | 总页数(传入findTaskReport初始化分页) | - |
| `obj.rows[]` | array | SPU列表(渲染#contentTemplate的list) | - |
| `obj.rows[][0]` | string | 刊登批次ID(勾选框value，传入刊登/删除接口) | - |
| `obj.rows[][1]` | string | SPU唯一ID(data-item，作publishItemid/itemid用) | - |
| `obj.rows[][2]` | number | 刊登状态枚举。0=等待刊登;1=刊登中;2=刊登成功;3=刊登失败;4=放弃刊登 | - |
| `obj.rows[][3]` | string | SPU主图URL | - |
| `obj.rows[][4]` | string | SPU编码(链接到SPUdetails.html?SPU=) | - |
| `obj.rows[][5]` | string | 销量级别(超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品) | - |
| `obj.rows[][6]` | string | 风险词(有值则标题红框并提示风险词) | - |
| `obj.rows[][7]` | string | 商品标题(可编辑，最长255，trim后展示长度) | - |
| `obj.rows[][8]` | string | 商品记录ID(用于标题DOM元素id拼接) | - |
| `obj.rows[][9]` | string | 站点(data-site，修改标题时传给updateTitleByItemid) | - |
| `obj.rows[][10]` | number | 属性类型。1=单属性;2=多属性 | - |
| `obj.rows[][11]` | number | 销量 | - |
| `obj.rows[][12]` | string | 价格区间(直接展示) | - |
| `obj.rows[][13]` | number | 是否差价大。1=差价大(展示红色(差价大)) | - |
| `obj.rows[][14]` | string | 平台商品外链(itemid超链接href) | - |
| `obj.rows[][15]` | string | 平台itemid(链接文本) | - |
| `obj.rows[][16]` | string | 类目 | - |
| `obj.rows[][17]` | number | 新价格(SPU级，与币种拼接展示) | - |
| `obj.rows[][18]` | string | 币种(SPU级新价格币种) | - |
| `obj.rows[][19]` | number | 利润率(原值为小数，前端×100保留2位展示%) | - |
| `obj.rows[][20]` | number | 折扣率(原值为小数，有值时×100展示OFF(x%)) | - |
| `obj.rows[][21]` | string | 目标店铺名 | - |
| `obj.rows[][22]` | string | 刊登操作人 | - |
| `obj.rows[][23]` | string | 刊登响应/失败原因(publishStatus=3时悬浮展示) | - |
| `obj.rows[][24]` | string | 创建时间 | - |
| `obj.rows[][25]` | string | 刊登时间 | - |
| `obj.rows[][26]` | number | 是否可重新刊登。1=显示重新刊登按钮 | - |
| `obj.rows[][27][]` | array | SPU下挂SKU明细列表(展开行渲染；其length作SKU数角标) | - |
| `obj.rows[][27][][0]` | string | SKU主图URL | - |
| `obj.rows[][27][][1]` | string | SKU编号(链接到SKUdetails.html?SKU=) | - |
| `obj.rows[][27][][2]` | number | 是否捆绑。1=展示（捆绑） | - |
| `obj.rows[][27][][3]` | string | 产品状态 | - |
| `obj.rows[][27][][4]` | number | 是否侵权。1=展示侵权标签 | - |
| `obj.rows[][27][][5]` | string | SKU销量级别(枚举同SPU级) | - |
| `obj.rows[][27][][6]` | string | 禁售平台 | - |
| `obj.rows[][27][][7]` | number | 在线库存 | - |
| `obj.rows[][27][][8]` | number | 当前ERP库存 | - |
| `obj.rows[][27][][9]` | number | 原价格 | - |
| `obj.rows[][27][][10]` | number | 新价格 | - |
| `obj.rows[][27][][11]` | number | 折后价格 | - |
| `obj.rows[][27][][12]` | string | 币种 | - |
| `obj.rows[][27][][13]` | object | 区域定价映射(data-shipmap，点击查看详情按key-value渲染) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
