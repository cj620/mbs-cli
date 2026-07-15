<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-top-thirty-refund-sku-list

开发中台查看当月退款TOP30的sku：开发中台查看当月退款TOP30的sku

## 用法

```bash
mbs pim instudio-pms-get-top-thirty-refund-sku-list [--sku <string>] [--refundFee <string>] [--detail <string>] [--seller <string>] [--dateTime <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/skuManager/getTopThirtyRefundSkuList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | body | string | 否 | - | SKU（字段名推断,语义待核实） |
| `refundFee` | refundFee | body | string | 否 | - | 退款费用（字段名推断,语义待核实） |
| `detail` | detail | body | string | 否 | - | 详情（字段名推断,语义待核实） |
| `seller` | seller | body | string | 否 | - | 卖家（字段名推断,语义待核实） |
| `dateTime` | dateTime | body | string | 否 | - | 日期时间（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.class` | string | 类（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.rate` | string | 比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developmentNum` | string | Development数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.chiefInfo` | string | 主管信息（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.status` | string | 状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.times` | string | 次数（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sku` | string | SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.refundFee` | string | 退款费用（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.detail` | string | 详情（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developer` | string | 开发者（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuOper` | string | SKU操作（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.position` | string | 位置（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.chartType` | string | 图表类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.time` | string | 时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
