<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms record-controller-list-recordings

录制回放-列出全部录制：Axure 原型「录制/回放(recordplay)」插件在页面加载事件(load.page_notes)中调用，用于拉取当前已保存的全部操作录制列表；前端遍历返回的 recordingList，逐条以其 recordingId 再调用 /RecordController/GetRecording 拉取录制详情并渲染到录制树中。

## 用法

```bash
mbs pms record-controller-list-recordings
```

## API

- Service: `RecordController`
- Method: `POST`
- Path: `/RecordController/ListRecordings`
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
| `recordingList[]` | array | 录制记录列表；前端遍历该数组逐条渲染并再拉取详情 | - |
| `recordingList[][0]` | string | 录制记录ID；作为参数传入 /RecordController/GetRecording 拉取该录制详情 | - |
| `recordingList[][1]` | string | 录制名称（形如 axRecordingNNNN）。本接口回调未直接使用，录制对象模型中存在 (待人工确认) | - |
| `recordingList[][2][]` | array | 录制事件列表。本接口回调未直接使用，录制对象模型中存在 (待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
