<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-purchase-get-order-infos

采购批次订单信息查询：按采购批次分组ID(groupId)查询该批次完整订单信息：批次头部(供应商/仓库/付款方式/马帮与平台金额/运单号/跟单日志/财务审核)及其下 purchaseList 采购明细行(SKU/采购状态/缺货/采购量到货量/1688采购信息/退款)。前端采购跟单任务页刷新单条批次时调用。

## 用法

```bash
mbs scm erp-purchase-get-order-infos --groupId <string>
```

## API

- Service: `erpPurchase`
- Method: `POST`
- Path: `/erpPurchase/erpPurchase/purchaseDevelop/getOrderInfos`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `groupId` | groupId | query | string | 是 | - | 采购批次分组ID(URL 查询串)。取当前批次 groupid，由 refreshgroup*(id, grop) 传入(id.groupid 或 grop) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(单个采购批次) | - |
| `obj.groupid` | string | 采购批次分组ID(主键标识) | - |
| `obj.platformOrderId` | string | 平台单号(1688/供应链平台订单号) | - |
| `obj.waybillOrderId` | string | 运单号 | - |
| `obj.manufacName` | string | 供应商名称(旺旺 uid) | - |
| `obj.storageName` | string | 仓库名称 | - |
| `obj.paymentType` | string | 付款方式(枚举含 '供应链平台' 等) | - |
| `obj.isMonthly` | string | 是否账期供应商。1=是 | - |
| `obj.platformLink` | string | 供应链平台链接(付款/审批/下单/编辑跳转) | - |
| `obj.amount` | number | 马帮商品总价 | - |
| `obj.aliOrderPrice` | number | 平台(1688)商品总价 | - |
| `obj.freight` | number | 马帮运费 | - |
| `obj.aliFreight` | number | 平台运费 | - |
| `obj.totalAmount` | number | 马帮总价 | - |
| `obj.aliTotalAmount` | number | 平台总价 | - |
| `obj.aliPayStatus` | string | 平台支付状态(文本) | - |
| `obj.inportTime` | string | 批次采购(下单)时间 | - |
| `obj.uniteflag` | string | 是否FBA采购单。1=是 | - |
| `obj.fineAmount` | number | 罚款风险金额 | - |
| `obj.shippingAddressError` | string | 收货地址异常提示 | - |
| `obj.sclass` | string | 员工类别(下单权限判断：'1'/'9' 可下单) | - |
| `obj.depart` | string | 部门(如 '仓库'，影响下单/审批入口) | - |
| `obj.leftTitle` | string | 左侧标题(有值时显示退款备注入口) | - |
| `obj.refundType` | string | 批次级退款类型('0'=可申请退款) | - |
| `obj.estimatedarrivaltime` | string | 预计到货时间(查看物流时使用) | - |
| `obj.refuseRefundDescr` | string | 拒绝退款说明 | - |
| `obj.customOrderPurchaseFile` | string | 定制单采购附件 | - |
| `obj.manufacPlace` | string | 供应商产地/发货地 | - |
| `obj.reason` | string | 原因/备注文本 | - |
| `obj.taskCreationTime` | string | 任务创建时间 | - |
| `obj.orderNoteImage` | string | 跟单人头像URL | - |
| `obj.log` | object | 最新跟单日志对象 | - |
| `obj.log.m` | string | 跟单日志-内容/留言 | - |
| `obj.log.o` | string | 跟单日志-操作人 | - |
| `obj.log.t` | string | 跟单日志-时间 | - |
| `obj.orderNoteCount` | number | 跟单总次数 | - |
| `obj.financeAuditor` | string | 财务审核人 | - |
| `obj.financeAuditTime` | string | 财务审核时间 | - |
| `obj.financeAuditMemo` | string | 财务审核备注 | - |
| `obj.purchaseList[]` | array | 该批次下采购明细行列表 | - |
| `obj.purchaseList[][0]` | string | 商品图片URL(空则占位图) | - |
| `obj.purchaseList[][1]` | string | 商品SKU编号(主键标识) | - |
| `obj.purchaseList[][2]` | string | 是否关闭。2=已关闭 | - |
| `obj.purchaseList[][3]` | string | 采购状态(枚举:新采购/审批/签收/已完成 等) | - |
| `obj.purchaseList[][4]` | string | 产品状态(枚举:清仓/停产/暂停销售/正常 等) | - |
| `obj.purchaseList[][5]` | string | 是否侵权。1=是 | - |
| `obj.purchaseList[][6]` | string | 销量状态(枚举:超爆/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品) | - |
| `obj.purchaseList[][7]` | string | 开发员 | - |
| `obj.purchaseList[][8]` | string | 所属公司ID(枚举:1=胤元;33=启元) | - |
| `obj.purchaseList[][9]` | string | 退款标记名称 | - |
| `obj.purchaseList[][10]` | string | 商品标题 | - |
| `obj.purchaseList[][11]` | string | 1688 商品链接 | - |
| `obj.purchaseList[][12]` | string | 采购员 | - |
| `obj.purchaseList[][13]` | string | 下单人 | - |
| `obj.purchaseList[][14]` | number | 缺货量 | - |
| `obj.purchaseList[][15]` | number | 缺货订单数 | - |
| `obj.purchaseList[][16]` | number | 缺货金额 | - |
| `obj.purchaseList[][17]` | number | 采购单价 | - |
| `obj.purchaseList[][18]` | number | 总采购价(明细行) | - |
| `obj.purchaseList[][19]` | number | 降本价 | - |
| `obj.purchaseList[][20]` | number | 采购量 | - |
| `obj.purchaseList[][21]` | number | 到货量 | - |
| `obj.purchaseList[][22]` | number | 可用库存 | - |
| `obj.purchaseList[][23]` | string | 1688 商品图URL | - |
| `obj.purchaseList[][24]` | number | 1688 采购单价 | - |
| `obj.purchaseList[][25]` | number | 1688 采购量(×单价得1688采购总价) | - |
| `obj.purchaseList[][26]` | string | 采购时间(明细行) | - |
| `obj.purchaseList[][27]` | string | 发货时间(空显示 '---') | - |
| `obj.purchaseList[][28]` | string | 入库时间 | - |
| `obj.purchaseList[][29]` | string | 完结/结算时间 | - |
| `obj.purchaseList[][30]` | number | 退款金额 | - |
| `obj.purchaseList[][31]` | string | 退款说明 | - |
| `obj.purchaseList[][32]` | string | 采购备注 | - |
| `obj.purchaseList[][33]` | string | 入库备注 | - |
| `obj.purchaseList[][34]` | string | 与供应商谈判/议价截图(逗号分隔) | - |
| `obj.purchaseList[][35]` | string | 退款关闭备注 | - |
| `obj.purchaseList[][36]` | string | 是否需自费装标记(≠1 时显示提示) | - |
| `obj.purchaseList[][37]` | string | 明细退款类型(null/'0'=申请;1=达成协议;2=完成退款;3/4=不显示) | - |
| `obj.purchaseList[][38]` | string | 退款标记(配合 refundType 显示退回) | - |
| `obj.purchaseList[][39]` | number | 采购记录序号ID(退款备注使用) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
