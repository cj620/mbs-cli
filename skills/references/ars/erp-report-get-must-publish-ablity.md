# mbs ars erp-report-get-must-publish-ablity

获取必发布(适用)平台列表：进入「今日推送团队监控」页面时调用，拉取必发布/适用平台清单，用于顶部「请选择平台」下拉框(el-select)的选项渲染。无请求参数，返回平台数组。

## 用法

```bash
mbs ars erp-report-get-must-publish-ablity
```

## API

- Service: `erpReport`
- Method: `GET`
- Path: `/erpReport/erpReport/todayPushTeam/getMustPublishAblity`
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
| `code` | number | 响应状态码，200=成功(统一响应封装，本调用前端未显式读取)(待人工确认) | - |
| `desc` | string | 响应提示信息(统一响应封装)(待人工确认) | - |
| `obj[]` | array | 平台列表数组(前端赋值给 platformlist，用于平台下拉选项) | - |
| `obj[][0]` | number | 平台ID(作为 el-option 的 :key) | - |
| `obj[][1]` | string | 平台名称(作为 el-option 的 :value，选中后写入 searchOption.platformName) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
