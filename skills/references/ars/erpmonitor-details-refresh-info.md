# mbs ars erpmonitor-details-refresh-info

热销商品监控-批量同步刷新详情信息：在“店铺热销商品”列表中勾选若干 listing 后触发，前端把全部勾选行（getChosenRow() 返回的完整 listing 对象数组）原样作为请求体提交后端发起详情同步刷新任务，前端仅用返回的 code/desc 弹窗提示。

## 用法

```bash
mbs ars erpmonitor-details-refresh-info --fieldfb8f784d <array<object>>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/detailsRefreshInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `fieldfb8f784d` | （请求体根数组） | body | array<object> | 是 | - | 勾选的 listing 行对象数组（getChosenRow() 返回值） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息（前端 alert(desc) 弹窗展示） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
