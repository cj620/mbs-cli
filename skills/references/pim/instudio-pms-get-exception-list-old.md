# mbs pim instudio-pms-get-exception-list-old

采购异常列表：采购异常列表

## 用法

```bash
mbs pim instudio-pms-get-exception-list-old [--sku <string>] [--status <integer>] [--msgType <integer>] [--userId <integer>] [--flag <string>] [--startDate <string>] [--endDate <string>] [--developer <string>] [--buyer <string>] [--manageEmployeeNames <array<string>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/purchaseException/getExceptionListOld`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | body | string | 否 | - | SKU（字段名推断,语义待核实） |
| `status` | status | body | integer | 否 | - | 状态（字段名推断,语义待核实） |
| `msgType` | msgType | body | integer | 否 | - | 消息类型（字段名推断,语义待核实） |
| `userId` | userId | body | integer | 否 | - | 用户ID（字段名推断,语义待核实） |
| `flag` | flag | body | string | 否 | - | 标志（字段名推断,语义待核实） |
| `startDate` | startDate | body | string | 否 | - | 开始日期（字段名推断,语义待核实） |
| `endDate` | endDate | body | string | 否 | - | 结束日期（字段名推断,语义待核实） |
| `developer` | developer | body | string | 否 | - | 开发者（字段名推断,语义待核实） |
| `buyer` | buyer | body | string | 否 | - | 买家（字段名推断,语义待核实） |
| `manageEmployeeNames` | manageEmployeeNames | body | array<string> | 否 | - | 管理员工名称列表（字段名推断,语义待核实） |

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
