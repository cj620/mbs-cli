<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-get-listing-log

Listing操作日志查询：爆款商品监控(店铺爆款)列表中，点击某条 listing 查看其历史操作日志（改价、调库存等操作记录）。入参为该 listing 的 SPU/商品ID(spuId)，返回该 listing 的操作日志时间线列表，前端以 el-timeline 时间线渲染。

## 用法

```bash
mbs ars erpmonitor-get-listing-log --spuId <string>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/getListingLog`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spuId` | spuId | body | string | 是 | - | listing 的 SPU/商品ID（前端传入 item.itemId，即该 listing 在对应平台的商品标识），按此 ID 查询其操作日志 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | listing 操作日志列表（赋给 listingLogInfo，时间线渲染） | - |
| `obj[][0]` | string | 操作时间（作为时间线 timestamp 展示） | - |
| `obj[][1]` | string | 操作状态。枚举：成功（蓝色高亮展示 apiResponse）；非「成功」视为未成功/等待，展示 apiResponse 或回退文案「等待操作(改价，调库)」 | - |
| `obj[][2]` | string | 接口/操作响应内容（操作结果描述，时间线正文展示；为空且非成功时回退文案「等待操作(改价，调库)」） | - |
| `obj[][3]` | string | 操作人（时间线正文括号内展示） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
