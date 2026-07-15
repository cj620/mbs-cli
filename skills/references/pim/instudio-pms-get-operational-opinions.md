<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-operational-opinions

查询运营意见：查询运营意见

## 用法

```bash
mbs pim instudio-pms-get-operational-opinions --missionId <integer>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developerMission/getOperationalOpinions`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `missionId` | missionId | query | integer | 是 | - | MissionID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].missionId` | integer | MissionID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].status` | integer | 状态（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].createBy` | string | 创建人（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].createTime` | string | 创建时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].delete_by` | string | 删除人（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].isclaim` | string | Isclaim（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].shippingQuantity` | integer | 海运数量。前端使用：待核实 | - |
| `obj.obj[].airfreightQuantity` | integer | 空运数量。前端使用：待核实 | - |
| `obj.obj[].carAirlinesQuantity` | integer | 卡航数量。前端使用：待核实 | - |
| `obj.obj[].railwayQuantity` | integer | 铁路数量。前端使用：待核实 | - |
| `obj.obj[].preSelloutTime` | string | 预估售完时间。前端使用：待核实 | - |
| `obj.obj[].swipe` | string | 预估刷单数量和预算。前端使用：待核实 | - |
| `obj.obj[].otherWayMoney` | string | 其他推广方式预算。前端使用：待核实 | - |
| `obj.obj[].preDailyOrdernum` | integer | 盈亏平衡日均单量。前端使用：待核实 | - |
| `obj.obj[].preProfit` | string | 预估毛利率。前端使用：待核实 | - |
| `obj.obj[].operationalOpinions` | string | 备注。前端使用：待核实 | - |
| `obj.obj[].updateBy` | string | 更新人（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].sku` | string | SKU（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
