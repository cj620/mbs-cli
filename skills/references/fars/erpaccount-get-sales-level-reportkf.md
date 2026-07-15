# mbs fars erpaccount-get-sales-level-reportkf

销售层级报表(客服版 kf)查询：仪表盘商品图表页(productChart)在 flag==2(客服版)分支调用：按 SKU类型、所选统计指标、基准日期与前后30天方向，返回 ECharts 折线图所需的 X 轴类目数据与多系列数据，用于渲染近30天趋势图。

## 用法

```bash
mbs fars erpaccount-get-sales-level-reportkf [--skutypes <string>] [--selectOption <string>] [--date <string>] [--days <string>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/dashboard/getSalesLevelReportkf`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `skutypes` | skutypes | query | string | 否 | - | SKU类型。来源页面URL参数 skuTypes(GetQueryString)，URL键名为小写 skutypes |
| `selectOption` | selectOption | query | string | 否 | - | 所选统计指标(多选逗号拼接)。来源 name=variable 勾选复选框 value。枚举：SKU数量/库存量/库存金额/仓位数/昨日发货量/昨日发货额/入库金额/出库金额/库存增长/库存周转率/缺货量 |
| `date` | date | query | string | 否 | - | 查询基准日期(yyyy-MM-dd)。来源 #date 输入框或 sessionStorage('times')(上次 res.desc)，初次为空 |
| `days` | days | query | string | 否 | - | 翻页方向/天数。来源 #days 输入框或 searchChart(num)。枚举：0=前30天，1=后30天 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `desc` | string | 当前基准日期(yyyy-MM-dd)。前端存入 sessionStorage('times') 用于翻页比对与下次 date 入参 | - |
| `content` | string | 图表标题文本，赋给 ECharts title.text | - |
| `obj` | object | 图表数据对象 | - |
| `obj.x` | object | X 轴对象 | - |
| `obj.x.data[]` | array | X 轴类目数据(日期序列)，赋给 ECharts xAxis.data | - |
| `obj.series[]` | array | ECharts 系列数组；整体赋给 series。前端遍历取每项 name 组装图例 legend.data | - |
| `obj.series[]` | string | 系列名称(对应所选统计指标名)，用于图例展示；系列项另含 type/data 等 ECharts 渲染字段(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
