<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-week-month-product-sales-volume

月度商品销量(周/月)统计查询：业绩目标(月)看板顶部卡片数据查询：返回所选时段的年度已完成销售额及按周/月维度的销量目标完成列表(实际/目标 形式)，供 contentTemplate2 模板渲染「{year}年已完成 / 月业绩目标」区块。

## 用法

```bash
mbs oms erp-order-get-week-month-product-sales-volume --targetType <string> --month <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/salesTarget/getWeekMonthProductSalesVolume`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `targetType` | targetType | query | string | 是 | - | 目标类型，固定取值 4(月-商品销量统计维度)，写死在 URL |
| `month` | month | query | string | 是 | - | 时段标识。取自 getSalesTargetFirst(week) 入参(来源 sessionStorage.productindex 或时段索引)，0=本月/当前时段，>0=历史时段索引 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准返回结构) | - |
| `desc` | string | 响应提示信息(标准返回结构) | - |
| `obj` | object | 业务数据对象(模板 contentTemplate2 直接取用) | - |
| `obj.year` | number | 年份,用于「{year}年已完成」标题展示 | - |
| `obj.amount` | number | 该年度已完成销售额,单位:万 | - |
| `obj.list[]` | array | 周/月业绩目标列表 | - |
| `obj.list[][0]` | string | 周或月标识文案(作为列表项标题展示) | - |
| `obj.list[][1]` | string | 销量「实际/目标」字符串(如 12万/20万)。!=N/A 时按 / 拆为两行展示;==N/A 时原样展示 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
