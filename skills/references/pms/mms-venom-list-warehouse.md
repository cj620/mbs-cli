# mbs pms mms-venom-list-warehouse

Temu 供应商销售管理-仓库(备货)库存列表查询：Temu 商家后台备货/库存分页列表查询：按店铺(mallid 头)、是否缺货、调价近N天、最大剩余库存数分页拉取 SKC 明细，返回缺货/售罄/即将售罄等汇总统计及每个 SKC 的 SKU 数量明细、多仓库存信息、价格与备货建议。

## 用法

```bash
mbs pms mms-venom-list-warehouse --isLack <number> --priceAdjustRecentDays <number> --maxRemanentInventoryNum <number> --pageNo <number> --pageSize <number>
```

## API

- Service: `mms/venom`
- Method: `POST`
- Path: `/mms/venom/api/supplier/sales/management/listWarehouse`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `isLack` | isLack | body | number | 是 | - | 是否只查缺货,当前固定传0 |
| `priceAdjustRecentDays` | priceAdjustRecentDays | body | number | 是 | - | 调价近N天(单位:天),当前固定传7 |
| `maxRemanentInventoryNum` | maxRemanentInventoryNum | body | number | 是 | - | 最大剩余库存数,当前固定传1 |
| `pageNo` | pageNo | body | number | 是 | - | 当前页码(从1开始) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数,当前固定传40 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `errorCode` | number | 错误码,0=成功 | - |
| `errorMsg` | string | 错误信息,成功时为null | - |
| `result` | object | 业务数据结果对象 | - |
| `result.shortageSkcNum` | unknown | 缺货SKC数量 | - |
| `result.shortageSkcRate` | unknown | 缺货SKC占比 | - |
| `result.suggestCloseJitSkcNum` | unknown | 建议关闭JIT的SKC数量 | - |
| `result.priceAdjustingSkcNum` | unknown | 调价中SKC数量 | - |
| `result.waitForStockSkcNum` | unknown | 待备货SKC数量 | - |
| `result.saleOutSkcNum` | number | 售罄SKC数量 | - |
| `result.saleOutSkcRate` | unknown | 售罄SKC占比 | - |
| `result.near15DaysSaleOutSkcRateList` | unknown | 近15天售罄SKC占比列表 | - |
| `result.soonSaleOutSkcNum` | number | 即将售罄SKC数量 | - |
| `result.soonSaleOutSkcRate` | unknown | 即将售罄SKC占比 | - |
| `result.subOrderList[]` | array | 商品(SKC)明细列表 | - |
| `result.subOrderList[][0]` | string | 商品名称 | - |
| `result.subOrderList[][1]` | string | 类目 | - |
| `result.subOrderList[][2]` | number | 商品SKC ID | - |
| `result.subOrderList[][3]` | string | 商品SKC图片URL | - |
| `result.subOrderList[][4]` | number | 供应商ID | - |
| `result.subOrderList[][5]` | string | 供应商名称 | - |
| `result.subOrderList[][6]` | number | 结算类型 | - |
| `result.subOrderList[][7][]` | array | SKU数量明细列表 | - |
| `result.subOrderList[][7][][0]` | number | 仓库组ID | - |
| `result.subOrderList[][7][][1]` | string | 仓库组名称 | - |
| `result.subOrderList[][7][][2]` | boolean | 是否可采购 | - |
| `result.subOrderList[][7][][3]` | number | 缺货数量 | - |
| `result.subOrderList[][7][][4]` | any | 建议数量 | - |
| `result.subOrderList[][7][][5]` | any | 可售天数 | - |
| `result.subOrderList[][7][][6]` | any | 基于库存的可售天数 | - |
| `result.subOrderList[][7][][7]` | number | 今日销量 | - |
| `result.subOrderList[][7][][8]` | number | 近7天销量 | - |
| `result.subOrderList[][7][][9]` | number | 近30天销量 | - |
| `result.subOrderList[][7][][10]` | number | 总销量 | - |
| `result.subOrderList[][7][][11]` | object | 库存数量信息 | - |
| `result.subOrderList[][7][][11].warehouseInventoryNum` | number | 仓库库存数量 | - |
| `result.subOrderList[][7][][11].waitQcNum` | number | 待质检数量 | - |
| `result.subOrderList[][7][][11].waitOnShelfNum` | number | 待上架数量 | - |
| `result.subOrderList[][7][][11].waitInStock` | number | 待入库数量 | - |
| `result.subOrderList[][7][][11].waitReceiveNum` | number | 待收货数量 | - |
| `result.subOrderList[][7][][11].waitDeliveryInventoryNum` | number | 待发货库存数量 | - |
| `result.subOrderList[][7][][11].waitApproveInventoryNum` | number | 待审核库存数量 | - |
| `result.subOrderList[][7][][11].deliveryDelayNum` | number | 发货延迟数量 | - |
| `result.subOrderList[][7][][11].arrivalDelayNum` | number | 到货延迟数量 | - |
| `result.subOrderList[][7][][11].salesInventoryNum` | number | 销售库存数量 | - |
| `result.subOrderList[][7][][11].unavailableWarehouseInventoryNum` | number | 不可用仓库库存数量 | - |
| `result.subOrderList[][7][][11].expectedOccupiedInventoryNum` | number | 预计占用库存数量 | - |
| `result.subOrderList[][7][][11].normalLockNumber` | number | 正常锁定数量 | - |
| `result.subOrderList[][7][][12]` | any | 仓库可售天数 | - |
| `result.subOrderList[][7][][13]` | number | 预测今日销量 | - |
| `result.subOrderList[][7][][14]` | any | 预测近7天销量 | - |
| `result.subOrderList[][7][][15]` | any | 预测近50天销量 | - |
| `result.subOrderList[][7][][16]` | any | 预测销售建议数量 | - |
| `result.subOrderList[][7][][17]` | any | 预测销售可售天数 | - |
| `result.subOrderList[][7][][18]` | any | 预测销售库存可售天数 | - |
| `result.subOrderList[][7][][19]` | any | 预测销售仓库可售天数 | - |
| `result.subOrderList[][7][][20]` | any | 建议采购数量上限 | - |
| `result.subOrderList[][7][][21]` | any | 建议采购数量下限 | - |
| `result.subOrderList[][7][][22]` | any | 7天销售参考 | - |
| `result.subOrderList[][7][][23]` | any | 7天参考销售类型 | - |
| `result.subOrderList[][7][][24]` | string | 采购配置 | - |
| `result.subOrderList[][7][][25]` | number | 安全库存天数 | - |
| `result.subOrderList[][7][][26]` | number | 备货天数 | - |
| `result.subOrderList[][7][][27]` | any | 算法命中 | - |
| `result.subOrderList[][7][][28]` | any | 实验类型 | - |
| `result.subOrderList[][7][][29]` | number | 采购限制天数 | - |
| `result.subOrderList[][7][][30]` | boolean | 是否显示备货引导 | - |
| `result.subOrderList[][7][][31]` | number | 商品SKU ID | - |
| `result.subOrderList[][7][][32]` | string | 规格名称 | - |
| `result.subOrderList[][7][][33]` | string | 货币类型 | - |
| `result.subOrderList[][7][][34]` | number | 供应商价格 | - |
| `result.subOrderList[][7][][35]` | any | 美元转人民币供应商价格 | - |
| `result.subOrderList[][7][][36]` | any | 汇率 | - |
| `result.subOrderList[][7][][37]` | any | 汇率分母 | - |
| `result.subOrderList[][7][][38]` | boolean | 是否降价通过 | - |
| `result.subOrderList[][7][][39]` | boolean | 是否已核价 | - |
| `result.subOrderList[][7][][40]` | number | 价格审核状态 | - |
| `result.subOrderList[][7][][41]` | string | SKU外部编码 | - |
| `result.subOrderList[][7][][42]` | number | 加购数量 | - |
| `result.subOrderList[][7][][43]` | boolean | 是否已调整 | - |
| `result.subOrderList[][7][][44]` | boolean | 是否订阅到货提醒 | - |
| `result.subOrderList[][7][][45]` | any | 货品SKU ID | - |
| `result.subOrderList[][7][][46]` | number | 无消息订阅计数(字段含义待人工确认) | - |
| `result.subOrderList[][7][][47]` | any | 商品调价状态 | - |
| `result.subOrderList[][7][][48]` | number | 近7天加购数量 | - |
| `result.subOrderList[][7][][49]` | any | 建议生产数量 | - |
| `result.subOrderList[][7][][50]` | any | 可生产数量 | - |
| `result.subOrderList[][7][][51]` | any | 采购标签 | - |
| `result.subOrderList[][7][][52]` | any | 区域采购标签 | - |
| `result.subOrderList[][7][][53]` | any | 销售库存数量 | - |
| `result.subOrderList[][7][][54][]` | array | 仓库信息列表 | - |
| `result.subOrderList[][7][][54][][0]` | number | 仓库组ID | - |
| `result.subOrderList[][7][][54][][1]` | string | 仓库组名称 | - |
| `result.subOrderList[][7][][54][][2]` | boolean | 是否可采购 | - |
| `result.subOrderList[][7][][54][][3]` | number | 缺货数量 | - |
| `result.subOrderList[][7][][54][][4]` | any | 建议数量 | - |
| `result.subOrderList[][7][][54][][5]` | any | 可售天数 | - |
| `result.subOrderList[][7][][54][][6]` | any | 基于库存的可售天数 | - |
| `result.subOrderList[][7][][54][][7]` | number | 今日销量 | - |
| `result.subOrderList[][7][][54][][8]` | number | 近7天销量 | - |
| `result.subOrderList[][7][][54][][9]` | number | 近30天销量 | - |
| `result.subOrderList[][7][][54][][10]` | number | 总销量 | - |
| `result.subOrderList[][7][][54][][11]` | object | 库存数量信息(结构同InventoryNumInfo,字段见r165~r177) | - |
| `result.subOrderList[][7][][54][][12]` | any | 仓库可售天数 | - |
| `result.subOrderList[][7][][54][][13]` | number | 预测今日销量 | - |
| `result.subOrderList[][7][][54][][14]` | any | 预测近7天销量 | - |
| `result.subOrderList[][7][][54][][15]` | any | 预测近50天销量 | - |
| `result.subOrderList[][7][][54][][16]` | any | 预测销售建议数量 | - |
| `result.subOrderList[][7][][54][][17]` | any | 预测销售可售天数 | - |
| `result.subOrderList[][7][][54][][18]` | any | 预测销售库存可售天数 | - |
| `result.subOrderList[][7][][54][][19]` | any | 预测销售仓库可售天数 | - |
| `result.subOrderList[][7][][54][][20]` | any | 建议采购数量上限 | - |
| `result.subOrderList[][7][][54][][21]` | any | 建议采购数量下限 | - |
| `result.subOrderList[][7][][54][][22]` | any | 7天销售参考 | - |
| `result.subOrderList[][7][][54][][23]` | any | 7天参考销售类型 | - |
| `result.subOrderList[][7][][54][][24]` | string | 采购配置 | - |
| `result.subOrderList[][7][][54][][25]` | number | 安全库存天数 | - |
| `result.subOrderList[][7][][54][][26]` | number | 备货天数 | - |
| `result.subOrderList[][7][][54][][27]` | any | 算法命中 | - |
| `result.subOrderList[][7][][54][][28]` | any | 实验类型 | - |
| `result.subOrderList[][7][][54][][29]` | number | 采购限制天数 | - |
| `result.subOrderList[][7][][54][][30]` | boolean | 是否显示备货引导 | - |
| `result.subOrderList[][8]` | object | SKU数量汇总信息 | - |
| `result.subOrderList[][8].productSkuId` | any | 商品SKU ID | - |
| `result.subOrderList[][8].className` | any | 规格名称 | - |
| `result.subOrderList[][8].currencyType` | any | 货币类型 | - |
| `result.subOrderList[][8].supplierPrice` | any | 供应商价格 | - |
| `result.subOrderList[][8].usd2cnySupplierPrice` | any | 美元转人民币供应商价格 | - |
| `result.subOrderList[][8].exchangeRate` | any | 汇率 | - |
| `result.subOrderList[][8].exchangeRateDenominator` | any | 汇率分母 | - |
| `result.subOrderList[][8].isReducePricePass` | any | 是否降价通过 | - |
| `result.subOrderList[][8].isVerifyPrice` | boolean | 是否已核价 | - |
| `result.subOrderList[][8].priceReviewStatus` | any | 价格审核状态 | - |
| `result.subOrderList[][8].lackQuantity` | number | 缺货数量(汇总) | - |
| `result.subOrderList[][8].adviceQuantity` | number | 建议数量(汇总) | - |
| `result.subOrderList[][8].availableSaleDays` | any | 可售天数 | - |
| `result.subOrderList[][8].availableSaleDaysFromInventory` | any | 基于库存的可售天数 | - |
| `result.subOrderList[][8].todaySaleVolume` | number | 今日销量(汇总) | - |
| `result.subOrderList[][8].lastSevenDaysSaleVolume` | number | 近7天销量(汇总) | - |
| `result.subOrderList[][8].lastThirtyDaysSaleVolume` | number | 近30天销量(汇总) | - |
| `result.subOrderList[][8].totalSaleVolume` | number | 总销量(汇总) | - |
| `result.subOrderList[][8].inventoryNumInfo` | object | 库存数量信息(结构同InventoryNumInfo,字段见r165~r177) | - |
| `result.subOrderList[][8].vmiOrderInfo` | any | VMI订单信息 | - |
| `result.subOrderList[][8].notVmiOrderInfo` | any | 非VMI订单信息 | - |
| `result.subOrderList[][8].warehouseAvailableSaleDays` | any | 仓库可售天数 | - |
| `result.subOrderList[][8].skuExtCode` | any | SKU外部编码 | - |
| `result.subOrderList[][8].inCardNumber` | number | 加购数量 | - |
| `result.subOrderList[][8].isAdjusted` | any | 是否已调整 | - |
| `result.subOrderList[][8].isSubscribeArrivalRemind` | any | 是否订阅到货提醒 | - |
| `result.subOrderList[][8].goodsSkuId` | any | 货品SKU ID | - |
| `result.subOrderList[][8].nomsgSubsCntCntSth` | number | 无消息订阅计数(字段含义待人工确认) | - |
| `result.subOrderList[][8].productPriceAdjustStatus` | any | 商品调价状态 | - |
| `result.subOrderList[][8].predictTodaySaleVolume` | number | 预测今日销量 | - |
| `result.subOrderList[][8].predictLastSevenDaysSaleVolume` | number | 预测近7天销量 | - |
| `result.subOrderList[][8].predictLastFiftyDaysSaleVolume` | number | 预测近50天销量 | - |
| `result.subOrderList[][8].predictSaleAdviceQuantity` | number | 预测销售建议数量 | - |
| `result.subOrderList[][8].predictSaleAvailableDays` | any | 预测销售可售天数 | - |
| `result.subOrderList[][8].predictSaleInventoryAvailableDays` | any | 预测销售库存可售天数 | - |
| `result.subOrderList[][8].predictSaleWarehouseAvailableDays` | any | 预测销售仓库可售天数 | - |
| `result.subOrderList[][8].suggestPurchaseNumUp` | any | 建议采购数量上限 | - |
| `result.subOrderList[][8].suggestPurchaseNumDown` | any | 建议采购数量下限 | - |
| `result.subOrderList[][8].sevenDaysSaleReference` | number | 7天销售参考 | - |
| `result.subOrderList[][8].sevenDaysReferenceSaleType` | any | 7天参考销售类型 | - |
| `result.subOrderList[][8].inCartNumber7d` | number | 近7天加购数量 | - |
| `result.subOrderList[][8].showStockGuide` | any | 是否显示备货引导 | - |
| `result.subOrderList[][8].adviceProduceNum` | any | 建议生产数量 | - |
| `result.subOrderList[][8].availableProduceNum` | any | 可生产数量 | - |
| `result.subOrderList[][8].purchaseConfig` | any | 采购配置 | - |
| `result.subOrderList[][8].purchaseLabel` | any | 采购标签 | - |
| `result.subOrderList[][8].salesInventoryNum` | number | 销售库存数量 | - |
| `result.subOrderList[][9]` | number | 商品ID | - |
| `result.subOrderList[][10]` | number | 图片审核状态 | - |
| `result.subOrderList[][11]` | string | SKC外部编码 | - |
| `result.subOrderList[][12]` | any | 采购员名称 | - |
| `result.subOrderList[][13]` | any | 采购员UID | - |
| `result.subOrderList[][14]` | number | 采购备货类型 | - |
| `result.subOrderList[][15]` | number | 货品ID | - |
| `result.subOrderList[][16]` | number | 加购数量 | - |
| `result.subOrderList[][17]` | boolean | 是否可调整 | - |
| `result.subOrderList[][18][]` | array | 广告类型列表(number[]) | - |
| `result.subOrderList[][19]` | boolean | 是否建议备货 | - |
| `result.subOrderList[][20]` | boolean | 今日是否已申请备货 | - |
| `result.subOrderList[][21]` | any | 今日申请备货时间 | - |
| `result.subOrderList[][22]` | any | 今日申请备货数量 | - |
| `result.subOrderList[][23]` | any | 备货状态 | - |
| `result.subOrderList[][24]` | any | 货品SKC ID | - |
| `result.subOrderList[][25]` | boolean | 是否首单 | - |
| `result.subOrderList[][26]` | number | 类目ID | - |
| `result.subOrderList[][27]` | any | 近3天相似商品点击数 | - |
| `result.subOrderList[][28]` | any | 近1周相似商品点击数 | - |
| `result.subOrderList[][29]` | any | 近1月相似商品点击数 | - |
| `result.subOrderList[][30]` | object | 定制信息 | - |
| `result.subOrderList[][30].isCustomGoods` | boolean | 是否定制商品 | - |
| `result.subOrderList[][30].limitNum` | any | 限制数量 | - |
| `result.subOrderList[][30].effectPicture` | any | 效果图 | - |
| `result.subOrderList[][31]` | number | 在售时长(下线) | - |
| `result.subOrderList[][32][]` | array | SKC标签列表 | - |
| `result.subOrderList[][33]` | number | 标记 | - |
| `result.subOrderList[][34]` | any | ASF评分 | - |
| `result.subOrderList[][35]` | number | 评论数 | - |
| `result.subOrderList[][36][]` | array | 商品BS选项 | - |
| `result.subOrderList[][37]` | boolean | 是否建议关闭JIT | - |
| `result.subOrderList[][38]` | number | 关闭JIT状态 | - |
| `result.subOrderList[][39]` | any | 质量售后率 | - |
| `result.subOrderList[][40]` | number | 供应状态 | - |
| `result.subOrderList[][41]` | string | 供应状态备注 | - |
| `result.subOrderList[][42]` | any | 预计正常供货时间 | - |
| `result.subOrderList[][43][]` | array | 商品属性列表 | - |
| `result.subOrderList[][43][][0]` | number | 模板属性ID | - |
| `result.subOrderList[][43][][1]` | number | 属性ID | - |
| `result.subOrderList[][43][][2]` | number | 引用属性ID | - |
| `result.subOrderList[][43][][3]` | string | 属性名称 | - |
| `result.subOrderList[][43][][4]` | number | 属性值ID | - |
| `result.subOrderList[][43][][5]` | string | 属性值 | - |
| `result.subOrderList[][43][][6]` | string | 值单位 | - |
| `result.subOrderList[][43][][7]` | string | 值扩展信息 | - |
| `result.subOrderList[][43][][8]` | string | 数字输入值 | - |
| `result.subOrderList[][43][][9]` | string | 展示属性值 | - |
| `result.subOrderList[][44]` | boolean | 是否缺货 | - |
| `result.subOrderList[][45]` | number | 库存区域 | - |
| `result.subOrderList[][46]` | boolean | 是否库存充足 | - |
| `result.subOrderList[][47]` | any | 申请变更供应状态 | - |
| `result.subOrderList[][48]` | boolean | 是否处罚VMI紧急订单 | - |
| `result.subOrderList[][49]` | any | SKC订单信息 | - |
| `result.subOrderList[][50]` | any | 今日平台采购信息 | - |
| `result.subOrderList[][51]` | boolean | 是否热销标签 | - |
| `result.subOrderList[][52]` | boolean | 是否含热销SKU | - |
| `result.subOrderList[][53]` | boolean | 是否自动关闭JIT | - |
| `result.subOrderList[][54]` | any | 自动关闭JIT倒计时 | - |
| `result.subOrderList[][55]` | any | 节假日标签列表 | - |
| `result.subOrderList[][56]` | any | 自定义标签列表 | - |
| `result.subOrderList[][57]` | any | 采购标签列表 | - |
| `result.subOrderList[][58]` | boolean | 是否在黑名单 | - |
| `result.subOrderList[][59]` | any | 商品生产周期天数 | - |
| `result.subOrderList[][60]` | any | 商品生产天数 | - |
| `result.subOrderList[][61]` | any | 是否有编辑生产计划日志 | - |
| `result.subOrderList[][62]` | any | 违规影响类型 | - |
| `result.subOrderList[][63]` | any | 违规原因 | - |
| `result.subOrderList[][64]` | any | 停售类型 | - |
| `result.subOrderList[][65]` | any | 停售开始时间 | - |
| `result.subOrderList[][66]` | any | 停售结束时间 | - |
| `result.subOrderList[][67]` | any | 春节是否不打烊 | - |
| `result.subOrderList[][68]` | any | 店铺国庆休息类型 | - |
| `result.subOrderList[][69][]` | array | 仓库组ID列表(number[]) | - |
| `result.subOrderList[][70]` | any | 限制采购员采购 | - |
| `result.subOrderList[][71]` | any | 命中规则明细列表 | - |
| `result.subOrderList[][72][]` | array | 店铺标签信息列表 | - |
| `result.subOrderList[][73]` | boolean | 是否广告商品 | - |
| `result.subOrderList[][74]` | any | 转售标签 | - |
| `result.subOrderList[][75]` | any | 是否亚洲码 | - |
| `result.near15DaysSoonSaleOutSkcRateList` | unknown | 近15天即将售罄SKC占比列表 | - |
| `result.adviceStockSkcNum` | number | 建议备货SKC数量 | - |
| `result.completelySoldOutSkcNum` | number | 完全售罄SKC数量 | - |
| `result.adSkcNum` | number | 广告SKC数量 | - |
| `result.completelySoldOutSkcRate` | unknown | 完全售罄SKC占比 | - |
| `result.near15DaysCompletelySoldOutSkcRateList` | unknown | 近15天完全售罄SKC占比列表 | - |
| `result.totalSkcNum` | unknown | SKC总数 | - |
| `result.waitFirstPurchaseSkcNum` | unknown | 待首采SKC数量 | - |
| `result.firstPurchaseNotShippedSkcNum` | unknown | 首采未发货SKC数量 | - |
| `result.addedToSiteSkcNum` | unknown | 已加站点SKC数量 | - |
| `result.unPublishedSkcNum` | unknown | 未发布SKC数量 | - |
| `result.lackNum` | number | 缺货数量 | - |
| `result.mallInfoList[]` | array | 店铺信息列表 | - |
| `result.mallInfoList[][0]` | number | 供应商ID | - |
| `result.mallInfoList[][1]` | boolean | 店铺是否关闭 | - |
| `result.customLabelPopUpConfig` | unknown | 自定义标签弹窗配置 | - |
| `result.total` | number | 满足条件的总记录数(前端据此与pageSize算总页数) | - |
| `result.hotInventoryLackNum` | number | 热销库存缺货数量 | - |
| `success` | boolean | 请求是否成功 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
