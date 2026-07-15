<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-upd-fba-sample-exception-from-order

FBA封样确认编辑订单详情页接口：FBA封样确认编辑订单详情页接口

## 用法

```bash
mbs pim instudio-pms-upd-fba-sample-exception-from-order --msgDetail <string>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/purchaseException/updFbaSampleExceptionFromOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `msgDetail` | msgDetail | query | string | 是 | - | 消息详情（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（取值，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（条件判断，行号待核实） | - |
| `obj.obj.indexOf` | string | 索引（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.success` | string | 成功（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.replace` | string | Replace（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.logisticsTrajectory` | string | 物流Trajectory（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.rstatus` | string | Rstatus（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pdfurl` | string | Pdfurl（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：是（取值，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
