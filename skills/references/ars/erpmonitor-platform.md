<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-platform

平台列表查询（热销商品监控-平台下拉）：热销商品监控页面初始化时调用，获取全部平台列表用于「平台」下拉选择框(#plaformId)渲染。无请求参数，返回平台ID与平台名称集合。

## 用法

```bash
mbs ars erpmonitor-platform
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/platform`
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
| `code` | number | 响应状态码,200=成功（ERP标准封装，模板未引用，待人工确认） | - |
| `desc` | string | 响应提示信息（ERP标准封装，模板未引用，待人工确认） | - |
| `obj[]` | array | 平台列表(模板 {{each obj value i}} 遍历渲染下拉选项) | - |
| `obj[][0]` | string | 平台ID(作为 <option> 的 value) | - |
| `obj[][1]` | string | 平台名称(作为 <option> 的显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
