<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars yyaccount-getmessage

关注SKU到货异常消息查询：经理仪表盘消息中心，点击"关注sku到货异常"按钮触发，按消息类型(messageTypeId=20)与接收人(toId)分页查询SKU到货异常通知列表，返回消息记录(创建时间/类型/正文/标题/来源SKU)及消息条数，经 contentComment 模板渲染。

## 用法

```bash
mbs fars yyaccount-getmessage --status <number> --messageTypeId <number> --toId <string> --index <number> --flag <number>
```

## API

- Service: `yyaccount`
- Method: `POST`
- Path: `/yyaccount/account/messagecontroller/getmessage`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `status` | status | body | number | 是 | - | 消息状态过滤(源码固定传 0；0 通常表示未读/待处理) |
| `messageTypeId` | messageTypeId | body | number | 是 | - | 消息类型ID(源码固定传 20，对应"关注SKU到货异常"通知类型) |
| `toId` | toId | body | string | 是 | - | 消息接收人(员工ID)，来源 URL 查询参数 yyemployeeid(getQueryString("yyemployeeid")) |
| `index` | index | body | number | 是 | - | 分页页码/索引(源码固定传 1，即第1页) |
| `flag` | flag | body | number | 是 | - | 查询标志位(源码固定传 0；具体枚举含义待人工确认) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(200=成功)。本接口 success 中未读取，按项目信封约定补充(待人工确认) | - |
| `content` | string | 响应附加信息/提示。本接口 success 中未读取，按项目信封约定补充(待人工确认) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.map[]` | array | 消息记录列表(前端 data.obj.map.map(...) 遍历渲染) | - |
| `obj.map[][0]` | string | 消息创建时间(前端经 getTody() 格式化为 日期+时分 展示) | - |
| `obj.map[][1]` | string | 消息类型(渲染于通知行类型列) | - |
| `obj.map[][2]` | string | 消息正文内容 | - |
| `obj.map[][3]` | string | 消息标题 | - |
| `obj.map[][4]` | string | 来源SKU(拼接详情链接 /product/SKUdetails2.html?SKU={causeId}) | - |
| `obj.count` | number | 消息条数(赋给 msgData.content，并写入 #SkuNoticeBtn .badge 角标) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
