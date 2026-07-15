<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-sku-img-color-size-tiktok-singlepublish-global-controller

获取sku尺码颜色：获取sku尺码颜色

## 用法

```bash
mbs pim instudio-pms-get-sku-img-color-size-tiktok-singlepublish-global-controller
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/tiktokSinglepublishGlobalController/getSkuImgColorSize`
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
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.erpSpu` | string | ERPSPU（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.erpSku` | string | ERPSKU（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.skuColor` | string | SKU颜色（字段名推断,语义待核实）。前端使用：是（列表行字段,条件判断，行号待核实） | - |
| `obj.obj.skuSize` | string | SKU大小（字段名推断,语义待核实）。前端使用：是（列表行字段,条件判断，行号待核实） | - |
| `obj.obj.skuPic` | string | SKU图片（字段名推断,语义待核实）。前端使用：是（列表行字段,条件判断，行号待核实） | - |
| `obj.obj.savenum` | integer | 保存数量（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.ordernum` | integer | 订单号（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.canUseNum` | integer | CANUSE数量（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.specialNum` | integer | 特殊数量（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.title` | string | 标题（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.description` | string | 描述（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.saleNotes` | string | 销售Notes（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.packageWeight` | number | 包裹重量（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.packageLength` | integer | 包裹长度（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.packageWidth` | integer | 包裹宽度（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.packageHeight` | integer | 包裹高度（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.status` | string | 状态（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.skuStatus` | string | SKU状态（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.costprice` | number | Costprice（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.siteNameZh` | string | 站点名称ZH（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.siteCode` | string | 站点编码（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.currency` | string | 币种（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.categoryId` | string | 类目ID（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.mabangCategoryName` | string | 马帮类目名称（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.siteLimit` | string | 站点限制（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.pictureUrl` | string | 图片URL（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.pictureStyle` | string | 图片样式（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.selectType` | integer | 查询类型（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.weight` | number | 重量（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.length` | number | 长度（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.width` | number | 宽度（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.height` | number | 高度（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.properties` | string | 属性（字段名推断,语义待核实）。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj.skus` | string | SKU列表（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.num` | number | 数量（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.globalInventoryList` | string | 全局库存列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.globalPriceList` | string | 全局价格列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.globalPlatformRateList` | string | 全局平台比率列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.globalProfitRateList` | string | 全局利润比率列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.globalOffRateList` | string | 全局下架比率列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value_name` | string | 值名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.globalPriceChannelList` | string | 全局价格渠道列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuId` | string | SKUID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishSku` | string | 刊登SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.img` | string | 图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.cusKey` | string | CUS键（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.site` | string | 站点（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.globalWarehouseList` | string | 全局仓库列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.warehouseId` | string | 仓库ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.relateImage` | string | Relate图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
