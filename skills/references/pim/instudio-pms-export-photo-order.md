# mbs pim instudio-pms-export-photo-order

导出拍照订单：导出拍照订单

## 用法

```bash
mbs pim instudio-pms-export-photo-order [--orderType <string>] [--orderId <string>] [--orderStatus <array<string>>] [--photoOrderStatus <array<string>>] [--developer <array<string>>] [--developerLeader <array<string>>] [--orderCreateOper <array<string>>] [--sku <array<string>>] [--spu <array<string>>] [--signInTimeStart <string>] [--signInTimeEnd <string>] [--returnTimeStart <string>] [--returnTimeEnd <string>] [--currentPage <integer>] [--pageSize <integer>] [--startNum <integer>] [--endNum <integer>] [--managerNames <string>] [--lableType <string>] [--createOrderTimeStart <string>] [--createOrderTimeEnd <string>] [--lossesTimeStart <string>] [--lossesTimeEnd <string>] [--signinOper <array<string>>] [--photoRemark <string>] [--spus <array<string>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/photoOrder/exportPhotoOrder`
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


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
