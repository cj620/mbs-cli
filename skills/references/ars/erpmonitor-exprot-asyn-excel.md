<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-exprot-asyn-excel

在线列表异步导出Excel：在线列表(热销商品监控)页点击导出时，按当前页面全部筛选条件创建异步导出Excel任务；请求体与列表查询 getFormParams() 一致(含平台/团队/店铺/价格/销量/时间/类目/标签/侵权等近百项筛选)。成功后提示并可跳转我的导出队列。

## 用法

```bash
mbs ars erpmonitor-exprot-asyn-excel [--yySpuStatus <string>] [--saleLeader <string>] [--folderId <string>] [--platformId <string>] [--sellWellCountry <array>] [--director <array>] [--manager <array>] [--littleLeaders <array>] [--shopManager <array>] [--shopNames <array>] [--freightTemplateIds <array>] [--publishOper <string>] [--spuNumberSold1 <number>] [--spuNumberSold2 <number>] [--spuNinetyOrdernum1 <string>] [--spuNinetyOrdernum2 <string>] [--spuHalfYearOrdernum1 <string>] [--spuHalfYearOrdernum2 <string>] [--isQingcang <string>] [--spuThirtyOrdernum1 <string>] [--spuThirtyOrdernum2 <string>] [--maxRate <string>] [--minRate <string>] [--minCollection <string>] [--maxCollection <string>] [--minPageView <string>] [--maxPageView <string>] [--profitMin <string>] [--profitMax <string>] [--shopId <array>] [--proStatus <string>] [--spuDescription <string>] [--minPrice <string>] [--maxPrice <string>] [--costPriceMin <string>] [--costPriceMax <string>] [--site <string>] [--sidCheck <string>] [--orderWay <string>] [--spuCreateTime1 <string>] [--spuCreateTime2 <string>] [--startTime <string>] [--endTime <string>] [--orderFiled <string>] [--matchKey <string>] [--sku <string>] [--logisticsType <string>] [--itemId <string>] [--isSold <string>] [--isMedia <string>] [--spuDispatchTimeMax <string>] [--spuFiftyOneOrdernum1 <string>] [--spuFiftyOneOrdernum2 <string>] [--spuThirtyDaysSoldCount1 <string>] [--spuThirtyDaysSoldCount2 <string>] [--skuInventory1 <string>] [--skuInventory2 <string>] [--ozonContentRatingStart <string>] [--ozonContentRatingEnd <string>] [--specialmark <string>] [--spuSevenOrdernum1 <string>] [--spuSevenOrdernum2 <string>] [--tortWhiteListing <number>] [--infringingWhiteWord <number>] [--outOfStock <number>] [--smtProductType <number>] [--threeDaySalesChange <number>] [--amazonFollowUp <boolean>] [--multipleWarehousesLabel <number>] [--multipleWarehousesTestLabel <string>] [--gmShop <string>] [--ozonFbpProduct <number>] [--bundType <number>] [--continuouOrderFifteen <number>] [--autoPublish <number>] [--autoPublishType <number>] [--continuouOrderThirty <number>] [--tort <number>] [--whiteList <number>] [--lowRate <number>] [--hasInfringedWord <number>] [--isNotActive <number>] [--diagnosisType <string>] [--price5 <array>] [--country <array>] [--productTagList <array>] [--isopenshop <string>] [--operatestatus <string>] [--payPalEmailAddress <string>] [--bannedPlatform <array>] [--customerService <string>] [--projectSpu <array>] [--hasPhishingWord <number>] [--firstCategory <string>] [--secondCategory <string>] [--autoPublishTypeList <array>] [--brand <string>] [--tortStartTime <string>] [--tortEndTime <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/exprotAsynExcel`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `yySpuStatus` | yySpuStatus | body | string | 否 | - | 运营SPU状态(默认1;值=4时传null) |
| `saleLeader` | saleLeader | body | string | 否 | - | 销售业务员/组员(多选逗号拼接;未选且有大酋长时取groupArr拼接) |
| `folderId` | folderId | body | string | 否 | - | 收藏夹ID(folderFavourite.checkList) |
| `platformId` | platformId | body | string | 否 | - | 平台ID(vueData.platform) |
| `sellWellCountry` | sellWellCountry | body | array | 否 | - | 热卖国家(vueData.sellWellCountry) |
| `director` | director | body | array | 否 | - | 总监(vueData.directors) |
| `manager` | manager | body | array | 否 | - | 经理(vueData.managers) |
| `littleLeaders` | littleLeaders | body | array | 否 | - | 小组长(vueData.littleLeaders) |
| `shopManager` | shopManager | body | array | 否 | - | 店长(vueData.shopManagers) |
| `shopNames` | shopNames | body | array | 否 | - | 店铺名称列表(vueData.shop) |
| `freightTemplateIds` | freightTemplateIds | body | array | 否 | - | 运费模板ID(vueData.shipping) |
| `publishOper` | publishOper | body | string | 否 | - | 刊登人(vueData.publisher) |
| `spuNumberSold1` | spuNumberSold1 | body | number | 否 | - | SPU销量下限(vueData.orderMin,空则null) |
| `spuNumberSold2` | spuNumberSold2 | body | number | 否 | - | SPU销量上限(vueData.orderMax,空则null) |
| `spuNinetyOrdernum1` | spuNinetyOrdernum1 | body | string | 否 | - | 90天订单数下限(#spuNinetyOrdernum1) |
| `spuNinetyOrdernum2` | spuNinetyOrdernum2 | body | string | 否 | - | 90天订单数上限(#spuNinetyOrdernum2) |
| `spuHalfYearOrdernum1` | spuHalfYearOrdernum1 | body | string | 否 | - | 180天售出数下限(#spuHalfYearOrdernum1) |
| `spuHalfYearOrdernum2` | spuHalfYearOrdernum2 | body | string | 否 | - | 180天售出数上限(#spuHalfYearOrdernum2) |
| `isQingcang` | isQingcang | body | string | 否 | - | 是否清仓(勾选=1,未勾选=0;#isQingcang) |
| `spuThirtyOrdernum1` | spuThirtyOrdernum1 | body | string | 否 | - | 30天订单数下限(#salenumMin) |
| `spuThirtyOrdernum2` | spuThirtyOrdernum2 | body | string | 否 | - | 30天订单数上限(#salenumMax) |
| `maxRate` | maxRate | body | string | 否 | - | 毛利率上限(#maxRate) |
| `minRate` | minRate | body | string | 否 | - | 毛利率下限(#minRate) |
| `minCollection` | minCollection | body | string | 否 | - | 收藏数下限(#minCollection) |
| `maxCollection` | maxCollection | body | string | 否 | - | 收藏数上限(#maxCollection) |
| `minPageView` | minPageView | body | string | 否 | - | 浏览量下限(#minPageView) |
| `maxPageView` | maxPageView | body | string | 否 | - | 浏览量上限(#maxPageView) |
| `profitMin` | profitMin | body | string | 否 | - | 利润下限(#profitMin) |
| `profitMax` | profitMax | body | string | 否 | - | 利润上限(#profitMax) |
| `shopId` | shopId | body | array | 否 | - | 店铺ID(当前固定传空数组) |
| `proStatus` | proStatus | body | string | 否 | - | 产品状态(#proStatus) |
| `spuDescription` | spuDescription | body | string | 否 | - | SPU描述/标题关键词(#currency) |
| `minPrice` | minPrice | body | string | 否 | - | 售价下限(#minPrice) |
| `maxPrice` | maxPrice | body | string | 否 | - | 售价上限(#maxPrice) |
| `costPriceMin` | costPriceMin | body | string | 否 | - | 成本价下限(#minCost) |
| `costPriceMax` | costPriceMax | body | string | 否 | - | 成本价上限(#maxCost) |
| `site` | site | body | string | 否 | - | 站点(多选逗号拼接;#site) |
| `sidCheck` | sidCheck | body | string | 否 | - | SID核对(勾选=1,未勾选=0;#sidm) |
| `orderWay` | orderWay | body | string | 否 | - | 排序方式(升序/降序;#orderWay) |
| `spuCreateTime1` | spuCreateTime1 | body | string | 否 | - | SPU创建时间-起始(#spuCreateTime1) |
| `spuCreateTime2` | spuCreateTime2 | body | string | 否 | - | SPU创建时间-结束(#spuCreateTime2) |
| `startTime` | startTime | body | string | 否 | - | 开始时间(#startTime) |
| `endTime` | endTime | body | string | 否 | - | 结束时间(#endTime) |
| `orderFiled` | orderFiled | body | string | 否 | - | 排序字段(#orderFiled) |
| `matchKey` | matchKey | body | string | 否 | - | 关键词匹配类型(#matchKey) |
| `sku` | sku | body | string | 否 | - | SKU关键词(#sku) |
| `logisticsType` | logisticsType | body | string | 否 | - | 物流类型(#logisticsType) |
| `itemId` | itemId | body | string | 否 | - | listing/商品ID(已勾选行itemid逗号拼接,否则#itemId) |
| `isSold` | isSold | body | string | 否 | - | 是否已售出(勾选=1,未勾选=0;#isSold) |
| `isMedia` | isMedia | body | string | 否 | - | 是否含媒体(勾选=1,未勾选=0;#isMedia) |
| `spuDispatchTimeMax` | spuDispatchTimeMax | body | string | 否 | - | SPU发货时效上限(#spuDispatchTimeMax) |
| `spuFiftyOneOrdernum1` | spuFiftyOneOrdernum1 | body | string | 否 | - | 51天订单数下限(#fiftySalenumMin) |
| `spuFiftyOneOrdernum2` | spuFiftyOneOrdernum2 | body | string | 否 | - | 51天订单数上限(#fiftySalenumMax) |
| `spuThirtyDaysSoldCount1` | spuThirtyDaysSoldCount1 | body | string | 否 | - | 30天售出件数下限(#spuThirtyDaysSoldCount1) |
| `spuThirtyDaysSoldCount2` | spuThirtyDaysSoldCount2 | body | string | 否 | - | 30天售出件数上限(#spuThirtyDaysSoldCount2) |
| `skuInventory1` | skuInventory1 | body | string | 否 | - | SKU库存下限(#skuRemainedMin) |
| `skuInventory2` | skuInventory2 | body | string | 否 | - | SKU库存上限(#skuRemainedMax) |
| `ozonContentRatingStart` | ozonContentRatingStart | body | string | 否 | - | Ozon内容评分起始(#ozonContentRatingStart) |
| `ozonContentRatingEnd` | ozonContentRatingEnd | body | string | 否 | - | Ozon内容评分结束(#ozonContentRatingEnd) |
| `specialmark` | specialmark | body | string | 否 | - | 特殊标记(#specialmark) |
| `spuSevenOrdernum1` | spuSevenOrdernum1 | body | string | 否 | - | 7天订单数下限(#spuSevenOrdernum1) |
| `spuSevenOrdernum2` | spuSevenOrdernum2 | body | string | 否 | - | 7天订单数上限(#spuSevenOrdernum2) |
| `tortWhiteListing` | tortWhiteListing | body | number | 否 | - | 侵权白名单listing(勾选时传1) |
| `infringingWhiteWord` | infringingWhiteWord | body | number | 否 | - | 侵权白名单词(勾选时传1) |
| `outOfStock` | outOfStock | body | number | 否 | - | 缺货(勾选时传1) |
| `smtProductType` | smtProductType | body | number | 否 | - | 速卖通产品类型(勾选时传1) |
| `threeDaySalesChange` | threeDaySalesChange | body | number | 否 | - | 3天销量跌幅(勾选下降时传-0.2;#threeDaySalesChangeLower) |
| `amazonFollowUp` | amazonFollowUp | body | boolean | 否 | - | 亚马逊跟卖(勾选时传true) |
| `multipleWarehousesLabel` | multipleWarehousesLabel | body | number | 否 | - | 一品多仓标签(勾选时传1) |
| `multipleWarehousesTestLabel` | multipleWarehousesTestLabel | body | string | 否 | - | 一品多仓测品标签(勾选时传"1") |
| `gmShop` | gmShop | body | string | 否 | - | GM店铺(勾选时传"1") |
| `ozonFbpProduct` | ozonFbpProduct | body | number | 否 | - | Ozon FBP产品(勾选时传1) |
| `bundType` | bundType | body | number | 否 | - | 捆绑(组合)类型(勾选时传1) |
| `continuouOrderFifteen` | continuouOrderFifteen | body | number | 否 | - | 连续15天出单(勾选时传1) |
| `autoPublish` | autoPublish | body | number | 否 | - | 自动刊登(勾选时传1) |
| `autoPublishType` | autoPublishType | body | number | 否 | - | 刊登类型(自动刊登传2;复制刊登传3) |
| `continuouOrderThirty` | continuouOrderThirty | body | number | 否 | - | 连续30天出单(勾选时传1) |
| `tort` | tort | body | number | 否 | - | 侵权(勾选时传1) |
| `whiteList` | whiteList | body | number | 否 | - | 白名单(勾选时传1) |
| `lowRate` | lowRate | body | number | 否 | - | 低毛利(勾选时传1) |
| `hasInfringedWord` | hasInfringedWord | body | number | 否 | - | 含侵权词(勾选时传1) |
| `isNotActive` | isNotActive | body | number | 否 | - | 非活跃(勾选时传1) |
| `diagnosisType` | diagnosisType | body | string | 否 | - | 诊断类型(勾选先传1,随后被选中单选项value覆盖) |
| `price5` | price5 | body | array | 否 | - | 仓库类型(海外仓类型;有选传值否则空数组;#warehouse) |
| `country` | country | body | array | 否 | - | 发货地(有选传值否则空数组;#countryFrome) |
| `productTagList` | productTagList | body | array | 否 | - | 商品标签(有选传值否则空数组;#productTagList) |
| `isopenshop` | isopenshop | body | string | 否 | - | 是否开店(#isopenshop) |
| `operatestatus` | operatestatus | body | string | 否 | - | 运营状态(#operatestatus) |
| `payPalEmailAddress` | payPalEmailAddress | body | string | 否 | - | PayPal邮箱地址(#payPalEmailAddress) |
| `bannedPlatform` | bannedPlatform | body | array | 否 | - | 禁售平台(vueData.plantformid) |
| `customerService` | customerService | body | string | 否 | - | 客户经理(#custService) |
| `projectSpu` | projectSpu | body | array | 否 | - | 项目SPU(#productsku按逗号拆分;值为false/null时空数组) |
| `hasPhishingWord` | hasPhishingWord | body | number | 否 | - | 含钓鱼词(勾选时传1) |
| `firstCategory` | firstCategory | body | string | 否 | - | 一级类目(CategorySelect长度1项逗号拼接) |
| `secondCategory` | secondCategory | body | string | 否 | - | 二级类目(CategorySelect长度2项的第2级逗号拼接) |
| `autoPublishTypeList` | autoPublishTypeList | body | array | 否 | - | TK刊登类型列表(showTKPublishType为真即TikTok平台时传;checkapp) |
| `brand` | brand | body | string | 否 | - | 商品品牌(选择后传;checkapp/productBrand) |
| `tortStartTime` | tortStartTime | body | string | 否 | - | 侵权开始时间(填写后传;checkapp) |
| `tortEndTime` | tortEndTime | body | string | 否 | - | 侵权结束时间(填写后传;checkapp) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(创建导出任务成功) | - |
| `desc` | string | 响应提示信息(失败时alert展示) | - |
| `obj` | object | 业务返回对象(导出任务结果;前端已解构但未直接使用,具体字段待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
