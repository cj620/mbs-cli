<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-shopee-info-edit-id

接口进行拉取信息：接口进行拉取信息

## 用法

```bash
mbs pim instudio-pms-get-shopee-info-edit-id [--parentCategoryId <string>] [--categoryLevel <integer>] [--categoryId <string>] [--shopname <string>] [--merchantid <string>] [--site <string>] [--erpSpu <string>] [--oper <string>] [--operId <string>] [--listId <string>] [--startIndex <integer>] [--pageSize <integer>] [--currentPage <integer>] [--starttime <string>] [--endtime <string>] [--shopsSplice <string>] [--publishstatus <integer>] [--createBy <string>] [--pt <string>] [--shopeeUrl <string>] [--listIdList <array<string>>] [--shopCopys <array<string>>] [--listCopys <array<string>>] [--itemId <string>] [--id <integer>] [--isRefresh <integer>] [--title <string>] [--videoStatusStr <string>] [--picStyle <string>] [--price5 <integer>] [--groupCompanyId <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/shopeeSinglepublishController/getShopeeInfoEditId`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `parentCategoryId` | parentCategoryId | body | string | 否 | - | 父级类目ID（字段名推断,语义待核实） |
| `categoryLevel` | categoryLevel | body | integer | 否 | - | 类目级别（字段名推断,语义待核实） |
| `categoryId` | categoryId | body | string | 否 | - | 类目ID（字段名推断,语义待核实） |
| `shopname` | shopname | body | string | 否 | - | 店铺名称（字段名推断,语义待核实） |
| `merchantid` | merchantid | body | string | 否 | - | Merchantid（字段名推断,语义待核实） |
| `site` | site | body | string | 否 | - | 站点（字段名推断,语义待核实） |
| `erpSpu` | erpSpu | body | string | 否 | - | ERPSPU（字段名推断,语义待核实） |
| `oper` | oper | body | string | 否 | - | 操作（字段名推断,语义待核实） |
| `operId` | operId | body | string | 否 | - | 操作ID（字段名推断,语义待核实） |
| `listId` | listId | body | string | 否 | - | 列表ID（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `currentPage` | currentPage | body | integer | 否 | - | 当前页码（字段名推断,语义待核实） |
| `starttime` | starttime | body | string | 否 | - | Starttime（字段名推断,语义待核实） |
| `endtime` | endtime | body | string | 否 | - | Endtime（字段名推断,语义待核实） |
| `shopsSplice` | shopsSplice | body | string | 否 | - | 店铺列表Splice（字段名推断,语义待核实） |
| `publishstatus` | publishstatus | body | integer | 否 | - | Publishstatus（字段名推断,语义待核实） |
| `createBy` | createBy | body | string | 否 | - | 创建人（字段名推断,语义待核实） |
| `pt` | pt | body | string | 否 | - | PT（字段名推断,语义待核实） |
| `shopeeUrl` | shopeeUrl | body | string | 否 | - | ShopeeURL（字段名推断,语义待核实） |
| `listIdList` | listIdList | body | array<string> | 否 | - | 列表ID列表（字段名推断,语义待核实） |
| `shopCopys` | shopCopys | body | array<string> | 否 | - | 复制成功目标店铺 |
| `listCopys` | listCopys | body | array<string> | 否 | - | 复制成功源list |
| `itemId` | itemId | body | string | 否 | - | 条目ID（字段名推断,语义待核实） |
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `isRefresh` | isRefresh | body | integer | 否 | - | 是否刷新（字段名推断,语义待核实） |
| `title` | title | body | string | 否 | - | 标题（字段名推断,语义待核实） |
| `videoStatusStr` | videoStatusStr | body | string | 否 | - | 视频状态字符串（字段名推断,语义待核实） |
| `picStyle` | picStyle | body | string | 否 | - | 图片样式（字段名推断,语义待核实） |
| `price5` | price5 | body | integer | 否 | - | 价格5（字段名推断,语义待核实） |
| `groupCompanyId` | groupCompanyId | body | integer | 否 | - | 分组公司ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（解构赋值，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（取值,条件判断,解构赋值，行号待核实） | - |
| `obj.obj.rows` | string | 行数据（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shop` | string | 店铺（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.groupMember` | string | 分组成员（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.countPage` | string | 数量页码（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.count` | string | 数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.result` | string | 结果（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.total` | string | 总数（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.list` | string | 列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.checked` | string | Checked（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.getAttribute` | string | 查询属性（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.dataset` | string | Dataset（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.descr` | string | 描述（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.title` | string | 标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformIds` | string | 平台ID列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.actionList` | string | 动作列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tool` | string | TOOL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sequenceid` | string | 序列ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.type` | string | 类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.items` | string | 条目列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pages` | string | Pages（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.scrollId` | string | ScrollID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.diagnosisTypelist` | string | 诊断Typelist（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.opername` | string | Opername（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.country` | string | 国家（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platform` | string | 平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.croppedList` | string | Cropped列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformId` | string | 平台ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopName` | string | 店铺名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.itemId` | string | 条目ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.esProId` | string | ES产品ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopId` | string | 店铺ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuId` | string | SKUID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.erpSku` | string | ERPSKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.PLATFORMID` | string | Platformid（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.isCodOpen` | string | 是否COD开启（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopeeGlobalItemId` | string | Shopee全局条目ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.overrideDto` | string | OverrideDTO（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.dropDownSelected` | string | DROP下架Selected（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.disabled` | string | 已禁用（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.priceDtoNew` | string | 价格DTO新（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.erpSPU` | string | ERPSPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.trim` | string | TRIM（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.parentSPUId` | string | 父级SPUID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spu` | string | SPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spuSiteCodeType` | string | SPU站点编码类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.departmentId` | string | 部门ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.departmentName` | string | 部门名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.phishingWord` | string | Phishing词（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productTitle` | string | 商品标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productTitleHtml` | string | 商品标题HTML（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.modifySkuPriceSkuStatusMap` | string | 修改SKU价格SKU状态MAP（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.modifySkuPriceStatus` | string | 修改SKU价格状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformSku` | string | 平台SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.modifySkuPricResp` | string | 修改SKUPRICRESP（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.multipleWarehousesTrendInfo` | string | MultipleWarehouses趋势信息（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.status` | string | 状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.stock` | string | 库存（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopCount` | string | 店铺数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.totalStock` | string | 总数库存（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.warehouseId` | string | 仓库ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.warehouseName` | string | 仓库名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spuId` | string | SPUID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.newStock` | string | 新库存（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.targetShopName` | string | 目标店铺名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.errorMessage` | string | 错误消息（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.url` | string | URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.extra` | string | 扩展（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.base64` | string | 基础64（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.croImg` | string | CRO图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.orgImg` | string | ORG图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.newTitle` | string | 新标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spuTitle` | string | SPU标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.erpSpu` | string | ERPSPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.each` | string | EACH（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.projectName` | string | 项目名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.success` | string | 成功（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.translateImage` | string | 翻译图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.site` | string | 站点（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showTikTokExport` | string | 展示TikTok导出（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showTikTokBatchEdit` | string | 展示TikTok批次编辑（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showTikTokSignUp` | string | 展示TikTok签名上架（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showTKPublishType` | string | 展示TikTok刊登类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tiktokPublishResultShow` | string | TikTok刊登结果展示（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.smtProductType` | string | 速卖通商品类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.categoryId` | string | 类目ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishResponse` | string | 刊登响应（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：是（条件判断，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
