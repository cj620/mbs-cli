# mbs pim instudio-pms-batch-upd-sku-info

Product批量修改：Product批量修改

## 用法

```bash
mbs pim instudio-pms-batch-upd-sku-info [--type <integer>] [--sku <string>] [--nameEn <string>] [--name <string>] [--productweight <number>] [--tagid <integer>] [--guideprice <number>] [--warehouseid <integer>] [--positionid <integer>] [--positionname <string>] [--warningday <integer>] [--purchaseday <integer>] [--purchasenotes <string>] [--materialid <integer>] [--suppyid <string>] [--suppyUrl <string>] [--suppyUrlhande <string>] [--supplyUrl1 <string>] [--createdBy <string>] [--purchaseSkuPrice <number>] [--platform <string>] [--state <integer>] [--states <string>] [--receiveId <integer>] [--supplyname <string>] [--wangwang <string>] [--productLength <number>] [--productWidth <number>] [--productHeight <number>] [--productVolume <number>] [--productLiquidVolume <number>] [--attrnams <string>] [--skuattribute <string>] [--sellerLoginId <string>] [--spuId <string>] [--spuName <string>] [--batch <integer>] [--supplySkuStatus <string>] [--specId <string>] [--tort <string>] [--isAutoPurchaseSupply <integer>] [--bindingnum <integer>] [--publishColor <string>] [--publishSize <string>] [--saler <string>] [--suppyskuprice <number>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/product/batchUpdSkuInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `type` | type | body | integer | 否 | - | 判断修改类型 |
| `sku` | sku | body | string | 否 | - | sku数组 |
| `nameEn` | name_en | body | string | 否 | - | 英文名称 |
| `name` | name | body | string | 否 | - | 中文名称 |
| `productweight` | productweight | body | number | 否 | - | 重量 |
| `tagid` | tagid | body | integer | 否 | - | 特殊标记 id |
| `guideprice` | guideprice | body | number | 否 | - | 供货价 |
| `warehouseid` | warehouseid | body | integer | 否 | - | 仓库id |
| `positionid` | positionid | body | integer | 否 | - | 仓位id |
| `positionname` | positionname | body | string | 否 | - | 仓位名称 |
| `warningday` | warningday | body | integer | 否 | - | 警戒天数 |
| `purchaseday` | purchaseday | body | integer | 否 | - | 采购天数 |
| `purchasenotes` | purchasenotes | body | string | 否 | - | 采购备注 |
| `materialid` | materialid | body | integer | 否 | - | 包材id |
| `suppyid` | suppyid | body | string | 否 | - | 供应商id |
| `suppyUrl` | suppyUrl | body | string | 否 | - | 供应商url 考api |
| `suppyUrlhande` | suppyUrlhande | body | string | 否 | - | 手动 供应商链接 |
| `supplyUrl1` | supplyUrl1 | body | string | 否 | - | 供应商首页地址 |
| `createdBy` | createdBy | body | string | 否 | - | 创建人 |
| `purchaseSkuPrice` | purchaseSkuPrice | body | number | 否 | - | 采购单价 |
| `platform` | platform | body | string | 否 | - | 平台id |
| `state` | state | body | integer | 否 | - | 状态（字段名推断,语义待核实） |
| `states` | states | body | string | 否 | - | sku 状态 |
| `receiveId` | receiveId | body | integer | 否 | - | 收货ID（字段名推断,语义待核实） |
| `supplyname` | supplyname | body | string | 否 | - | 因需求修改 此处供应商名称 改为旺旺 |
| `wangwang` | wangwang | body | string | 否 | - | 旺旺账号 |
| `productLength` | product_length | body | number | 否 | - | 长 |
| `productWidth` | product_width | body | number | 否 | - | 宽 |
| `productHeight` | product_height | body | number | 否 | - | 高 |
| `productVolume` | product_volume | body | number | 否 | - | 包装体积 |
| `productLiquidVolume` | product_liquid_volume | body | number | 否 | - | 液体体积 |
| `attrnams` | attrnams | body | string | 否 | - | Attrnams（字段名推断,语义待核实） |
| `skuattribute` | skuattribute | body | string | 否 | - | Skuattribute（字段名推断,语义待核实） |
| `sellerLoginId` | sellerLoginId | body | string | 否 | - | 卖家登录ID（字段名推断,语义待核实） |
| `spuId` | spuId | body | string | 否 | - | SPUID（字段名推断,语义待核实） |
| `spuName` | spuName | body | string | 否 | - | SPU名称（字段名推断,语义待核实） |
| `batch` | batch | body | integer | 否 | - | 批次（字段名推断,语义待核实） |
| `supplySkuStatus` | supplySkuStatus | body | string | 否 | - | 供应SKU状态（字段名推断,语义待核实） |
| `specId` | specId | body | string | 否 | - | 规格ID（字段名推断,语义待核实） |
| `tort` | tort | body | string | 否 | - | 是否侵权 1是 |
| `isAutoPurchaseSupply` | isAutoPurchaseSupply | body | integer | 否 | - | 是否是自动采购供应商 |
| `bindingnum` | bindingnum | body | integer | 否 | - | Bindingnum（字段名推断,语义待核实） |
| `publishColor` | publish_color | body | string | 否 | - | 刊登颜色 |
| `publishSize` | publish_size | body | string | 否 | - | 刊登大小 |
| `saler` | saler | body | string | 否 | - | Saler（字段名推断,语义待核实） |
| `suppyskuprice` | suppyskuprice | body | number | 否 | - | 供应商单价 |

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
