<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-finance-get-finance-push-task

财务推送任务进度查询：财务数据导入页按所选期数(年份 years + 期次 cycle)查询财务推送任务列表，返回各任务的应导入数/成功数/失败数/进度/状态等汇总字段，用于 el-table 渲染任务进度。

## 用法

```bash
mbs fars erp-finance-get-finance-push-task [--years <number>] [--cycle <number>]
```

## API

- Service: `erpFinance`
- Method: `GET`
- Path: `/erpFinance/erpFinance/financePushTask/getFinancePushTask`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `years` | years | body | number | 否 | - | 期数-年份。来源期数选择器 el-select，由 time.split(',')[0] 经 Number() 转换；选项值来自 getCycles 的 item.years。未选择时传空字符串。 |
| `cycle` | cycle | body | number | 否 | - | 期数-期次/周期。来源期数选择器 el-select，由 time.split(',')[1] 经 Number() 转换；选项值来自 getCycles 的 item.cycle。未选择时传空字符串。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(平台统一封装字段) | - |
| `desc` | string | 响应提示信息(平台统一封装字段,用于 ElMessage 展示) | - |
| `obj[]` | array | 财务推送任务列表(前端赋值给 datalist 渲染外层 el-table) | - |
| `obj[][0]` | string | 任务唯一标识(el-table row-key；后续 start/reset/展开作为 taskId/sid 传参) | - |
| `obj[][1]` | string | 任务名称(列「任务名称」,prop=taskName) | - |
| `obj[][2]` | string | 数据周期-起始时间(字符串)。列「数据周期」展示起始 | - |
| `obj[][3]` | string | 数据周期-结束时间(字符串)。有值时展示 起始~结束,无值时仅展示起始 | - |
| `obj[][4]` | number | 应导入数(列「应导入数」,prop=dataCount) | - |
| `obj[][5]` | number | 成功数(列「成功数」,prop=dataNum) | - |
| `obj[][6]` | number | 失败数(列「失败数」,prop=errNum) | - |
| `obj[][7]` | number | 进度百分比(列「进度」,用于 el-Progress :percentage,0~100) | - |
| `obj[][8]` | string | 操作人(列「操作人」,prop=taskOper) | - |
| `obj[][9]` | string | 任务状态(列「状态」,文本展示如『导入完成』,前端据此判断是否显示重导按钮) | - |
| `obj[][10]` | string | 操作时间(列「操作时间」,prop=taskTime) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
