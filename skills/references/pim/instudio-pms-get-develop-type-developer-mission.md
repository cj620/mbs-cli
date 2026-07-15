# mbs pim instudio-pms-get-develop-type-developer-mission

查询开发类型：查询开发类型

## 用法

```bash
mbs pim instudio-pms-get-develop-type-developer-mission
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developerMission/getDevelopType`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（取值，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（取值,条件判断，行号待核实） | - |
| `obj.obj[].developId` | integer | DevelopID（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].developName` | string | Develop名称（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].skuList[]` | array | SKU列表（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].skuList[]` | string | - | - |
| `obj.obj.takeoper1` | string | Takeoper1（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spuName` | string | SPU名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.colors` | string | Colors（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sizes` | string | Sizes（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sellerLoginId` | string | 卖家登录ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.imageUrl` | string | 图片URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.batch` | string | 批次（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spuId` | string | SPUID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.list` | string | 列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.picture` | string | 图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productNameSummary` | string | 商品名称汇总（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.properties` | string | 属性（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.validate` | string | 校验（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.type` | string | 类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.videopath` | string | Videopath（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.englishKeyword` | string | English关键词（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.submitsaletime` | string | Submitsaletime（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spu` | string | SPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.chineseTitle` | string | Chinese标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.englishTitle` | string | English标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developmentNature` | string | DevelopmentNature（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.englishDescription` | string | English描述（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.disableplatform` | string | Disableplatform（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tortSite` | string | 侵权站点（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.patentCourtry` | string | PatentCourtry（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.declarenamecn` | string | Declarenamecn（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.declarenameen` | string | Declarenameen（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publiclyAvailableShops` | string | Publicly可用店铺列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.brand` | string | 品牌（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.purchasinglinks` | string | Purchasinglinks（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tort` | string | 侵权（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.companyId` | string | 公司ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.split` | string | 拆分（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.updateTime` | string | 更新时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.dateArray` | string | 日期Array（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.saleInfoArray` | string | 销售信息Array（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platform` | string | 平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.site` | string | 站点（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sort` | string | 排序（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.supportday` | string | Supportday（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.isSpu` | string | 是否SPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.ordernumList` | string | 订单号列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.disabled` | string | 已禁用（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sequenceid` | string | 序列ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformId` | string | 平台ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.fbafile` | string | Fbafile（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.rows` | string | 行数据（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.success` | string | 成功（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.result` | string | 结果（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.count` | string | 数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pageSize` | string | 每页条数（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.page` | string | 页码（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.country` | string | 国家（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
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
| `obj.obj.queryJson` | string | 查询JSON（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.originalSku` | string | 原始SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.checked` | string | Checked（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
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
| `obj.obj.sku` | string | SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.supplyLink` | string | 供应链接（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.bindingNum` | string | Binding数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.status` | string | 状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformIds` | string | 平台ID列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.STORAGECANUSENUM` | string | Storagecanusenum（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.companyid` | string | Companyid（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.newCostprice` | string | 新Costprice（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuSuffix` | string | SKUSuffix（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.categoryId` | string | 类目ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformIdList` | string | 平台ID列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.text` | string | 文本（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：是（条件判断，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
