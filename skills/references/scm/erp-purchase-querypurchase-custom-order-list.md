# mbs scm erp-purchase-querypurchase-custom-order-list

采购定制订单明细列表查询：采购任务页(purchaseTask)「制作/条码/财务」页签中，展开某供应商行时按 manufactureId 拉取该供应商下的定制订单明细列表，支持SKU/SPU/供应商/批次/订单号/平台单号/订单状态/采购状态/核销状态/到货状态/同步状态/采购时间区间等多维筛选与排序，返回订单明细列表(含定制内容图文、成本、店铺、采购与签收信息)。

## 用法

```bash
mbs scm erp-purchase-querypurchase-custom-order-list [--productId <string>] [--skuStatus <string>] [--spu <string>] [--manufacture <string>] [--groupId <string>] [--orderId <string>] [--platformOrderId <string>] [--orderStatus <array>] [--banSendFlag <number>] [--purchaseStatus <string>] [--customerReq <string>] [--lableContent <string>] [--isConfirm <number>] [--financeStatus <string>] [--signFlag <number>] [--purchaseStartDate <string>] [--purchaseEndDate <string>] [--syncStatus <string>] [--purchaseFlag <number>] [--sort <string>] [--order <string>] [--key <number>] --pageSize <number> --manufactureId <string> --page <number>
```

## API

- Service: `erpPurchase`
- Method: `POST`
- Path: `/erpPurchase/erpPurchase/purchaseCustomOrder/querypurchaseCustomOrderList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `productId` | productId | body | string | 否 | - | SKU编号(关键词) |
| `skuStatus` | skuStatus | body | string | 否 | - | 产品状态。枚举：正常/清仓/停产/自动创建/暂停销售 |
| `spu` | spu | body | string | 否 | - | SPU编号(可多选逗号分隔；purchaseFlag==2时为单个spu) |
| `manufacture` | manufacture | body | string | 否 | - | 供应商(关键词) |
| `groupId` | groupId | body | string | 否 | - | 采购批次(批次号) |
| `orderId` | orderId | body | string | 否 | - | 订单号 |
| `platformOrderId` | platformOrderId | body | string | 否 | - | 平台单号 |
| `orderStatus` | orderStatus | body | array | 否 | - | 订单状态(多选)。枚举：已支付/配货中/已发货/作废。默认['配货中','已支付'] |
| `banSendFlag` | banSendFlag | body | number | 否 | - | 是否禁止(禁发)。枚举：0=未禁止；1=已禁止 |
| `purchaseStatus` | purchaseStatus | body | string | 否 | - | 采购状态。枚举：''=所有；采购中；签收；已完成 |
| `customerReq` | customerReq | body | string | 否 | - | 定制内容(关键词) |
| `lableContent` | lableContent | body | string | 否 | - | 条码值 |
| `isConfirm` | isConfirm | body | number | 否 | - | 是否确认定制信息。枚举：''=全部；0=未确认；1=已确认 |
| `financeStatus` | financeStatus | body | string | 否 | - | 核销状态。枚举：正常/未核销/已核销 |
| `signFlag` | signFlag | body | number | 否 | - | 到货状态。枚举：0=未确认到货；1=已确认到货正确；2=已确认到货错误 |
| `purchaseStartDate` | purchaseStartDate | body | string | 否 | - | 采购开始时间(YYYY-MM-DD) |
| `purchaseEndDate` | purchaseEndDate | body | string | 否 | - | 采购结束时间(YYYY-MM-DD) |
| `syncStatus` | syncStatus | body | string | 否 | - | 同步状态(大众定制)。枚举：未同步/待同步/已同步 |
| `purchaseFlag` | purchaseFlag | body | number | 否 | - | 页签类型。0=制作；1=条码；2=财务/已删除 |
| `sort` | sort | body | string | 否 | - | 排序字段(来自selection.order.sort)。枚举：delayDays/manufacture |
| `order` | order | body | string | 否 | - | 排序方向(来自selection.order.order，覆盖同名order对象键)。枚举：asc/desc |
| `key` | key | body | number | 否 | - | 排序选项key。1=延迟天数升序；2=延迟天数降序；3=供应商升序；4=供应商降序 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(默认50) |
| `manufactureId` | manufactureId | body | string | 是 | - | 供应商ID(取自展开行MANUFACTUREID，本接口按供应商拉取明细的关键入参) |
| `page` | page | body | number | 是 | - | 当前页码(本调用固定=1) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.list[]` | array | 定制订单明细列表 | - |
| `obj.list[][0]` | string | 定制订单明细ID(主键) | - |
| `obj.list[][1]` | string | 销售订单明细ID(批量同步标识) | - |
| `obj.list[][2]` | string | SKU图片URL | - |
| `obj.list[][3]` | string | 订单编号 | - |
| `obj.list[][4]` | string | 订单状态(已支付/配货中/已发货/作废) | - |
| `obj.list[][5]` | string | 禁发标记(值为'已禁止'时标注) | - |
| `obj.list[][6]` | string | 财务核销状态(正常/未核销/已核销) | - |
| `obj.list[][7]` | string | SPU编号 | - |
| `obj.list[][8]` | string | SKU开发员 | - |
| `obj.list[][9]` | string | SKU编号 | - |
| `obj.list[][10]` | string | SKU状态(正常/清仓/停产/自动创建/暂停销售) | - |
| `obj.list[][11]` | number | 所属公司ID(1=胤元；33=启元) | - |
| `obj.list[][12]` | string | 条码值(purchaseFlag==1展示) | - |
| `obj.list[][13]` | string | 供应商 | - |
| `obj.list[][14]` | number | SKU成本价 | - |
| `obj.list[][15]` | string | 产品标题 | - |
| `obj.list[][16]` | number | 订单数量 | - |
| `obj.list[][17]` | string | 店铺名称 | - |
| `obj.list[][18]` | string | 店铺负责人/销售 | - |
| `obj.list[][19]` | string | 同步状态(未同步/待同步/已同步，大众定制) | - |
| `obj.list[][20]` | number | 是否已确认定制信息(1=已确认) | - |
| `obj.list[][21]` | string | 定制内容1(文本) | - |
| `obj.list[][22][]` | array | 定制内容1图片列表 | - |
| `obj.list[][23]` | string | 定制内容2(文本) | - |
| `obj.list[][24][]` | array | 定制内容2图片列表 | - |
| `obj.list[][25]` | string | 效果图内容(文本) | - |
| `obj.list[][26]` | boolean | 是否显示效果图列 | - |
| `obj.list[][27][]` | array | 效果图图片列表 | - |
| `obj.list[][28]` | string | 订单时间 | - |
| `obj.list[][29]` | string | 发货时间 | - |
| `obj.list[][30]` | string | 采购批次号(purchaseFlag!=0展示) | - |
| `obj.list[][31]` | string | 采购状态 | - |
| `obj.list[][32]` | string | 采购运单号(purchaseFlag!=0展示) | - |
| `obj.list[][33]` | string | 采购平台单号(purchaseFlag!=0展示) | - |
| `obj.list[][34]` | string | 签收备注(purchaseFlag!=0展示) | - |
| `obj.list[][35][]` | array | 签收照片列表(purchaseFlag!=0展示) | - |
| `obj.list[][36]` | string | 财务备注(purchaseFlag==2展示) | - |
| `obj.list[][37]` | string | 删除原因(purchaseFlag==2展示) | - |
| `obj.list[][38]` | string | 采购单下载地址 | - |
| `obj.list[][39]` | string | 图包下载地址 | - |
| `obj.list[][40]` | string | 订单备注(内层展开行展示) | - |
| `obj.list[][41]` | string | 平台留言(内层展开行展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
