# mbs fars erp-finance-paypalcase-list

PayPal纠纷(Case)列表查询：PayPal纠纷(Case)列表查询：按编号类型(事件编号/交易号/账单编号)、原因、到期日区间、处理状态、PayPal账号、店铺/店长/客服、平台、异常case等条件分页查询，并返回未解决/已结束事件统计及待处理/审查中/等待对方处理各子状态数量与当前生命周期阶段的Case列表。

## 用法

```bash
mbs fars erp-finance-paypalcase-list [--caseId <string>] [--sellerTransactionId <string>] [--invoiceNumber <string>] [--reasonList <array>] [--finallyResponseStartTime <string>] [--finallyResponseEndTime <string>] [--status <string>] [--caseLifeCycle <string>] [--paypalList <array>] [--shopNameList <array>] [--shopManagerList <array>] [--shopCustomerServiceerList <array>] [--caseStatus <number>] [--platform <string>] [--abnormal <string>] --page <number> --pageSize <number>
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/paypalcase/paypalcaseList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `caseId` | caseId | body | string | 否 | - | 事件编号(来源 #eventList，仅当编号类型 #caseSeller=1 时传，与 sellerTransactionId/invoiceNumber 互斥) |
| `sellerTransactionId` | sellerTransactionId | body | string | 否 | - | PayPal交易号(来源 #eventList，仅当 #caseSeller=2 时传) |
| `invoiceNumber` | invoiceNumber | body | string | 否 | - | 账单编号(来源 #eventList，仅当 #caseSeller=3 时传) |
| `reasonList` | reasonList | body | array | 否 | - | 纠纷原因列表(来源多选 #paypalReason，选项由 paypalCaseReason 接口动态加载) |
| `finallyResponseStartTime` | finallyResponseStartTime | body | string | 否 | - | 到期日(卖家最后回应)开始时间(来源 #startTime，date) |
| `finallyResponseEndTime` | finallyResponseEndTime | body | string | 否 | - | 到期日(卖家最后回应)结束时间(来源 #endTime，date) |
| `status` | status | body | string | 否 | - | 处理状态(来源 #status)。0=等待客服处理;1=等待财务处理;2=等待系统更新;3=完成 |
| `caseLifeCycle` | caseLifeCycle | body | string | 否 | - | Case生命周期阶段(由入参 caseLife 决定)。0=待处理;1=审查中;2=等待对方处理;空字符串=已结束(全部) |
| `paypalList` | paypalList | body | array | 否 | - | PayPal账号列表(来源多选 #paypal，选项由 getPaypal 接口动态加载) |
| `shopNameList` | shopNameList | body | array | 否 | - | 店铺名称列表(来源多选 #shopName，选项由 getShop 接口动态加载) |
| `shopManagerList` | shopManagerList | body | array | 否 | - | 店长列表(来源多选 #shopManager，选项由 getShopManager 接口动态加载) |
| `shopCustomerServiceerList` | shopCustomerServiceerList | body | array | 否 | - | 客服列表(来源多选 #shopCustomer，选项由 getShopCustomerServiceer 接口动态加载) |
| `caseStatus` | caseStatus | body | number | 否 | - | Case状态(由入参 caseStatus 决定)。0=未解决事件;1=已结束事件 |
| `platform` | platform | body | string | 否 | - | 平台(来源 #platform)。EBAY=ebay;SHOPIFY=shopify;空=全部 |
| `abnormal` | abnormal | body | string | 否 | - | 异常case筛选(来源 #abnormal)。NORMAL=正常case;ABNORMAL=异常case;空=全部 |
| `page` | page | body | number | 是 | - | 当前页码(分页参数，从1开始) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(前端固定传 100) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(success 回调据此判断) | - |
| `desc` | string | 响应提示信息(非200时 alert 弹出) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.notResolvedPPCaseCount` | number | 未解决事件数(填充 #unresolved) | - |
| `obj.resolvedPPCaseCount` | number | 已结束事件数(填充 #resolved) | - |
| `obj.waitDealNum` | number | 待处理数量(填充 #waitDealNum) | - |
| `obj.waitCheckNum` | number | 审查中数量(填充 #waitCheckNum) | - |
| `obj.waitBuyerReposenNum` | number | 等待对方(买家)处理数量(填充 #waitBuyer) | - |
| `obj.list` | object | 分页对象 | - |
| `obj.list.total` | number | 总条数(填充各 Tab 的 Total) | - |
| `obj.list.pages` | number | 总页数(传入分页组件 pageCount) | - |
| `obj.list.list[]` | array | Case列表(模板遍历 obj 渲染行) | - |
| `obj.list.list[][0]` | string | 事件编号(纠纷ID，操作传参主键) | - |
| `obj.list.list[][1]` | string | 账单编号 | - |
| `obj.list.list[][2]` | string | PayPal账号 | - |
| `obj.list.list[][3]` | string | 店铺名称 | - |
| `obj.list.list[][4]` | string | 店长 | - |
| `obj.list.list[][5]` | string | 客服(原字段拼写如此，与店长以 / 拼接展示) | - |
| `obj.list.list[][6]` | string | 纠纷原因 | - |
| `obj.list.list[][7]` | string | 状态(原样展示的状态文本) | - |
| `obj.list.list[][8]` | number | 纠纷金额(与 currency 拼接展示) | - |
| `obj.list.list[][9]` | string | 币种(紧随金额展示) | - |
| `obj.list.list[][10]` | string | 开立日期 | - |
| `obj.list.list[][11]` | string | 最后更新日期 | - |
| `obj.list.list[][12]` | number | 到期日红色预警标记。1=到期日标红展示;其他=正常展示 | - |
| `obj.list.list[][13]` | string | 到期日(卖家回应截止日，redFlag=1时标红) | - |
| `obj.list.list[][14]` | number | 处理状态。0=等待客服处理;1=等待财务处理;2=等待系统更新;其他=完成(决定“去处理/写意见/查看”按钮文案) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
