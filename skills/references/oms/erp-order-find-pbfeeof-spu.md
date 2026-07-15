<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-pbfeeof-spu

SPU的PB(Product Boost)费用明细查询：根据SPU及时间区间，查询该SPU在各店铺的Wish Product Boost(PB)推广活动费用明细，返回活动基本信息、GMV、预算、消耗、曝光与曝光费等字段；前端在末尾追加一行汇总行后渲染表格。

## 用法

```bash
mbs oms erp-order-find-pbfeeof-spu --spu <string> --startTime <string> --endTime <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/wishProductBoost/findPBFeeofSpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | body | string | 是 | - | 商品SPU编号(按SPU查询其PB费用明细)，来源URL查询参数spu |
| `startTime` | startTime | body | string | 是 | - | 统计起始时间(活动费用统计区间-起)，来源URL查询参数startTime |
| `endTime` | endTime | body | string | 是 | - | 统计结束时间(活动费用统计区间-止)，来源URL查询参数endTime |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | PB活动费用明细列表(前端遍历求和后追加一条汇总行再渲染) | - |
| `obj[][0]` | string | 店铺名(模板店铺名列) | - |
| `obj[][1]` | string | 店铺ID | - |
| `obj[][2]` | string | 商户ID(Wish商户/店铺商户编号) | - |
| `obj[][3]` | string | 活动ID(模板活动ID列；汇总行固定为汇总) | - |
| `obj[][4]` | string | 活动名称(模板活动名称列) | - |
| `obj[][5]` | string | 活动状态(模板活动状态列) | - |
| `obj[][6]` | string | 是否自动化(智能)推广活动 | - |
| `obj[][7]` | string | 活动开始时间(模板活动开始时间列) | - |
| `obj[][8]` | string | 活动结束时间(模板活动结束时间列) | - |
| `obj[][9]` | number | 活动最大预算(模板活动最大预算列) | - |
| `obj[][10]` | number | GMV-成交总额(模板GMV列) | - |
| `obj[][11]` | number | PB GMV-推广带来的成交额(模板PB GMV列) | - |
| `obj[][12]` | number | SPU总成交额(模板SPU总成交额列) | - |
| `obj[][13]` | number | 销量/销售额 | - |
| `obj[][14]` | number | 期间消耗(增量费用；模板期间消耗列；前端parseFloat累加并toFixed(2)，空值置0) | - |
| `obj[][15]` | number | 当前/总消耗(活动总花费；前端parseFloat累加并toFixed(2)，空值置0；模板中该列已注释) | - |
| `obj[][16]` | number | 曝光费金额 | - |
| `obj[][17]` | string | 曝光费开始时间 | - |
| `obj[][18]` | string | 曝光费结束时间 | - |
| `obj[][19]` | string | 曝光费费用状态 | - |
| `obj[][20]` | number | 已付费曝光量 | - |
| `obj[][21]` | number | 总曝光量 | - |
| `obj[][22]` | number | 累计已收取的报名费 | - |
| `obj[][23]` | number | 累计已收取的曝光费 | - |
| `obj[][24]` | boolean | 是否有反馈(待人工确认枚举) | - |
| `obj[][25]` | string | 是否可编辑(待人工确认枚举) | - |
| `obj[][26]` | string | 标记位(待人工确认含义/枚举) | - |
| `obj[][27]` | string | 记录ID(主键) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
