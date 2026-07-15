<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-query-tiktok-tort-words

查询TikTok侵权词(违禁词)列表：在TikTok刊登页面点击「侵权词/违禁词」按钮时，弹出违禁词弹窗并请求该接口，返回全部TikTok侵权词(违禁词)文本数组，前端通过 art-template shopeeWordTemplate 遍历 obj 平铺渲染到弹窗列表。请求不携带任何业务参数。

## 用法

```bash
mbs pim erp-product-query-tiktok-tort-words
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/tiktokProductPublish/queryTiktokTortWords`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | TikTok侵权词(违禁词)列表,元素为字符串,前端模板遍历 obj 渲染 | - |
| `obj[]` | string | 单个侵权词/违禁词文本(数组元素,模板中以 {{v}} 直接展示为列表项) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
