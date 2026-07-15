<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-spu-country-sales

获取开发项目的国家15天销量和总销量：获取开发项目的国家15天销量和总销量

## 用法

```bash
mbs pim instudio-pms-get-spu-country-sales --developmentProjectId <string>
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/developmentProject/getSpuCountrySales`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `developmentProjectId` | developmentProjectId | query | string | 是 | - | Development项目ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（取值，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（取值,条件判断，行号待核实） | - |
| `obj.obj.list` | string | 列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spuImage` | string | SPU图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spu` | string | SPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tort` | string | 侵权（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spuTitle` | string | SPU标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.properties` | string | 属性（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.saleLevel` | string | 销售级别（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishVolume` | string | 刊登体积（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.orderNum` | string | 订单数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.saleAmount` | string | 销售金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.profitAmount` | string | 利润金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.servenSaleAmount` | string | Serven销售金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.thirtySaleAmount` | string | 30天销售金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.ninetySaleAmount` | string | 90天销售金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spuDeloveper` | string | SPUDeloveper（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spuCreateDate` | string | SPU创建日期（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.levelCount` | string | 级别数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.COUNTRY` | string | 国家（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.COUNTRYSALA` | string | Countrysala（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.COUNTRYSALAALL` | string | Countrysalaall（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.PLATFORM` | string | 平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.PLATFORMSALE` | string | Platformsale（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.PLATFORMSALEALL` | string | Platformsaleall（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.FIFTYAMOUNT` | string | Fiftyamount（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.AMOUNT` | string | 金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.PROFIT` | string | 利润（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.PROFITRATE` | string | Profitrate（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.cost` | string | 成本（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.purchaseAmount` | string | 采购金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.rebackAmount` | string | Reback金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.weight` | string | 重量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developmetVolumeRate` | string | Developmet体积比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishVolumeRate` | string | 刊登体积比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.purchaseAmountRate` | string | 采购金额比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.firstSaleAmountRate` | string | 首个销售金额比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.secondSaleAmountRate` | string | 秒销售金额比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developmentVolumeSpuCount` | string | Development体积SPU数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.actualDevelopmentVolumeSpuCount` | string | 实际Development体积SPU数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developmentVolumeDate` | string | Development体积日期（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishVolumeCount` | string | 刊登体积数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.actualPublishVolumeCount` | string | 实际刊登体积数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishVolumeDate` | string | 刊登体积日期（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.actualPurhcaseAmount` | string | 实际Purhcase金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.purchaseAmountDate` | string | 采购金额日期（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.firstSaleAmount` | string | 首个销售金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.actualFirstSaleAmount` | string | 实际首个销售金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.firstSaleAmountTime` | string | 首个销售金额时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.secondSaleAmount` | string | 秒销售金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.actualSecondSaleAmount` | string | 实际秒销售金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.secondSaleAmountTime` | string | 秒销售金额时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.createDate` | string | 创建日期（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.projectDeveloper` | string | 项目开发者（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.projectContent` | string | 项目内容（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.secondSaleAmountType` | string | 秒销售金额类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.firstSaleAmountType` | string | 首个销售金额类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.projectDeadlineTime` | string | 项目Deadline时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
