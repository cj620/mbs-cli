<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-query-distinct-create-oper

获取建单员：获取建单员

## 用法

```bash
mbs pim instudio-pms-query-distinct-create-oper
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/photoOrder/queryDistinctCreateOper`
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
| `desc` | string | 错误类型。前端使用：是（取值，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.employee_id` | string | 员工ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.expressId` | string | 快递ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.orderType` | string | 订单类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.orderId` | string | 订单ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spu` | string | SPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sku` | string | SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuImg` | string | SKU图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.costPrice` | string | 成本价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.orderNum` | string | 订单数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.amount` | string | 金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developer` | string | 开发者（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developerLeader` | string | 开发者组长（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.createOper` | string | 创建操作（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.responsible` | string | Responsible（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.createOrderTime` | string | 创建订单时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.signinTime` | string | Signin时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.signinNum` | string | Signin数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.signinOper` | string | Signin操作（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.returnNum` | string | 退货数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.returnTime` | string | 退货时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.lossesNum` | string | Losses数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.lossesOper` | string | Losses操作（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.lossesTime` | string | Losses时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.lossesReason` | string | Losses原因（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.lossesPictures` | string | LossesPictures（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sid` | string | 店铺ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.photoSkuStatus` | string | 图片SKU状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.url` | string | URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.photoRemark` | string | 图片备注（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuTitle` | string | SKU标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pictures` | string | Pictures（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：是（取值，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
