# mbs prm erp-publish-get-publish-detail-info

刊登统计概览查询：ebay批量刊登页面初始化时调用，无入参，返回当前等待刊登、刊登中、昨日/今日刊登成功与失败数量等汇总统计，用于页面顶部状态条展示。

## 用法

```bash
mbs prm erp-publish-get-publish-detail-info
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/productPublish/getPublishDetailInfo`
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
| `code` | number | 响应状态码(统一包装，前端该回调未读取，待人工确认) | - |
| `desc` | string | 响应提示信息(统一包装，前端该回调未读取，待人工确认) | - |
| `obj[]` | array | 刊登统计数据列表，前端取第1个元素 list[0] 展示 | - |
| `obj[][0]` | number | 当前等待刊登数量(渲染至 #waitPublishs) | - |
| `obj[][1]` | number | 当前刊登中数量(渲染至 #publishing) | - |
| `obj[][2]` | number | 昨日刊登成功数量(渲染至 #successPublishYestoday) | - |
| `obj[][3]` | number | 昨日刊登失败数量(渲染至 #failPublishYestoday) | - |
| `obj[][4]` | number | 今日刊登成功数量(渲染至 #successPublishToday) | - |
| `obj[][5]` | number | 今日刊登失败数量(渲染至 #failPublishToday) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
