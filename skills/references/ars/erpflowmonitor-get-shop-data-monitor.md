# mbs ars erpflowmonitor-get-shop-data-monitor

店铺流量监控-平台流量看板数据查询：店铺流量监控页「平台流量看板」按平台/大酋长/组员/店铺维度，统计近 1/7/30 天店铺整体流量指标(访客数UV、访问次数PV、人均访问次数、访问时长、被访问产品数、订单量及各指标环比上期变化率)，用于渲染顶部 7 个指标卡。

## 用法

```bash
mbs ars erpflowmonitor-get-shop-data-monitor [--bigChief <array>] [--employeeNames <array>] [--shopIds <array>] --platformId <string> --dayNum <string>
```

## API

- Service: `erpflowmonitor`
- Method: `POST`
- Path: `/erpflowmonitor/erpflowmonitor/ebayDataMonitor/getShopDataMonitor`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `bigChief` | bigChief | body | array | 否 | - | 大酋长(店铺管理者)，来源多选控件 #shopManager |
| `employeeNames` | employeeNames | body | array | 否 | - | 组员(销售员)名称列表，仅当 bigChief 非空时下发；来源 #employeeList 或 sessionStorage.employeName |
| `shopIds` | shopIds | body | array | 否 | - | 店铺ID列表，来源多选控件 #shoptypeid |
| `platformId` | platformId | body | string | 是 | - | 所属平台，来源下拉 #platformId。1=ebay;89=SeeBee |
| `dayNum` | dayNum | body | string | 是 | - | 统计天数，来源 1/7/30 天按钮。1=近1天;7=近7天;30=近30天 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准封装，本回调未引用)(待人工确认) | - |
| `desc` | string | 响应提示信息(标准封装，本回调未引用)(待人工确认) | - |
| `content` | string | 统计天数，模板显示「较前{{content}}日」(回显请求 dayNum) | - |
| `obj` | object | 平台流量看板指标对象(模板内作 list) | - |
| `obj.uniqueVisitor` | number | 访客数(UV) — 指标卡1 | - |
| `obj.lastUVRate` | number | 访客数较前N日变化率(%)，>0 红色上升箭头，否则绿色下降 | - |
| `obj.pageView` | number | 访问次数(PV) — 指标卡2 | - |
| `obj.lastPVRate` | number | 访问次数较前N日变化率(%) | - |
| `obj.avgPageView` | number | 人均访问次数 — 指标卡3 | - |
| `obj.lastAvgPVRate` | number | 人均访问次数较前N日变化率(%) | - |
| `obj.waitTimeTotal` | number | 商品页访问时长(s) — 指标卡4 | - |
| `obj.lastWaitTimeTotalRate` | number | 商品页访问时长较前N日变化率(%) | - |
| `obj.waitTime` | number | 人均访问时长(s) — 指标卡5 | - |
| `obj.lastWaitTimeRate` | number | 人均访问时长较前N日变化率(%) | - |
| `obj.onlineItemNum` | number | 在线产品数(被访问产品数指标卡标题括号内展示) | - |
| `obj.itemNum` | number | 被访问产品数 — 指标卡6 | - |
| `obj.lastItemNumRate` | number | 被访问产品数较前N日变化率(%) | - |
| `obj.orderCount` | number | 订单量 — 指标卡7 | - |
| `obj.lastOrderCountRate` | number | 订单量较前N日变化率(%) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
