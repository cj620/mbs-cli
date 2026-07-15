# mbs oms erp-order-get-ebay-case-task-list

eBay Case 案件任务列表查询：eBay 个案(Case)任务看板列表查询：按案件状态(待处理/已处理/已结案)分页拉取案件任务，支持按客户ID、店铺、店长、站点、客服筛选，返回案件列表及分页汇总。

## 用法

```bash
mbs oms erp-order-get-ebay-case-task-list --page <number> --pageSize <number> --status <string> [--customerId <string>] [--shopName <string>] [--shopManager <string>] [--site <string>] [--customerService <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ebayCaseTask/getEbayCaseTaskList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码(首次固定为1,分页回调取 api.getCurrent()) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(固定10) |
| `status` | status | body | string | 是 | - | 案件状态。0=待处理案件;1=已处理案件;2=已结案(来源隐藏域 #statusFlag) |
| `customerId` | customerId | body | string | 否 | - | 客户ID(来源输入框 #customerId) |
| `shopName` | shopName | body | string | 否 | - | 店铺(来源下拉 #shopNames,选项来自 getResponsibleShop) |
| `shopManager` | shopManager | body | string | 否 | - | 店长(来源下拉 #shopSalers,选项来自 getResponsibleShopSaler) |
| `site` | site | body | string | 否 | - | 站点(来源下拉 #siteLists,选项来自 getSiteList) |
| `customerService` | customerService | body | string | 否 | - | 客服(来源下拉 #peopleNames,选项来自 getManagerPeopleName) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(否则 alert(desc)) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的案件总数(展示于"共N条"与页签角标) | - |
| `obj.pages` | number | 总页数(传入 casePaging 初始化分页) | - |
| `obj.list[]` | array | 案件任务列表 | - |
| `obj.list[][0]` | string | 订单编号(链接至 orderdetail,亦作导出选中 checkbox 值) | - |
| `obj.list[][1]` | string | 争议类型 | - |
| `obj.list[][2]` | string | 个案编号 | - |
| `obj.list[][3]` | string | 店铺名称 | - |
| `obj.list[][4]` | string | 店长(销售) | - |
| `obj.list[][5]` | string | 客服 | - |
| `obj.list[][6]` | string | 客户ID | - |
| `obj.list[][7]` | string | 站点 | - |
| `obj.list[][8]` | string | 升级原因 | - |
| `obj.list[][9]` | string | 案件状态(枚举名,后端已转中文展示) | - |
| `obj.list[][10]` | string | case创建时间 | - |
| `obj.list[][11]` | string | 结案时间(已处理/已结案页签展示) | - |
| `obj.list[][12]` | number | 处理时间(天)(仅已结案页签展示) | - |
| `obj.list[][13]` | string | 判定结果(仅已结案页签展示) | - |
| `obj.list[][14]` | string | 案件任务主键(传入 targetEbayCaseTaskFinish 标记已处理) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
