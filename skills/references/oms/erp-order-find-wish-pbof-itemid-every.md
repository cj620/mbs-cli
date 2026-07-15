# mbs oms erp-order-find-wish-pbof-itemid-every

Wish商品Boost每日PB趋势查询：根据产品ID与起止日期，查询该产品 Wish ProductBoost(PB) 推广在前45天时间窗内每日的趋势数据，返回 echarts 折线图所需的 X 轴日期分类与多条系列(总费用/总计费流量/ERP总成交额/ERP总单量)，并回传当前定位日期(desc)用于前/后45天翻页。

## 用法

```bash
mbs oms erp-order-find-wish-pbof-itemid-every --productId <string> --startTime <string> --endTime <string> [--selectOption <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/wishProductBoost/findWishPBOfItemidEvery`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `productId` | productId | body | string | 是 | - | 产品ID。来源浏览器URL查询参数 GetQueryString('productId')，用于定位某产品的 PB 推广数据 |
| `startTime` | startTime | body | string | 是 | - | 起始日期(yyyy-MM-dd)。getTody(new Date(),45,0).today=当前日期前45天 |
| `endTime` | endTime | body | string | 是 | - | 结束日期(yyyy-MM-dd)。getTody(new Date(),1,0).today=当前日期前1天(昨天) |
| `selectOption` | selectOption | body | string | 否 | - | 选中的统计变量(多选逗号拼接)，来源 name='variable' 复选框 arr.join(',')。枚举：总费用/总计费流量/ERP总成交额/ERP总单量 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 业务状态码(标准返回封装字段；success 回调未直接使用)(待人工确认) | - |
| `desc` | string | 当前定位日期(yyyy-MM-dd)。前端存入 sessionStorage['times']，用于前/后45天翻页定位 | - |
| `obj` | object | 业务数据对象(echarts 图表数据) | - |
| `obj.x[]` | array | X轴分类数据(日期数组)，赋给 echarts xAxis.data | - |
| `obj.series[]` | array | 折线系列数组，整体赋给 echarts series(每个系列对应一个统计变量) | - |
| `obj.series[]` | string | 系列名称(统计变量名，如 总费用/ERP总成交额)，前端遍历取出作为 legend.data 图例 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
