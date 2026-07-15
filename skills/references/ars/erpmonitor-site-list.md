<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-site-list

TikTok提价-站点列表查询：打开「生成提价商品信息」弹窗时调用，拉取全部可选站点编码列表，用于渲染「请选择站点」下拉框(select2)。无请求参数，返回站点编码字符串数组，前端将每个元素同时作为下拉项的 id 与 text。

## 用法

```bash
mbs ars erpmonitor-site-list
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/siteList`
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
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息（本接口回调未使用，为统一响应体标准字段）(待人工确认) | - |
| `obj[]` | array | 站点列表；元素为站点编码字符串 | - |
| `obj[]` | string | 单个站点编码（前端直接作为 select2 下拉项的 id 与 text 显示） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
