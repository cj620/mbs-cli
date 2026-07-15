# mbs pim instudio-pms-get-not-end-project-and-spu

获取未结束的项目名称和spu：获取未结束的项目名称和spu

## 用法

```bash
mbs pim instudio-pms-get-not-end-project-and-spu [--fullProjectName <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developmentProject/getNotEndProjectAndSpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `fullProjectName` | fullProjectName | query | string | 否 | - | 完整项目名称（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（取值,条件判断,解构赋值，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（取值,条件判断,解构赋值，行号待核实） | - |
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：是（列表行字段,取值，行号待核实） | - |
| `obj.obj[].projectName` | string | 项目名称（字段名推断,语义待核实）。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].projectContent` | string | 项目内容（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].projectDeveloper` | string | 项目开发者（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].developmentVolumeDate` | string | Development体积日期（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].developmentVolumeSpuCount` | integer | 开发量spu。前端使用：否 | - |
| `obj.obj[].actualDevelopmentVolumeSpuCount` | integer | 实际完成的spu个数。前端使用：否 | - |
| `obj.obj[].developmetVolumeRate` | integer | Developmet体积比率（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].statisticsDevelopmentVolumeDate` | string | 统计开发量任务的时间。前端使用：否 | - |
| `obj.obj[].publishVolumeDate` | string | 刊登任务完成时间。前端使用：否 | - |
| `obj.obj[].publishVolumeCount` | integer | 刊登任务量。前端使用：否 | - |
| `obj.obj[].actualPublishVolumeCount` | integer | 目前已经完成的刊登量。前端使用：否 | - |
| `obj.obj[].publishVolumeRate` | integer | 刊登体积比率（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].statisticsPublishVolumeDate` | string | 统计刊登体积日期（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].purchaseAmount` | number | 采购额。前端使用：否 | - |
| `obj.obj[].purchaseAmountDate` | string | 采购额完成任务时间。前端使用：否 | - |
| `obj.obj[].actualPurhcaseAmount` | number | 实际完成的采购额。前端使用：否 | - |
| `obj.obj[].statisticsPurchaseAmountDate` | string | 统计采购金额日期（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].purchaseAmountRate` | integer | 采购金额比率（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].firstSaleAmountType` | integer | 第一阶段 0销售额, 1订单量。前端使用：否 | - |
| `obj.obj[].firstSaleAmount` | string | 首个销售金额（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].actualFirstSaleAmount` | string | 实际首个销售金额（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].firstSaleAmountRate` | integer | 首个销售金额比率（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].firstSaleAmountTime` | string | 首个销售金额时间（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].statisticsFirstSaleAmountTime` | string | 统计首个销售金额时间（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].secondSaleAmountType` | integer | 第一阶段 0销售额, 1订单量。前端使用：否 | - |
| `obj.obj[].secondSaleAmount` | string | 秒销售金额（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].actualSecondSaleAmount` | string | 实际秒销售金额（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].secondSaleAmountTime` | string | 秒销售金额时间（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].statisticsSecondSaleAmountTime` | string | 统计秒销售金额时间（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].secondSaleAmountRate` | integer | 秒销售金额比率（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].createDate` | string | 创建日期（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].createBy` | string | 创建人（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].projectDeadlineTime` | string | 项目截止时间。前端使用：否 | - |
| `obj.obj[].list[]` | array | 列表（字段名推断,语义待核实）。前端使用：是（取值，行号待核实） | - |
| `obj.obj[].spu` | string | SPU（字段名推断,语义待核实）。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].editShow` | integer | 编辑展示（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].orderNum` | integer | 总单量。前端使用：否 | - |
| `obj.obj[].rebackAmount` | number | 退款单量。前端使用：否 | - |
| `obj.obj[].profitAmount` | number | 总发货毛利额。前端使用：否 | - |
| `obj.obj[].saleAmount` | number | 总销售额。前端使用：否 | - |
| `obj.obj[].orderbalanceAmount` | number | 发货销售额。前端使用：否 | - |
| `obj.obj[].shipmentOrderNum` | integer | 总发货单量。前端使用：否 | - |
| `obj.obj[].rebackProfit` | number | 退款率。前端使用：否 | - |
| `obj.obj[].dongxiaoProfit` | number | 动销率。前端使用：否 | - |
| `obj.obj[].baiyuanProfit` | number | 百元动销率。前端使用：否 | - |
| `obj.obj[].isPublic` | integer | 1是公开。前端使用：否 | - |
| `obj.obj[].tortCount` | integer | 侵权数量（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].bigChief` | string | 大酋长名字。前端使用：否 | - |
| `obj.obj[].director` | string | 总监。前端使用：否 | - |
| `obj.obj[].projectType` | integer | 项目类型:1.官方立项 2.产品线 3.组内跟进。前端使用：否 | - |
| `obj.obj[].grossMargin` | string | 毛利率。前端使用：否 | - |
| `obj.obj[].servenSaleAmountSum` | number | Serven销售金额合计（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].projectStatus` | integer | 0 代表已关闭 默认1 进行中 2是已完成。前端使用：否 | - |
| `obj.obj[].companyName` | string | 公司名称（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].groupCompanyId` | string | 分组公司ID（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.items` | string | 条目列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pages` | string | Pages（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.total` | string | 总数（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.scrollId` | string | ScrollID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.diagnosisTypelist` | string | 诊断Typelist（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformIds` | string | 平台ID列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
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
| `obj.obj.checked` | string | Checked（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.dataset` | string | Dataset（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.overrideDto` | string | OverrideDTO（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.dropDownSelected` | string | DROP下架Selected（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.disabled` | string | 已禁用（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.priceDtoNew` | string | 价格DTO新（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.erpSPU` | string | ERPSPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.trim` | string | TRIM（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.parentSPUId` | string | 父级SPUID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
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
| `obj.obj.erpSpu` | string | ERPSPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.each` | string | EACH（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.success` | string | 成功（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.translateImage` | string | 翻译图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shop` | string | 店铺（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.site` | string | 站点（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showTikTokExport` | string | 展示TikTok导出（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showTikTokBatchEdit` | string | 展示TikTok批次编辑（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showTikTokSignUp` | string | 展示TikTok签名上架（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showTKPublishType` | string | 展示TikTok刊登类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.rows` | string | 行数据（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tiktokPublishResultShow` | string | TikTok刊登结果展示（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.smtProductType` | string | 速卖通商品类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.result` | string | 结果（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.count` | string | 数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pageSize` | string | 每页条数（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.page` | string | 页码（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publish` | string | 刊登（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.join` | string | JOIN（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.translateEnable` | string | 翻译启用（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.messageEnable` | string | 消息启用（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.totalpage` | string | Totalpage（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.esDataList` | string | ES数据列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sourceBuilderString` | string | 来源BuilderString（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.companyList` | string | 公司列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productDevelopList` | string | 商品Develop列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.alias` | string | Alias（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.type` | string | 类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.queryJson` | string | 查询JSON（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.originalSku` | string | 原始SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.SKU` | string | SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.STORAGETYPENAME` | string | Storagetypename（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showBg` | string | 展示BG（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.STORAGESTOCKPRICE` | string | Storagestockprice（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.STORAGE` | string | 仓储（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformrefundratesStr` | string | Platformrefundrates字符串（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformrefundrate2` | string | Platformrefundrate2（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformreturnpackagerate` | string | Platformreturnpackagerate（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformname` | string | Platformname（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.amount` | string | 金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.maoli` | string | Maoli（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.refund` | string | 退款（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishfee` | string | Publishfee（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.ABNORMALTYPE` | string | Abnormaltype（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.ABNORMALNAME` | string | Abnormalname（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.NUM` | string | 数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.getAttribute` | string | 查询属性（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.CONTENTCN` | string | Contentcn（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.rate` | string | 比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.storagetype` | string | Storagetype（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.storageList` | string | 仓储列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.storagename` | string | Storagename（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.receivingWarehouseId` | string | Receiving仓库ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.warehouse` | string | 仓库（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productAttribute` | string | 商品属性（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：是（条件判断，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
