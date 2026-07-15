<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-manufacture-customer-task-list

客户跟进日志列表查询：客户详情页加载/刷新「跟进日志」区块：按客户ID查询该客户全部跟进日志(线索)列表，含每条跟进的跟进人、状态、内容、下一步计划，以及该跟进下的回复(taskList)子列表，前端用 art-template taskListTemplate 渲染。

## 用法

```bash
mbs scm erp-manufacture-customer-task-list --customer <string>
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/customer/customerTaskList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `customer` | customer | body | string | 是 | - | 客户ID。来源：浏览器URL sequenceid 参数(GetQueryString("sequenceid"))，无对应输入控件 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本接口前端仅判断 data.obj,通用约定保留) | - |
| `desc` | string | 响应提示信息(通用约定) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.result[]` | array | 客户跟进日志(线索)列表 | - |
| `obj.result[][0]` | string | 跟进人头像URL(加载失败回退默认图 timg.jpg) | - |
| `obj.result[][1]` | string | 跟进人(创建人) | - |
| `obj.result[][2]` | string | 跟进时间(创建时间) | - |
| `obj.result[][3]` | string | 跟进状态(按钮展示文本) | - |
| `obj.result[][4]` | string | 跟进内容 | - |
| `obj.result[][5]` | string | 下一步计划 | - |
| `obj.result[][6]` | string | 客户(回复时回传 ReplyInfo 的 customer 参数) | - |
| `obj.result[][7]` | string | 跟进日志记录ID(作为「回复」「编辑」元素 id，编辑时回传) | - |
| `obj.result[][8]` | boolean | 是否可编辑。true=显示「编辑」入口;false=不显示 | - |
| `obj.result[][9][]` | array | 该跟进日志下的回复子列表 | - |
| `obj.result[][9][][0]` | string | 回复人头像URL(加载失败回退默认图) | - |
| `obj.result[][9][][1]` | string | 客户(回复图片 alt 文本) | - |
| `obj.result[][9][][2]` | string | 回复人(创建人) | - |
| `obj.result[][9][][3]` | string | 回复时间(创建时间) | - |
| `obj.result[][9][][4]` | string | 回复内容 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
