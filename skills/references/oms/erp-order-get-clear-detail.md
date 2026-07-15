<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-clear-detail

差评任务清理详情查询：客服服务详情页「评价」Tab 加载时调用，按店铺×时间维度统计各店铺收到的差评数与剩余回复数，并标记是否「忘清」(未清理)，渲染为多列统计表格。页面 ready 时无参直接调用。

## 用法

```bash
mbs oms erp-order-get-clear-detail
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/badCommentTask/getClearDetail`
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
| `code` | number | 响应状态码，200=成功（成功才渲染，否则 alert(data.desc)） | - |
| `desc` | string | 响应提示信息（失败时弹窗展示） | - |
| `content` | string | 内容标志：'1'=按组员维度展示(显示组员列)；其它=不显示组员列。前端回写入每行 list[i].content | - |
| `obj` | object | 业务数据对象 | - |
| `obj.header[]` | array | 表头维度集合(时间/日期等列名)，渲染为多列表头 {{value}} | - |
| `obj.list[]` | array | 店铺统计行列表 | - |
| `obj.list[][0]` | string | 店铺名称 | - |
| `obj.list[][1]` | string | 组员(客服)姓名，仅 content=='1' 时显示 | - |
| `obj.list[][2]` | string | 行级内容标志，前端用顶层 content 回写(data.obj.list[i].content = data.content)，用于模板内 {{if v.content=='1'}} 判断，非后端原始返回(待人工确认后端是否返回) | - |
| `obj.list[][3][]` | array | 该店铺各表头维度对应的统计项数组(与 header 一一对应) | - |
| `obj.list[][3][][0]` | number | 收到差评数(该维度收到的差评总数) | - |
| `obj.list[][3][][1]` | number | 剩余回复数(未回复差评数)，>0 时标红展示 | - |
| `obj.list[][3][][2]` | number | 是否已清理标记：0=未清理(渲染红色「(忘清)」)；非0=已清理 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
