# mbs ars erp-report-list-report

TikTok店铺回款状态报表列表查询：按运营状态、回款状态、总监/经理/运营、店铺等条件分页查询 TikTok 店铺扣分与回款状态监控报表，支持按扣分、拉取时间排序，返回店铺监控行列表及总数。

## 用法

```bash
mbs ars erp-report-list-report [--shopNameList <array>] [--shopManagerList <array>] [--paymentStatus <string>] [--managerList <array>] [--leaderList <array>] [--operateStatus <array>] --pageSize <number> --currentPage <number> [--order <string>] [--sort <string>]
```

## API

- Service: `erpReport`
- Method: `POST`
- Path: `/erpReport/erpReport/tiktok/payment/report/list`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopNameList` | shopNameList | body | array | 否 | - | 店铺名称列表（店铺多选框，多值用空格分割后拆为数组） |
| `shopManagerList` | shopManagerList | body | array | 否 | - | 运营(店长)名称列表（运营多选框，取所选项 name 字段） |
| `paymentStatus` | paymentStatus | body | string | 否 | - | 回款状态。枚举：正常/异常（空=不限） |
| `managerList` | managerList | body | array | 否 | - | 经理名称列表（取所选项 name） |
| `leaderList` | leaderList | body | array | 否 | - | 总监名称列表（取所选项 name） |
| `operateStatus` | operateStatus | body | array | 否 | - | 运营状态（单选值包装为单元素数组）。枚举：1=运营中;2=暂停运营;3=永久关闭中 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（前端固定为100） |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码（分页控件，从1开始） |
| `order` | order | body | string | 否 | - | 排序方向（仅排序时提交）。枚举：asc=升序;desc=降序 |
| `sort` | sort | body | string | 否 | - | 排序字段（仅排序时提交）。取值：扣分列=h.score + 0；拉取时间列=a.created_on |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（统一响应包字段） | - |
| `desc` | string | 响应提示信息（统一响应包字段） | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的店铺总数（前端绑定分页 total） | - |
| `obj.result[]` | array | 店铺监控行列表（表格数据源） | - |
| `obj.result[][0]` | string | 店铺名称（表格列“店铺”） | - |
| `obj.result[][1]` | string | 运营状态（表格列“运营状态”；对应1运营中/2暂停运营/3永久关闭中，展示形式待人工确认） | - |
| `obj.result[][2]` | string | 店长/运营（表格列“店长”） | - |
| `obj.result[][3]` | string | 经理（表格列“经理”） | - |
| `obj.result[][4]` | string | 总监（表格列“总监”） | - |
| `obj.result[][5]` | string | 拉取时间（表格列“拉取时间”，可按 a.created_on 排序） | - |
| `obj.result[][6]` | number | 扣分（表格列“扣分”，可按 h.score + 0 排序） | - |
| `obj.result[][7]` | string | 回款状态（表格列“回款状态”）。枚举：正常(success标签)/异常(warning标签) | - |
| `obj.result[][8]` | string | 备注（表格列“备注”） | - |
| `obj.result[][9]` | string | 记录（表格列“记录”，可行内编辑，失焦经 tips/save 接口保存） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
