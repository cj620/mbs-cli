<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-mobile-find-order-today

今日订单概况查询：移动端「我的桌面」首页按订单时间查询当天的订单概况：返回今日订单数/销售额/退款单、总待发货/待发销售额、今日退款金额、今日新增缺货单、总缺货单量/缺货销售额、利润、毛利率、缺货率等汇总指标，以及当前用户头像。

## 用法

```bash
mbs oms erp-mobile-find-order-today --ordertimestr <string>
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/pushController/findOrderToday`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `ordertimestr` | ordertimestr | body | string | 是 | - | 订单查询日期字符串,格式YYYY-MM-DD,取自页面#nowDate(前一天/后一天切换),默认当天 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `content` | string | 当前用户头像URL(写入#photo,为空回退默认头像) | - |
| `obj` | object | 今日订单概况数据对象(不存在时所有指标显示--) | - |
| `obj.ordernum` | number | 今日订单数(写入.ordernum) | - |
| `obj.actualamount` | number | 今日销售额(写入.actualamount,单位元) | - |
| `obj.refundnum` | number | 今日退款单数(写入.refundnum) | - |
| `obj.pengdingnum` | number | 总待发货单量(写入.pengdingnum) | - |
| `obj.pengdingmoney` | number | 总待发销售额(写入.pengdingmoney,单位元) | - |
| `obj.refundmoney` | number | 今日退款金额(写入.refundmoney,单位元) | - |
| `obj.outstocknumtoday` | number | 今日新增缺货单数(写入.outstocknumtoday) | - |
| `obj.outstocknum` | number | 总缺货单量(写入.outstocknum) | - |
| `obj.outstockmoney` | number | 总缺货销售额(写入.outstockmoney,单位元) | - |
| `obj.profit` | number | 利润(写入.profit,单位元) | - |
| `obj.grossprofit` | number | 毛利率(写入.grossprofit,前端追加%展示,单位%) | - |
| `obj.outstockprofit` | number | 缺货率(写入.outstockprofit,前端追加%展示,单位%) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
