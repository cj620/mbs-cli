# mbs ars erpmonitor-batch-add-revise-white-list

批量加入改价(缺货不改0)白名单：在线列表页面勾选一条或多条 listing 后，点击"我不要缺货改0"，将所选 listing（按 平台ID+店铺名+平台商品ID 定位）批量加入改价白名单，加入后系统不再对其执行缺货自动改0处理。请求体为 JSON 数组，成功后弹出提示并刷新列表。

## 用法

```bash
mbs ars erpmonitor-batch-add-revise-white-list --root <array<unknown>>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/batchAddReviseWhiteList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `root` | (root) | body | array<unknown> | 是 | - | 请求体根：待加入白名单的 listing 列表（勾选的表格行，逐条为对象） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（成功后 search() 刷新列表） | - |
| `desc` | string | 响应提示信息（成功/失败均通过 #myModal 弹窗 #tishi 展示） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
