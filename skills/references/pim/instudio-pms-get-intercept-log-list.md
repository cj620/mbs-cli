<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-intercept-log-list

拦截关键词/SKU 操作日志分页查询：拦截关键词/SKU 操作日志分页查询

## 用法

```bash
mbs pim instudio-pms-get-intercept-log-list [--pageSize <integer>] [--currentPage <integer>] [--startIndex <integer>] [--opType <string>] [--interceptType <string>] [--interceptValue <string>] [--siteCodes <array<string>>] [--oper <string>] [--startTime <string>] [--endTime <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/walmart/auto/getInterceptLogList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `currentPage` | currentPage | body | integer | 否 | - | 当前页码（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `opType` | opType | body | string | 否 | - | 操作类型: 添加关键词 / 添加sku / 弃用关键词 / 弃用sku |
| `interceptType` | interceptType | body | string | 否 | - | 类型: KEYWORD / SKU |
| `interceptValue` | interceptValue | body | string | 否 | - | 关键词或SKU (模糊匹配) |
| `siteCodes` | siteCodes | body | array<string> | 否 | - | 站点编码列表 |
| `oper` | oper | body | string | 否 | - | 操作人 |
| `startTime` | startTime | body | string | 否 | - | 开始时间（字段名推断,语义待核实） |
| `endTime` | endTime | body | string | 否 | - | 结束时间（字段名推断,语义待核实） |

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
