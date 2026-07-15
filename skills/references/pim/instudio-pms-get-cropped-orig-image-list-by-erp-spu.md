<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-cropped-orig-image-list-by-erp-spu

通过spu获取sku裁剪图片对应的原图：通过spu获取sku裁剪图片对应的原图

## 用法

```bash
mbs pim instudio-pms-get-cropped-orig-image-list-by-erp-spu --erpSpu <string>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/ozonSinglepublishInfoController/getCroppedOrigImageListByErpSpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `erpSpu` | erpSpu | query | string | 是 | - | ERPSPU（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（取值,条件判断,解构赋值，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（取值,条件判断,解构赋值，行号待核实） | - |
| `obj.obj[].erpSpu` | string | ERPSPU（字段名推断,语义待核实）。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].platCode` | string | 平台编码（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].orgImg` | string | 裁剪前的图。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].croImg` | string | 裁剪后的图。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：是（列表行字段,取值，行号待核实） | - |
| `obj.obj[].erpSku` | string | ERPSKU（字段名推断,语义待核实）。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].creator` | string | Creator（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].createTime` | string | 创建时间（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].updator` | string | Updator（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].updateTime` | string | 更新时间（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.items` | string | 条目列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.list` | string | 列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
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
| `obj.obj.spu` | string | SPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
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
| `obj.obj.newTitle` | string | 新标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spuTitle` | string | SPU标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.each` | string | EACH（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.projectName` | string | 项目名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
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
| `obj.obj.mode` | string | 模式（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：是（条件判断，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
