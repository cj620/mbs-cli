# mbs fars erp-finance-case-id

PayPal纠纷事件详情查询：根据纠纷事件编号(caseId)查询单条 PayPal 纠纷(case)事件详情：返回事件基本信息(店铺、客服/店长、账单、状态、到期日)、争议/交易/退款金额、物品信息列表、买卖双方对话消息列表以及当前可选的处理方式(taskList)，用于详情页(paypalcaseDetail.html)渲染。

## 用法

```bash
mbs fars erp-finance-case-id
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/paypalcase/paypalCaseDetail/{caseId}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `caseId` | caseId | path | string | 是 | - | PayPal 纠纷事件编号(事件ID)，拼接在接口 URL 末尾作为路径参数，来源于地址栏 query GetQueryString("caseId") |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息(失败时 alert) | - |
| `obj` | object | 业务数据对象：PayPal 纠纷事件详情 | - |
| `obj.reason` | string | 纠纷原因/事件原因 | - |
| `obj.processStatus` | number | 任务处理状态。0=等待客服处理;1=等待财务处理;2=等待系统更新;3=完成 | - |
| `obj.caseId` | string | 事件编号(纠纷事件ID) | - |
| `obj.shopName` | string | 店铺名称 | - |
| `obj.shopCustomSerivceer` | string | 店铺客服(原字段名拼写如此) | - |
| `obj.shopManager` | string | 店长(有值时与客服一并展示) | - |
| `obj.invoiceNumber` | string | 账单编号 | - |
| `obj.status` | string | 事件状态(文本) | - |
| `obj.isUpgrade` | number | 是否升级。0=未升级;其他=已升级 | - |
| `obj.redFlag` | number | 红旗标记。1=到期日红色高亮显示;其他=正常显示 | - |
| `obj.sellerResponseDueDate` | string | 卖家响应到期日 | - |
| `obj.buyerName` | string | 买家姓名 | - |
| `obj.orderId` | string | 马帮订单号(链接到 /eshop/order.do?method=edit&orderid=) | - |
| `obj.disputeAmount` | number | 争议金额 | - |
| `obj.currency` | string | 争议金额币种 | - |
| `obj.transactionId` | string | 交易号 | - |
| `obj.transactionAmount` | number | 交易金额 | - |
| `obj.transactionCurrency` | string | 交易金额币种 | - |
| `obj.requestAmount` | number | 买家要求的退款金额(有值优先于争议金额展示) | - |
| `obj.requestCurrency` | string | 要求退款金额币种 | - |
| `obj.transactionItemList[]` | array | 物品信息列表(length>0 时展示物品信息区) | - |
| `obj.transactionItemList[]` | string | 物品ID(transactionItemList 元素) | - |
| `obj.remarks` | string | 受理人备注 | - |
| `obj.messageList[]` | array | 您与买家的对话消息列表 | - |
| `obj.messageList[][0]` | string | 消息发布者。BUYER=买家(左侧);其他=您/卖家(右侧) | - |
| `obj.messageList[][1]` | string | 发布人姓名 | - |
| `obj.messageList[][2]` | string | 消息发布时间 | - |
| `obj.messageList[][3]` | string | 消息内容 | - |
| `obj.taskList[]` | array | 可选处理方式列表(length>0 时展示处理方式单选) | - |
| `obj.taskList[][0]` | string | 处理方式标识(枚举)。FULL_REFUND=发放全额退款;FULL_REFUND_NOT_RETURN=全额退款不退货;PROVIDE_TRACK_INFORMATION=提供跟踪信息;ALREADY_SHIPPED_OR_PROVIDED_SERVICE=已发货/已提供服务;PART_REFUND=发放部分退款;SUGGEST_OTHER_REFUND_AMOUNT=部分退款提议;REPLY_BUYER_MESSAGE=回复买家消息;EXCHANGE_PART_REFUND=换货并部分退款;PART_REFUND_RETURN=退货并部分退款;FULL_REFUND_RETURN=退货并全额退款;OTHER=其他 | - |
| `obj.taskList[][1]` | string | 处理方式名称(单选项展示文本) | - |
| `obj.taskList[][2]` | string | 提议类别(setChecked 取用，提交任务时作为 offerType 透传) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
