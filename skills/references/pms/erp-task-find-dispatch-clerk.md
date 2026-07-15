# mbs pms erp-task-find-dispatch-clerk

分派任务者统计查询：任务管理（我收到的任务）页面右侧「分派任务者」栏统计：按日期区间、处理结果、任务分类类型统计各分派人（任务创建人）名下的任务数量，返回分派人头像、账号及任务数，用于渲染分派人列表。

## 用法

```bash
mbs pms erp-task-find-dispatch-clerk [--startdate <string>] [--enddate <string>] [--dealResult <string>] --type <number>
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/taskController/findDispatchClerk`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `startdate` | startdate | body | string | 否 | - | 开始日期(格式 yyyy-MM-dd)。来源：全局 startTime，由顶部按日期下拉 #getTime(近7/10/15/30/60/100/120天,据当天回推)或 #startTime 日期控件得到；未选择时传空字符串 |
| `enddate` | enddate | body | string | 否 | - | 结束日期(格式 yyyy-MM-dd)。来源：全局 endTime，选择近N天时默认为当天,或由 #endTime 日期控件得到；未选择时传空字符串 |
| `dealResult` | dealResult | body | string | 否 | - | 处理结果。来源 #dealResult 下拉。枚举：已解决/无效/不处理/待处理(默认待处理)；选占位项时传空字符串 |
| `type` | type | body | number | 是 | - | 任务分类类型，前端固定传 1(我收到的任务) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应包裹,回调未直接使用)(待人工确认) | - |
| `desc` | string | 响应提示信息(统一响应包裹,回调未直接使用)(待人工确认) | - |
| `obj[]` | array | 分派任务者列表；前端据 data.obj 是否存在及其长度遍历渲染 | - |
| `obj[][0]` | string | 分派人头像URL(<img src>,加载失败回退默认头像 /2018ui/assets/images/timg.jpg) | - |
| `obj[][1]` | string | 分派任务者(任务创建人账号/姓名),展示于头像后 | - |
| `obj[][2]` | number | 该分派人名下任务数量,展示为「N个」 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
