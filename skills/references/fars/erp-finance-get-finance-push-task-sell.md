<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-finance-get-finance-push-task-sell

财务推送任务-销售导入日志查询：财务数据导入页面：展开某个推送任务行或导入过程中(每5秒轮询)调用，按期数(年份/周期)+任务ID查询该任务下的销售导入子任务列表，返回各子任务的数据周期、应导入数/成功数/失败数、进度、操作人、状态、操作时间，用于表格展开行渲染与进度刷新。

## 用法

```bash
mbs fars erp-finance-get-finance-push-task-sell [--years <number>] [--cycle <number>] --taskId <string>
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/financePushTask/getFinancePushTaskSell`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `years` | years | body | number | 否 | - | 期数-年份。来源期数选择器 time.split(',')[0] 并 Number()；time 为空时传空字符串。单位:年 |
| `cycle` | cycle | body | number | 否 | - | 期数-周期(第几期)。来源期数选择器 time.split(',')[1] 并 Number()；time 为空时传空字符串 |
| `taskId` | taskId | body | string | 是 | - | 任务ID。来源表格行 row.sid(外层任务记录主键 sid)，标识要查询子任务/导入日志的推送任务 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准响应字段，本页面未直接读取) | - |
| `desc` | string | 响应提示信息(标准响应字段；start/reset 回调以 res.data.desc 弹窗提示，本接口未直接展示) | - |
| `obj[]` | array | 子任务列表(导入日志数组)，赋值给展开行 row.task 渲染内层表格 | - |
| `obj[][0]` | string | 子任务ID。重导操作 reset() 以 sid 作为请求参数；外层 row-key 亦为 sid | - |
| `obj[][1]` | string | 任务名称(列 prop=taskName；内层展示实际取父行 props.row.taskName) | - |
| `obj[][2]` | string | 数据周期-开始时间(字符串)。有 endTimeStr 时展示为区间起点，否则单独展示 | - |
| `obj[][3]` | string | 数据周期-结束时间(字符串)。存在时展示 startTimeStr~endTimeStr 区间 | - |
| `obj[][4]` | number | 应导入数(列 应导入数 prop=dataCount) | - |
| `obj[][5]` | number | 成功数(列 成功数 prop=dataNum) | - |
| `obj[][6]` | number | 失败数(列 失败数 prop=errNum) | - |
| `obj[][7]` | number | 进度百分比(0~100)。绑定 el-Progress :percentage；!=100 且状态为导入完成时显示重导按钮；100 表示已导入。单位:% | - |
| `obj[][8]` | string | 操作人(列 操作人 prop=taskOper) | - |
| `obj[][9]` | string | 状态(中文文本)。枚举示例:导入完成(配合 planNum!=100 显示重导)；其余状态原样展示 | - |
| `obj[][10]` | string | 操作时间(列 操作时间 prop=taskTime) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
