# mbs oms erp-order-get-week-month-sales-volume

月业绩目标销量(已完成)统计查询：月业绩看板头部卡片数据查询：返回当前用户/部门本年度已完成销售额(万)及「月业绩目标」列表(各周/月时段销量，格式 目标/实际)，渲染于页面顶部卡片 #contentTemplate2。由月业绩首屏 getSalesTargetFirst() 成功回调内联调用。

## 用法

```bash
mbs oms erp-order-get-week-month-sales-volume --targetType <number> [--month <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/salesTarget/getWeekMonthSalesVolume`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `targetType` | targetType | query | number | 是 | - | 目标类型(维度)。固定取值=4(月维度统计)。来源：代码硬编码，非控件 |
| `month` | month | query | string | 否 | - | 时段/月标识。透传自首屏 getSalesTargetFirst(week) 的 week 值：0=本月，1..n=obj.timeSlot 时段序号；示例 URL 中可为空(month=)。来源：页面「返回本月/时段目标业绩」链接 onclick=getSalesTargetFirst(i)，非输入控件 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准信封；本回调未显式判断,同页其他接口以 200 为成功) | - |
| `desc` | string | 响应提示信息(标准信封) | - |
| `obj` | object | 业务数据对象(回调中以 data.obj 直接使用) | - |
| `obj.year` | number | 统计年份(展示为「{year}年已完成」) | - |
| `obj.amount` | string | 本年度已完成销售额,单位:万(展示为「{amount}万」) | - |
| `obj.list[]` | array | 月业绩目标列表(各周/月时段) | - |
| `obj.list[][0]` | string | 周/月时段名称(列表项标题) | - |
| `obj.list[][1]` | string | 该时段销量。格式为 目标/实际(前端按 / 拆分两行展示 split('/')[0]、split('/')[1])；为字符串 'N/A' 时整体直接展示 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
