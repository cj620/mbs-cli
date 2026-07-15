<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-get-platform-shortage-rate

八个平台缺货率查询：平台店长看板（platformleader）加载时调用，按平台维度统计各电商平台的库存缺货率与按时发货率，返回平台缺货率列表，前端据缺货率高低用不同颜色卡片渲染（≥15%红/10~15%黄/5~10%灰/<5%绿），并可点击查看单平台缺货 SKU 明细。

## 用法

```bash
mbs fars erpaccount-get-platform-shortage-rate
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/dashboard/getPlatformShortageRate`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（公司标准外层 envelope，本接口模板未直接引用）(待人工确认) | - |
| `desc` | string | 响应提示信息（标准外层 envelope，本接口模板未直接引用）(待人工确认) | - |
| `obj[]` | array | 平台缺货率列表（模板 {{each obj v i}} 遍历渲染） | - |
| `obj[][0]` | string | 平台名称。模板显式枚举：ebay虚拟海外仓/ebay非海外仓/Amazon/Wish/aliexpress/Shopee/Lazada（其余平台走默认分支）；点击「更多」时作为 name 参数跳转 stockSkuDetails 明细页 | - |
| `obj[][1]` | number | 缺货率(单位:%,数值)。前端按区间着色：≥15红/10≤x<15黄/5≤x<10灰/<5绿 | - |
| `obj[][2]` | number | 按时发货率(单位:%,数值)。仅当 ontimerate>0 时展示「按时发货 xx%」（默认分支不展示该字段） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
