# mbs ars erpmonitor-get-platform-name-and-id

查询平台名称与ID列表：商品统计(productStatistics)页面初始化时调用，获取全部平台的 平台ID/平台名称 列表，用于渲染顶部「请选择平台」下拉框(#platformName)的 option 选项。

## 用法

```bash
mbs ars erpmonitor-get-platform-name-and-id
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/monitor/getPlatformNameAndId`
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
| `obj[]` | array | 平台列表（模板 {{each obj value i}} 遍历项） | - |
| `obj[][0]` | string | 平台ID（写入 option 的 value，作为选中值传给店铺/统计接口） | - |
| `obj[][1]` | string | 平台名称（显示在 option 文本，供用户选择） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
