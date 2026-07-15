<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-finance-find-platform-bill

平台账单查询：按平台、店铺、费用起止日期查询各平台店铺的账单汇总：订单收入、到帐/平台费/物流费/服务费/广告费/罚款/退款/放款金额、应收款余额及占比，返回账单列表用于财务报表页渲染。

## 用法

```bash
mbs fars erp-finance-find-platform-bill [--platform <string>] [--shopname <string>] [--starttime <string>] [--endtime <string>]
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/bill/findPlatformBill`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platform` | platform | body | string | 否 | - | 平台名称。来源：URL 参数 platform 优先，否则取平台下拉框 #Platform；无值传空串 |
| `shopname` | shopname | body | string | 否 | - | 店铺名称。来源：店铺下拉框 #shopList；无值传空串 |
| `starttime` | starttime | body | string | 否 | - | 费用开始日期。来源：日期控件 #startTime(YYYY-MM-DD)；无值传空串 |
| `endtime` | endtime | body | string | 否 | - | 费用结束日期。来源：日期控件 #endTime(YYYY-MM-DD)；无值传空串 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码。200=成功；601=未登录(跳转登录页)；其他=失败(弹窗提示 desc) | - |
| `desc` | string | 响应提示信息(失败/未登录时展示) | - |
| `obj` | object | 业务数据对象：前端直接作为账单列表遍历，同时读取 obj.count 作为总数 | - |
| `obj.count` | number | 账单总数(前端写入 #total) | - |
| `obj.platform` | string | 平台(点击可跳转 windowOpen) | - |
| `obj.shopname` | string | 店铺名称 | - |
| `obj.amounttotal` | number | 订单收入(从2019-07-01起计算，前端 toLocaleString 展示) | - |
| `obj.sendamount` | number | 到帐金额(账单金额-到帐) | - |
| `obj.platformfee` | number | 平台费 | - |
| `obj.shippingfee` | number | 物流费 | - |
| `obj.servicesfee` | number | 服务费 | - |
| `obj.advertisingfee` | number | 广告费 | - |
| `obj.finefee` | number | 罚款 | - |
| `obj.refundfee` | number | 退款 | - |
| `obj.billamount` | number | 放款金额 | - |
| `obj.balance` | number | 应收款余额(前端 toLocaleString 展示) | - |
| `obj.balanceRate` | string | 应收余额占比(直接展示，含百分号) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
