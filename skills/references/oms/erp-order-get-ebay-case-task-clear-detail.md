<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-ebay-case-task-clear-detail

eBay Case/Return升级清理详情查询：客服工作台详情页「case/return升级」页签数据查询：按店铺/组员维度返回各时间段(表头)收到的 case/return 升级数与未处理升级数，并标记是否「忘清」。页面加载时无参调用，结果渲染到 #contentTemplate2。

## 用法

```bash
mbs oms erp-order-get-ebay-case-task-clear-detail
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ebayCaseTask/getEbayCaseTaskClearDetail`
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
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息（非200时弹出） | - |
| `content` | string | 内容标识；'1'时显示组员列，否则隐藏；并逐行赋给 obj.list[i].content | - |
| `obj` | object | 业务数据对象 | - |
| `obj.header[]` | array | 表头列表（各时间段/列标题，每列展开为收到升级/未处理升级数两列） | - |
| `obj.header[]` | string | 表头单元值（时间段/列名文本，header 数组元素，待人工确认具体含义） | - |
| `obj.list[]` | array | 店铺数据行列表 | - |
| `obj.list[][0]` | string | 店铺名称 | - |
| `obj.list[][1]` | string | 内容标识（前端由顶层 data.content 赋值）；'1'时展示该行组员 name 单元格 | - |
| `obj.list[][2]` | string | 组员名称（仅 content=='1' 时展示） | - |
| `obj.list[][3][]` | array | 该店铺各时间段单元列表（与 header 对应） | - |
| `obj.list[][3][][0]` | number | 收到 case/return 升级数（收到升级列） | - |
| `obj.list[][3][][1]` | number | 未处理升级数（>0 时红色显示） | - |
| `obj.list[][3][][2]` | number | 是否已清理标记；0=忘清（红色显示(忘清)），非0=已清 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
