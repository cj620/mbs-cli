<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erp-report-get-db-spu-sales-status-shop-datas

个人SKU业绩-店铺SKU销售业绩数据查询：「个人sku业绩」页面主列表查询：按月份(可多选)、平台、总监/经理/主管/店长组织层级、SKU、排序条件分页查询店铺维度的SKU销售业绩，返回销售额、销量、毛利额/毛利率、退款/退款率、广告费(含店长明细)等汇总指标。

## 用法

```bash
mbs ars erp-report-get-db-spu-sales-status-shop-datas [--platformList <array<unknown>>] [--directorList <array>] [--manager <array>] [--littleLeaders <array>] [--shopManager <array>] --pageSize <number> [--sku <string>] [--monthsList <array>] --pageNo <number> [--orderMapList <array<unknown>>] [--platformNames <array>] [--bigChiefs <array>] [--leaders <array>] [--employeeNames <array>]
```

## API

- Service: `erpReport`
- Method: `POST`
- Path: `/erpReport/erpReport/feeReport/getDbSpuSalesStatusShopDatas`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformList` | platformList | body | array<unknown> | 否 | - | 平台对象列表（来源「平台」多选下拉，元素为所选平台对象） |
| `directorList` | directorList | body | array | 否 | - | 总监ID列表（来源「总监」多选下拉，元素为总监 id） |
| `manager` | manager | body | array | 否 | - | 经理ID列表（来源「经理」多选下拉，元素为经理 id） |
| `littleLeaders` | littleLeaders | body | array | 否 | - | 主管ID列表（来源「主管」多选下拉，元素为主管 id） |
| `shopManager` | shopManager | body | array | 否 | - | 店长名称列表（来源「店长」多选下拉，value 取 name） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（分页控件，可选 20/30/40，默认 20） |
| `sku` | sku | body | string | 否 | - | SKU（输入框，多个 SKU 用英文逗号分隔） |
| `monthsList` | monthsList | body | array | 否 | - | 月份列表（来源月份树形多选，元素格式 YYYY-MM，默认当前月） |
| `pageNo` | pageNo | body | number | 是 | - | 当前页码（默认 1） |
| `orderMapList` | orderMapList | body | array<unknown> | 否 | - | 排序条件列表（表头排序生成；无排序时为空数组） |
| `platformNames` | platformNames | body | array | 否 | - | 平台名称列表（由 platformList 映射 PLATFORMNAME 生成，元素为 string） |
| `bigChiefs` | bigChiefs | body | array | 否 | - | 总监列表（值等同 directorList，提交时附加发送） |
| `leaders` | leaders | body | array | 否 | - | 经理列表（值等同 manager，提交时附加发送） |
| `employeeNames` | employeeNames | body | array | 否 | - | 店长名称列表（值等同 shopManager，提交时附加发送，元素为 string） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码（标准信封，200=成功） | - |
| `desc` | string | 响应提示信息（标准信封） | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的总记录数（前端用作分页 total） | - |
| `obj.resultList[]` | array | 店铺SKU业绩列表 | - |
| `obj.resultList[][0]` | string | SKU 编号 | - |
| `obj.resultList[][1]` | string | 平台名称（值为 合计/总计 时表示汇总行） | - |
| `obj.resultList[][2]` | number | 销售额 | - |
| `obj.resultList[][3]` | number | 销量 | - |
| `obj.resultList[][4]` | number | 毛利额 | - |
| `obj.resultList[][5]` | number | 退款金额（非汇总行且非 0 时可点击查看退款明细） | - |
| `obj.resultList[][6]` | number | 退款率（原值为小数，前端 ×100 保留 2 位展示 %） | - |
| `obj.resultList[][7]` | number | 广告费（合计行展示店长广告费明细弹层） | - |
| `obj.resultList[][8]` | number | 毛利率（原值为小数，前端 ×100 保留 2 位展示 %） | - |
| `obj.resultList[][9][]` | array | 店长广告费明细列表（用于广告费弹层；四舍五入后 >0 才展示） | - |
| `obj.resultList[][9][][0]` | string | 店长（明细行） | - |
| `obj.resultList[][9][][1]` | number | 该店长广告费（明细行，前端四舍五入） | - |
| `obj.resultList[][10]` | string | 合计行明细 JSON 字符串（前端 JSON.parse 后取每项 sku/platformname，用于汇总行查看退款；非合计行可能无此字段） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
