<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm purchase-core-service-get

今日工作统计查询(下单/跟单任务汇总)：采购“提交今日工作”弹窗数据源：GET 拉取当日下单任务(按采购员的总任务量/完成量/付款完成量)与跟单任务(按组别的任务类型明细及合计)统计，前端将 followUpTask 对象按键遍历转成 [{label,value}] 后渲染到弹窗左右两张表格。

## 用法

```bash
mbs scm purchase-core-service-get
```

## API

- Service: `purchase-core-service`
- Method: `GET`
- Path: `/gateway/purchase-core-service/report/today/work/get`
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
| `downOrderTask[]` | array | 下单任务统计列表(按采购员一行，弹窗左侧“下单”表) | - |
| `downOrderTask[][0]` | string | 采购员(下单人)姓名 | - |
| `downOrderTask[][1]` | number | 总任务量 | - |
| `downOrderTask[][2]` | number | 总完成量 | - |
| `downOrderTask[][3]` | number | 总付款完成量 | - |
| `followUpTask` | object | 跟单任务统计(弹窗右侧“跟单”表)。后端原始为对象:键=组别名称，值=该组任务明细数组;前端遍历规范化为 [{label,value}] | - |
| `followUpTask.label` | string | 组别名称(前端由 followUpTask 对象的键转换生成，表头“组别”) | - |
| `followUpTask.value[]` | array | 该组别的跟单任务明细数组(即 followUpTask[键] 的值) | - |
| `followUpTask.value[][0]` | string | 跟单任务类型(表头“跟单任务类型”;取值含具体任务类型及“合计”行，合计行前端标红) | - |
| `followUpTask.value[][1]` | number | 今天任务量(表头“今天任务量”) | - |
| `followUpTask.value[][2]` | number | 完成任务量(表头“完成任务量”) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
