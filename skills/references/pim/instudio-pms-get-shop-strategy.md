<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-shop-strategy

查看店铺策略：查看店铺策略

## 用法

```bash
mbs pim instudio-pms-get-shop-strategy [--sequenceid <string>] [--platform <string>] [--shoptype <string>] [--months <string>] [--normtype <string>] [--targetamount <number>] [--content <string>] [--oper <string>] [--opertime <string>] [--reason <string>] [--processStatus <integer>] [--strategyCategoryFirst <string>] [--strategyCategorySecond <string>] [--reasonCategoryFirst <string>] [--reasonCategorySecond <string>] [--processOper <string>] [--processTime <string>] [--modifiedOper <string>] [--modifiedTime <string>] [--shopManager <string>] [--amountCurrent <string>] [--amountNext <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/middlePanel/getShopStrategy`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sequenceid` | sequenceid | body | string | 否 | - | 序列ID（字段名推断,语义待核实） |
| `platform` | platform | body | string | 否 | - | 平台（字段名推断,语义待核实） |
| `shoptype` | shoptype | body | string | 否 | - | 店铺类型（字段名推断,语义待核实） |
| `months` | months | body | string | 否 | - | Months（字段名推断,语义待核实） |
| `normtype` | normtype | body | string | 否 | - | Normtype（字段名推断,语义待核实） |
| `targetamount` | targetamount | body | number | 否 | - | Targetamount（字段名推断,语义待核实） |
| `content` | content | body | string | 否 | - | 内容（字段名推断,语义待核实） |
| `oper` | oper | body | string | 否 | - | 操作（字段名推断,语义待核实） |
| `opertime` | opertime | body | string | 否 | - | 操作时间（字段名推断,语义待核实） |
| `reason` | reason | body | string | 否 | - | 原因（字段名推断,语义待核实） |
| `processStatus` | processStatus | body | integer | 否 | - | 处理状态（字段名推断,语义待核实） |
| `strategyCategoryFirst` | strategyCategoryFirst | body | string | 否 | - | 策略类目首个（字段名推断,语义待核实） |
| `strategyCategorySecond` | strategyCategorySecond | body | string | 否 | - | 策略类目秒（字段名推断,语义待核实） |
| `reasonCategoryFirst` | reasonCategoryFirst | body | string | 否 | - | 原因类目首个（字段名推断,语义待核实） |
| `reasonCategorySecond` | reasonCategorySecond | body | string | 否 | - | 原因类目秒（字段名推断,语义待核实） |
| `processOper` | processOper | body | string | 否 | - | 处理操作（字段名推断,语义待核实） |
| `processTime` | processTime | body | string | 否 | - | 处理时间（字段名推断,语义待核实） |
| `modifiedOper` | modifiedOper | body | string | 否 | - | 修改操作（字段名推断,语义待核实） |
| `modifiedTime` | modifiedTime | body | string | 否 | - | 修改时间（字段名推断,语义待核实） |
| `shopManager` | shopManager | body | string | 否 | - | 店铺管理（字段名推断,语义待核实） |
| `amountCurrent` | amountCurrent | body | string | 否 | - | 金额当前（字段名推断,语义待核实） |
| `amountNext` | amountNext | body | string | 否 | - | 金额下一个（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].sequenceid` | string | 序列ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].platform` | string | 平台（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].shoptype` | string | 店铺类型（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].months` | string | Months（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].normtype` | string | Normtype（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].targetamount` | number | Targetamount（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].content` | string | 内容（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].oper` | string | 操作（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].opertime` | string | 操作时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].reason` | string | 原因（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].processStatus` | integer | 处理状态（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].strategyCategoryFirst` | string | 策略类目首个（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].strategyCategorySecond` | string | 策略类目秒（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].reasonCategoryFirst` | string | 原因类目首个（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].reasonCategorySecond` | string | 原因类目秒（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].processOper` | string | 处理操作（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].processTime` | string | 处理时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].modifiedOper` | string | 修改操作（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].modifiedTime` | string | 修改时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].shopManager` | string | 店铺管理（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].amountCurrent` | string | 金额当前（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].amountNext` | string | 金额下一个（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
