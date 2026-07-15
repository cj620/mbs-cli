# mbs fars erpaccount-get-manager-month

经理月度考核查询：经理月度考核数据查询：按所选平台与月份返回各月经理（人员）的毛利额增长得分、新品销售额得分、爆款得分、总分及发货毛利率等考核字段，用于经理月度考核播报表格展示。

## 用法

```bash
mbs fars erpaccount-get-manager-month --platformName <string> [--createTime <string>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/dashboard/getManagerMonth`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformName` | platformName | body | string | 是 | - | 平台名称。来源平台单选按钮组。枚举：ALIEXPRESS、AMAZON&WALMART、EBAY、SEA（初始默认值 ALIEXPRESS&WALMART） |
| `createTime` | createTime | body | string | 否 | - | 考核月份，月份选择器经 getMonth() 转换为 YYYY-M（月份未补零）；当前年月时传空字符串表示最新月 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `obj[]` | array | 业务数据列表，经理月度考核行数组 | - |
| `obj[][0]` | string | 日期（考核月份），表格“日期”列 | - |
| `obj[][1]` | string | 人员（经理姓名），表格“人员”列 | - |
| `obj[][2]` | number | 毛利额增长得分，表格“毛利额增长得分”列 | - |
| `obj[][3]` | number | 新品销售额得分，表格“新品销售额得分”列 | - |
| `obj[][4]` | number | 爆款得分，表格“爆款得分”列 | - |
| `obj[][5]` | number | 总分，表格“总分”列 | - |
| `obj[][6]` | number | 发货毛利率（百分比数值，前端展示为 profitLv%）。着色规则：EBAY≤12标红，其余平台≤10标红 | - |
| `obj[][7]` | string | 数据更新时间，前端取数组首元素 obj[0].createtime 显示为“更新时间” | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
