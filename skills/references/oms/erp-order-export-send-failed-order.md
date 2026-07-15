<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-export-send-failed-order

派送失败订单导出：订单看板「派送失败」标签页的导出功能：按店长、店铺、平台筛选条件（导出全部）或勾选的订单 orderids（导出选中）导出派送失败订单，后端以二进制流（Excel）返回，前端用 blob 下载为「派送失败{时间戳}.xls」。

## 用法

```bash
mbs oms erp-order-export-send-failed-order [--shopManager <string>] [--shopid <string>] [--platformId <string>] [--orderids <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/exportSendFailedOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopManager` | shopManager | body | string | 否 | - | 店长。来源页面店长下拉框 #saleLeader10，未选则为空字符串 |
| `shopid` | shopid | body | string | 否 | - | 店铺ID。来源页面店铺下拉框 #shopName10，未选则为空字符串 |
| `platformId` | platformId | body | string | 否 | - | 平台ID。来源页面平台下拉框 #platformes2（由 /erpOrder/erpOrder/saleReport/getPlatformList 填充，value=PLATFORMID），未选则为空字符串 |
| `orderids` | orderids | body | string | 否 | - | 订单ID集合（英文逗号拼接）。仅「导出选中订单」传入，取自勾选复选框 failedOrderCheckboxes 的 data-order-id；「导出全部订单」不传此字段 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `(file)` | unknown | 派送失败订单 Excel 文件二进制流（前端 responseType=blob，下载为「派送失败{时间戳}.xls」）；具体导出列由后端导出模板决定（待人工确认） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
