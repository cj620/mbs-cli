<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-export-project-view

导出海外仓任务列表：导出海外仓任务列表

## 用法

```bash
mbs pim instudio-pms-export-project-view [--currentPage <integer>] [--dateCodeGeq <string>] [--dateCodeLeq <string>] [--logisticsType <string>] [--nameLike <string>] [--nowScheduleType <string>] [--pageSize <integer>] [--sku <string>] [--sortValue <string>] [--warehouseTypeId <string>] [--skuList <array<string>>] [--start <integer>] [--end <integer>] [--createby <string>] [--managerEmployeeList <array<string>>] [--flag <boolean>] [--projectIdList <array<integer>>] [--companyid <integer>] [--shopList <array<string>>] [--departFlag <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/hwcDevelopmentProject/exportProjectView`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | integer | 否 | - | 当前页码（字段名推断,语义待核实） |
| `dateCodeGeq` | dateCodeGeq | body | string | 否 | - | 日期编码GEQ（字段名推断,语义待核实） |
| `dateCodeLeq` | dateCodeLeq | body | string | 否 | - | 日期编码LEQ（字段名推断,语义待核实） |
| `logisticsType` | logisticsType | body | string | 否 | - | 物流类型（字段名推断,语义待核实） |
| `nameLike` | nameLike | body | string | 否 | - | 名称LIKE（字段名推断,语义待核实） |
| `nowScheduleType` | nowScheduleType | body | string | 否 | - | NOW定时类型（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `sku` | sku | body | string | 否 | - | SKU（字段名推断,语义待核实） |
| `sortValue` | sortValue | body | string | 否 | - | 排序值（字段名推断,语义待核实） |
| `warehouseTypeId` | warehouseTypeId | body | string | 否 | - | 仓库类型ID（字段名推断,语义待核实） |
| `skuList` | skuList | body | array<string> | 否 | - | SKU列表（字段名推断,语义待核实） |
| `start` | start | body | integer | 否 | - | 开始（字段名推断,语义待核实） |
| `end` | end | body | integer | 否 | - | 结束（字段名推断,语义待核实） |
| `createby` | createby | body | string | 否 | - | Createby（字段名推断,语义待核实） |
| `managerEmployeeList` | managerEmployeeList | body | array<string> | 否 | - | 管理员工列表（字段名推断,语义待核实） |
| `flag` | flag | body | boolean | 否 | - | 标志（字段名推断,语义待核实） |
| `projectIdList` | projectIdList | body | array<integer> | 否 | - | 项目ID列表（字段名推断,语义待核实） |
| `companyid` | companyid | body | integer | 否 | - | Companyid（字段名推断,语义待核实） |
| `shopList` | shopList | body | array<string> | 否 | - | 店铺列表（字段名推断,语义待核实） |
| `departFlag` | departFlag | body | integer | 否 | - | 0销售部, 1产品部 |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
