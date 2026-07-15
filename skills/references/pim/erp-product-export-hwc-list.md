# mbs pim erp-product-export-hwc-list

真实海外仓跟踪单-导出：「真实海外仓跟踪单」页面的导出接口。以与列表查询(trackingListHwcList)完全相同的筛选条件异步生成 Excel 导出文件。前端 myAxios.post(..., {download: true}) 触发浏览器下载并提示'已创建下载'。响应为 Excel 文件流，下表 response 为导出文件数据列(与列表行字段同源)。

## 用法

```bash
mbs pim erp-product-export-hwc-list --page <number> [--dateType <string>] [--startDate <string>] [--endDate <string>] [--groupId <string>] [--chiefList <array>] [--operList <array>] [--fbaStatus <array>] [--shopIds <array>] [--sku <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/hwcProduct/exportHwcList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码，导出时固定传 1 |
| `dateType` | dateType | body | string | 否 | - | 时间类型(枚举)。1=创建时间;2=更新时间。来源下拉 #dateType |
| `startDate` | startDate | body | string | 否 | - | 起始时间(按 dateType 对应创建/更新时间，yyyy-MM-dd)。来源日期控件 #startDate |
| `endDate` | endDate | body | string | 否 | - | 结束时间(yyyy-MM-dd)。来源日期控件 #endDate |
| `groupId` | groupId | body | string | 否 | - | 货件编号。来源输入框 #groupId |
| `chiefList` | chiefList | body | array | 否 | - | 酋长(leader)ID列表，字符串数组。取 #bigChif 值按逗号拆分(控件已注释，实际传空数组) |
| `operList` | operList | body | array | 否 | - | 店长(组员)列表，字符串数组。取 #shopmanger 值按逗号拆分(控件已注释，实际传空数组) |
| `fbaStatus` | fbaStatus | body | array | 否 | - | 货件状态列表，字符串数组。取 #fbaStatus 值按逗号拆分。枚举:运输中/上架中/已上架/已取消 |
| `shopIds` | shopIds | body | array | 否 | - | 海外仓店铺ID列表，字符串数组。取 #shopContent 值按逗号拆分(选项来自 getHwcList 的 shopId/shopName) |
| `sku` | sku | body | string | 否 | - | SKU。来源输入框 #sku |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `groupId` | string | 货件编号(列表展开/明细的分组主键) | - |
| `shopName` | string | 海外仓名称 | - |
| `shopManager` | string | 海外仓店长/管理员 | - |
| `orderId` | string | 订单号 | - |
| `expressType` | string | 渠道名称(物流渠道) | - |
| `skuCount` | number | SKU种类数 | - |
| `outputNum` | number | 总发货数量 | - |
| `inputNum` | number | 总接收数量 | - |
| `skuAmount` | number | 发货总金额 | - |
| `lossNum` | number | 损耗量(发货数-接收数) | - |
| `lossAmount` | number | 损耗金额(头程+商品成本) | - |
| `weight` | number | 称重重量(g) | - |
| `predictWeight` | number | 预估重量(g) | - |
| `shippingFee` | number | 头程运费 | - |
| `fbaStatus` | string | 货件状态(运输中/上架中/已上架/已取消) | - |
| `createOper` | string | 创建人 | - |
| `createDate` | string | 创建时间 | - |
| `updateTime` | string | 上次更新时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
