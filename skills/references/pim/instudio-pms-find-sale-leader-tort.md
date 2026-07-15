<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-sale-leader-tort

编辑侵权：编辑侵权

## 用法

```bash
mbs pim instudio-pms-find-sale-leader-tort [--id <integer>] [--saleLeader <string>] [--tortId <integer>] [--tagStatus <integer>] [--tagDate <string>] [--createdBy <integer>] [--createdOn <string>] [--sku <string>] [--spu <string>] [--employeeName <string>] [--platformId <string>] [--platformName <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/productTort/findSaleLeaderTort`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `saleLeader` | saleLeader | body | string | 否 | - | 销售组长（字段名推断,语义待核实） |
| `tortId` | tortId | body | integer | 否 | - | 侵权ID（字段名推断,语义待核实） |
| `tagStatus` | tagStatus | body | integer | 否 | - | 标签状态（字段名推断,语义待核实） |
| `tagDate` | tagDate | body | string | 否 | - | 标签日期（字段名推断,语义待核实） |
| `createdBy` | createdBy | body | integer | 否 | - | 创建人（字段名推断,语义待核实） |
| `createdOn` | createdOn | body | string | 否 | - | 创建（字段名推断,语义待核实） |
| `sku` | sku | body | string | 否 | - | SKU（字段名推断,语义待核实） |
| `spu` | spu | body | string | 否 | - | SPU（字段名推断,语义待核实） |
| `employeeName` | employeeName | body | string | 否 | - | 员工名称（字段名推断,语义待核实） |
| `platformId` | platformId | body | string | 否 | - | 平台ID（字段名推断,语义待核实） |
| `platformName` | platformName | body | string | 否 | - | 平台名称（字段名推断,语义待核实） |

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
