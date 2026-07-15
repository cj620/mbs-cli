# mbs pms erp-task-find-direction

人员(方向)下拉列表查询：任务统计报表页初始化时调用，用于拉取「人员/方向(direction)」下拉选择框的可选项列表。接口无请求参数，返回一个字符串数组，前端通过 contentTemplate2 模板 v-for 渲染为 #direction 下拉框的 option 选项。

## 用法

```bash
mbs pms erp-task-find-direction
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/taskController/findDirection`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（本服务统一外层字段）(待人工确认) | - |
| `desc` | string | 响应提示信息（本服务统一外层字段）(待人工确认) | - |
| `obj[]` | array | 人员/方向名称列表，前端遍历渲染为 #direction 下拉选项 | - |
| `obj[]` | string | 数组元素：单个「人员/方向」名称字符串，模板中作为 option 的 value 与显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
