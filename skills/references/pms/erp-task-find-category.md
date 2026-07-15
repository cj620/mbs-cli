<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms erp-task-find-category

订阅类目候选查询：任务细节页“订阅类目”弹窗打开前，加载全部可订阅类目名称列表，用于填充 #findCategory 的 chosen 多选下拉框的候选项；返回值为类目名称字符串数组，每个元素同时作为 option 的 value 与显示文本。

## 用法

```bash
mbs pms erp-task-find-category
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/taskController/findCategory`
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
| `code` | number | 响应状态码,200=成功（统一封装,本接口回调未使用）(待人工确认) | - |
| `desc` | string | 响应提示信息（统一封装,本接口回调未使用）(待人工确认) | - |
| `obj[]` | array | 订阅类目候选列表：类目名称字符串数组，用于填充 #findCategory 下拉选项 | - |
| `obj[]` | string | 数组元素——单个类目名称，既作为 <option> 的 value 也作为显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
