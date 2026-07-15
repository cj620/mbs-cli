<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms erp-task-get-four-day-time

获取评价任务四/五天时间Tab信息：listing评价列表页(evaluationList.html)加载时调用，返回顶部若干个时间Tab（今天/昨天/前天/更早/精华等）的标题、任务数量与时间(区间)。前端据此渲染各Tab文案与徽标数字，并用第1个Tab的时间(TIMES)自动触发 reviewListingList 查询当日评价列表。

## 用法

```bash
mbs pms erp-task-get-four-day-time
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/reviewListingTask/getFourDayTime`
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
| `code` | number | 响应状态码，200=成功（前端据此触发首个Tab列表查询） | - |
| `obj[]` | array | 时间Tab信息列表，按下标对应各Tab：obj[0]今天/obj[1]昨天/obj[2]前天/obj[3]更早/obj[4]精华 | - |
| `obj[][0]` | string | Tab标题名称（渲染到 .oneTitle/.twoTitle/.threeTitle/.fourTitle/.fiveTitle） | - |
| `obj[][1]` | number | 该Tab时间段的任务数量（渲染到 .oneNum/.twoNum/.threeNum/.fourNum 徽标；obj[4]精华Tab未取用） | - |
| `obj[][2]` | string | 该Tab对应的时间/时间区间字符串（渲染到 .oneTime 等隐藏域，并作为 searchListing(times,num) 的 times 入参） | - |
| `obj[][3]` | string | 类型标识（仅第5个元素 obj[4] 取用，渲染到 .fivenone，作为精华Tab查询 searchListing(fivetimes,5,type) 的 type 入参） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
