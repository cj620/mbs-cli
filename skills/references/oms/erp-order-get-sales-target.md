<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-sales-target

业绩目标(大酋长/月)查询：大酋长业绩目标页加载/切换时段时调用：按 targetType=4（大酋长口径）、week（时段下标）拉取业绩目标数据，返回组员目标(bigChief)、店铺/汇总目标(sales)、可选历史时段(timeSlot)及 isLast 是否当前月标记，前端用 art-template(contentTemplate) 渲染本月/下月各三档目标表。

## 用法

```bash
mbs oms erp-order-get-sales-target --targetType <string> --week <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/salesTarget/getSalesTarget`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `targetType` | targetType | query | string | 是 | - | 目标口径类型，本页固定 4（大酋长/月维度）。来源：URL 硬编码 targetType=4 |
| `week` | week | query | number | 是 | - | 时段下标。0=本月（默认）；>0=历史时段，取值为 obj.timeSlot 数组下标+1。来源：getSalesTarget(week) 入参拼接到 week= |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（标准包装字段） | - |
| `desc` | string | 响应提示信息（标准包装字段） | - |
| `obj` | object | 业务数据对象，前端直接读取 data.obj | - |
| `obj.bigChief[]` | array | 组员目标列表。下标0为「我的目标/大酋长本人」行（可编辑下月三档）；其余为组员行 | - |
| `obj.bigChief[][0]` | string | 组员姓名 | - |
| `obj.bigChief[][1]` | string | 组员ID。-10000 为特殊标识行（该行下月目标不可编辑、保存时跳过） | - |
| `obj.bigChief[][2]` | string | 本月实际完成（下标0行单位为「万」） | - |
| `obj.bigChief[][3]` | string | 本月目标（第一档） | - |
| `obj.bigChief[][4]` | string | 本月目标（第二档） | - |
| `obj.bigChief[][5]` | string | 本月目标（第三档） | - |
| `obj.bigChief[][6]` | string | 下月目标（第一档）。可编辑时作为输入框初值，非编辑态直接展示 | - |
| `obj.bigChief[][7]` | string | 下月目标（第二档）展示值 | - |
| `obj.bigChief[][8]` | string | 下月目标（第三档）展示值 | - |
| `obj.bigChief[][9]` | string | 下月目标（第二档）金额，下标0行用作只读输入框初值（prevTargetAmountTwo{i}） | - |
| `obj.sales[]` | array | 店铺及「汇总」目标列表。name=='汇总' 为组员汇总行；其余为店铺行。前端会将数组末元素 pop 后 unshift 到首位 | - |
| `obj.sales[][0]` | string | 店铺名称；值为「汇总」时为组员汇总行 | - |
| `obj.sales[][1]` | string | 店铺管理者标识，点击展开时作为 showBig 第三参传给 getSalesTargetShop | - |
| `obj.sales[][2]` | string | 本月实际完成 | - |
| `obj.sales[][3]` | string | 本月目标（第一档） | - |
| `obj.sales[][4]` | string | 本月目标（第二档） | - |
| `obj.sales[][5]` | string | 本月目标（第三档） | - |
| `obj.sales[][6]` | string | 下月目标（第一档） | - |
| `obj.sales[][7]` | string | 下月目标（第二档） | - |
| `obj.sales[][8]` | string | 下月目标（第三档） | - |
| `obj.timeSlot[]` | array | 历史时段列表，用于渲染底部「{开始}-{结束}目标业绩」切换链接 | - |
| `obj.timeSlot[][0]` | string | 历史时段开始时间（链接文案左值） | - |
| `obj.timeSlot[][1]` | string | 历史时段结束时间（链接文案右值） | - |
| `obj.isLast` | boolean | 是否当前(最新)月。true 时显示「批量设置店铺目标」按钮，且下月三档目标可编辑 | - |
| `obj.week` | number | 时段下标。注：此字段由前端 success 回调写入(data.obj.week = week)，非后端返回，用于模板判断是否「返回本月」 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
