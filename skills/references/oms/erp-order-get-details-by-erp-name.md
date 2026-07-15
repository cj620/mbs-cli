# mbs oms erp-order-get-details-by-erp-name

独立站优化师报表-按业务员查询测款数量明细：独立站优化师(投放)报表：按业务员名称(erpName)与时间区间(beginTime/endTime)查询该业务员的测款 SPU 广告投放明细列表，返回每个测款 SPU 的广告费用、转化价值、ROI、触达、频次、订单数、CPR/CPC/CTR/CPM、点击等投放指标，以及总条数。

## 用法

```bash
mbs oms erp-order-get-details-by-erp-name --beginTime <string> --endTime <string> --erpName <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/independentOptimizerReport/getDetailsByErpName`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `beginTime` | beginTime | body | string | 是 | - | 查询开始时间，来源浏览器 URL query 参数 beginTime(GetQueryString('beginTime')) |
| `endTime` | endTime | body | string | 是 | - | 查询结束时间，来源浏览器 URL query 参数 endTime(GetQueryString('endTime')) |
| `erpName` | erpName | body | string | 是 | - | 业务员名称，来源浏览器 URL query 参数 erpName，已 decodeURI 解码 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `total` | number | 满足条件的总条数(写入页面 #total) | - |
| `list[]` | array | 测款 SPU 投放明细列表(success 回调赋值给 resDats) | - |
| `list[][0]` | string | 测款 SPU 主图 URL(加载失败回退 /2018ui/assets/images/timg.jpg) | - |
| `list[][1]` | string | 测款 SPU 名称 | - |
| `list[][2]` | number | 广告费用(单位 USD) | - |
| `list[][3]` | number | 转化价值(单位 USD) | - |
| `list[][4]` | number | ROI(投入产出比) | - |
| `list[][5]` | number | 触达人数(reached) | - |
| `list[][6]` | number | 频次(frequency，源码字段名为 frenquency) | - |
| `list[][7]` | number | 订单数 | - |
| `list[][8]` | number | CPR 单次成效成本(前端前缀展示 $，单位 USD) | - |
| `list[][9]` | number | CPC 单次点击成本(前端前缀展示 $，单位 USD) | - |
| `list[][10]` | number | CTR 点击率(前端有值时按 % 展示，无值展示 ---，单位 %) | - |
| `list[][11]` | number | CPM 千次展示成本 | - |
| `list[][12]` | number | 点击数 click(all) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
