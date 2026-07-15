<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-export-low-profit-order

限价(低毛利)订单导出：订单中心「限价」页签的订单导出接口：以与列表查询(findLowProfitOrder)相同的筛选条件(店长、店铺、任务类型、平台、推送时间区间、处理状态)拉取低毛利/限价订单，以 Excel(.xls) 二进制流返回供前端下载。导出全部走 limitedPriceExportall()，导出选中走 limitedPriceExportchek()(追加 orderids)。

## 用法

```bash
mbs oms erp-order-export-low-profit-order [--shopManager <string>] [--shopid <string>] [--orderType <string>] [--platformId <string>] [--yearMonth <string>] [--operStatus <string>] [--pushStartTime <string>] [--pushEndTime <string>] [--orderids <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/exportLowProfitOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopManager` | shopManager | body | string | 否 | - | 店长(来源下拉框 #saleLeader10，空串=不限) |
| `shopid` | shopid | body | string | 否 | - | 店铺ID(来源下拉框 #shopName10，空串=不限) |
| `orderType` | orderType | body | string | 否 | - | 任务类型(来源下拉框 #orderType)。''=全部;1=不满足供应商限价;2=不满足公司内部毛利率要求;3=smt高成本低毛利率;4=ebay高金额低毛利率 |
| `platformId` | platformId | body | string | 否 | - | 平台ID(来源下拉框 #platformes2，选项动态加载，空串=不限) |
| `yearMonth` | yearMonth | body | string | 否 | - | 年月($("#yearMonth2").val())；#yearMonth2 下拉在页面中已被注释，时间筛选改由 date-picker 实现，故本字段通常为空 (待人工确认) |
| `operStatus` | operStatus | body | string | 否 | - | 处理(操作)状态(来源下拉框 #operStatus)。''=全部;1=未完成(默认);2=已完成 |
| `pushStartTime` | pushStartTime | body | string | 否 | - | 推送时间-起始(date-picker timmer[0]，仅选择时间区间时下传) |
| `pushEndTime` | pushEndTime | body | string | 否 | - | 推送时间-结束(date-picker timmer[1]，仅选择时间区间时下传) |
| `orderids` | orderids | body | string | 否 | - | 选中导出的订单ID集合(逗号拼接)。仅「导出选中订单」limitedPriceExportchek() 追加，取自勾选 name=limitedPriceCheckboxes 的值；「导出全部订单」不含此字段 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `(file)` | unknown | Excel(.xls) 文件二进制流(Blob)，前端以 responseType=blob 接收并下载为 限价{时间戳}.xls，无 JSON 结构体 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
