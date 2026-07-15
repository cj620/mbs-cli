# mbs oms erp-order-get-bad-comment-task-list

差评任务列表查询：客户评价(差评)处理列表分页查询：按订单编号、店铺/店长/客服/站点、店铺等级、回复状态、评价时间、回复次数、排序方式等条件，分 status(待处理/已处理/成功删除) 查询差评任务列表，返回订单、店铺、评价及回复时间等字段，供 customerRating 页面三个 Tab 渲染。

## 用法

```bash
mbs oms erp-order-get-bad-comment-task-list --page <number> --pageSize <number> --status <string> [--orderId <string>] [--shopName <string>] [--shopManager <string>] [--site <string>] [--customerService <string>] [--shopLevel <string>] [--taskStatus <string>] [--feedBackTime <string>] [--responseCount <string>] [--orderBy <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/badCommentTask/getBadCommentTaskList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码(首次=1,分页回调=api.getCurrent()) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(固定 10) |
| `status` | status | body | string | 是 | - | 差评状态(Tab)。0=待处理差评;1=已处理差评;2=成功删除差评(来源隐藏域 #statusFlags) |
| `orderId` | orderId | body | string | 否 | - | 订单编号(来源输入框 #orderId) |
| `shopName` | shopName | body | string | 否 | - | 店铺(来源下拉 #shopNameSelect,选项由 getResponsibleShop 加载) |
| `shopManager` | shopManager | body | string | 否 | - | 店长(来源下拉 #shopSaler,选项由 getResponsibleShopSaler 加载) |
| `site` | site | body | string | 否 | - | 站点(来源下拉 #siteList,选项由 getSiteList 加载) |
| `customerService` | customerService | body | string | 否 | - | 客服(来源下拉 #peopleName,选项由 getManagerPeopleName 加载) |
| `shopLevel` | shopLevel | body | string | 否 | - | 店铺等级(来源下拉 #shopLevel)。a=A等级;b=B等级;c=C等级;d=D等级;e=E等级 |
| `taskStatus` | taskStatus | body | string | 否 | - | 回复状态筛选(来源下拉 #taskStatus)。空=全部;0=未回复;1=已回复 |
| `feedBackTime` | feedBackTime | body | string | 否 | - | 评价时间(来源日期控件 #feedBackTime,格式 yyyy-MM-dd) |
| `responseCount` | responseCount | body | string | 否 | - | 回复次数(来源下拉 #responseCount,取值 1~10) |
| `orderBy` | orderBy | body | string | 否 | - | 排序方式(来源下拉 #orderBy)。feedBackTimeDesc=评价时间降序;feedBackTimeAsc=评价时间升序;responseTimeDesc=最近回复时间降序;responseTimeAsc=最近回复时间升序;customerReponseTimeDesc=客户回复时间倒序;customerReponseTimeAsc=客户回复时间升序 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(非200时 alert(desc)) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.total` | number | 满足条件的总条数(渲染到 #handletotal/#badtotal/#deletedtotal 及角标) | - |
| `obj.pages` | number | 总页数(传入分页组件 pageCount) | - |
| `obj.list[]` | array | 差评任务列表 | - |
| `obj.list[][0]` | string | 订单编号(列表主键,作详情链接与展开行 data-orderid) | - |
| `obj.list[][1]` | string | 店铺名称 | - |
| `obj.list[][2]` | string | 店长(销售) | - |
| `obj.list[][3]` | string | 客服 | - |
| `obj.list[][4]` | string | 客户ID | - |
| `obj.list[][5]` | string | 站点 | - |
| `obj.list[][6]` | string | 店铺等级 | - |
| `obj.list[][7]` | string | 回复状态。0=未回复;1=回复(已回复) | - |
| `obj.list[][8]` | string | 评价时间 | - |
| `obj.list[][9]` | number | 回复次数(有值时展示"N次") | - |
| `obj.list[][10]` | string | 最近回复时间 | - |
| `obj.list[][11]` | string | 客户最近回复时间 | - |
| `obj.list[][12]` | string | 订单日期(仅已处理/成功删除 Tab 渲染) | - |
| `obj.list[][13]` | string | 拉单时间(仅已处理/成功删除 Tab 渲染) | - |
| `obj.list[][14]` | string | 标处理原因(responseStatus=0 时 tooltip 展示,仅已处理/成功删除 Tab) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
