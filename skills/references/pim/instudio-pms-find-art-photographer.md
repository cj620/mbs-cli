<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-art-photographer

获取平台：获取平台

## 用法

```bash
mbs pim instudio-pms-find-art-photographer [--oper <string>] [--positionName <string>] [--teamName <string>] [--spucount <integer>] [--skucount <integer>] [--ordercount <integer>] [--totalamount <number>] [--profit <number>] [--startDate <string>] [--endDate <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/AllMessage/findArtPhotographer`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `oper` | oper | body | string | 否 | - | 姓名 |
| `positionName` | positionName | body | string | 否 | - | 职位 |
| `teamName` | teamName | body | string | 否 | - | 小组 |
| `spucount` | spucount | body | integer | 否 | - | spu数量 |
| `skucount` | skucount | body | integer | 否 | - | sku数量 |
| `ordercount` | ordercount | body | integer | 否 | - | 订单数量 |
| `totalamount` | totalamount | body | number | 否 | - | 销售额 |
| `profit` | profit | body | number | 否 | - | 毛利 |
| `startDate` | startDate | body | string | 否 | - | 开始日期（字段名推断,语义待核实） |
| `endDate` | endDate | body | string | 否 | - | 结束日期（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].oper` | string | 姓名。前端使用：待核实 | - |
| `obj.obj[].positionName` | string | 职位。前端使用：待核实 | - |
| `obj.obj[].teamName` | string | 小组。前端使用：待核实 | - |
| `obj.obj[].spucount` | integer | spu数量。前端使用：待核实 | - |
| `obj.obj[].skucount` | integer | sku数量。前端使用：待核实 | - |
| `obj.obj[].ordercount` | integer | 订单数量。前端使用：待核实 | - |
| `obj.obj[].totalamount` | number | 销售额。前端使用：待核实 | - |
| `obj.obj[].profit` | number | 毛利。前端使用：待核实 | - |
| `obj.obj[].startDate` | string | 开始日期（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].endDate` | string | 结束日期（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
