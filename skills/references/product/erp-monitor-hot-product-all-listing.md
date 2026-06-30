# mbs product erp-monitor-hot-product-all-listing

在线商品列表展示：按平台/店铺/组织/销量/状态等条件分页查询在线商品(热销Listing)列表。数据源为ES商品SPU索引，查询后回填删除/编辑/改价/复制/同步等任务状态、白名单标记、店铺状态、TikTok差评率、SMT实时调控等。ES scroll分页。

## 用法

```bash
mbs product erp-monitor-hot-product-all-listing [--platformId <integer>] [--shopId <array<integer>>] [--currency <string>] [--shopType <string>] [--minPrice <number>] [--maxPrice <number>] [--costPriceMax <number>] [--costPriceMin <number>] [--managerShopIds <array<integer>>] [--director <array<integer>>] [--manager <array<integer>>] [--littleLeaders <array<integer>>] [--shopManager <array<integer>>] [--shopNames <array<string>>] [--allPlatformId <array<string>>] [--finalShopNameList <array<string>>] [--orderWay <string>] --orderFiled <string> [--emoloyeeId <string>] [--startTime <string>] [--endTime <string>] [--shopIds <array<integer>>] [--currPage <integer>] [--matchKey <string>] [--sidCheck <integer>] [--publishOper <string>] [--spuDescription <string>] [--sku <string>] [--spuList <array<string>>] [--projectSpu <array<string>>] [--skuList <array<string>>] [--logisticsType <string>] [--itemId <string>] [--yySpuStatus <integer>] [--firstCategory <string>] [--secondCategory <string>] [--bigChief <string>] [--isSold <integer>] [--site <string>] [--siteList <array<string>>] [--proStatus <string>] [--spuDispatchTimeMax <integer>] [--price5 <array<string>>] [--country <array<string>>] [--payPalEmailAddress <string>] [--spuCreateTime1 <string>] [--spuCreateTime2 <string>] [--profitMax <number>] [--profitMin <number>] [--isMedia <integer>] [--minCollection <integer>] [--maxCollection <integer>] [--minPageView <integer>] [--maxPageView <integer>] [--minRate <number>] [--maxRate <number>] [--spuThirtyDaysSoldCount1 <integer>] [--spuThirtyDaysSoldCount2 <integer>] [--spuSevenOrdernum1 <integer>] [--spuSevenOrdernum2 <integer>] [--spuThirtyOrdernum1 <integer>] [--spuThirtyOrdernum2 <integer>] [--spuFiftyOneOrdernum1 <integer>] [--spuFiftyOneOrdernum2 <integer>] [--spuNinetyOrdernum1 <integer>] [--spuNinetyOrdernum2 <integer>] [--spuHalfYearOrdernum1 <integer>] [--spuHalfYearOrdernum2 <integer>] [--spuNumberSold1 <integer>] [--spuNumberSold2 <integer>] [--skuInventory1 <integer>] [--skuInventory2 <integer>] [--pageSize <integer>] [--isQingcang <string>] [--autoPublish <string>] [--isNotActive <integer>] [--statisDate <string>] [--scrollId <string>] [--itemIds <array<string>>] [--itemIdList <array<string>>] [--customerService <array<string>>] [--categorys <array<string>>] [--secondCategorys <array<string>>] [--exportItemIds <array<string>>] [--whiteList <string>] [--whiteListItemId <array<string>>] [--tortWhiteListing <string>] [--tortWhiteListItemId <array<string>>] [--infringingWhiteWord <string>] [--infringingWhiteWordItem <array<string>>] [--continuouOrderFifteen <integer>] [--continuouOrderThirty <integer>] [--tort <integer>] [--bannedPlatform <array<string>>] [--sellWellCountry <array<string>>] [--lowRate <integer>] [--folderId <integer>] [--collectProIds <array<string>>] [--freightTemplateIds <array<integer>>] [--hasInfringedWord <integer>] [--productTagList <array<string>>] [--diagnosisType <integer>] [--outOfStock <boolean>] [--isopenshop <string>] [--operatestatus <string>] [--smtProductType <string>] [--specialmark <string>] [--threeDaySalesChange <number>] [--autoPublishType <integer>] [--autoPublishTypeList <array<integer>>] [--hasPhishingWord <integer>] [--amazonFollowUp <boolean>] [--groupCompanyId <integer>] [--brand <string>] [--multipleWarehousesLabel <string>] [--multipleWarehousesTestLabel <string>] [--tortStartTime <string>] [--tortEndTime <string>] [--skuId <string>] [--gmShop <string>] [--ozonFbpProduct <integer>] [--bundType <integer>]
```

## API

- Service: `erp-monitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/hotProductAllListing`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `a8cc5779a3dc318f4266ebdc97fdc120cd01b2e642e6ab618dc586ec950f808d`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | body | integer | 否 | - | 平台id，单选。枚举：1=eBay，2=Amazon，10=速卖通(SMT)，16=Wish，18=Lazada，26=Shopee，85=Joom，97=Walmart，108=美客多(MercadoLibre)，119=Ozon，120=TikTok，128=Temu。影响特殊逻辑：97按globalProductId匹配itemIdList并支持gmShop；108自动为itemId补MLM/MLC/MLB/MCO前缀；2/119输入itemId时先搜SKU索引汇总父ASIN；1站点二字码转全称(CA→Canada等) |
| `shopId` | shopId | body | array<integer> | 否 | - | 店铺id列表，ES termsQuery(shopId)精确多选 |
| `currency` | currency | body | string | 否 | - | 货币（DTO保留字段，本接口查询逻辑未使用） |
| `shopType` | shopType | body | string | 否 | - | 店铺类型(非保护店铺筛选)，matchQuery(shopType)；空/不传=不过滤 |
| `minPrice` | minPrice | body | number | 否 | - | 售价最小值。查询条件为 ES minPrice > 该值（开区间，不含等于） |
| `maxPrice` | maxPrice | body | number | 否 | - | 售价最大值。查询条件为 ES maxPrice < 该值（开区间，不含等于） |
| `costPriceMax` | costPriceMax | body | number | 否 | - | 成本价上限（注意DTO注释把Max/Min写反，以代码为准）。查询条件为 ES maxCostPrice < 该值 |
| `costPriceMin` | costPriceMin | body | number | 否 | - | 成本价下限。查询条件为 ES minCostPrice > 该值 |
| `managerShopIds` | managerShopIds | body | array<integer> | 否 | - | 登录人(销售部)管理的店铺ID列表。服务端在setHotProductListShopParams中按登录人自动注入，前端无需传；销售部账号若名下无店铺直接返回code=500'销售名下没有店铺，没有权限查看' |
| `director` | director | body | array<integer> | 否 | - | 总监(员工ID)多选，用于按组织架构圈定店铺集合(getShopListByParams)，结果写入finalShopNameList |
| `manager` | manager | body | array<integer> | 否 | - | 经理(员工ID)多选，用途同director |
| `littleLeaders` | littleLeaders | body | array<integer> | 否 | - | 主管(员工ID)多选，用途同director |
| `shopManager` | shopManager | body | array<integer> | 否 | - | 店长(员工ID)多选，用途同director |
| `shopNames` | shopNames | body | array<string> | 否 | - | 店铺名称多选。传入后服务端结合isopenshop/operatestatus过滤店铺运营状态，结果写入finalShopNameList；过滤后为空返回code=500'未查询到店铺，请确认所选店铺的运营状态' |
| `allPlatformId` | allPlatformId | body | array<string> | 否 | - | 登录人有权限的全部平台ID。服务端按登录人(销售部)自动注入；未配置平台返回code=500'当前登录人未设置平台，请设置后再查看'。前端无需传 |
| `finalShopNameList` | finalShopNameList | body | array<string> | 否 | - | 最终生效的店铺名集合(ES termsQuery shopName)。服务端根据shopNames/组织条件/店铺状态计算注入，前端无需传 |
| `orderWay` | orderWay | body | string | 否 | - | 排序方向。枚举：asc=升序(正序)；其他任意值或不传=降序(倒序，默认)。注意DTO注释'DESC 升序'有误，以代码为准 |
| `orderFiled` | orderFiled | body | string | 是 | - | 排序字段(ES字段名)。页面枚举：spuDateUploaded=发布时间，spuSevenOrdernum=7天订单量(页面默认)，spuGrossProfit=30天毛利，spuThirtyDaysSoldCount=30天销量，spuThirtyOrdernum=30天订单量，spuFiftyOneOrdernum=51天订单量，spuNinetyOrdernum=90天订单量，spuProfitRate=30天毛利率，erpSpuCreateDate=开发时间，spuWatchCount=浏览量，spuNumberSaves=收藏量，rate=评价分数；传collection会被自动转为spuNumberSaves |
| `emoloyeeId` | emoloyeeId | body | string | 否 | - | 员工ID(字段名拼写即如此)。本接口查询逻辑未使用 |
| `startTime` | startTime | body | string | 否 | - | 刊登(上传)时间起，格式yyyy-MM-dd。查询 spuDateUploaded >= 该日00:00(东八区) |
| `endTime` | endTime | body | string | 否 | - | 刊登(上传)时间止，格式yyyy-MM-dd。查询 spuDateUploaded < 次日00:00(东八区，即含当天) |
| `shopIds` | shopIds | body | array<integer> | 否 | - | 店铺ID列表(DTO保留字段，本接口查询使用的是shopId字段) |
| `currPage` | currPage | body | integer | 否 | - | 当前页码，从1开始；不传默认1 |
| `matchKey` | matchKey | body | string | 否 | - | 标题关键词搜索，逗号分隔多个词(OR短语匹配spuTitle)；服务端自动排除'for/Für/Pour/Para/per + android/apple/google/mi/philips/samsung'组合(禁词豁免) |
| `sidCheck` | sidCheck | body | integer | 否 | - | 手动刊登筛选。枚举：1=只查手动刊登(mustNot autoPublish=true)；其他值/不传=不过滤 |
| `publishOper` | publishOper | body | string | 否 | - | 刊登人账号，ES termsQuery(publishOper)精确匹配 |
| `spuDescription` | spuDescription | body | string | 否 | - | SPU搜索输入框原始值，逗号分隔多个SPU，最多500个(超出返回code=500'spu不能超过500条！')；服务端拆分后写入spuList |
| `sku` | sku | body | string | 否 | - | SKU搜索输入框原始值，逗号分隔，最多500个(超出返回code=500'sku不能超过500条！')；服务端拆分后写入skuList，并触发先查SKU索引→取父SPUId(itemIds)再查SPU索引的两段式查询 |
| `spuList` | spuList | body | array<string> | 否 | - | SPU列表(termsQuery erpSPU)。特殊：仅1个且包含outstock/@#zdph/@#gm时改为platformSPU通配模糊查询 |
| `projectSpu` | projectSpu | body | array<string> | 否 | - | 项目(选品项目)中的SPU列表，termsQuery(erpSPU) |
| `skuList` | skuList | body | array<string> | 否 | - | SKU列表。非空即触发SKU索引前置查询(isneedSearchSku)；仅1个且包含outstock/@#zdph/@#gm时按platformSKU通配模糊查 |
| `logisticsType` | logisticsType | body | string | 否 | - | 物流方式，ES wildcardQuery(shippingService)模糊匹配 |
| `itemId` | itemId | body | string | 否 | - | 平台商品ID搜索输入框原始值，支持空格/逗号分隔多个，最多1000条(超出返回code=500'itemid不能超过1000条！'，白名单账号除外)；服务端拆分写入itemIdList；平台108自动补MLM/MLC/MLB/MCO前缀 |
| `yySpuStatus` | yySpuStatus | body | integer | 否 | - | 商品状态。枚举：-1=被拒(REJECTED)，0=下架(OFFLINE)，1=在线(ONLINE，前端默认)，2=审核中(AUDITING)，3=暂停(服务端转换为 yySpuStatus=0 且 spuStatus∈{seller_deactivated,platform_deactivated})；前端选'4'(全部)时不传该字段 |
| `firstCategory` | firstCategory | body | string | 否 | - | 一级分类，逗号分隔多个；服务端拆分写入categorys后termsQuery(firstCategory)，与secondCategory为OR关系 |
| `secondCategory` | secondCategory | body | string | 否 | - | 二级分类(DTO注释'一级分类'有误)，逗号分隔；服务端拆分写入secondCategorys后termsQuery(secondCategory)，与firstCategory为OR关系 |
| `bigChief` | bigChief | body | string | 否 | - | 大酋长(团队最高负责人姓名)。本接口查询逻辑未直接使用(前端用saleLeader组合实现) |
| `isSold` | isSold | body | integer | 否 | - | 30天有售出筛选。枚举：1=只查30天销量>0(spuThirtyDaysSoldCount>0)；其他值/不传=不过滤 |
| `site` | site | body | string | 否 | - | 站点，逗号分隔；服务端将中文国家名转二字码写入siteList；eBay(平台1)再做二字码→全称转换：CA=Canada，DE=Germany，AU=Australia，FR=France，IT=Italy |
| `siteList` | siteList | body | array<string> | 否 | - | 站点多选(termsQuery spuSiteCodeType)。一般由服务端从site拆分注入，也可直接传 |
| `proStatus` | proStatus | body | string | 否 | - | 产品状态，ES wildcardQuery(proStatus)模糊匹配。常见取值：正常/清仓/停产/自动创建/海外仓/暂停销售 |
| `spuDispatchTimeMax` | spuDispatchTimeMax | body | integer | 否 | - | 备货时长(天)，matchQuery精确匹配该天数 |
| `price5` | price5 | body | array<string> | 否 | - | 仓库类型ID列表(页面'仓库类型'多选，termsQuery price5)。ID与名称映射来自仓库类型字典表warehouseType(warehouseTypeId→warehouseTypeName)，响应中price5返回的是名称 |
| `country` | country | body | array<string> | 否 | - | 发货地国家多选，termsQuery(country) |
| `payPalEmailAddress` | payPalEmailAddress | body | string | 否 | - | PayPal收款邮箱，matchQuery精确匹配 |
| `spuCreateTime1` | spuCreateTime1 | body | string | 否 | - | SPU开发(创建)时间起，格式yyyy-MM-dd。查询 erpSpuCreateDate >= 该日00:00(东八区) |
| `spuCreateTime2` | spuCreateTime2 | body | string | 否 | - | SPU开发(创建)时间止，格式yyyy-MM-dd。查询 erpSpuCreateDate < 次日00:00(含当天) |
| `profitMax` | profitMax | body | number | 否 | - | 30天毛利率上限，spuProfitRate <= 该值 |
| `profitMin` | profitMin | body | number | 否 | - | 30天毛利率下限，spuProfitRate >= 该值 |
| `isMedia` | isMedia | body | integer | 否 | - | 视频筛选。枚举：1=只查有视频(mediaId存在且非空)；0或不传=不过滤(注意：0并不会筛选'无视频'，代码只处理==1) |
| `minCollection` | minCollection | body | integer | 否 | - | 收藏量最小值，spuNumberSaves > 该值(开区间) |
| `maxCollection` | maxCollection | body | integer | 否 | - | 收藏量最大值，spuNumberSaves < 该值(开区间) |
| `minPageView` | minPageView | body | integer | 否 | - | 浏览量最小值，spuWatchCount > 该值(开区间) |
| `maxPageView` | maxPageView | body | integer | 否 | - | 浏览量最大值，spuWatchCount < 该值(开区间) |
| `minRate` | minRate | body | number | 否 | - | 评价分数最小值，rate >= 该值(闭区间) |
| `maxRate` | maxRate | body | number | 否 | - | 评价分数最大值，rate <= 该值(闭区间) |
| `spuThirtyDaysSoldCount1` | spuThirtyDaysSoldCount1 | body | integer | 否 | - | 30天销量下限，spuThirtyDaysSoldCount >= 该值 |
| `spuThirtyDaysSoldCount2` | spuThirtyDaysSoldCount2 | body | integer | 否 | - | 30天销量上限，spuThirtyDaysSoldCount <= 该值 |
| `spuSevenOrdernum1` | spuSevenOrdernum1 | body | integer | 否 | - | 7天订单量下限，spuSevenOrdernum >= 该值 |
| `spuSevenOrdernum2` | spuSevenOrdernum2 | body | integer | 否 | - | 7天订单量上限，spuSevenOrdernum <= 该值 |
| `spuThirtyOrdernum1` | spuThirtyOrdernum1 | body | integer | 否 | - | 30天订单量下限，spuThirtyOrdernum >= 该值 |
| `spuThirtyOrdernum2` | spuThirtyOrdernum2 | body | integer | 否 | - | 30天订单量上限，spuThirtyOrdernum <= 该值 |
| `spuFiftyOneOrdernum1` | spuFiftyOneOrdernum1 | body | integer | 否 | - | 51天订单量下限，spuFiftyOneOrdernum >= 该值 |
| `spuFiftyOneOrdernum2` | spuFiftyOneOrdernum2 | body | integer | 否 | - | 51天订单量上限，spuFiftyOneOrdernum <= 该值 |
| `spuNinetyOrdernum1` | spuNinetyOrdernum1 | body | integer | 否 | - | 90天订单量下限，spuNinetyOrdernum >= 该值 |
| `spuNinetyOrdernum2` | spuNinetyOrdernum2 | body | integer | 否 | - | 90天订单量上限，spuNinetyOrdernum <= 该值 |
| `spuHalfYearOrdernum1` | spuHalfYearOrdernum1 | body | integer | 否 | - | 180天订单量下限，spuHalfYearOrdernum >= 该值 |
| `spuHalfYearOrdernum2` | spuHalfYearOrdernum2 | body | integer | 否 | - | 180天订单量上限，spuHalfYearOrdernum <= 该值 |
| `spuNumberSold1` | spuNumberSold1 | body | integer | 否 | - | 累计订单量下限，spuNumberSold >= 该值 |
| `spuNumberSold2` | spuNumberSold2 | body | integer | 否 | - | 累计订单量上限，spuNumberSold <= 该值 |
| `skuInventory1` | skuInventory1 | body | integer | 否 | - | SKU库存下限(skuInventory >= 该值)。该条件作用于SKU索引，传入即触发两段式查询(先SKU后SPU) |
| `skuInventory2` | skuInventory2 | body | integer | 否 | - | SKU库存上限(skuInventory <= 该值)，同上作用于SKU索引 |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数，不传或<0时默认50 |
| `isQingcang` | isQingcang | body | string | 否 | - | 清仓筛选。枚举："1"=只查清仓刊登(ES qingcang=true，清仓刊登SKU带@#QC-标记)；其他=不过滤 |
| `autoPublish` | autoPublish | body | string | 否 | - | 批量刊登筛选。枚举："1"=只查批量刊登(ES autoPublish=true)；其他=不过滤 |
| `isNotActive` | isNotActive | body | integer | 否 | - | 不活跃listing筛选(SMT平台逻辑)。枚举：1=只查不活跃listing，判定条件：SPU创建时间超89天 且 listing上架超179天 且 180天订单量<=0；其他=不过滤 |
| `statisDate` | statisDate | body | string | 否 | - | 统计日期 yyyy-MM-dd(GMT+8)。DTO保留字段，本接口查询逻辑未使用 |
| `scrollId` | scrollId | body | string | 否 | - | ES scroll分页标识。第1页不传；翻页时回传上一次响应obj.scrollId |
| `itemIds` | itemIds | body | array<string> | 否 | - | 商品ID列表(termsQuery spuId)。SKU两段式查询时由服务端用SKU索引查到的父SPUId覆盖注入 |
| `itemIdList` | itemIdList | body | array<string> | 否 | - | 商品ID列表，由服务端从itemId拆分注入。平台97(Walmart)按globalProductId匹配，其他平台按spuId匹配；平台2/119(Amazon/Ozon)时与SKU索引查得的父ASIN合并 |
| `customerService` | customerService | body | array<string> | 否 | - | 客户经理多选，用于店铺圈定(getShopListByParams的SQL条件) |
| `categorys` | categorys | body | array<string> | 否 | - | 一级分类列表，服务端由firstCategory逗号拆分注入，termsQuery(firstCategory) |
| `secondCategorys` | secondCategorys | body | array<string> | 否 | - | 二级分类列表，服务端由secondCategory逗号拆分注入，termsQuery(secondCategory) |
| `exportItemIds` | exportItemIds | body | array<string> | 否 | - | 页面勾选的itemId列表(导出场景用，作用于SKU索引parentSPUId)。本列表接口查询不使用 |
| `whiteList` | whiteList | body | string | 否 | - | 不调控白名单筛选。枚举："1"=只查不调控白名单内listing(服务端按平台查白名单itemId注入whiteListItemId；白名单为空时返回code=0提示'白名单中没有listing'，最终响应code=200+空列表)；其他=不过滤 |
| `whiteListItemId` | whiteListItemId | body | array<string> | 否 | - | 不调控白名单itemId列表(termsQuery spuId)。服务端根据whiteList=1注入，前端无需传 |
| `tortWhiteListing` | tortWhiteListing | body | string | 否 | - | (侵权、禁售)白名单筛选。枚举："1"=只查该白名单内listing；其他=不过滤 |
| `tortWhiteListItemId` | tortWhiteListItemId | body | array<string> | 否 | - | (侵权、禁售)白名单ES文档_id列表(termsQuery _id)。服务端根据tortWhiteListing=1注入 |
| `infringingWhiteWord` | infringingWhiteWord | body | string | 否 | - | (侵权词)白名单筛选。枚举："1"=只查该白名单内listing；其他=不过滤 |
| `infringingWhiteWordItem` | infringingWhiteWordItem | body | array<string> | 否 | - | (侵权词)白名单ES文档_id列表(termsQuery _id)。服务端根据infringingWhiteWord=1注入 |
| `continuouOrderFifteen` | continuouOrderFifteen | body | integer | 否 | - | 连续15天出单筛选。枚举：1=只查连续15天稳定出单(ES continuouOrderFifteen=1)；其他=不过滤 |
| `continuouOrderThirty` | continuouOrderThirty | body | integer | 否 | - | 连续30天出单筛选。枚举：1=只查连续30天稳定出单(ES continuouOrderThirty=1)；其他=不过滤 |
| `tort` | tort | body | integer | 否 | - | 侵权筛选。枚举：1=只查侵权listing(ES tort=1)；其他=不过滤 |
| `bannedPlatform` | bannedPlatform | body | array<string> | 否 | - | 禁售平台名称列表，逗号拼接后matchQuery(bannedPlatform) |
| `sellWellCountry` | sellWellCountry | body | array<string> | 否 | - | 热销国家多选，OR短语匹配(matchPhraseQuery sellWellCountry) |
| `lowRate` | lowRate | body | integer | 否 | - | 低分listing筛选。枚举：1=只查低分listing(0 < rate <= 3)；其他=不过滤 |
| `folderId` | folderId | body | integer | 否 | - | 收藏夹ID。传入则只查当前登录人该收藏夹内的listing(服务端查出ES文档id注入collectProIds)；收藏夹为空返回code=0提示'没有加入收藏的listing'(最终响应code=200+空列表) |
| `collectProIds` | collectProIds | body | array<string> | 否 | - | 收藏的ES文档_id列表(termsQuery _id)。服务端根据folderId注入，前端无需传 |
| `freightTemplateIds` | freightTemplateIds | body | array<integer> | 否 | - | SMT运费模板ID多选，termsQuery(freightTemplateId) |
| `hasInfringedWord` | hasInfringedWord | body | integer | 否 | - | 是否包含侵权词。枚举：1=只查标题含侵权词(infringedWord字段存在且非空)；0(默认)=不过滤 |
| `productTagList` | productTagList | body | array<string> | 否 | - | 产品标签多选，OR短语匹配(matchPhraseQuery productTag) |
| `diagnosisType` | diagnosisType | body | integer | 否 | - | 诊断类型(SMT商品诊断)，matchQuery精确匹配。枚举(前端文案)：1=商品竞争力低，2=缺少3:4场景图，3=缺少白底图，4=标题滥用，5=缺少APP独立详描 |
| `outOfStock` | outOfStock | body | boolean | 否 | - | 是否缺货。枚举：true=只查缺货，false=只查不缺货，不传=不过滤 |
| `isopenshop` | isopenshop | body | string | 否 | - | 店铺启用状态(店铺圈定条件，不进ES)。枚举："1"=已开启，"0"=已关闭，空/不传=全部 |
| `operatestatus` | operatestatus | body | string | 否 | - | 店铺运营状态(店铺圈定条件，不进ES)。枚举："1"=运营中，"2"=暂停运营，"3"=永久关闭中，空/不传=全部 |
| `smtProductType` | smtProductType | body | string | 否 | - | SMT商品类型，matchQuery精确匹配。枚举："0"=仓发，"1"=即时补货(JIT)，"2"=海外备仓；前端勾选'即时补货'时传1 |
| `specialmark` | specialmark | body | string | 否 | - | 特殊标记，matchQuery精确匹配 |
| `threeDaySalesChange` | threeDaySalesChange | body | number | 否 | - | 销量骤跌阈值。查询 ES threeDaySalesChange <= 该值(近3天销量相对近3-6天销量的涨跌幅)。前端勾选'销量骤跌'固定传-0.2，即跌幅达20%以上 |
| `autoPublishType` | autoPublishType | body | integer | 否 | - | 刊登类型，matchQuery精确匹配。枚举：0=其他(手动)，1=批量刊登(SKU带@#ZDSJ)，2=自动刊登(SKU带@#ZDPH)，3=复制刊登(前端CopyPublish勾选传3) |
| `autoPublishTypeList` | autoPublishTypeList | body | array<integer> | 否 | - | 刊登类型多选，termsQuery(autoPublishType)，枚举同autoPublishType |
| `hasPhishingWord` | hasPhishingWord | body | integer | 否 | - | 是否包含钓鱼词。枚举：1=只查含钓鱼词(phishingWord字段存在且非空)；0(默认)=不过滤 |
| `amazonFollowUp` | amazonFollowUp | body | boolean | 否 | - | Amazon跟买筛选。枚举：true=只查被跟买(ES followUp=true)，false=只查未被跟买，不传=不过滤 |
| `groupCompanyId` | groupCompanyId | body | integer | 否 | - | 所属公司ID(matchQuery companyId)。服务端用登录人所属公司强制覆盖，前端传值无效 |
| `brand` | brand | body | string | 否 | - | 品牌，matchQuery(brand) |
| `multipleWarehousesLabel` | multipleWarehousesLabel | body | string | 否 | - | 一品多仓标签筛选(termQuery)。前端勾选传1；与multipleWarehousesTestLabel同时传时两者为OR关系(minimumShouldMatch=1) |
| `multipleWarehousesTestLabel` | multipleWarehousesTestLabel | body | string | 否 | - | 一品多仓测品标签筛选(termQuery)。前端勾选传"1"；与multipleWarehousesLabel同时传时为OR关系 |
| `tortStartTime` | tortStartTime | body | string | 否 | - | 侵权更新时间起，格式yyyy-MM-dd HH:mm:ss，查询 tortUpdateTime >= 该值 |
| `tortEndTime` | tortEndTime | body | string | 否 | - | 侵权更新时间止，格式yyyy-MM-dd HH:mm:ss，查询 tortUpdateTime <= 该值 |
| `skuId` | skuId | body | string | 否 | - | SKU ID(DTO保留字段，本接口查询逻辑未使用) |
| `gmShop` | gmShop | body | string | 否 | - | GM店铺筛选(仅Walmart)。枚举："1"且platformId=97且未选店铺时，服务端自动以GM店铺清单作为shopNames；其他=不生效 |
| `ozonFbpProduct` | ozonFbpProduct | body | integer | 否 | - | Ozon FBP仓库筛选。枚举：1=只查FBP商品(termQuery ozonFbpProduct=1)；0=排除FBP商品(mustNot ozonFbpProduct=1)；不传=不过滤 |
| `bundType` | bundType | body | integer | 否 | - | 是否绑定商品。枚举：1=绑定，0=非绑定(termQuery bundType)；不传=不过滤 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `success` | boolean | 是否成功标记。⚠️本接口代码从未setSuccess，该字段恒为false，不可用于判断；判断成功请用code==200(前端实现即如此) | - |
| `code` | integer | 返回编码。枚举：200=成功(含'权限校验软失败返回空列表'的场景)；500=失败(未登录态异常/销售无平台权限/销售名下无店铺/店铺状态过滤后为空/itemid超1000/spu或sku超500/查询异常)；0=白名单或收藏夹为空的前置提示(仅中间值，最终响应仍以200+空列表返回) | - |
| `desc` | string | 结果描述。成功='获取数据成功'；软失败=提示语(如'白名单中没有listing'/'没有加入收藏的listing'/'未查询到店铺，请确认所选店铺的运营状态')；异常='获取数据失败，失败原因：'+异常信息 | - |
| `content` | string | 附加内容。本接口恒为null | - |
| `date` | string | 响应时间。本接口未赋值，恒为null | - |
| `obj` | object | 分页结果体。code=200时为PageBean(可能为空列表)；code=500时为null | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
