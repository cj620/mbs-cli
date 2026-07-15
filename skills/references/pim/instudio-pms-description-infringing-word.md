<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-description-infringing-word

验证SKU对应供应商是否在侵权列表存在：验证SKU对应供应商是否在侵权列表存在

## 用法

```bash
mbs pim instudio-pms-description-infringing-word [--spu <string>] [--nameEn <string>] [--nameCh <string>] [--saleNotes <string>] [--descriptionEn <string>] [--tagId <integer>] [--oldPlatformId <string>] [--oldSpu <string>] [--positionId <integer>] [--receiveId <integer>] [--host <string>] [--warningDays <integer>] [--purchaseDays <integer>] [--pkgMaterialId <integer>] [--purchaseNotes <string>] [--categoryId <string>] [--brandId <string>] [--suppyId <integer>] [--supplySkuId <string>] [--productUrl <string>] [--createdBy <string>] [--createdOn <string>] [--listPicture <string>] [--canSalePlatform <string>] [--tort <string>] [--keyword <string>] [--englishKeyword <string>] [--missionId <integer>] [--brandGrantShop <string>] [--declarenamecn <string>] [--declarenameen <string>] [--choice <integer>] [--photograph <integer>] [--photographRequire <string>] [--isNeedVideo <integer>] [--videoRequire <string>] [--smallArticles <integer>] [--spotCheck <integer>] [--sitePlatform <string>] [--actualPicture <string>] [--minProfitRate <number>] [--lowestPrice <number>] [--packageGuide <string>] [--specialMark <integer>] [--expectedArrivalDays <integer>] [--advanceSaleTime <string>] [--developType <integer>] [--startBatch <integer>] [--presalePrice <number>] [--englishName <string>] [--mainKeyword <string>] [--topRank <string>] [--mainKeywordFlow <string>] [--differentiation <string>] [--productDesc <string>] [--profitRate <string>] [--productList <string>] [--freightWay <string>] [--shipCycle <string>] [--volume <number>] [--arterReMarkImage <string>] [--warehouseType <integer>] [--styleId <string>] [--supplySpu <string>] [--productNature <integer>] [--seasonalProductDeadlineStockingDay <string>] [--applicablePlatform <string>] [--applicableSite <string>] [--chineseKeyword <string>] [--brandImages <array<string>>] [--isTwoPicture <integer>] [--isSupplierPicture <integer>] [--text <string>] [--packageMethod <string>] [--photographRequire2 <string>] [--competitorsTitle <string>] [--patentCourtry <string>] [--arterNotesImg <string>] [--supplierPicture <string>] [--supplierVideo <string>] [--pictureStyle <string>] [--supplierStatus <string>] [--hwcType <string>] [--specialType <string>] [--arterNotes <string>] [--hostPictureTitle <string>] [--sceneStyle <string>] [--comparisonPicture <string>] [--physicalPictureUrl <string>] [--physicalPictureUrls <array<string>>] [--certificationNames <array<string>>] [--spuCertificationImages <array<object>>] [--sellingPoint <string>] [--aiAttributes <string>] [--applicableCrowd <string>] [--spuSpellList <array<object>>] [--applicableCountries <string>] [--model <string>] [--urls <array<string>>] [--procurementRemark <string>] [--platformName <string>] [--productTitle <string>] [--productDescription <string>] [--devlopReason <string>] [--spuLimitPrice <array<object>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/AllMessage/descriptionInfringingWord`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | body | string | 否 | - | spu |
| `nameEn` | name_en | body | string | 否 | - | 产品英文名称 |
| `nameCh` | name_ch | body | string | 否 | - | 产品中文名称 |
| `saleNotes` | sale_notes | body | string | 否 | - | 销售备注 |
| `descriptionEn` | description_en | body | string | 否 | - | 英文描述 |
| `tagId` | tag_id | body | integer | 否 | - | 标记商品id |
| `oldPlatformId` | oldPlatformId | body | string | 否 | - | 原始平台编号 |
| `oldSpu` | oldSpu | body | string | 否 | - | 原始spu |
| `positionId` | position_id | body | integer | 否 | - | 仓位id |
| `receiveId` | receiveId | body | integer | 否 | - | 收货点 |
| `host` | host | body | string | 否 | - | 仓位信息 |
| `warningDays` | warning_days | body | integer | 否 | - | 警戒天数 |
| `purchaseDays` | purchase_days | body | integer | 否 | - | 采购天数 |
| `pkgMaterialId` | pkg_material_id | body | integer | 否 | - | 包材id |
| `purchaseNotes` | purchase_notes | body | string | 否 | - | 采购备注 |
| `categoryId` | category_id | body | string | 否 | - | 分类id |
| `brandId` | brand_id | body | string | 否 | - | 品牌id |
| `suppyId` | suppy_id | body | integer | 否 | - | 供应商id |
| `supplySkuId` | supply_sku_id | body | string | 否 | - | 供应商的sukid |
| `productUrl` | product_url | body | string | 否 | - | 产品地址 |
| `createdBy` | created_by | body | string | 否 | - | 创建人id |
| `createdOn` | created_on | body | string | 否 | - | 创建时间 |
| `listPicture` | listPicture | body | string | 否 | - | 产品图片 Map<Object, Object> |
| `canSalePlatform` | canSalePlatform | body | string | 否 | - | 可销售平台 |
| `tort` | tort | body | string | 否 | - | 侵权 1 |
| `keyword` | keyword | body | string | 否 | - | 关键词 |
| `englishKeyword` | englishKeyword | body | string | 否 | - | 英文关键词 |
| `missionId` | missionId | body | integer | 否 | - | 开发池任务ID |
| `brandGrantShop` | brandGrantShop | body | string | 否 | - | 品牌授权店铺 |
| `declarenamecn` | declarenamecn | body | string | 否 | - | 申报中文名 |
| `declarenameen` | declarenameen | body | string | 否 | - | 申报英文名 |
| `choice` | choice | body | integer | 否 | - | 是否备货 |
| `photograph` | photograph | body | integer | 否 | - | 是否拍照 |
| `photographRequire` | photographRequire | body | string | 否 | - | 拍照要求 |
| `isNeedVideo` | isNeedVideo | body | integer | 否 | - | 是否需要拍视频 |
| `videoRequire` | videoRequire | body | string | 否 | - | 拍视频要求 |
| `smallArticles` | smallArticles | body | integer | 否 | - | 是否SPK轻小件 |
| `spotCheck` | spotCheck | body | integer | 否 | - | 是否抽检 |
| `sitePlatform` | sitePlatform | body | string | 否 | - | 侵权站点 |
| `actualPicture` | actualPicture | body | string | 否 | - | 是否是实拍图 |
| `minProfitRate` | minProfitRate | body | number | 否 | - | 最低毛利率 |
| `lowestPrice` | lowestPrice | body | number | 否 | - | 最低限价 |
| `packageGuide` | packageGuide | body | string | 否 | - | 包材规格 |
| `specialMark` | specialMark | body | integer | 否 | - | 商品特殊标记 1.现货 2.定制产品 3.预售产品 |
| `expectedArrivalDays` | expectedArrivalDays | body | integer | 否 | - | 定制天数 |
| `advanceSaleTime` | advanceSaleTime | body | string | 否 | - | 预售时间 |
| `developType` | developType | body | integer | 否 | - | 开发类型 |
| `startBatch` | startBatch | body | integer | 否 | - | 起批量 |
| `presalePrice` | presalePrice | body | number | 否 | - | 预售估价 |
| `englishName` | englishName | body | string | 否 | - | 英文名称 |
| `mainKeyword` | mainKeyword | body | string | 否 | - | 主关键词 |
| `topRank` | topRank | body | string | 否 | - | 最高排名 |
| `mainKeywordFlow` | mainKeywordFlow | body | string | 否 | - | 主关键词流量 |
| `differentiation` | differentiation | body | string | 否 | - | 差异化 |
| `productDesc` | productDesc | body | string | 否 | - | 产品备注 |
| `profitRate` | profitRate | body | string | 否 | - | 利润率 |
| `productList` | productList | body | string | 否 | - | 产品清单 |
| `freightWay` | freightWay | body | string | 否 | - | 货运方式 |
| `shipCycle` | shipCycle | body | string | 否 | - | 发货周期 |
| `volume` | volume | body | number | 否 | - | 包装体积 |
| `arterReMarkImage` | arterReMarkImage | body | string | 否 | - | 美工备注参考图片 |
| `warehouseType` | warehouseType | body | integer | 否 | - | 1是FBA海外仓。2是万邑通海外仓。3是八方达海外仓。4是谷仓海外仓'; |
| `styleId` | styleId | body | string | 否 | - | 风格ID |
| `supplySpu` | supplySpu | body | string | 否 | - | 供应商spu |
| `productNature` | productNature | body | integer | 否 | - | 产品性质:1自建 0跟卖 |
| `seasonalProductDeadlineStockingDay` | seasonalProductDeadlineStockingDay | body | string | 否 | - | 季节产品截止备货日 |
| `applicablePlatform` | applicablePlatform | body | string | 否 | - | 适用平台 |
| `applicableSite` | applicableSite | body | string | 否 | - | 适用站点 |
| `chineseKeyword` | chineseKeyword | body | string | 否 | - | 中文关键词 |
| `brandImages` | brandImages | body | array<string> | 否 | - | 品牌图片list |
| `isTwoPicture` | isTwoPicture | body | integer | 否 | - | 是否第二套图 1是有,默认0 |
| `isSupplierPicture` | isSupplierPicture | body | integer | 否 | - | 是否供应商图 1是有 默认0 |
| `text` | text | body | string | 否 | - | 文本（字段名推断,语义待核实） |
| `packageMethod` | packageMethod | body | string | 否 | - | 包裹方法（字段名推断,语义待核实） |
| `photographRequire2` | photographRequire2 | body | string | 否 | - | PhotographRequire2（字段名推断,语义待核实） |
| `competitorsTitle` | competitorsTitle | body | string | 否 | - | Competitors标题（字段名推断,语义待核实） |
| `patentCourtry` | patentCourtry | body | string | 否 | - | PatentCourtry（字段名推断,语义待核实） |
| `arterNotesImg` | arter_notes_img | body | string | 否 | - | ArterNotes图片（字段名推断,语义待核实） |
| `supplierPicture` | supplier_picture | body | string | 否 | - | 供应商图片（字段名推断,语义待核实） |
| `supplierVideo` | supplier_video | body | string | 否 | - | 供应商视频（字段名推断,语义待核实） |
| `pictureStyle` | picture_style | body | string | 否 | - | 图片样式（字段名推断,语义待核实） |
| `supplierStatus` | supplierStatus | body | string | 否 | - | 供应商状态（字段名推断,语义待核实） |
| `hwcType` | hwcType | body | string | 否 | - | 海外仓类型（字段名推断,语义待核实） |
| `specialType` | specialType | body | string | 否 | - | 特殊类型（字段名推断,语义待核实） |
| `arterNotes` | arter_notes | body | string | 否 | - | 美工备注 --- 其他 |
| `hostPictureTitle` | hostPictureTitle | body | string | 否 | - | 美工备注 --- 主图文案 |
| `sceneStyle` | sceneStyle | body | string | 否 | - | 美工备注 --- 场景风格 |
| `comparisonPicture` | comparisonPicture | body | string | 否 | - | 美工备注 --- 对比图 |
| `physicalPictureUrl` | physicalPictureUrl | body | string | 否 | - | 实拍图 |
| `physicalPictureUrls` | physicalPictureUrls | body | array<string> | 否 | - | 实拍图片多个 |
| `certificationNames` | certificationNames | body | array<string> | 否 | - | 商品资质名称数组 |
| `spuCertificationImages` | spuCertificationImages | body | array<object> | 否 | - | 商品资质图片数组 |
| `sellingPoint` | sellingPoint | body | string | 否 | - | 卖点 |
| `aiAttributes` | aiAttributes | body | string | 否 | - | AI生成的产品属性（JSON） |
| `applicableCrowd` | applicableCrowd | body | string | 否 | - | 适用人群 |
| `spuSpellList` | spuSpellList | body | array<object> | 否 | - | SPUSpell列表（字段名推断,语义待核实） |
| `applicableCountries` | applicableCountries | body | string | 否 | - | 适用国家 |
| `model` | model | body | string | 否 | - | 模型（字段名推断,语义待核实） |
| `urls` | urls | body | array<string> | 否 | - | 图片地址 |
| `procurementRemark` | procurementRemark | body | string | 否 | - | 采购备注 |
| `platformName` | platformName | body | string | 否 | - | 适用平台（如 "Ozon"、"ozon.ru"、"119"），用于触发 Ozon 俄文文案生成 |
| `productTitle` | productTitle | body | string | 否 | - | 产品标题（Ozon 文案生成入参） |
| `productDescription` | productDescription | body | string | 否 | - | 产品描述（Ozon 文案生成入参） |
| `devlopReason` | devlopReason | body | string | 否 | - | Devlop原因（字段名推断,语义待核实） |
| `spuLimitPrice` | spuLimitPrice | body | array<object> | 否 | - | spu限价信息 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `obj.obj[].infringingWord` | string | 侵权词（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].keyWordOfinfringingWord` | string | 键词Ofinfringing词（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].categoryOfinfringingWord` | string | 类目Ofinfringing词（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].includingFor` | integer | 是否包含for 1 是 0 否。前端使用：否 | - |
| `obj.obj[].platformId` | string | 平台ID（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].platformNameList[]` | array | 平台名称列表（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].platformNameList[]` | string | - | - |
| `obj.obj.spu` | string | SPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.categoryId` | string | 类目ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformIdList` | string | 平台ID列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.text` | string | 文本（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
