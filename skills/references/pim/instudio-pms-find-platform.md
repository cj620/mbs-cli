<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-platform

通过旺旺名获取供应商id：通过旺旺名获取供应商id

## 用法

```bash
mbs pim instudio-pms-find-platform
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/AllMessage/findPlatform`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（取值,条件判断,解构赋值，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `obj.obj.fengniaoStatus` | string | Fengniao状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.selectType` | string | 查询类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pmsPictureVoList` | string | 刊登系统图片VO列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.dataset` | string | Dataset（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.imgUrl` | string | 图片URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sku` | string | SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishColor` | string | 刊登颜色（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishSize` | string | 刊登大小（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.replace` | string | Replace（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.url` | string | URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.detectionStatus` | string | Detection状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tort` | string | 侵权（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.supplyImg` | string | 供应图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platform_id` | string | 平台ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platform` | string | 平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.competing_url` | string | CompetingURL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.items` | string | 条目列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.list` | string | 列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pages` | string | Pages（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.total` | string | 总数（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.scrollId` | string | ScrollID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.diagnosisTypelist` | string | 诊断Typelist（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformIds` | string | 平台ID列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.opername` | string | Opername（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.country` | string | 国家（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
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
| `obj.obj.shop` | string | 店铺（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.site` | string | 站点（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showTikTokExport` | string | 展示TikTok导出（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showTikTokBatchEdit` | string | 展示TikTok批次编辑（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showTikTokSignUp` | string | 展示TikTok签名上架（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showTKPublishType` | string | 展示TikTok刊登类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.rows` | string | 行数据（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tiktokPublishResultShow` | string | TikTok刊登结果展示（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.smtProductType` | string | 速卖通商品类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.notPermissionProducts` | string | 非权限商品（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformrefundrate` | string | Platformrefundrate（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.RECOMMENDER` | string | Recommender（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.RESERVE1` | string | 预留1（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.updateTime` | string | 更新时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spuName` | string | SPU名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sellerLoginId` | string | 卖家登录ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.batch` | string | 批次（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.imageUrl` | string | 图片URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.split` | string | 拆分（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.headerPicture` | string | 请求头图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.readyPurcahseCnt` | string | ReadyPurcahseCNT（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.hasPurchaseCnt` | string | 是否有采购CNT（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.saveNum` | string | 保存数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.canSaleDay` | string | CAN销售天（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.storageName` | string | 仓储名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.includes` | string | Includes（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.saleTime` | string | 销售时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
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
| `obj.obj.supplyLink` | string | 供应链接（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.bindingNum` | string | Binding数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.STORAGECANUSENUM` | string | Storagecanusenum（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.companyid` | string | Companyid（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.newCostprice` | string | 新Costprice（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuSuffix` | string | SKUSuffix（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.description` | string | 描述（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.categoryId` | string | 类目ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformIdList` | string | 平台ID列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.text` | string | 文本（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：是（条件判断，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
