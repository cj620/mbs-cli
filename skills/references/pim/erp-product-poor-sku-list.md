<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-poor-sku-list

国内不良库存SKU列表查询：国内/海外仓不良库存SKU分页查询：按SKU、海外仓类型、直邮类型、销量级别、产品状态、开发员(开发组员)、采购员等条件筛选，返回不良库存SKU列表及SKU/SPU总数与各项汇总。

## 用法

```bash
mbs pim erp-product-poor-sku-list --pageSize <number> --pageNum <number> [--skuList <array>] [--overseasType <array>] [--directMailType <array>] [--salesLevel <array>] [--productStatus <array>] [--developer <array>] [--purchaser <array>] [--lastProcurement <array>] [--highProcurement <array>] [--orderBy <number>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/indonesia/poorSkuList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(可选 50/100/200/300，默认50) |
| `pageNum` | pageNum | body | number | 是 | - | 当前页码(默认1) |
| `skuList` | skuList | body | array | 否 | - | SKU列表(输入框按空格拆分，空则传 []) |
| `overseasType` | overseasType | body | array | 否 | - | 海外仓类型(多选，值为 warehouseTypeId) |
| `directMailType` | directMailType | body | array | 否 | - | 直邮类型(多选，枚举：TEMU仓/JIT仓/上海代发仓) |
| `salesLevel` | salesLevel | body | array | 否 | - | 销量级别(多选，值为 typeName) |
| `productStatus` | productStatus | body | array | 否 | - | 产品状态(多选，枚举：正常/清仓/停产/自动创建/暂停销售) |
| `developer` | developer | body | array | 否 | - | 开发员/开发组员(组员姓名；未选时默认取全部组员名) |
| `purchaser` | purchaser | body | array | 否 | - | 采购员(多选，选项来自 getEmpByDep depId=65) |
| `lastProcurement` | lastProcurement | body | array | 否 | - | 末次采购备货人(多选，前端本页过滤用，仍随请求提交) |
| `highProcurement` | highProcurement | body | array | 否 | - | 滞销分析占比最高备货人(多选，前端本页过滤用，仍随请求提交) |
| `orderBy` | orderBy | body | number | 否 | - | 排序字段(降序=列prop+1，升序=列prop+2，清除=null，默认3) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的SKU总条数 | - |
| `obj.infoList[]` | array | 不良库存SKU列表(表格行数据) | - |
| `obj.infoList[][0]` | string | SKU编码(行主键) | - |
| `obj.infoList[][1]` | string | 商品图片URL | - |
| `obj.infoList[][2]` | number | 成本价 | - |
| `obj.infoList[][3]` | string | 销量级别 | - |
| `obj.infoList[][4]` | string | 产品状态(正常/清仓/停产/自动创建/暂停销售) | - |
| `obj.infoList[][5]` | string | 开发员 | - |
| `obj.infoList[][6]` | string | 采购员(为空时前端展示 '--') | - |
| `obj.infoList[][7]` | number | 7天日均销量 | - |
| `obj.infoList[][8]` | number | 30天日均销量 | - |
| `obj.infoList[][9]` | number | 可用库存/不良库存(海外仓取中仓库存，直邮取可用库存) | - |
| `obj.infoList[][10]` | number | 不良库存金额 | - |
| `obj.infoList[][11]` | number | 可售天数(不良库存/30天日均销量；空展示 'N') | - |
| `obj.infoList[][12]` | number | 不良在途数量(在途&下单) | - |
| `obj.infoList[][13]` | number | 不良在途金额 | - |
| `obj.infoList[][14]` | number | 在途可售天数(不良在途数量/30天日均销量；空展示 'N') | - |
| `obj.infoCount` | object | 汇总统计对象(表格合计行) | - |
| `obj.infoCount.skuTotal` | number | SKU总数 | - |
| `obj.infoCount.spuTotal` | number | SPU总数 | - |
| `obj.infoCount.sevenDaySalesNumTotal` | number | 7天日均销量合计 | - |
| `obj.infoCount.thirtyDaySalesNumTotal` | number | 30天日均销量合计 | - |
| `obj.infoCount.domInvTotal` | number | 可用/不良库存合计 | - |
| `obj.infoCount.domInvAmountTotal` | number | 不良库存金额合计 | - |
| `obj.infoCount.buyNumTotal` | number | 不良在途数量合计 | - |
| `obj.infoCount.buyNumAmountTotal` | number | 不良在途金额合计 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
