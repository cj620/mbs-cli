<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-wish-pbof-itemid-every-next-or-last

WishPB商品翻页(前/后45天)趋势查询：WishPB(Product Boost)推广趋势图的翻页查询：在 listingChart 页面点击「前45天 searchChart('0')」/「后45天 searchChart('1')」时，按 productId + 基准日期 date + 选中指标 selectOption + 方向 days 拉取折线趋势数据(x 轴日期 + series 多指标系列)，并回写新的基准日期用于继续翻页。

## 用法

```bash
mbs oms erp-order-find-wish-pbof-itemid-every-next-or-last --productId <string> --date <string> [--selectOption <string>] --days <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/wishProductBoost/findWishPBOfItemidEveryNextOrLast`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `productId` | productId | body | string | 是 | - | 产品ID。来源 URL query GetQueryString('productId') |
| `date` | date | body | string | 是 | - | 基准日期(本次翻页的参照日)。来源 sessionStorage['times']，即上一次接口返回的 res.desc |
| `selectOption` | selectOption | body | string | 否 | - | 选中的统计指标(逗号拼接)。枚举：总费用/总计费流量/ERP总成交额/ERP总单量。来源勾选的复选框 name=variable 的 value |
| `days` | days | body | string | 是 | - | 翻页方向。枚举：0=前45天(searchChart('0'))，1=后45天(searchChart('1'))。来源触发按钮入参 num |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `desc` | string | 本次结果的基准日期，前端写入 sessionStorage['times'] 供下次翻页；并与 endTime.today 比较决定「后45天」按钮显隐 | - |
| `content` | string | 图表标题文本(日期区间描述)，用作 echarts title.text | - |
| `obj` | object | 业务数据对象(趋势图数据) | - |
| `obj.x[]` | array | X 轴日期分类数组，用作 echarts xAxis.data | - |
| `obj.series[]` | array | echarts 折线系列数组，整体赋给 echarts series；遍历取 name 构建 legend | - |
| `obj.series[]` | string | 系列名称(指标名，对应 selectOption 指标)，用于 legend.data；同对象内 echarts 所需的 type/data 等由后端直接返回并整体透传(待人工确认具体字段) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
