<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-great-chief

销售大酋长下拉列表查询：店铺运营监控页初始化时加载"销售大酋长"筛选下拉框的数据源。无请求参数，返回销售大酋长的 ID 与名称列表，前端用 art-template(contentTemplate4) 渲染为 option 选项，供搜索时按大酋长过滤。

## 用法

```bash
mbs ars erpmonitor-great-chief
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/monitor/greatChief`
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
| `code` | number | 响应状态码,200=成功(项目统一包装) | - |
| `desc` | string | 响应提示信息(项目统一包装) | - |
| `obj[]` | array | 销售大酋长列表(模板 each obj value i 遍历渲染下拉选项) | - |
| `obj[][0]` | string | 销售大酋长ID(作为 option 的 value,搜索时作为 greatChief 参数值提交) | - |
| `obj[][1]` | string | 销售大酋长名称(作为 option 的显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
