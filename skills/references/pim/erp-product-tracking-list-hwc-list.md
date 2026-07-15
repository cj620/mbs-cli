<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-tracking-list-hwc-list

真实海外仓跟踪单列表查询：真实海外仓(HWC)跟踪单分页列表查询：按时间类型/时间区间、货件编号、货件状态、海外仓、SKU、酋长/店长等条件筛选，返回跟踪单汇总列表(货件、发/收数量、损耗、金额、运费、状态等)及总条数与总页数。

## 用法

```bash
mbs pim erp-product-tracking-list-hwc-list --page <number> [--dateType <string>] [--startDate <string>] [--endDate <string>] [--groupId <string>] [--chiefList <array>] [--operList <array>] [--fbaStatus <array>] [--shopIds <array>] [--sku <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/hwcProduct/trackingListHwcList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码。search()固定传1；分页回调传api.getCurrent()当前页 |
| `dateType` | dateType | body | string | 否 | - | 时间类型(来源下拉#dateType)。1=创建时间;2=更新时间 |
| `startDate` | startDate | body | string | 否 | - | 起始时间(来源日期框#startDate,placeholder=任务生成时间) |
| `endDate` | endDate | body | string | 否 | - | 结束时间(来源日期框#endDate) |
| `groupId` | groupId | body | string | 否 | - | 货件编号(来源输入框#groupId) |
| `chiefList` | chiefList | body | array | 否 | - | 酋长列表(来源#bigChif值按逗号拆分;该控件已注释,当前恒为空数组) |
| `operList` | operList | body | array | 否 | - | 店长/组员列表(来源#shopmanger值按逗号拆分;该控件已注释,当前恒为空数组) |
| `fbaStatus` | fbaStatus | body | array | 否 | - | 货件状态(来源下拉#fbaStatus值按逗号拆分)。枚举:运输中/上架中/已上架/已取消 |
| `shopIds` | shopIds | body | array | 否 | - | 海外仓店铺ID列表(来源下拉#shopContent值按逗号拆分,值=海外仓shopId) |
| `sku` | sku | body | string | 否 | - | SKU(来源输入框#sku) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(框架统一返回,前端未直接判断) | - |
| `desc` | string | 响应提示信息(框架统一返回) | - |
| `obj` | object | 业务数据对象(前端以if(data.obj)判空) | - |
| `obj.count` | number | 满足条件的跟踪单总条数(写入#total,每页50条) | - |
| `obj.countPage` | number | 总页数(传入分页组件pageCount) | - |
| `obj.result[]` | array | 跟踪单列表 | - |
| `obj.result[][0]` | string | 货件编号(主键标识,行data-id,展开子SKU详情时回传) | - |
| `obj.result[][1]` | string | 海外仓名称 | - |
| `obj.result[][2]` | string | 海外仓店长/管理员(展示于海外仓单元格内) | - |
| `obj.result[][3]` | string | 订单号 | - |
| `obj.result[][4]` | string | 渠道名称(物流渠道类型) | - |
| `obj.result[][5]` | number | SKU种类数 | - |
| `obj.result[][6]` | number | 总发货数量 | - |
| `obj.result[][7]` | number | 总接收数量 | - |
| `obj.result[][8]` | number | 发货总金额 | - |
| `obj.result[][9]` | number | 损耗量 | - |
| `obj.result[][10]` | number | 损耗金额(头程+商品成本) | - |
| `obj.result[][11]` | number | 称重重量(g) | - |
| `obj.result[][12]` | number | 预估重量(g) | - |
| `obj.result[][13]` | number | 头程运费 | - |
| `obj.result[][14]` | string | 货件状态(运输中/上架中/已上架/已取消) | - |
| `obj.result[][15]` | string | 创建人 | - |
| `obj.result[][16]` | string | 创建时间 | - |
| `obj.result[][17]` | string | 上次更新时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
