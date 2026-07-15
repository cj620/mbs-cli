<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-publish-detail-info

Lazada刊登详情统计(getPublishDetailInfo)：进入Lazada刊登管理页时调用，获取当前用户/团队的刊登任务统计：待刊登、刊登中、昨日刊登成功/失败、今日刊登成功/失败六项指标，渲染到页面头部统计卡片。该接口无请求参数。

## 用法

```bash
mbs pim erp-product-get-publish-detail-info
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaPublish/getPublishDetailInfo`
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
| `code` | number | 响应状态码,200=成功(本接口success回调未校验code,直接取obj) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 刊登统计数据数组，前端取第一个元素 obj[0] | - |
| `obj[][0]` | number | 待刊登数量(渲染至 #waitPublishs) | - |
| `obj[][1]` | number | 刊登中数量(渲染至 #publishing) | - |
| `obj[][2]` | number | 昨日刊登成功数量(渲染至 #successPublishYestoday) | - |
| `obj[][3]` | number | 昨日刊登失败数量(渲染至 #failPublishYestoday) | - |
| `obj[][4]` | number | 今日刊登成功数量(渲染至 #successPublishToday) | - |
| `obj[][5]` | number | 今日刊登失败数量(渲染至 #failPublishToday) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
