<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-get-inventory-log

调库日志查询：热销商品监控列表行操作「查看调库日志」时调用：根据 skuId/itemId/platformId/erpSku 定位某条 listing，返回其历史库存修改(调库)日志列表，前端以时间线按调库时间展示原库存、新库存、仓库及调库结果。

## 用法

```bash
mbs ars erpmonitor-get-inventory-log --skuId <string> --itemId <string> --platformId <string> --erpSku <string>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/getInventoryLog`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `skuId` | skuId | body | string | 是 | - | SKU ID（listing 行 row.skuId，SKU 主键标识） |
| `itemId` | itemId | body | string | 是 | - | 平台商品/listing ID（row.itemId，平台侧 item 编号） |
| `platformId` | platformId | body | string | 是 | - | 平台ID（row.platformId，标识所属销售平台） |
| `erpSku` | erpSku | body | string | 是 | - | ERP SKU 编码（row.erpSku，内部 SKU 编码） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功；非 200 时前端提示「暂无日志」 | - |
| `desc` | string | 响应提示信息（标准字段，前端异常兜底提示用） | - |
| `obj[]` | array | 调库(库存修改)日志列表，赋值给 adjustTheLibraryloglist | - |
| `obj[][0]` | string | 调库(库存修改)时间，时间线时间戳 | - |
| `obj[][1]` | string | 调库状态。枚举：成功(绿色展示)/失败(红色展示)/其他(默认样式) | - |
| `obj[][2]` | string | 原库存（修改前库存数量） | - |
| `obj[][3]` | string | 新库存（修改后库存数量） | - |
| `obj[][4]` | string | 仓库（仓储标识/仓库名称） | - |
| `obj[][5]` | string | 调库响应结果（平台/接口返回的处理信息文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
