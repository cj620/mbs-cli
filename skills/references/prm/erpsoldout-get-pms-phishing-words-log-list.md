# mbs prm erpsoldout-get-pms-phishing-words-log-list

钓鱼词操作日志列表查询：钓鱼词库列表页中，点击某一条钓鱼词记录“操作日志”列的“获取更多”链接时，按该记录ID查询其全部操作日志，返回操作时间/操作人/操作内容列表，前端以时间线(el-timeline)形式弹窗展示。

## 用法

```bash
mbs prm erpsoldout-get-pms-phishing-words-log-list --id <string>
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/getPmsPhishingWordsLogList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | string | 是 | - | 钓鱼词记录ID（主键，唯一定位该条钓鱼词以查询其操作日志，取自表格行 row.id） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 操作日志列表（前端赋值 history.value = data.obj 并渲染时间线） | - |
| `obj[][0]` | string | 操作时间（作为时间线节点 :timestamp 显示） | - |
| `obj[][1]` | string | 操作人（蓝色主文本展示） | - |
| `obj[][2]` | string | 操作内容/日志描述（次级灰色文本展示） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
