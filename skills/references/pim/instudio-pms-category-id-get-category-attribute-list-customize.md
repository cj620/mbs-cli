<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-category-id-get-category-attribute-list-customize

获取品类自定义的颜色和尺码列表：获取品类自定义的颜色和尺码列表

## 用法

```bash
mbs pim instudio-pms-category-id-get-category-attribute-list-customize
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/product/getCategoryAttributeListCustomize/{categoryId}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `categoryId` | categoryId | path | string | 是 | - | 类目ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（取值，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（取值,条件判断，行号待核实） | - |
| `obj.obj.success` | string | 成功（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platform` | string | 平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.site` | string | 站点（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platform_id` | string | 平台ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productNameCn` | string | 商品名称中文（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.colors` | string | Colors（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.size` | string | 大小（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.supplyList` | string | 供应列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.Color` | string | 颜色（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.Size` | string | 大小（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.list` | string | 列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sku` | string | SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.attribute` | string | 属性（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.color` | string | 颜色（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.property` | string | 属性（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuname` | string | Skuname（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.defaultTakeWarehouse` | string | 默认TAKE仓库（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.receivingWarehouseId` | string | Receiving仓库ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.warehousing` | string | Warehousing（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.competingurl` | string | Competingurl（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.country` | string | 国家（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.disabled` | string | 已禁用（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sequenceid` | string | 序列ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformId` | string | 平台ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.currency` | string | 币种（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spuLimitPrice` | string | SPU限制价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sample` | string | Sample（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.properties` | string | 属性（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.packageTypeId` | string | 包裹类型ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sellLevel` | string | 销售级别（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.includes` | string | Includes（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.split` | string | 拆分（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.categoryName` | string | 类目名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.is_default_supply` | string | 是否默认供应（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.storeUrl` | string | 店铺URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.chineseName` | string | Chinese名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.storeprice` | string | Storeprice（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.hairstar` | string | Hairstar（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.Supplierskum` | string | Supplierskum（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.suppliersname` | string | Suppliersname（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuattribute` | string | Skuattribute（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.attributedata` | string | Attributedata（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.resultType` | string | 结果类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuattributeName` | string | Skuattribute名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.attrnames` | string | Attrnames（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.specId` | string | 规格ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.supplyname` | string | Supplyname（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.is_auto_purchase_supply` | string | 是否自动采购供应（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformname` | string | Platformname（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.competitorsTitle1` | string | Competitors标题1（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.competitorIsSimilar` | string | Competitor是否Similar（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.product_length` | string | 商品长度（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.product_width` | string | 商品宽度（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.product_height` | string | 商品高度（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.product_weight` | string | 商品重量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.set` | string | SET（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.status` | string | 状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spuSpellList` | string | SPUSpell列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.icon` | string | 图标（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.zh` | string | ZH（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.ru` | string | RU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showRow` | string | 展示行（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.word` | string | 词（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sceneName` | string | Scene名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.number` | string | 编号（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spellValue` | string | Spell值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.toLowerCase` | string | Lower工单（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.replace` | string | Replace（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.imageUrl` | string | 图片URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.competitorUrl` | string | CompetitorURL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.orderAttribute` | string | 订单属性（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.type` | string | 类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.phishingWords` | string | PhishingWords（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.title` | string | 标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.feature` | string | Feature（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.choices` | string | Choices（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.maxScore` | string | 最大评分（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spuOrArticleUrl` | string | SPUArticleURL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spuOrArticle` | string | SPUArticle（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developBy` | string | Develop人（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.submitSaleTime` | string | 提交销售时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.category` | string | 类目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tort` | string | 侵权（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tips` | string | TIPS（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.isTort` | string | 是否侵权（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.refundRate` | string | 退款比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.evaluateCount` | string | Evaluate数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developName` | string | Develop名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developId` | string | DevelopID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productNameSummarys` | string | 商品名称Summarys（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productNameSummary` | string | 商品名称汇总（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.warehouseTypeName` | string | 仓库类型名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.warehouseTypeId` | string | 仓库类型ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tag_id` | string | 标签ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tag_ids` | string | 标签ID列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.limitPrice` | string | 限制价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.brand_id` | string | 品牌ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopid` | string | 店铺ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.ranges` | string | Ranges（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.range` | string | 范围（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.natures` | string | Natures（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.nature` | string | Nature（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.setWangWangAccounts` | string | SETWANGWANGAccounts（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tortWord` | string | 侵权词（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.product_colors2` | string | 商品Colors2（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.product_sizes2` | string | 商品Sizes2（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.product_publishColor` | string | 商品刊登颜色（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.product_publishSize` | string | 商品刊登大小（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name_en` | string | 名称英文（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.suppy_sku_price` | string | SuppySKU价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.product_liquid_volume` | string | 商品Liquid体积（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.product_volume` | string | 商品体积（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.saler` | string | Saler（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.bindingnum` | string | Bindingnum（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.purchase_notes` | string | 采购Notes（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.warehousingPosition` | string | Warehousing位置（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.warehousingPositionList` | string | Warehousing位置列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.receivePoint` | string | 收货Point（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.receivePointList` | string | 收货Point列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pkg_material_id` | string | PKGMaterialID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.packageTypeName` | string | 包裹类型名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.classification` | string | Classification（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developType` | string | Develop类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.briefvalue` | string | Briefvalue（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.warehouseType` | string | 仓库类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sign` | string | 签名（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.specialMark` | string | 特殊MARK（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.specialType` | string | 特殊类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.expectedArrivalDays` | string | ExpectedArrival天数（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.advanceSaleTime` | string | Advance销售时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pricervalue` | string | Pricervalue（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productvalue` | string | Productvalue（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.inputValue2` | string | Input值2（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.englishword` | string | Englishword（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.devlopReason` | string | Devlop原因（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.supplierURL2` | string | 供应商URL2（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.wangwang` | string | Wangwang（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.url` | string | URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.competingrURL2` | string | CompetingrURL2（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformname1` | string | Platformname1（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.competitorPrice` | string | Competitor价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name2` | string | 名称2（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.chineseKeyword` | string | Chinese关键词（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.englishName` | string | English名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.declarenamecn` | string | Declarenamecn（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.declarenameen` | string | Declarenameen（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.supplierStatus` | string | 供应商状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.picture_style` | string | 图片样式（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.supplier_picture` | string | 供应商图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.supplier_video` | string | 供应商视频（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.remarks` | string | Remarks（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sellingPoint` | string | SellingPoint（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.artremarks` | string | Artremarks（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.freightWay` | string | 运费WAY（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shipCycle` | string | 发货期数（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.purchasingRemarks` | string | PurchasingRemarks（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.arter_notes_img` | string | ArterNotes图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.describe` | string | Describe（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.英文描述` | string | 英文描述（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.inventoryAlertDays` | string | 库存告警天数（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.daysOfPurchase` | string | 天数采购（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.PackageMaterial` | string | 包裹Material（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.packageMethod` | string | 包裹方法（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.dialogSPU` | string | DialogSPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.material` | string | Material（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.package` | string | 包裹（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：是（取值,条件判断，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
