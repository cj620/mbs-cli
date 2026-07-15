<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-select-item-by-config-id

根据配置id查询出所有绑定的产品：根据配置id查询出所有绑定的产品

## 用法

```bash
mbs pim instudio-pms-select-item-by-config-id [--id <integer>] [--name <string>] [--shipTo <string>] [--createTime <string>] [--updateTime <string>] [--createBy <string>] [--updateBy <string>] [--createOper <integer>] [--updateOper <integer>] [--memo <string>] [--num <integer>] [--type <integer>] [--shipToMap <array<object>>] [--emps <array<string>>] [--checkTimeStart <string>] [--checkTimeEnd <string>] [--itemId <string>] [--shopName <string>] [--jumpUrl <string>] [--erpSpu <string>] [--recordId <integer>] [--configId <integer>] [--title <string>] [--publishSpu <string>] [--publishDate <string>] [--ids <array<integer>>] [--startIndex <integer>] [--pageSize <integer>] [--currentPage <integer>] [--totalPage <integer>] [--totalSize <integer>] [--itemSubmits <array<string>>] [--itemSubmitStr <string>] [--submitBy <string>] [--shiptotype <string>] [--submitDate <string>] [--submitType <integer>] [--batchId <string>] [--status <integer>] [--response <string>] [--refreshDate <string>] [--freightId <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/smtShiptoConfigurationController/selectItemByConfigId`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `name` | name | body | string | 否 | - | 名称（字段名推断,语义待核实） |
| `shipTo` | shipTo | body | string | 否 | - | 发货（字段名推断,语义待核实） |
| `createTime` | createTime | body | string | 否 | - | 创建时间（字段名推断,语义待核实） |
| `updateTime` | updateTime | body | string | 否 | - | 更新时间（字段名推断,语义待核实） |
| `createBy` | createBy | body | string | 否 | - | 创建人（字段名推断,语义待核实） |
| `updateBy` | updateBy | body | string | 否 | - | 更新人（字段名推断,语义待核实） |
| `createOper` | createOper | body | integer | 否 | - | 创建操作（字段名推断,语义待核实） |
| `updateOper` | updateOper | body | integer | 否 | - | 更新操作（字段名推断,语义待核实） |
| `memo` | memo | body | string | 否 | - | 备注（字段名推断,语义待核实） |
| `num` | num | body | integer | 否 | - | 数量（字段名推断,语义待核实） |
| `type` | type | body | integer | 否 | - | 1 相对加减 2相对百分数 |
| `shipToMap` | shipToMap | body | array<object> | 否 | - | 发货MAP（字段名推断,语义待核实） |
| `emps` | emps | body | array<string> | 否 | - | EMPS（字段名推断,语义待核实） |
| `checkTimeStart` | checkTimeStart | body | string | 否 | - | 校验时间开始（字段名推断,语义待核实） |
| `checkTimeEnd` | checkTimeEnd | body | string | 否 | - | 校验时间结束（字段名推断,语义待核实） |
| `itemId` | itemId | body | string | 否 | - | 条目ID（字段名推断,语义待核实） |
| `shopName` | shopName | body | string | 否 | - | 店铺名称（字段名推断,语义待核实） |
| `jumpUrl` | jumpUrl | body | string | 否 | - | JUMPURL（字段名推断,语义待核实） |
| `erpSpu` | erpSpu | body | string | 否 | - | ERPSPU（字段名推断,语义待核实） |
| `recordId` | recordId | body | integer | 否 | - | 记录ID（字段名推断,语义待核实） |
| `configId` | configId | body | integer | 否 | - | 配置ID（字段名推断,语义待核实） |
| `title` | title | body | string | 否 | - | 标题（字段名推断,语义待核实） |
| `publishSpu` | publishSpu | body | string | 否 | - | 刊登SPU（字段名推断,语义待核实） |
| `publishDate` | publishDate | body | string | 否 | - | 刊登日期（字段名推断,语义待核实） |
| `ids` | ids | body | array<integer> | 否 | - | ID列表（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `currentPage` | currentPage | body | integer | 否 | - | 当前页码（字段名推断,语义待核实） |
| `totalPage` | totalPage | body | integer | 否 | - | 总数页码（字段名推断,语义待核实） |
| `totalSize` | totalSize | body | integer | 否 | - | 总大小（字段名推断,语义待核实） |
| `itemSubmits` | itemSubmits | body | array<string> | 否 | - | 条目Submits（字段名推断,语义待核实） |
| `itemSubmitStr` | itemSubmitStr | body | string | 否 | - | 条目提交字符串（字段名推断,语义待核实） |
| `submitBy` | submitBy | body | string | 否 | - | 提交人（字段名推断,语义待核实） |
| `shiptotype` | shiptotype | body | string | 否 | - | Shiptotype（字段名推断,语义待核实） |
| `submitDate` | submitDate | body | string | 否 | - | 提交日期（字段名推断,语义待核实） |
| `submitType` | submitType | body | integer | 否 | - | 提交类型（字段名推断,语义待核实） |
| `batchId` | batchId | body | string | 否 | - | 批次ID（字段名推断,语义待核实） |
| `status` | status | body | integer | 否 | - | 状态（字段名推断,语义待核实） |
| `response` | response | body | string | 否 | - | 响应（字段名推断,语义待核实） |
| `refreshDate` | refreshDate | body | string | 否 | - | 刷新日期（字段名推断,语义待核实） |
| `freightId` | freightId | body | string | 否 | - | 运费ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
