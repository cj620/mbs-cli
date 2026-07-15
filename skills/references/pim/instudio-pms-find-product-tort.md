<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-product-tort

侵权列表：侵权列表

## 用法

```bash
mbs pim instudio-pms-find-product-tort [--tortId <integer>] [--spu <string>] [--sku <string>] [--productName <string>] [--imgAddresss <string>] [--platform <string>] [--shop <string>] [--tortType <string>] [--solution <string>] [--remark <string>] [--createdBy <integer>] [--createdOn <string>] [--employeeId <string>] [--employeeName <string>] [--tortName <string>] [--paramValue <string>] [--flag <string>] [--startDate <string>] [--endDate <string>] [--tagStatus <string>] [--paltfromOrShop <array<string>>] [--tagCount <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/productTort/findProductTort`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `tortId` | tortId | body | integer | 否 | - | 侵权ID（字段名推断,语义待核实） |
| `spu` | spu | body | string | 否 | - | SPU（字段名推断,语义待核实） |
| `sku` | sku | body | string | 否 | - | SKU（字段名推断,语义待核实） |
| `productName` | productName | body | string | 否 | - | 商品名称（字段名推断,语义待核实） |
| `imgAddresss` | imgAddresss | body | string | 否 | - | 图片Addresss（字段名推断,语义待核实） |
| `platform` | platform | body | string | 否 | - | 平台（字段名推断,语义待核实） |
| `shop` | shop | body | string | 否 | - | 店铺（字段名推断,语义待核实） |
| `tortType` | tortType | body | string | 否 | - | 侵权类型（字段名推断,语义待核实） |
| `solution` | solution | body | string | 否 | - | Solution（字段名推断,语义待核实） |
| `remark` | remark | body | string | 否 | - | 备注（字段名推断,语义待核实） |
| `createdBy` | createdBy | body | integer | 否 | - | 创建人（字段名推断,语义待核实） |
| `createdOn` | createdOn | body | string | 否 | - | 创建（字段名推断,语义待核实） |
| `employeeId` | employeeId | body | string | 否 | - | 员工ID（字段名推断,语义待核实） |
| `employeeName` | employeeName | body | string | 否 | - | 员工名称（字段名推断,语义待核实） |
| `tortName` | tortName | body | string | 否 | - | 侵权名称（字段名推断,语义待核实） |
| `paramValue` | paramValue | body | string | 否 | - | 参数值（字段名推断,语义待核实） |
| `flag` | flag | body | string | 否 | - | 标志（字段名推断,语义待核实） |
| `startDate` | startDate | body | string | 否 | - | 开始日期（字段名推断,语义待核实） |
| `endDate` | endDate | body | string | 否 | - | 结束日期（字段名推断,语义待核实） |
| `tagStatus` | tagStatus | body | string | 否 | - | 标签状态（字段名推断,语义待核实） |
| `paltfromOrShop` | paltfromOrShop | body | array<string> | 否 | - | Paltfrom店铺（字段名推断,语义待核实） |
| `tagCount` | tagCount | body | integer | 否 | - | 标签数量（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj.total` | integer | 总数（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.totalPages` | integer | 总数Pages（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.rows[]` | array | 行数据（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.success` | boolean | 成功（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.desc` | string | 描述（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.code` | integer | 编码（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.footer[]` | array | Footer（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.sort` | string | 排序（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.order` | string | 订单（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
