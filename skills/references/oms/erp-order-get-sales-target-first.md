<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-sales-target-first

月度销售业绩目标首页查询：月业绩目标看板首页加载：按 targetType=2(月) 与时间槽 week 查询当前层级(店铺/姓名)的本月/上月/下月业绩目标、实际销售额、毛利率、毛利额、完成率、环比涨跌、订单量等，返回可逐级下钻的 sales 列表及历史时间槽 timeSlot。

## 用法

```bash
mbs oms erp-order-get-sales-target-first --targetType <string> --week <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/salesTarget/getSalesTargetFirst`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `targetType` | targetType | query | string | 是 | - | 目标类型,本接口固定2=月度 |
| `week` | week | query | number | 是 | - | 时间槽序号(0=本月;历史槽传i+1;初次加载取sessionStorage.marketindex,无则0) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `content` | string | 目标设置入口控制：'true'=设置月目标(bigChiefMonth);'false'=设置月目标(clerkMonth);'总经办'=设置填报时间 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.level` | number | 当前层级,1=店铺维度,其他=姓名维度,2/3支持下钻 | - |
| `obj.msg` | string | 页面提示消息 | - |
| `obj.timeRemind` | string | 填报时间提醒文案 | - |
| `obj.time` | string | 最后更新日期 | - |
| `obj.sales[]` | array | 业绩目标行列表(店铺或姓名) | - |
| `obj.sales[][0]` | string | 店铺名/姓名;'汇总'为汇总行 | - |
| `obj.sales[][1]` | string | 平台名称(非空时名称后括号显示) | - |
| `obj.sales[][2]` | string | 平台ID(下钻传参) | - |
| `obj.sales[][3]` | string | 店铺负责人(下钻传参) | - |
| `obj.sales[][4]` | boolean | 是否高级主管(true下钻showBigsix1,false下钻showBig) | - |
| `obj.sales[][5]` | number | 目标记录ID(存在时双击改目标) | - |
| `obj.sales[][6]` | number | 第一档业绩目标(万) | - |
| `obj.sales[][7]` | number | 第二档业绩目标(万) | - |
| `obj.sales[][8]` | number | 第三档业绩目标(万) | - |
| `obj.sales[][9]` | string | 业绩目标展示串(无id时直接渲染,含HTML) | - |
| `obj.sales[][10]` | number | 第一档目标订单量(单) | - |
| `obj.sales[][11]` | number | 第二档目标订单量(单) | - |
| `obj.sales[][12]` | number | 第三档目标订单量(单) | - |
| `obj.sales[][13]` | number | 目标毛利额(万,非空时附加显示) | - |
| `obj.sales[][14]` | number | 第一档环比涨跌(%,>0红↑/<0蓝↓/=0平) | - |
| `obj.sales[][15]` | number | 第二档环比涨跌(%) | - |
| `obj.sales[][16]` | number | 第三档环比涨跌(%) | - |
| `obj.sales[][17]` | number | 本月实际销售额(万) | - |
| `obj.sales[][18]` | number | 本月实际订单量(单,非空时显示) | - |
| `obj.sales[][19]` | number | 作废订单金额(元,≥100时换算为万括号显示) | - |
| `obj.sales[][20]` | number | KZ(跨境)销售额(万,>0时绿色显示) | - |
| `obj.sales[][21]` | number | 本月平台状态,0=毛利率未达标(红色标签) | - |
| `obj.sales[][22]` | number | 本月毛利率(%) | - |
| `obj.sales[][23]` | number | 清仓毛利率(%,与profitRate比较,当前展示已注释) | - |
| `obj.sales[][24]` | number | 本月毛利额(万,源码拼写profitAmouit) | - |
| `obj.sales[][25]` | number | KZ(跨境)毛利额(万,>0时绿色显示) | - |
| `obj.sales[][26]` | string | 本月实际完成率展示串(含HTML) | - |
| `obj.sales[][27]` | string | 上月业绩目标展示串(含HTML) | - |
| `obj.sales[][28]` | number | 上月第一档目标订单量(单) | - |
| `obj.sales[][29]` | number | 上月第二档目标订单量(单) | - |
| `obj.sales[][30]` | number | 上月第三档目标订单量(单) | - |
| `obj.sales[][31]` | number | 上月实际销售额(万) | - |
| `obj.sales[][32]` | number | 上月实际订单量(单,非空时显示) | - |
| `obj.sales[][33]` | number | 上月平台状态,0=毛利率未达标(红色标签) | - |
| `obj.sales[][34]` | number | 上月毛利率(%) | - |
| `obj.sales[][35]` | number | 上月毛利额(万,源码拼写lastProfitAmouit) | - |
| `obj.sales[][36]` | string | 上月实际完成率展示串(含HTML) | - |
| `obj.sales[][37]` | string | 下月业绩目标展示串(含HTML) | - |
| `obj.sales[][38]` | number | 下月第一档目标订单量(单) | - |
| `obj.sales[][39]` | number | 下月第二档目标订单量(单) | - |
| `obj.sales[][40]` | number | 下月第三档目标订单量(单) | - |
| `obj.sales[][41][]` | array | 下钻子行列表(htmlTemplate3展开),元素字段结构与sales元素(r11~r51)完全一致 | - |
| `obj.timeSlot[]` | array | 历史时间槽列表 | - |
| `obj.timeSlot[][0]` | string | 时间槽起始时间 | - |
| `obj.timeSlot[][1]` | string | 时间槽结束时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
