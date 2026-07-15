# mbs prm yypms-id-get-developer-approval-by-id

开发审批详情查询（按ID）：根据开发任务/审批ID查询开发审批详情。前端在 AI 图片描述组件中，当未取到1688采集图片(getAlibabaAiProductImg)时，调用本接口作为回退(fallback)，从返回的 obj.pictureList 中解析供应商图片URL列表用于展示。

## 用法

```bash
mbs prm yypms-id-get-developer-approval-by-id
```

## API

- Service: `yypms`
- Method: `GET`
- Path: `/yypms/pms/developerMission/getDeveloperApprovalById/{id}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | path | string | 是 | - | 开发任务/审批ID（路径变量，拼接于URL末尾）。来源：当前页面路由参数 this.$route.query.id，无对应输入控件，由页面跳转携带 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（统一返回包字段） | - |
| `desc` | string | 响应提示信息（统一返回包字段，失败时前端取 res.data.desc 提示） | - |
| `obj` | object | 业务数据对象（开发审批详情），前端读取 approvalRes.data.obj | - |
| `obj.pictureList` | unknown | 供应商图片URL列表。数组时为URL字符串数组；字符串时为多个URL以 # 分隔的拼接串（前端 split('#') 解析）。空或异常时回退为空数组。obj 其余子字段本次调用未在前端引用,未展开(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
