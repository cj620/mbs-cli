<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-purchase-page

采购任务分页查询：采购任务列表分页查询：以路径参数形式传入 SKU 与当前页码，返回采购任务总数与任务列表（供应商名称/等级、任务数量、采购员、任务时间、生成时间、任务状态）。

## 用法

```bash
mbs scm erp-purchase-page --sku <string> --page <number>
```

## API

- Service: `erpPurchase`
- Method: `GET`
- Path: `/erpPurchase/erpPurchase/purchase/task/page/`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | body | string | 是 | - | 供应商/商品 SKU，路径第 1 个参数；来源前端路由 query 参数 route.query.sku |
| `page` | page | body | number | 是 | - | 当前页码，路径第 2 个参数；来源分页组件 currectpage（默认从 1 开始） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的采购任务总数（前端赋值给 total，用于分页总数） | - |
| `obj.rows[]` | array | 采购任务列表（前端赋值给 tabelData） | - |
| `obj.rows[][0]` | string | 供应商名称 | - |
| `obj.rows[][1]` | string | 供应商等级 | - |
| `obj.rows[][2]` | number | 任务数量 | - |
| `obj.rows[][3]` | string | 采购员 | - |
| `obj.rows[][4]` | string | 任务时间（el-table-column prop=taskDate 使用；TabelData 接口声明中未列出，以模板为准） | - |
| `obj.rows[][5]` | string | 生成时间（TabelData 接口声明为 Date，模板展示为字符串日期） | - |
| `obj.rows[][6]` | string | 任务状态（TabelData 接口声明为 number | string，具体枚举取值待人工确认） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
