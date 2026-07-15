<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-cache-express

获取缓存运单(借用单号)信息：在“借用Vova运单号”页面，前端无参 POST 请求该接口，获取后端缓存的运单号集合及外部/内部调用耗时；desc/innerdesc/url 均为逗号拼接字符串，前端 split(',') 后通过 art-template 渲染并显示接口用时/内部用时。

## 用法

```bash
mbs oms erp-order-get-cache-express
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ERPOrder/getCacheExpress`
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
| `desc` | string | 缓存运单号集合(逗号拼接字符串)，前端 desc.split(',') 后作为 res.obj 渲染到 #content | - |
| `innerdesc` | string | 内部运单号集合(逗号拼接字符串)，前端 innerdesc.split(',') 后作为 res2.obj 渲染到 #content2 | - |
| `url` | string | 与运单号对应的链接集合(逗号拼接字符串)，前端 url.split(',') 后作为 res2.url | - |
| `outsidetime` | number | 接口(外部)用时，单位：毫秒，前端展示“接口用时：{outsidetime}毫秒”到 #outsidetime | - |
| `innertime` | number | 内部用时，单位：毫秒，前端展示“内部用时：{innertime}毫秒”到 #innertime | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
