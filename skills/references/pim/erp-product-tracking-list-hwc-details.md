<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-tracking-list-hwc-details

真实海外仓跟踪单-SKU明细查询：真实海外仓(HWC)跟踪单列表中，点击某条货件行的“点击看sku详情”展开按钮时，按货件编号(groupId)+时间类型/区间+货件状态+SKU 查询该货件下的逐 SKU 明细(发货/接收数量、金额、损耗、重量、头程运费、货件状态等)，用于子表 sontableTemplate 渲染。

## 用法

```bash
mbs pim erp-product-tracking-list-hwc-details --groupId <string> [--dateType <string>] [--startDate <string>] [--endDate <string>] [--fbaStatus <array>] [--sku <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/hwcProduct/trackingListHwcDetails`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `groupId` | groupId | body | string | 是 | - | 货件编号(分组ID)。来源：被点击展开行的 data-id(即父列表 v.groupId)，由 getFbaDetails(ids) 的 ids 传入；或顶部 #groupId 货件编号输入框 |
| `dateType` | dateType | body | string | 否 | - | 时间类型(决定 startDate/endDate 作用于哪个时间)。1=创建时间;2=更新时间。来源控件 #dateType |
| `startDate` | startDate | body | string | 否 | - | 起始时间(yyyy-MM-dd，按 dateType 过滤)。来源控件 #startDate |
| `endDate` | endDate | body | string | 否 | - | 结束时间(yyyy-MM-dd，按 dateType 过滤)。来源控件 #endDate |
| `fbaStatus` | fbaStatus | body | array | 否 | - | 货件状态列表。前端取 #fbaStatus 值按逗号 split 成数组(无值时为空数组)。枚举单值：运输中/上架中/已上架/已取消 |
| `sku` | sku | body | string | 否 | - | SKU(按 SKU 过滤明细)。来源控件 #sku |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应包装，前端未直接读取，待人工确认) | - |
| `desc` | string | 响应提示信息(统一响应包装，待人工确认) | - |
| `obj[]` | array | SKU 货件明细列表(前端以 if(data.obj) 判空后渲染) | - |
| `obj[][0]` | string | 订单号 | - |
| `obj[][1]` | string | 渠道名称(快递/物流渠道类型) | - |
| `obj[][2]` | string | 产品ID/SKU(该货件下的具体 SKU 明细标识) | - |
| `obj[][3]` | number | 总发货数量 | - |
| `obj[][4]` | number | 总接收数量 | - |
| `obj[][5]` | number | 发货总金额 | - |
| `obj[][6]` | number | 损耗量(发货-接收的差额数量) | - |
| `obj[][7]` | number | 损耗金额(头程+商品成本) | - |
| `obj[][8]` | number | 称重重量(单位:g) | - |
| `obj[][9]` | number | 预估重量(单位:g) | - |
| `obj[][10]` | number | 头程运费 | - |
| `obj[][11]` | string | 货件状态(运输中/上架中/已上架/已取消) | - |
| `obj[][12]` | string | 创建人 | - |
| `obj[][13]` | string | 创建时间 | - |
| `obj[][14]` | string | 上次更新时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
