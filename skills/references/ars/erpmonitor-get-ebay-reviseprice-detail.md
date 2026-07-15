<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-get-ebay-reviseprice-detail

eBay提价任务统计详情查询：进入eBay提价页时调用，查询当天提价任务的各项统计数字（计算中任务数、等待提价listing数、提价中数、今/昨提价失败数、今/昨提价成功数），渲染到页面头部状态栏。该接口无请求参数，POST 空请求体。

## 用法

```bash
mbs ars erpmonitor-get-ebay-reviseprice-detail
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/ebayRevisepriceConfirm/getEbayRevisepriceDetail`
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
| `obj[]` | array | 业务数据数组，前端取第一个元素 obj[0] 渲染头部统计栏 | - |
| `obj[][0]` | number | 今天-计算中任务数（渲染至 #submitTaskCount，标签“计算中任务”） | - |
| `obj[][1]` | number | 今天-等待提价listing数（渲染至 #waitPublishs，标签“等待提价listing”） | - |
| `obj[][2]` | number | 今天-提价中数（渲染至 #publishing，标签“提价中”） | - |
| `obj[][3]` | number | 提价失败-今天数（渲染至 #failPublishToday，标签“提价失败(今/昨)”之今） | - |
| `obj[][4]` | number | 提价失败-昨天数（渲染至 #failPublishYestoday，标签“提价失败(今/昨)”之昨） | - |
| `obj[][5]` | number | 提价成功-今天数（渲染至 #successPublishToday，标签“提价成功(今/昨)”之今） | - |
| `obj[][6]` | number | 提价成功-昨天数（渲染至 #successPublishYestoday，标签“提价成功(今/昨)”之昨） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
