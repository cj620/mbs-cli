<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-wish-pbof-itemid-every-table

Wish产品PB活动每日明细表查询：根据产品ID与时间区间(默认前45天至昨天)，查询该Wish产品在 Product Boost(PB)推广中每日的活动明细列表，含活动名称、起止时间、关键字、订单数、活动状态、花费，用于刊登趋势图(listingChart)下方明细表渲染。

## 用法

```bash
mbs oms erp-order-find-wish-pbof-itemid-every-table [--productId <string>] --startTime <string> --endTime <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/wishProductBoost/findWishPBOfItemidEveryTable`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `productId` | productId | body | string | 否 | - | 产品ID(MongoDB ObjectId)。来源：URL 查询参数 GetQueryString('productId')，可能为空 |
| `startTime` | startTime | body | string | 是 | - | 起始时间，格式 YYYY-MM-DD。来源：getTody(new Date(),45,0).today，即当前日期向前45天 |
| `endTime` | endTime | body | string | 是 | - | 结束时间，格式 YYYY-MM-DD。来源：getTody(new Date(),1,0).today，即昨天 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（统一响应包装，本接口回调未使用，待人工确认） | - |
| `desc` | string | 响应提示信息（统一响应包装，本接口回调未使用，待人工确认） | - |
| `obj[]` | array | PB活动每日明细列表（成功回调 res.obj 直接作为 list 渲染） | - |
| `obj[][0]` | string | 日期（明细行所属日期，为 null 时前端显示 ----） | - |
| `obj[][1]` | string | 活动名字（为 null 时显示 ----） | - |
| `obj[][2]` | string | 活动开始时间（为 null 时显示 ----） | - |
| `obj[][3]` | string | 活动结束时间（为 null 时显示 ----） | - |
| `obj[][4]` | string | 关键字（为 null 时显示 ----） | - |
| `obj[][5]` | number | 订单数（为 null 时显示 ----） | - |
| `obj[][6]` | string | 活动状态（为 null 时显示 ----） | - |
| `obj[][7]` | number | 活动花费（金额，前端以 $ 前缀展示；为 null 时显示 ----） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
