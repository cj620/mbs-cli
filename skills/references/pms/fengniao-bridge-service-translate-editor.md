<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms fengniao-bridge-service-translate-editor

获取AI精修(翻译编辑器)链接：图库右键"AI精修"时调用，向蜂鸟桥接服务请求翻译/精修编辑器访问链接(url)，请求体为空，用户身份通过请求头 customer_id(来源 localStorage userid) 传递；前端拿到 data.url 后作为编辑器 iframe 的 src 打开。

## 用法

```bash
mbs pms fengniao-bridge-service-translate-editor
```

## API

- Service: `fengniao-bridge-service`
- Method: `POST`
- Path: `/gateway/fengniao-bridge-service/auth/translateEditor`
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
| `code` | number | 响应状态码，200=成功(前端 code!==200 直接 return) | - |
| `message` | string | 错误/提示信息(响应拦截器在 code!=200 时读取并提示；成功时前端未使用)(待人工确认返回结构) | - |
| `data` | object | 业务数据对象 | - |
| `data.url` | string | AI精修/翻译编辑器访问链接，前端赋值给 aiRefineUrl 作为编辑器 iframe 的 src | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
