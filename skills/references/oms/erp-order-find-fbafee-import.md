<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-fbafee-import

FBA费用导入记录查询：财务报表-FBA费用导入记录分页查询：按页码分页拉取FBA费用导入记录列表，返回店铺、费用产生时间、费用类型、站点、导入状态、结果描述、创建人/创建时间及源文件地址等信息，供前端表格渲染与分页展示。

## 用法

```bash
mbs oms erp-order-find-fbafee-import --page <number> --pageSize <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/fbaReport/findFBAFeeImport`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码（来源页码变量 fbaPages，初始 1，分页回调更新） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（前端固定传 100，页面提示每页100条） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `count` | number | 满足条件的记录总条数（渲染到 #total1，共 N 条） | - |
| `countPage` | number | 总页数（首页 fbaPages==1 时用于初始化分页控件 fincePage） | - |
| `result[]` | array | FBA费用导入记录列表 | - |
| `result[][0]` | number | 编号（记录序号ID） | - |
| `result[][1]` | string | 店铺名称 | - |
| `result[][2]` | string | 费用产生时间（账期月份） | - |
| `result[][3]` | string | 费用类型枚举。1=账单;2=刷单费;3=广告费;4=店铺成本;5=刷单收入;6=月仓储费 | - |
| `result[][4]` | string | 站点枚举。1=美国;2=英国;3=日本;4=德国;5=西班牙;6=法国;7=意大利;8=荷兰;9=加拿大;10=墨西哥 | - |
| `result[][5]` | string | 导入状态枚举。0=未导入;1=导入中;2=导入中;3=导入成功;4=导入失败 | - |
| `result[][6]` | string | 结果描述（导入结果说明，鼠标悬浮 tooltip 展示） | - |
| `result[][7]` | string | 创建人 | - |
| `result[][8]` | string | 创建时间 | - |
| `result[][9]` | string | 源文件地址URL（查看源文件链接 target=_blank） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
