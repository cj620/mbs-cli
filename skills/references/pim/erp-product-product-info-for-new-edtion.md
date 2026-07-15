<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-product-info-for-new-edtion

我的关注商品数量查询：经理工作台首页通知区调用，以 attentionSkuFlag=1(只看我关注的SKU)、pageSize=1 触发商品信息分页查询(新版)，仅取返回 obj.count(关注商品总数)用于通知区计数展示。

## 用法

```bash
mbs pim erp-product-product-info-for-new-edtion [--fuzzyQuery <string>] [--hasSubmitSale <string>] [--salesStatus <string>] [--status <string>] [--orderBy <string>] [--buyer <string>] [--numType <string>] [--savenum1 <string>] [--savenum2 <string>] [--propertiesid <string>] [--startDate <string>] [--endDate <string>] [--reduceCost <string>] [--tort <string>] [--minSalesVolume30 <string>] [--maxSalesVolume30 <string>] [--hjreserve4 <string>] [--hjreserve6 <string>] [--priceflag <string>] [--forbidPlatformIdList <array>] [--brandId <array>] [--applicablePlatformList <array>] [--minWeight <string>] [--maxWeight <string>] [--minCostPrice <string>] [--maxCostprice <string>] [--minreserve14 <string>] [--maxreserve14 <string>] [--storageNew <string>] [--applicableSiteList <array>] [--productTagList <array>] [--notContainsProductTagList <array>] [--riskLevel <string>] [--whitePublishShop <string>] [--positionId <string>] [--spotcheck <string>] [--buyflag <string>] [--purchaseFlag <string>] [--isAccount <string>] [--returns <string>] [--oper4 <array>] [--isBoutique <string>] [--keyWords <array>] [--keyWords2 <array>] [--isServeXnc <string>] [--notContainsKeyWords <array>] [--price5 <array>] [--specialmark <string>] [--myStatus <string>] [--result <string>] [--oper <string>] --pageSize <number> [--keyWords3 <array>] [--projectSpu <string>] --attentionSkuFlag <number> --page <number> [--isVideo <number>] [--storagebinflag <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/productInfoForNewEdtion`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `fuzzyQuery` | fuzzyQuery | body | string | 否 | - | 全文模糊查询关键词(本次空) |
| `hasSubmitSale` | hasSubmitSale | body | string | 否 | - | 是否已提交销售(本次空) |
| `salesStatus` | salesStatus | body | string | 否 | - | 销量状态(本次空) |
| `status` | status | body | string | 否 | - | 产品状态(本次空) |
| `orderBy` | orderBy | body | string | 否 | - | 排序字段，固定 HJRESERVE9 |
| `buyer` | buyer | body | string | 否 | - | 采购员(本次空) |
| `numType` | numType | body | string | 否 | - | 数量类型，固定 1 |
| `savenum1` | savenum1 | body | string | 否 | - | 库存数量筛选下限(本次空) |
| `savenum2` | savenum2 | body | string | 否 | - | 库存数量筛选上限(本次空) |
| `propertiesid` | propertiesid | body | string | 否 | - | 商品属性ID(本次空) |
| `startDate` | startDate | body | string | 否 | - | 开发时间-起始(本次空) |
| `endDate` | endDate | body | string | 否 | - | 开发时间-结束(本次空) |
| `reduceCost` | reduceCost | body | string | 否 | - | 降本筛选(本次空) |
| `tort` | tort | body | string | 否 | - | 侵权筛选(本次空) |
| `minSalesVolume30` | minSalesVolume30 | body | string | 否 | - | 近30天销量下限(本次空) |
| `maxSalesVolume30` | maxSalesVolume30 | body | string | 否 | - | 近30天销量上限(本次空) |
| `hjreserve4` | hjreserve4 | body | string | 否 | - | 预留字段4筛选(本次空) |
| `hjreserve6` | hjreserve6 | body | string | 否 | - | 预留字段6筛选(本次空) |
| `priceflag` | priceflag | body | string | 否 | - | 价格标记筛选(本次空) |
| `forbidPlatformIdList` | forbidPlatformIdList | body | array | 否 | - | 禁售平台ID列表(本次空数组) |
| `brandId` | brandId | body | array | 否 | - | 品牌ID列表(本次空数组) |
| `applicablePlatformList` | applicablePlatformList | body | array | 否 | - | 适用平台列表(本次空数组) |
| `minWeight` | minWeight | body | string | 否 | - | 重量下限(本次空) |
| `maxWeight` | maxWeight | body | string | 否 | - | 重量上限(本次空) |
| `minCostPrice` | minCostPrice | body | string | 否 | - | 成本价下限(本次空) |
| `maxCostprice` | maxCostprice | body | string | 否 | - | 成本价上限(本次空) |
| `minreserve14` | minreserve14 | body | string | 否 | - | 预留字段14下限(本次空) |
| `maxreserve14` | maxreserve14 | body | string | 否 | - | 预留字段14上限(本次空) |
| `storageNew` | storageNew | body | string | 否 | - | 新库存筛选(本次空) |
| `applicableSiteList` | applicableSiteList | body | array | 否 | - | 适用站点列表(本次空数组) |
| `productTagList` | productTagList | body | array | 否 | - | 商品标签列表(本次空数组) |
| `notContainsProductTagList` | notContainsProductTagList | body | array | 否 | - | 不包含的商品标签列表(本次空数组) |
| `riskLevel` | riskLevel | body | string | 否 | - | 风险等级筛选(本次空) |
| `whitePublishShop` | whitePublishShop | body | string | 否 | - | 白名单刊登店铺(本次空) |
| `positionId` | positionId | body | string | 否 | - | 岗位ID，固定 99 |
| `spotcheck` | spotcheck | body | string | 否 | - | 是否已抽检(本次空) |
| `buyflag` | buyflag | body | string | 否 | - | 是否轻小件(本次空) |
| `purchaseFlag` | purchaseFlag | body | string | 否 | - | 是否采样备货(本次空) |
| `isAccount` | isAccount | body | string | 否 | - | 是否账期供应商(本次空) |
| `returns` | returns | body | string | 否 | - | 退货筛选(本次空) |
| `oper4` | oper4 | body | array | 否 | - | 开发员筛选4(本次空数组) |
| `isBoutique` | isBoutique | body | string | 否 | - | 是否精品(本次空) |
| `keyWords` | keyWords | body | array | 否 | - | 关键词列表(本次空数组) |
| `keyWords2` | keyWords2 | body | array | 否 | - | 关键词列表2(本次空数组) |
| `isServeXnc` | isServeXnc | body | string | 否 | - | 是否服务小能虫/虚拟仓(本次空) |
| `notContainsKeyWords` | notContainsKeyWords | body | array | 否 | - | 不包含的关键词列表(本次空数组) |
| `price5` | price5 | body | array | 否 | - | 价格区间5筛选(本次空数组) |
| `specialmark` | specialmark | body | string | 否 | - | 特殊标记筛选(本次空) |
| `myStatus` | myStatus | body | string | 否 | - | 我的状态筛选(本次空) |
| `result` | result | body | string | 否 | - | 结果筛选(本次空) |
| `oper` | oper | body | string | 否 | - | 开发员(本次空) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，固定 1(仅取计数，不取列表) |
| `keyWords3` | keyWords3 | body | array | 否 | - | 关键词列表3(本次空数组) |
| `projectSpu` | projectSpu | body | string | 否 | - | 项目SPU(本次空) |
| `attentionSkuFlag` | attentionSkuFlag | body | number | 是 | - | 关注SKU标记，固定 1=只查询「我关注的」商品(本接口核心入参) |
| `page` | page | body | number | 是 | - | 当前页码，固定 1 |
| `isVideo` | isVideo | body | number | 否 | - | 是否有视频，固定 0 |
| `storagebinflag` | storagebinflag | body | string | 否 | - | 仓位标记筛选(本次空) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一包络,本调用未直接读取) | - |
| `desc` | string | 响应提示信息(统一包络,本调用未直接读取) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件(我关注)的商品总数——前端唯一取用字段,赋给 Myconcern 并渲染到通知区 num | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
