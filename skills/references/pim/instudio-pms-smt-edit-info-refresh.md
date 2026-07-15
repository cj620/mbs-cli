# mbs pim instudio-pms-smt-edit-info-refresh

添加在线listing生成记录：添加在线listing生成记录

## 用法

```bash
mbs pim instudio-pms-smt-edit-info-refresh [--id <integer>] [--listId <string>] [--erpSpu <string>] [--publishSpu <string>] [--mainPic <string>] [--erpSku <string>] [--publishSku <string>] [--skuPic <string>] [--vType <integer>] [--vNum <integer>] [--skuAttributes <string>] [--attributesRelated <string>] [--savenum <integer>] [--price <number>] [--cargoPrice <number>] [--currency <string>] [--title2 <string>] [--shopname <string>] [--isPriceDifference <integer>] [--productCategory1 <string>] [--productCategory1Show <string>] [--productCategory1Id <string>] [--description <string>] [--stockingTime <integer>] [--createBy <string>] [--publishBy <string>] [--publishTimeDate <string>] [--spkassessFlag <integer>] [--shippingService <string>] [--typeName <string>] [--mainPicList <array<string>>] [--saleNotes <string>] [--vAttributes <array<string>>] [--largeAmountPaypal <string>] [--smallAmountPaypal <string>] [--logistics <string>] [--attributesKey <string>] [--attributesValue <string>] [--attributesKeyList <array<string>>] [--attributesValueList <array<string>>] [--itemSpecifics <string>] [--itemSpecificsList <array<object>>] [--itemSpecificsMore <string>] [--itemSpecificsMoreList <array<object>>] [--isCompulsory <integer>] [--skuStatus <string>] [--skuSavenum <string>] [--timeOccur <string>] [--batchId <string>] [--title <string>] [--skuColor <string>] [--skuSize <string>] [--productStatus <string>] [--inventory <integer>] [--skuStorageInventoryList <array<object>>] [--profitRate <number>] [--jitProfit <number>] [--offRate <number>] [--srcPrice <number>] [--newPrice <number>] [--salesLevel <string>] [--isBind <integer>] [--isTort <integer>] [--embargoedPlatform <string>] [--tortWord <string>] [--priceArea <string>] [--spuCategory <string>] [--brandName <string>] [--brandId <integer>] [--publishOper <string>] [--publishOperId <integer>] [--publishStatus <integer>] [--onlineStatus <integer>] [--publishItemid <string>] [--publishResponse <string>] [--updateBy <string>] [--updateTime <string>] [--shipTo <string>] [--isOffline <integer>] [--srcCurrency <string>] [--newCurrency <string>] [--profitRateMin <number>] [--isCountry <integer>] [--groupName <string>] [--weight <number>] [--freightid <string>] [--status2 <integer>] [--smtCategoryId <string>] [--skuList <array<object>>] [--attributesKeyPropsList <array<array>>] [--packagelength <number>] [--packagewidth <number>] [--packageheight <number>] [--packagevolume <number>] [--productunit <string>] [--packagetype <integer>] [--lotnum <integer>] [--definitonprops <string>] [--groups <string>] [--groupList <array<string>>] [--ispacksell <integer>] [--baseunit <integer>] [--addunit <integer>] [--addweight <number>] [--isbulk <integer>] [--bulkorder <integer>] [--bulkdiscount <integer>] [--isCountryMap <array<object>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/smtSinglepublishController/smtEditInfoRefresh`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `listId` | listId | body | string | 否 | - | 列表ID（字段名推断,语义待核实） |
| `erpSpu` | erpSpu | body | string | 否 | - | 马帮spu |
| `publishSpu` | publishSpu | body | string | 否 | - | 刊登spu |
| `mainPic` | mainPic | body | string | 否 | - | 主图（表:SmtSinglepublishInfo） |
| `erpSku` | erpSku | body | string | 否 | - | 马帮sku |
| `publishSku` | publishSku | body | string | 否 | - | 刊登sku |
| `skuPic` | skuPic | body | string | 否 | - | sku图片（表:SmtSinglepublishInfo） |
| `vType` | vType | body | integer | 否 | - | 1:单变体2：多变体 |
| `vNum` | vNum | body | integer | 否 | - | 变体数量 |
| `skuAttributes` | skuAttributes | body | string | 否 | - | sku属性 |
| `attributesRelated` | attributesRelated | body | string | 否 | - | 什么属性作为轮换条件 |
| `savenum` | savenum | body | integer | 否 | - | 库存 |
| `price` | price | body | number | 否 | - | 等于newprice 用于显示 |
| `cargoPrice` | cargoPrice | body | number | 否 | - | Cargo价格（字段名推断,语义待核实） |
| `currency` | currency | body | string | 否 | - | 等于newcurrency |
| `title2` | title2 | body | string | 否 | - | 副标题 |
| `shopname` | shopname | body | string | 否 | - | 店铺 |
| `isPriceDifference` | isPriceDifference | body | integer | 否 | - | 1价格差异过大 |
| `productCategory1` | productCategory1 | body | string | 否 | - | 产品分类1 |
| `productCategory1Show` | productCategory1Show | body | string | 否 | - | 页面显示 |
| `productCategory1Id` | productCategory1Id | body | string | 否 | - | 商品类目1ID（字段名推断,语义待核实） |
| `description` | description | body | string | 否 | - | 描述 |
| `stockingTime` | stockingTime | body | integer | 否 | - | 备货时长 |
| `createBy` | createBy | body | string | 否 | - | 创建人 |
| `publishBy` | publishBy | body | string | 否 | - | 刊登人 |
| `publishTimeDate` | publishTimeDate | body | string | 否 | - | 刊登时间 |
| `spkassessFlag` | spkassessFlag | body | integer | 否 | - | 1:"符合spk考核" 0："不符合" |
| `shippingService` | shippingService | body | string | 否 | - | 物流方式 |
| `typeName` | typeName | body | string | 否 | - | 类型名称（字段名推断,语义待核实） |
| `mainPicList` | mainPicList | body | array<string> | 否 | - | 主图片列表（字段名推断,语义待核实） |
| `saleNotes` | saleNotes | body | string | 否 | - | 销售Notes（字段名推断,语义待核实） |
| `vAttributes` | vAttributes | body | array<string> | 否 | - | Attributes（字段名推断,语义待核实） |
| `largeAmountPaypal` | largeAmountPaypal | body | string | 否 | - | 大额 |
| `smallAmountPaypal` | smallAmountPaypal | body | string | 否 | - | 小额 |
| `logistics` | logistics | body | string | 否 | - | 物流（字段名推断,语义待核实） |
| `attributesKey` | attributesKey | body | string | 否 | - | Attributes键（字段名推断,语义待核实） |
| `attributesValue` | attributesValue | body | string | 否 | - | Attributes值（字段名推断,语义待核实） |
| `attributesKeyList` | attributesKeyList | body | array<string> | 否 | - | Attributes键列表（字段名推断,语义待核实） |
| `attributesValueList` | attributesValueList | body | array<string> | 否 | - | Attributes值列表（字段名推断,语义待核实） |
| `itemSpecifics` | itemSpecifics | body | string | 否 | - | 条目Specifics（字段名推断,语义待核实） |
| `itemSpecificsList` | itemSpecificsList | body | array<object> | 否 | - | 条目Specifics列表（字段名推断,语义待核实） |
| `itemSpecificsMore` | itemSpecificsMore | body | string | 否 | - | 条目SpecificsMORE（字段名推断,语义待核实） |
| `itemSpecificsMoreList` | itemSpecificsMoreList | body | array<object> | 否 | - | 条目SpecificsMORE列表（字段名推断,语义待核实） |
| `isCompulsory` | isCompulsory | body | integer | 否 | - | 是否Compulsory（字段名推断,语义待核实） |
| `skuStatus` | skuStatus | body | string | 否 | - | SKU状态（字段名推断,语义待核实） |
| `skuSavenum` | skuSavenum | body | string | 否 | - | SKU保存数量（字段名推断,语义待核实） |
| `timeOccur` | timeOccur | body | string | 否 | - | 时间Occur（字段名推断,语义待核实） |
| `batchId` | batchId | body | string | 否 | - | 时间+店铺名字 |
| `title` | title | body | string | 否 | - | 标题 |
| `skuColor` | skuColor | body | string | 否 | - | sku颜色 |
| `skuSize` | skuSize | body | string | 否 | - | sku尺寸 |
| `productStatus` | productStatus | body | string | 否 | - | 产品状态 |
| `inventory` | inventory | body | integer | 否 | - | 在线库存 |
| `skuStorageInventoryList` | skuStorageInventoryList | body | array<object> | 否 | - | SKU仓储库存列表（字段名推断,语义待核实） |
| `profitRate` | profitRate | body | number | 否 | - | 毛利率 |
| `jitProfit` | jitProfit | body | number | 否 | - | 毛利率 |
| `offRate` | offRate | body | number | 否 | - | 折扣 |
| `srcPrice` | srcPrice | body | number | 否 | - | 源价格 |
| `newPrice` | newPrice | body | number | 否 | - | 新价格 |
| `salesLevel` | salesLevel | body | string | 否 | - | 销量级别 |
| `isBind` | isBind | body | integer | 否 | - | 1:捆绑2:不捆绑 |
| `isTort` | isTort | body | integer | 否 | - | 1:侵权2:不侵权 |
| `embargoedPlatform` | embargoedPlatform | body | string | 否 | - | 禁售平台 |
| `tortWord` | tortWord | body | string | 否 | - | 侵权词 |
| `priceArea` | priceArea | body | string | 否 | - | 价格区间 |
| `spuCategory` | spuCategory | body | string | 否 | - | 类目 |
| `brandName` | brandName | body | string | 否 | - | 品牌 |
| `brandId` | brandId | body | integer | 否 | - | 品牌 |
| `publishOper` | publishOper | body | string | 否 | - | 刊登人 |
| `publishOperId` | publishOperId | body | integer | 否 | - | 刊登人id |
| `publishStatus` | publishStatus | body | integer | 否 | - | 刊登状态 1:等待刊登2:刊登中3:刊登成功4:刊登失败 |
| `onlineStatus` | onlineStatus | body | integer | 否 | - | 0:等待上架1:上架中2:上架成功3:上架失败4:放弃上架 |
| `publishItemid` | publishItemid | body | string | 否 | - | 刊登itemid |
| `publishResponse` | publishResponse | body | string | 否 | - | 刊登返回 |
| `updateBy` | updateBy | body | string | 否 | - | 修改人 |
| `updateTime` | updateTime | body | string | 否 | - | 更新时间（字段名推断,语义待核实） |
| `shipTo` | shipTo | body | string | 否 | - | 发货（字段名推断,语义待核实） |
| `isOffline` | isOffline | body | integer | 否 | - | 0：未下架 1：已下架 |
| `srcCurrency` | srcCurrency | body | string | 否 | - | 源币种 |
| `newCurrency` | newCurrency | body | string | 否 | - | 新币种 |
| `profitRateMin` | profitRateMin | body | number | 否 | - | 最低毛利率 |
| `isCountry` | isCountry | body | integer | 否 | - | 1：按照国家算价 |
| `groupName` | groupName | body | string | 否 | - | 分组名称（字段名推断,语义待核实） |
| `weight` | weight | body | number | 否 | - | 重量（字段名推断,语义待核实） |
| `freightid` | freightid | body | string | 否 | - | Freightid（字段名推断,语义待核实） |
| `status2` | status2 | body | integer | 否 | - | 状态2（字段名推断,语义待核实） |
| `smtCategoryId` | smtCategoryId | body | string | 否 | - | 速卖通类目ID（字段名推断,语义待核实） |
| `skuList` | skuList | body | array<object> | 否 | - | SKU列表（字段名推断,语义待核实） |
| `attributesKeyPropsList` | attributesKeyPropsList | body | array<array> | 否 | - | Attributes键Props列表（字段名推断,语义待核实） |
| `packagelength` | packagelength | body | number | 否 | - | Packagelength（字段名推断,语义待核实） |
| `packagewidth` | packagewidth | body | number | 否 | - | Packagewidth（字段名推断,语义待核实） |
| `packageheight` | packageheight | body | number | 否 | - | Packageheight（字段名推断,语义待核实） |
| `packagevolume` | packagevolume | body | number | 否 | - | Packagevolume（字段名推断,语义待核实） |
| `productunit` | productunit | body | string | 否 | - | 计量单位 |
| `packagetype` | packagetype | body | integer | 否 | - | 销售方式 0不打包 1打包 |
| `lotnum` | lotnum | body | integer | 否 | - | 每包件数 |
| `definitonprops` | definitonprops | body | string | 否 | - | Definitonprops（字段名推断,语义待核实） |
| `groups` | groups | body | string | 否 | - | Groups（字段名推断,语义待核实） |
| `groupList` | groupList | body | array<string> | 否 | - | 分组列表（字段名推断,语义待核实） |
| `ispacksell` | ispacksell | body | integer | 否 | - | 0：非自定义计重，1自定义计重 |
| `baseunit` | baseunit | body | integer | 否 | - | Baseunit（字段名推断,语义待核实） |
| `addunit` | addunit | body | integer | 否 | - | Addunit（字段名推断,语义待核实） |
| `addweight` | addweight | body | number | 否 | - | Addweight（字段名推断,语义待核实） |
| `isbulk` | isbulk | body | integer | 否 | - | Isbulk（字段名推断,语义待核实） |
| `bulkorder` | bulkorder | body | integer | 否 | - | Bulkorder（字段名推断,语义待核实） |
| `bulkdiscount` | bulkdiscount | body | integer | 否 | - | Bulkdiscount（字段名推断,语义待核实） |
| `isCountryMap` | isCountryMap | body | array<object> | 否 | - | 是否国家MAP（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
