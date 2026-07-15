# mbs pim erp-product-product-info-for-export

商品(SPU)导出数据查询：SPU 管理列表点击导出时调用：把当前列表全部筛选条件(outdownparams，由 getParams() 构建)作为请求体提交，后端返回待导出的 ES 数据列表(esDataList) 及 ES 查询构造串(sourceBuilderString)；前端据 originalSku 拼成 skuStr，type=2 时再把 sourceBuilderString 回传给 saveProductReport 完成导出。

## 用法

```bash
mbs pim erp-product-product-info-for-export [--categoryId <string>] [--levelNum <number>] [--searchCompanyId <string>] [--developer2List <array>] [--sku <string>] [--sonSku <string>] [--manufacture <string>] [--proName <string>] [--batchSku <string>] [--productName <string>] [--englishTitle <string>] [--proNameForAny <string>] [--fuzzyQuery <string>] [--location <string>] [--spu <string>] [--hasSubmitSale <string>] [--salesStatus <string>] [--status <string>] [--orderBy <string>] [--buyer <string>] [--numType <string>] [--savenum1 <string>] [--savenum2 <string>] [--propertiesid <string>] [--startDate <string>] [--endDate <string>] [--reduceCost <string>] [--tort <string>] [--minSalesVolume30 <string>] [--maxSalesVolume30 <string>] [--hjreserve4 <string>] [--hjreserve6 <string>] [--priceflag <string>] [--forbidPlatformIdList <array>] [--applicablePlatformList <array>] [--minWeight <string>] [--maxWeight <string>] [--minCostPrice <string>] [--maxCostprice <string>] [--minreserve14 <string>] [--maxreserve14 <string>] [--storageNew <string>] [--applicableSiteList <array>] [--productTagList <array>] [--notContainsProductTagList <array>] [--riskLevel <string>] [--allBrandId <boolean>] [--brandId <array>] [--allCertification <boolean>] [--certificationList <array>] [--whitePublishShop <string>] [--smallSection <string>] [--largeSection <string>] [--positionId <string>] [--spotcheck <string>] [--buyflag <string>] [--purchaseFlag <string>] [--lowratecnt <number>] [--negativeRefundrate <number>] [--tkVideo <string>] [--isAccount <string>] [--returns <string>] [--oper4 <array>] [--isBoutique <string>] [--keyWords <array>] [--keyWords2 <array>] [--isServeXnc <string>] [--notContainsKeyWords <array>] [--provinces <array>] [--citys <array>] [--price5 <array>] [--specialmark <string>] [--myStatus <string>] [--result <string>] [--advancedSpu <string>] [--oper <string>] --pageSize <number> [--keyWords3 <array>] [--projectSpu <string>] [--attentionSkuFlag <string>] --page <number> [--isTort <string>] [--isVideo <number>] [--hasSpuLimitPrice <string>] [--storagebinflag <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/productInfoForExport`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `categoryId` | categoryId | body | string | 否 | - | 商品分类ID(类目级联最后一级 sequenceid，categorySearch 有值时传) |
| `levelNum` | levelNum | body | number | 否 | - | 分类层级数(类目级联选择的层级数) |
| `searchCompanyId` | searchCompanyId | body | string | 否 | - | 公司ID(按公司过滤) |
| `developer2List` | developer2List | body | array | 否 | - | 开发员2列表 |
| `sku` | sku | body | string | 否 | - | 关键词-按SKU查询(seekType=SKU) |
| `sonSku` | sonSku | body | string | 否 | - | 关键词-按子SKU查询(seekType=子SKU) |
| `manufacture` | manufacture | body | string | 否 | - | 关键词-按供应商查询(seekType=供应商) |
| `proName` | proName | body | string | 否 | - | 关键词-按产品名查询(seekType=proName) |
| `batchSku` | batchSku | body | string | 否 | - | 关键词-按批量SKU查询(seekType=batchSku) |
| `productName` | productName | body | string | 否 | - | 关键词-按商品名称查询(seekType=productName) |
| `englishTitle` | englishTitle | body | string | 否 | - | 关键词-按英文标题查询(seekType=englishTitle) |
| `proNameForAny` | proNameForAny | body | string | 否 | - | 关键词-按产品名模糊(任意)查询(seekType=proNameForAny) |
| `fuzzyQuery` | fuzzyQuery | body | string | 否 | - | 关键词-全文模糊查询(seekType=fuzzy，经 processSpacedStrings 处理) |
| `location` | location | body | string | 否 | - | 关键词-按仓位查询(seekType=location) |
| `spu` | spu | body | string | 否 | - | 关键词-按SPU查询(默认搜索类型) |
| `hasSubmitSale` | hasSubmitSale | body | string | 否 | - | 是否已售卖(取自 isshop) |
| `salesStatus` | salesStatus | body | string | 否 | - | 销量状态(多选逗号拼接，无选则空串) |
| `status` | status | body | string | 否 | - | 产品状态(多选逗号拼接，无选则空串) |
| `orderBy` | orderBy | body | string | 否 | - | 降序排序字段(flag=6 取 localStorage.ranks，否则取 #SKUselect 值) |
| `buyer` | buyer | body | string | 否 | - | 采购员(多选逗号拼接，无选则空串) |
| `numType` | numType | body | string | 否 | - | 库存数量类型(默认'1') |
| `savenum1` | savenum1 | body | string | 否 | - | 库存范围-下限 |
| `savenum2` | savenum2 | body | string | 否 | - | 库存范围-上限 |
| `propertiesid` | propertiesid | body | string | 否 | - | 商品属性(多选逗号拼接，无选则空串) |
| `startDate` | startDate | body | string | 否 | - | 开发时间-起始(timmer[0]) |
| `endDate` | endDate | body | string | 否 | - | 开发时间-结束(timmer[1]) |
| `reduceCost` | reduceCost | body | string | 否 | - | 降本筛选 |
| `tort` | tort | body | string | 否 | - | 侵权筛选 |
| `minSalesVolume30` | minSalesVolume30 | body | string | 否 | - | 近30天销量-下限(salesnum1) |
| `maxSalesVolume30` | maxSalesVolume30 | body | string | 否 | - | 近30天销量-上限(salesnum2) |
| `hjreserve4` | hjreserve4 | body | string | 否 | - | 王牌国家(kingCountries 多选逗号拼接) |
| `hjreserve6` | hjreserve6 | body | string | 否 | - | 王牌平台(kingPlatform 多选逗号拼接) |
| `priceflag` | priceflag | body | string | 否 | - | 是否黑马 |
| `forbidPlatformIdList` | forbidPlatformIdList | body | array | 否 | - | 过滤禁售平台ID列表(filterForBid) |
| `applicablePlatformList` | applicablePlatformList | body | array | 否 | - | 适用平台列表(applicablePlatformSelect) |
| `minWeight` | minWeight | body | string | 否 | - | 重量-下限 |
| `maxWeight` | maxWeight | body | string | 否 | - | 重量-上限 |
| `minCostPrice` | minCostPrice | body | string | 否 | - | 成本-下限(mainCostPrice) |
| `maxCostprice` | maxCostprice | body | string | 否 | - | 成本-上限(MaxCostprice) |
| `minreserve14` | minreserve14 | body | string | 否 | - | 刊登量-下限 |
| `maxreserve14` | maxreserve14 | body | string | 否 | - | 刊登量-上限 |
| `storageNew` | storageNew | body | string | 否 | - | 发货仓库 |
| `applicableSiteList` | applicableSiteList | body | array | 否 | - | 适用站点列表(applicableSite) |
| `productTagList` | productTagList | body | array | 否 | - | 包含商品标签列表(productTag) |
| `notContainsProductTagList` | notContainsProductTagList | body | array | 否 | - | 不包含商品标签列表(productTag2) |
| `riskLevel` | riskLevel | body | string | 否 | - | 风险等级 |
| `allBrandId` | allBrandId | body | boolean | 否 | - | 全部品牌标记(Briefoption 含 'all' 时 true；含 'empt' 时 false) |
| `brandId` | brandId | body | array | 否 | - | 品牌ID列表(Briefoption 非 all/empt 时传) |
| `allCertification` | allCertification | body | boolean | 否 | - | 全部认证标记(certificationList 含 'all' 时 true；含 'empt' 时 false) |
| `certificationList` | certificationList | body | array | 否 | - | 认证列表(非 all/empt 时传) |
| `whitePublishShop` | whitePublishShop | body | string | 否 | - | 白名单刊登店铺(数组 join 逗号拼接) |
| `smallSection` | smallSection | body | string | 否 | - | 小件区间(有值才传) |
| `largeSection` | largeSection | body | string | 否 | - | 大件区间(有值才传) |
| `positionId` | positionId | body | string | 否 | - | 岗位ID(取自 localStorage，无则空串) |
| `spotcheck` | spotcheck | body | string | 否 | - | 是否已抽检 |
| `buyflag` | buyflag | body | string | 否 | - | 是否轻小件(取自 buyflags) |
| `purchaseFlag` | purchaseFlag | body | string | 否 | - | 采样备货(当前固定传空串) |
| `lowratecnt` | lowratecnt | body | number | 否 | - | 低星率(lowratecnt 有值时固定 1) |
| `negativeRefundrate` | negativeRefundrate | body | number | 否 | - | 负毛利退款率(negativeRefundrate 有值时固定 1) |
| `tkVideo` | tkVideo | body | string | 否 | - | 是否有TikTok视频(tkVideo 有值时固定 '2') |
| `isAccount` | isAccount | body | string | 否 | - | 是否账期供应商(多选逗号拼接，无选则空串) |
| `returns` | returns | body | string | 否 | - | 供应商退换货情况(多选逗号拼接，无选则空串) |
| `oper4` | oper4 | body | array | 否 | - | 销售(saleOper，无选则空数组) |
| `isBoutique` | isBoutique | body | string | 否 | - | 是否中高单价精品(baseDate.isBoutique) |
| `keyWords` | keyWords | body | array | 否 | - | 包含关键字 |
| `keyWords2` | keyWords2 | body | array | 否 | - | 快速搜索关键字(baseDate.keywordArr) |
| `isServeXnc` | isServeXnc | body | string | 否 | - | 是否虚拟仓特供(baseDate.isServeXnc) |
| `notContainsKeyWords` | notContainsKeyWords | body | array | 否 | - | 不包含关键字(notkeyWords) |
| `provinces` | provinces | body | array | 否 | - | 省(city 中 type=1 解析，city 有值时传) |
| `citys` | citys | body | array | 否 | - | 城市(city 中 type=2 解析，city 有值时传) |
| `price5` | price5 | body | array | 否 | - | 仓库类型(warehouse，无选则空数组) |
| `specialmark` | specialmark | body | string | 否 | - | 商品特殊标记 |
| `myStatus` | myStatus | body | string | 否 | - | 查看我的(_switchmycheck 为真='1'，否则空串) |
| `result` | result | body | string | 否 | - | 结果筛选(1=亏损;2=缺货;3=自建，baseDate.result) |
| `advancedSpu` | advancedSpu | body | string | 否 | - | 高级搜索SPU(searchstatus=1 时传 searchspu) |
| `oper` | oper | body | string | 否 | - | 开发员(window.operlist) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(导出前5000条时前端覆盖为 5000) |
| `keyWords3` | keyWords3 | body | array | 否 | - | 侧边查询关键字(极速版 mark=1，valstr 存在时传 [valstr]) |
| `projectSpu` | projectSpu | body | string | 否 | - | 侧边项目SPU查询(mark=1，无 valstr 时传 spuCode) |
| `attentionSkuFlag` | attentionSkuFlag | body | string | 否 | - | 我关注的标记(attentionNum=1 时置空) |
| `page` | page | body | number | 是 | - | 当前页码(默认 1) |
| `isTort` | isTort | body | string | 否 | - | 是否侵权(baseDate.isTort，可为 null) |
| `isVideo` | isVideo | body | number | 否 | - | 是否有视频(0/1，baseDate.isVideo) |
| `hasSpuLimitPrice` | hasSpuLimitPrice | body | string | 否 | - | 是否有SPU限价(baseDate.hasSpuLimitPrice) |
| `storagebinflag` | storagebinflag | body | string | 否 | - | 仓位标记(storagebinflag) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(拦截器据此返回 obj) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(前端取此为 result) | - |
| `obj.esDataList[]` | array | 待导出ES数据列表;为空时前端提示「暂无可导出数据」 | - |
| `obj.esDataList[]` | string | 原始SKU;前端 map 取出后 join(',') 作为 skuStr 传给 saveProductReport | - |
| `obj.sourceBuilderString` | string | ES查询构造串;type=2(导出所有)时回传给 saveProductReport 的 sourceBuilderString | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
