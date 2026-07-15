# mbs fars erp-finance-page

供应商回款·出库单分页查询：供应商回款（退货/回款）管理页的出库单分页列表查询：按回款状态、出库单号、运单号、订单状态、创建人、供应商旺旺号、建单/发货/回款时间区间、回款方式、公司、采购员、供应商类型、填写人、仓库等条件分页查询，返回分页对象(total/totalPages/rows)及金额汇总对象(total)。

## 用法

```bash
mbs fars erp-finance-page [--paymentStatus <string>] [--warehouse <string>] [--orderId <string>] [--expressId <string>] [--orderStatus <string>] [--createBy <string>] [--wangwangName <string>] [--createOrderStartTime <string>] [--createOrderEndTime <string>] [--paymentStartTime <string>] [--paymentEndTime <string>] [--expressStartTime <string>] [--expressEndTime <string>] [--manufacType <string>] [--paymentType <string>] [--companyId <string>] [--updateBy <string>] [--fixedmanu <string>] --currentPage <number> --pageSize <number>
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/manufacture/payment/get/order/page`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `paymentStatus` | paymentStatus | body | string | 否 | - | 回款状态(未发货/未回款/未核销/已核销) |
| `warehouse` | warehouse | body | string | 否 | - | 仓库(上海仓库/东莞仓库) |
| `orderId` | orderId | body | string | 否 | - | 出库单号 |
| `expressId` | expressId | body | string | 否 | - | 运单号 |
| `orderStatus` | orderStatus | body | string | 否 | - | 订单状态(新订单/已支付/配货中/未发货/已发货/已完成) |
| `createBy` | createBy | body | string | 否 | - | 创建人 |
| `wangwangName` | wangwangName | body | string | 否 | - | 供应商旺旺号 |
| `createOrderStartTime` | createOrderStartTime | body | string | 否 | - | 建单开始日期(YYYY-MM-DD) |
| `createOrderEndTime` | createOrderEndTime | body | string | 否 | - | 建单结束日期(YYYY-MM-DD) |
| `paymentStartTime` | paymentStartTime | body | string | 否 | - | 回款开始日期(YYYY-MM-DD) |
| `paymentEndTime` | paymentEndTime | body | string | 否 | - | 回款结束日期(YYYY-MM-DD) |
| `expressStartTime` | expressStartTime | body | string | 否 | - | 发货开始日期(YYYY-MM-DD) |
| `expressEndTime` | expressEndTime | body | string | 否 | - | 发货结束日期(YYYY-MM-DD) |
| `manufacType` | manufacType | body | string | 否 | - | 供应商类型(1=普通供应商;2=线下账期;3=1688账期;4=表格供应商;5=淘宝供应商) |
| `paymentType` | paymentType | body | string | 否 | - | 回款方式(1688回款/支付宝回款/账期抵扣/换货/1688回款+换货/支付宝回款+换货) |
| `companyId` | companyId | body | string | 否 | - | 公司ID(1=上海胤元电子科技有限公司;33=上海路莫斯实业发展公司) |
| `updateBy` | updateBy | body | string | 否 | - | 填写人 |
| `fixedmanu` | fixedmanu | body | string | 否 | - | 采购员 |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码(搜索/改页大小固定从1开始) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(默认50,可选50/100/150/200) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.page` | object | 分页对象 | - |
| `obj.page.total` | number | 满足条件的出库单总数 | - |
| `obj.page.totalPages` | number | 总页数 | - |
| `obj.page.rows[]` | array | 出库单列表 | - |
| `obj.page.rows[][0]` | number | 编号(行序号) | - |
| `obj.page.rows[][1]` | string | 回款状态(未发货/未回款/未核销/已核销) | - |
| `obj.page.rows[][2]` | string | 出库单号 | - |
| `obj.page.rows[][3]` | string | 运单号 | - |
| `obj.page.rows[][4]` | string | 订单状态(新订单/已支付/配货中/未发货/已发货/已完成) | - |
| `obj.page.rows[][5]` | string | 仓库 | - |
| `obj.page.rows[][6]` | string | 公司名称 | - |
| `obj.page.rows[][7]` | string | 公司ID | - |
| `obj.page.rows[][8]` | string | 创建人 | - |
| `obj.page.rows[][9]` | string | 建单日期 | - |
| `obj.page.rows[][10]` | string | 发货日期 | - |
| `obj.page.rows[][11]` | string | 供应商旺旺号 | - |
| `obj.page.rows[][12]` | string | 采购员 | - |
| `obj.page.rows[][13]` | string | 供应商类型(普通供应商/线下账期/1688账期/表格供应商/淘宝供应商) | - |
| `obj.page.rows[][14]` | number | 实发金额 | - |
| `obj.page.rows[][15]` | number | 应收金额 | - |
| `obj.page.rows[][16]` | number | 差异金额 | - |
| `obj.page.rows[][17]` | number | 回款金额 | - |
| `obj.page.rows[][18]` | string | 回款日期 | - |
| `obj.page.rows[][19]` | string | 回款方式(1688回款/支付宝回款/账期抵扣/换货/1688回款+换货/支付宝回款+换货) | - |
| `obj.page.rows[][20]` | string | 备注 | - |
| `obj.page.rows[][21][]` | array | 图片URL数组(string[]) | - |
| `obj.page.rows[][22]` | number | 状态标记(1/0) | - |
| `obj.page.rows[][23]` | string | 填写人(可为null) | - |
| `obj.page.rows[][24]` | string | 填写时间(可为null) | - |
| `obj.page.rows[][25]` | boolean | 异常处理按钮显隐标记 | - |
| `obj.total` | object | 金额汇总对象 | - |
| `obj.total.orderCount` | number | 订单数合计 | - |
| `obj.total.actualAmount` | number | 实发金额合计 | - |
| `obj.total.receivableAmount` | number | 应收金额合计 | - |
| `obj.total.differenceAmount` | number | 差异金额合计 | - |
| `obj.total.paymentAmount` | number | 回款金额合计 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
