# mbs prm erp-publish-find-tiktok-autopublish-spu

TikTok自动刊登SPU列表查询：TikTok自动刊登页（已刊登/待刊登）SPU分页列表查询：支持按目标店铺、刊登结果、店铺名称、刊登状态、SPU编码、产品状态、销量级别、站点等条件分页查询，返回SPU列表（含每个SPU下的刊登SKU明细、价格/毛利率、刊登状态、开发员等）。

## 用法

```bash
mbs prm erp-publish-find-tiktok-autopublish-spu --currentPage <number> --pageSize <number> [--targetShop <string>] [--publishResult <string>] [--topShopname <string>] [--publishStatus <string>] [--spu <string>] [--spuProductStatus <string>] [--spuSalesLevel <string>] [--site <string>]
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/tiktokProductController/findTiktokAutopublishSpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码（来源 baseData.currentPage/leftcurrentPage，固定从1开始） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（前端固定传50） |
| `targetShop` | targetShop | body | string | 否 | - | 目标店铺（左侧店铺状态筛选 searchStatus 时赋值，search(1)时清空） |
| `publishResult` | publishResult | body | string | 否 | - | 刊登结果（左侧状态筛选：等待刊登/刊登成功/刊登失败/放弃刊登） |
| `topShopname` | topShopname | body | string | 否 | - | 顶部店铺名称（下拉框 #shopName） |
| `publishStatus` | publishStatus | body | string | 否 | - | 刊登状态（#onlineStatus）。0=等待刊登;1=刊登中;2=刊登成功;3=刊登失败;4=放弃刊登 |
| `spu` | spu | body | string | 否 | - | SPU编码（关键词输入框 #keyword） |
| `spuProductStatus` | spuProductStatus | body | string | 否 | - | 产品状态（#status）。正常/清仓/停产/自动创建/暂停销售 |
| `spuSalesLevel` | spuSalesLevel | body | string | 否 | - | 销量级别（#salesStatus，选项由 getProductType 动态填充 typeName） |
| `site` | site | body | string | 否 | - | 站点（#site）。MY/TH/SG/PH/ID/VN/BR/TW |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的SPU总数（写入 #total） | - |
| `obj.totalPages` | number | 总页数（传入分页组件 pageCount） | - |
| `obj.rows[]` | array | 刊登SPU列表 | - |
| `obj.rows[][0]` | number | 刊登状态枚举。0=等待刊登;1=刊登中;2=刊登成功;3=刊登失败;4=放弃刊登（前端转中文展示） | - |
| `obj.rows[][1]` | string | 批次ID（勾选框 value，批量操作用） | - |
| `obj.rows[][2]` | string | 唯一ID（data-unique，删除/放弃刊登用） | - |
| `obj.rows[][3]` | string | 目标刊登店铺名称（展示在刊登店铺列） | - |
| `obj.rows[][4]` | string | 目标刊登店铺ID（data-shopid） | - |
| `obj.rows[][5]` | string | SPU主图URL（加载失败回退默认图） | - |
| `obj.rows[][6][]` | array | 该SPU下的刊登SKU明细列表（.length 显示为图片角标数量） | - |
| `obj.rows[][6][][0]` | string | SKU主图URL（加载失败回退默认图） | - |
| `obj.rows[][6][][1]` | string | SKU编号（链接至 /product/SKUdetails.html?SKU=） | - |
| `obj.rows[][6][][2]` | number | 是否捆绑。1=捆绑（红字（捆绑）） | - |
| `obj.rows[][6][][3]` | string | 产品状态 | - |
| `obj.rows[][6][][4]` | number | 是否侵权。1=侵权（红标侵权） | - |
| `obj.rows[][6][][5]` | string | SKU销量级别。超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品 | - |
| `obj.rows[][6][][6]` | string | 禁售平台 | - |
| `obj.rows[][6][][7]` | number | 在线库存 | - |
| `obj.rows[][6][][8]` | number | 当前ERP库存 | - |
| `obj.rows[][6][][9]` | string | 原价格 | - |
| `obj.rows[][6][][10]` | string | 新价格 | - |
| `obj.rows[][6][][11]` | string | 币种 | - |
| `obj.rows[][7]` | string | SPU编号（链接至 /product/SPUdetails.html?SPU=） | - |
| `obj.rows[][8]` | string | SPU销量级别。超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品 | - |
| `obj.rows[][9]` | string | SPU记录ID（用于标题元素id定位） | - |
| `obj.rows[][10]` | string | 刊登标题（可编辑，前端展示 title.length/100 字数） | - |
| `obj.rows[][11]` | number | 属性类型。1=单属性;2=多属性 | - |
| `obj.rows[][12]` | number | 销量 | - |
| `obj.rows[][13]` | string | 站点 | - |
| `obj.rows[][14]` | string | 原价格区间 | - |
| `obj.rows[][15]` | number | 是否差价大。1=差价大（红字提示） | - |
| `obj.rows[][16]` | string | 侵权词（存在时红字提示） | - |
| `obj.rows[][17]` | string | 物流名称 | - |
| `obj.rows[][18]` | number | 刊登量 | - |
| `obj.rows[][19]` | string | 新价格区间 | - |
| `obj.rows[][20]` | number | 毛利率（原值为小数，前端×100保留2位展示%） | - |
| `obj.rows[][21]` | number | 折扣率OFF（原值为小数，前端×100保留2位展示%，存在时显示） | - |
| `obj.rows[][22]` | string | 刊登人 | - |
| `obj.rows[][23]` | string | 刊登成功后的商品链接（publishStatus=2时超链接） | - |
| `obj.rows[][24]` | string | 刊登响应/结果信息（publishStatus=2或3时悬浮展示） | - |
| `obj.rows[][25]` | string | 生成时间 | - |
| `obj.rows[][26]` | string | 上架时间 | - |
| `obj.rows[][27]` | string | 开发员 | - |
| `obj.rows[][28]` | string | 创建（开发）时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
