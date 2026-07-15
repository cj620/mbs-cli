<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-tracking-list-fba-details

FBA跟踪单-货件SKU明细查询：FBA跟踪单报表中，点击某条 FBA 货件行的“点击看sku详情”时触发：以货件编号(groupId)为主键，结合时间类型/起止时间/FBA货件状态/SKU 条件，查询该货件下各 SKU 的发货数、接收数、损耗、重量、头程运费、状态等明细，渲染到展开的子表格。

## 用法

```bash
mbs pim erp-product-tracking-list-fba-details --groupId <string> [--dateType <string>] [--startDate <string>] [--endDate <string>] [--fbaStatus <array>] [--sku <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/fbaProduct/trackingListFbaDetails`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `groupId` | groupId | body | string | 是 | - | FBA货件编号(列表行 data-id，点击展开行传入的 ids；定位要查明细的货件) |
| `dateType` | dateType | body | string | 否 | - | 时间类型(来源控件 #dateType 下拉)。1=创建时间;2=更新时间 |
| `startDate` | startDate | body | string | 否 | - | 起始日期(来源 #startDate 日期控件，按 dateType 对应时间过滤，格式 yyyy-MM-dd) |
| `endDate` | endDate | body | string | 否 | - | 结束日期(来源 #endDate 日期控件，格式 yyyy-MM-dd) |
| `fbaStatus` | fbaStatus | body | array | 否 | - | FBA货件状态列表(来源 #fbaStatus 下拉 split 成数组)。取值枚举：WORKING/SHIPPED/IN_TRANSIT/DELIVERED/CHECKED_IN/RECEIVING/CLOSED/CANCELLED/DELETED/ERROR(未选时传空数组) |
| `sku` | sku | body | string | 否 | - | SKU(来源 #sku 输入框，按 SKU 过滤明细) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 该 FBA 货件下的 SKU 明细列表(前端判空：无 obj 则不渲染) | - |
| `obj[][0]` | string | SKU/产品编号(明细行 SKU 标识) | - |
| `obj[][1]` | number | 总发货数量 | - |
| `obj[][2]` | number | FBA总接收数量 | - |
| `obj[][3]` | number | 损耗量(发货-接收) | - |
| `obj[][4]` | number | 损耗金额(头程+商品成本) | - |
| `obj[][5]` | number | 称重重量(g) | - |
| `obj[][6]` | number | 预估重量(g) | - |
| `obj[][7]` | number | 头程运费 | - |
| `obj[][8]` | string | FBA货件状态(枚举：WORKING/SHIPPED/IN_TRANSIT/DELIVERED/CHECKED_IN/RECEIVING/CLOSED/CANCELLED/DELETED/ERROR) | - |
| `obj[][9]` | string | 创建人 | - |
| `obj[][10]` | string | 创建时间 | - |
| `obj[][11]` | string | 上次更新时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
