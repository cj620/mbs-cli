<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-details-activate-info

TikTok Listing 批量上/下架(detailsActivateInfo)：店铺爆款监控页选中若干 TikTok(platformId=120) listing 后，批量提交上架(operType=1)或下架(operType=2)。前端把勾选行完整对象数组随操作类型一并 POST 给后端，后端据 code/desc 返回处理结果并前端弹窗提示。

## 用法

```bash
mbs ars erpmonitor-details-activate-info --operType <number> --esProductSKUList <array<unknown>>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/detailsActivateInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `operType` | operType | body | number | 是 | - | 操作类型。1=上架(tiktokBatchPush)；2=下架(tiktokBatchPull)。无输入控件，由按钮回调代码固定传值 |
| `esProductSKUList` | esProductSKUList | body | array<unknown> | 是 | - | 勾选的 TikTok(platformId=120) listing 行集合；元素为选中 listing 完整行对象，来源 getChosenRow() 过滤 platformId===120 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（前端据此判成功/失败 type） | - |
| `desc` | string | 响应提示信息（前端 $message 直接展示） | - |
| `obj` | object | 业务数据对象；此接口前端调用处未读取，是否返回(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
