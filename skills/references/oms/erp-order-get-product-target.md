<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-product-target

业绩目标-按商品(开发员/大组长)月度目标查询：进入“新增业绩目标”页面时加载业绩目标数据：返回本人(大组长)目标行集合 bigChief、组员目标行集合 sales(含“汇总”行)、是否可编辑档标识 isLast、以及可切换查看的历史目标时段 timeSlot。每行包含本月实际完成、本月目标三档、下月目标三档。week=0 时为本月并可编辑下月目标，week>0 时查看对应历史时段(只读)。入参均为 URL Query，无请求体。

## 用法

```bash
mbs oms erp-order-get-product-target --targetType <string> --week <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/salesTarget/getProductTarget`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `targetType` | targetType | query | string | 是 | - | 目标类型，固定传 4(按商品/开发员维度的业绩目标) |
| `week` | week | query | number | 是 | - | 时段偏移/历史时段索引。0=本月(可编辑下月目标)；>0=查看 timeSlot 对应历史时段(只读) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准响应封装) | - |
| `desc` | string | 响应提示信息(标准响应封装) | - |
| `obj` | object | 业务数据对象(成功回调直接读取 data.obj) | - |
| `obj.bigChief[]` | array | 本人/大组长目标行列表。第0项渲染为“我的目标”，其余渲染为 name；week==0 且 isLast==true 时下月三档可编辑 | - |
| `obj.bigChief[][0]` | string | 姓名(第0项前端固定显示“我的目标”，其余取本字段) | - |
| `obj.bigChief[][1]` | number | 本月实际完成(单位:万) | - |
| `obj.bigChief[][2]` | number | 本月目标-第一档(单位:万) | - |
| `obj.bigChief[][3]` | number | 本月目标-第二档(单位:万) | - |
| `obj.bigChief[][4]` | number | 本月目标-第三档(单位:万) | - |
| `obj.bigChief[][5]` | number | 下月目标-第一档(单位:万；week==0 且 isLast 时为可输入框 #prevTargetAmount{i}) | - |
| `obj.bigChief[][6]` | number | 下月目标-第二档(单位:万；可编辑态对应 #prevTargetAmountTwo{i}) | - |
| `obj.bigChief[][7]` | number | 下月目标-第三档(单位:万；可编辑态对应 #prevTargetAmountThree{i}) | - |
| `obj.sales[]` | array | 组员目标行列表。name=='汇总' 的行渲染为“组员汇总”(#huizong/#huizongTwo/#huizongThree)；前端会把末元素 pop() 后 unshift 置顶 | - |
| `obj.sales[][0]` | string | 组员姓名；值为“汇总”时为组员汇总行 | - |
| `obj.sales[][1]` | number | 本月实际完成(单位:万) | - |
| `obj.sales[][2]` | number | 本月目标-第一档(单位:万) | - |
| `obj.sales[][3]` | number | 本月目标-第二档(单位:万) | - |
| `obj.sales[][4]` | number | 本月目标-第三档(单位:万) | - |
| `obj.sales[][5]` | number | 下月目标-第一档(单位:万) | - |
| `obj.sales[][6]` | number | 下月目标-第二档(单位:万) | - |
| `obj.sales[][7]` | number | 下月目标-第三档(单位:万) | - |
| `obj.isLast` | boolean | 是否为可编辑档(true 且 week==0 时，下月目标三档以输入框形式可编辑) | - |
| `obj.timeSlot[]` | array | 可查看的历史目标时段列表，渲染为“{开始}-{结束}目标业绩”切换链接 | - |
| `obj.timeSlot[][0]` | string | 历史时段-开始时间 | - |
| `obj.timeSlot[][1]` | string | 历史时段-结束时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
