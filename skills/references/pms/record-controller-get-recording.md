<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms record-controller-get-recording

获取单条录制详情：录制回放(recordplay)插件在页面加载时先调用 /RecordController/ListRecordings 取得录制列表，再对列表中每条录制按 recordingId 调用本接口获取该条录制的完整内容（录制名、录制ID、事件列表），随后经 convertFromJson 转换并渲染为录制树、绑定回放触发事件。

## 用法

```bash
mbs pms record-controller-get-recording --recordingId <string>
```

## API

- Service: `RecordController`
- Method: `POST`
- Path: `/RecordController/GetRecording`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `recordingId` | recordingId | body | string | 是 | - | 录制ID。取自 ListRecordings 返回列表项 recordingItem.recordingId，作为查询该条录制详情的主键。程序遍历自动传入，非用户输入。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `recordingId` | string | 录制ID（_attachEventTriggers 用作 axRecording['recordingId'] 拼接事件元素ID、回放匹配） | - |
| `recordingName` | string | 录制名称，格式 axRecording + 4位序号（如 axRecording0001）。convertFromJson 用正则 ^axRecording[0-9]{4}$ 校验并解析序号以更新 recordingIndex；_formAxRecordingBranch 用作树节点标题 | - |
| `eventList[]` | array | 事件列表（该条录制包含的所有交互事件）。convertFromJson 遍历补写 eventInfo，_formAxRecordingBranch 逐条渲染为叶子节点 | - |
| `eventList[][0]` | string | 触发事件的元素ID。转换时赋给 eventInfo.srcElement；模板中展示 elementID: … | - |
| `eventList[][1]` | string | 事件类型枚举。单击类：OnClick/OnMouseUp/OnMouseDown/OnMouseOver/OnMouseOut/OnKeyUp/OnSelectedChange/OnSelect/OnUnselect/OnTextChange；批量鼠标类：OnMouseHover/OnMouseMove；拖拽类：OnDrag。决定该事件携带的子结构 | - |
| `eventList[][2]` | number | 事件时间戳（毫秒）。用于拼接回放事件DOM的ID(recordingId + '_' + timeStamp)与回放时匹配事件。批量鼠标事件取 mousePositions[0].timeStamp，拖拽事件取 dragInfo.startTime 回填 | - |
| `eventList[][3][]` | array | 元素路径节点数组。_formAxRecordingBranch 遍历以 / 拼接展示元素层级路径 | - |
| `eventList[][4]` | object | 光标信息对象。仅单击类事件(isSingleMouse)携带，转换时赋给 eventInfo.cursor | - |
| `eventList[][4].x` | number | 光标X坐标（源于模板注释 eventInfo.cursor.x，精确结构待人工确认） | - |
| `eventList[][4].y` | number | 光标Y坐标（源于模板注释 eventInfo.cursor.y，精确结构待人工确认） | - |
| `eventList[][5][]` | array | 鼠标轨迹数组。仅批量鼠标事件(OnMouseHover/OnMouseMove)携带，转换时赋给 eventInfo.mousePositions；事件 timeStamp 取本数组首元素的 timeStamp | - |
| `eventList[][5][][0]` | object | 轨迹点光标坐标对象（结构同 cursor，含 x/y，待人工确认） | - |
| `eventList[][5][][1]` | number | 轨迹点时间戳（毫秒），convertFromJson 读取 mousePositions[0].timeStamp | - |
| `eventList[][6]` | object | 拖拽信息对象。仅 OnDrag 事件携带，转换时赋给 eventInfo.dragInfo | - |
| `eventList[][6].startTime` | number | 拖拽起始时间戳（毫秒），convertFromJson 读取回填事件 timeStamp（currentX/currentY/lastX/lastY/xDelta/yDelta/currentTime 等为回放停止时前端计算，非本接口返回） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
