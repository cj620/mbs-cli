<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-export-walmart-shop

查询导出沃尔玛店铺：查询导出沃尔玛店铺(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-get-export-walmart-shop
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/walmart/auto/getExportWalmartShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（解构赋值，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（条件判断,解构赋值，行号待核实） | - |
| `obj.obj.platformId` | string | 平台ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.logisticsname` | string | Logisticsname（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.lazadaType` | string | Lazada类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopid` | string | 店铺ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopName` | string | 店铺名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.description` | string | 描述（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.executStatus` | string | Execut状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.freight` | string | 运费（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.site` | string | 站点（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformRate` | string | 平台比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.paypalEmail` | string | PayPal邮箱（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.priceFloatMax` | string | 价格Float最大（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.discount` | string | 折扣（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.priceFloatMin` | string | 价格Float最小（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.profitRate` | string | 利润比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.refundRate` | string | 退款比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.reportAllQuantity` | string | 报表全部数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.reportFiledataQuantity` | string | 报表Filedata数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.reportMode` | string | 报表模式（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.saleRange` | string | 销售范围（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.saleRangeMax` | string | 销售范围最大（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.saleRangeMin` | string | 销售范围最小（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.selloper` | string | Selloper（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.purchaseCountry` | string | 采购国家（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.factorymarketShopStr` | string | Factorymarket店铺字符串（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuAttribute` | string | SKU属性（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuCategory` | string | SKU类目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuStatus` | string | SKU状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuCreatedateEndStr` | string | SKUCreatedate结束字符串（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuCreatedateStartStr` | string | SKUCreatedate开始字符串（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sortCondition` | string | 排序条件（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.stockRangeMin` | string | 库存范围最小（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.stockRangeMax` | string | 库存范围最大（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.costRangeMin` | string | 成本范围最小（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.costRangeMax` | string | 成本范围最大（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.weightRangeMin` | string | 重量范围最小（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.weightRangeMax` | string | 重量范围最大（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.deliverRange` | string | 配送范围（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.deliverRangeMin` | string | 配送范围最小（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.deliverRangeMax` | string | 配送范围最大（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spuStr` | string | SPU字符串（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuStr` | string | SKU字符串（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.projectStr` | string | 项目字符串（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sid` | string | 店铺ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
