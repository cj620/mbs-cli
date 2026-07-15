# mbs pim instudio-pms-get-photo-order

获取列表：获取列表

## 用法

```bash
mbs pim instudio-pms-get-photo-order [--orderType <string>] [--orderId <string>] [--orderStatus <array<string>>] [--photoOrderStatus <array<string>>] [--developer <array<string>>] [--developerLeader <array<string>>] [--orderCreateOper <array<string>>] [--sku <array<string>>] [--spu <array<string>>] [--signInTimeStart <string>] [--signInTimeEnd <string>] [--returnTimeStart <string>] [--returnTimeEnd <string>] [--currentPage <integer>] [--pageSize <integer>] [--startNum <integer>] [--endNum <integer>] [--managerNames <string>] [--lableType <string>] [--createOrderTimeStart <string>] [--createOrderTimeEnd <string>] [--lossesTimeStart <string>] [--lossesTimeEnd <string>] [--signinOper <array<string>>] [--photoRemark <string>] [--spus <array<string>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/photoOrder/getPhotoOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderType` | orderType | body | string | 否 | - | 订单类型（字段名推断,语义待核实） |
| `orderId` | orderId | body | string | 否 | - | 订单ID（字段名推断,语义待核实） |
| `orderStatus` | orderStatus | body | array<string> | 否 | - | 订单状态（字段名推断,语义待核实） |
| `photoOrderStatus` | photoOrderStatus | body | array<string> | 否 | - | 图片订单状态（字段名推断,语义待核实） |
| `developer` | developer | body | array<string> | 否 | - | 开发者（字段名推断,语义待核实） |
| `developerLeader` | developerLeader | body | array<string> | 否 | - | 开发者组长（字段名推断,语义待核实） |
| `orderCreateOper` | orderCreateOper | body | array<string> | 否 | - | 订单创建操作（字段名推断,语义待核实） |
| `sku` | sku | body | array<string> | 否 | - | SKU（字段名推断,语义待核实） |
| `spu` | spu | body | array<string> | 否 | - | SPU（字段名推断,语义待核实） |
| `signInTimeStart` | signInTimeStart | body | string | 否 | - | 签名入库时间开始（字段名推断,语义待核实） |
| `signInTimeEnd` | signInTimeEnd | body | string | 否 | - | 签名入库时间结束（字段名推断,语义待核实） |
| `returnTimeStart` | returnTimeStart | body | string | 否 | - | 退货时间开始（字段名推断,语义待核实） |
| `returnTimeEnd` | returnTimeEnd | body | string | 否 | - | 退货时间结束（字段名推断,语义待核实） |
| `currentPage` | currentPage | body | integer | 否 | - | 当前页码（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `startNum` | startNum | body | integer | 否 | - | 开始数量（字段名推断,语义待核实） |
| `endNum` | endNum | body | integer | 否 | - | 结束数量（字段名推断,语义待核实） |
| `managerNames` | managerNames | body | string | 否 | - | 管理名称列表（字段名推断,语义待核实） |
| `lableType` | lableType | body | string | 否 | - | Lable类型（字段名推断,语义待核实） |
| `createOrderTimeStart` | createOrderTimeStart | body | string | 否 | - | 创建订单时间开始（字段名推断,语义待核实） |
| `createOrderTimeEnd` | createOrderTimeEnd | body | string | 否 | - | 创建订单时间结束（字段名推断,语义待核实） |
| `lossesTimeStart` | lossesTimeStart | body | string | 否 | - | Losses时间开始（字段名推断,语义待核实） |
| `lossesTimeEnd` | lossesTimeEnd | body | string | 否 | - | Losses时间结束（字段名推断,语义待核实） |
| `signinOper` | signinOper | body | array<string> | 否 | - | Signin操作（字段名推断,语义待核实） |
| `photoRemark` | photoRemark | body | string | 否 | - | 拍照备注 |
| `spus` | spus | body | array<string> | 否 | - | 拍照备注spu |

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
