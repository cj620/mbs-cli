<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-optimizer-details

独立站优化师报表-优化师明细查询：独立站(独立优化师)投放报表明细查询：按 SPU + 时间区间查询各优化师的广告费用、转化价值、ROI、订单数、触达/频次/CPR/CPC/CTR/点击等投放效果指标，返回合计与优化师明细列表用于报表渲染。

## 用法

```bash
mbs oms erp-order-get-optimizer-details [--spu <string>] [--beginTime <string>] [--endTime <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/independentOptimizerReport/getOptimizerDetails`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | body | string | 否 | - | 商品SPU编号。来源：URL查询参数 spu，经 decodeURI 解码后传入 |
| `beginTime` | beginTime | body | string | 否 | - | 统计起始时间。来源：URL查询参数 beginTime |
| `endTime` | endTime | body | string | 否 | - | 统计结束时间。来源：URL查询参数 endTime |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `total` | number | 合计/总数，前端写入 #total（无 obj 时显示 0） | - |
| `list[]` | array | 优化师投放明细列表，赋值给前端 resDats | - |
| `list[][0]` | string | 优化师姓名 | - |
| `list[][1]` | number | 广告费用(USD) | - |
| `list[][2]` | number | 转化价值(USD) | - |
| `list[][3]` | number | ROI(投资回报率) | - |
| `list[][4]` | number | 订单数 | - |
| `list[][5]` | number | 触达人数(reached) | - |
| `list[][6]` | number | 频次(frenquency，原文拼写) | - |
| `list[][7]` | number | CPR-单次触达成本，前端加 $ 前缀展示 | - |
| `list[][8]` | number | CPC-单次点击成本，前端加 $ 前缀展示 | - |
| `list[][9]` | number | CTR-点击率，有值时以 % 展示，无值显示 --- | - |
| `list[][10]` | number | 点击数(click all) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
