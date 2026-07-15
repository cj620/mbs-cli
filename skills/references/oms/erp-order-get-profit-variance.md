<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-profit-variance

事业部人员毛利方差图查询：按月份、平台、总监、经理、店长等条件，查询事业部各店长的毛利方差数据，返回每个店长的实际毛利/人均毛利/总毛利及入职、平台、经理等信息，前端用 ECharts 渲染柱状图(实际毛利)+折线(平均值)。

## 用法

```bash
mbs oms erp-order-get-profit-variance --targetStartTime <string> [--platformNameList <array>] [--directorList <array>] [--managerList <array>] [--shopManagerList <array>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/getProfitVariance`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `targetStartTime` | targetStartTime | body | string | 是 | - | 目标起始时间(所选月份)，由 getMonth() 生成，格式 YYYY-M-D(月份未补零)，来源:月份选择器 form.month |
| `platformNameList` | platformNameList | body | array | 否 | - | 平台名称列表，取自平台多选 form.platform 各项的 PLATFORMNAME，来源:平台下拉(多选) |
| `directorList` | directorList | body | array | 否 | - | 总监姓名列表，取自总监多选 form.director 各项的 name，来源:总监下拉(多选,支持全选) |
| `managerList` | managerList | body | array | 否 | - | 经理姓名列表，取自经理多选 form.manager 各项的 name，来源:经理下拉(多选,支持全选) |
| `shopManagerList` | shopManagerList | body | array | 否 | - | 店长姓名列表，直接取 form.shopManager(元素为店长姓名字符串)，来源:店长下拉(多选,支持全选)/按店铺反查 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(前端据此判断) | - |
| `desc` | string | 响应说明文本，前端展示于页面顶部 pre 区域(state.desc) | - |
| `obj[]` | array | 业务数据数组：各店长毛利方差行；length==0 时判定为空(显示“当月目标未导入”) | - |
| `obj[][0]` | string | 目标起始时间(月份)，取首行 obj[0].targetStartTime 作为图表时间 state.time | - |
| `obj[][1]` | string | 店长姓名，作为图表 X 轴类目名称显示 | - |
| `obj[][2]` | string | 经理姓名，tooltip 展示；并与 shopManager 比较以决定柱颜色(相等→橙色 #E6A23C) | - |
| `obj[][3]` | number | 实际毛利(人均视图)，作为柱状图数值 value(setAvg) | - |
| `obj[][4]` | number | 平均毛利/人均毛利(人均视图)，作为折线“平均值”数据(setAvg) | - |
| `obj[][5]` | number | 实际总毛利(总毛利视图)，作为柱状图数值 value(setTotal，并按降序排序) | - |
| `obj[][6]` | number | 总毛利平均值(总毛利视图)，作为折线“平均值”数据(setTotal) | - |
| `obj[][7]` | boolean | 是否正式(否则视为异常)，为真时该店长名称显示为红色 #F56C6C(getColor) | - |
| `obj[][8]` | string | 入职时间，tooltip 展示“入职时间” | - |
| `obj[][9]` | string | 平台名称(可为多平台拼接)，tooltip 展示“平台” | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
