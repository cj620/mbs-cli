# mbs oms erp-order-order-details

订单详情查询：马帮ERP订单详情页主数据加载接口：依据订单ID返回单个订单的全量信息(状态/标志位、买家资料、收货地址、Paypal地址、物流详情、支付账号、费用核算、毛利等)，结果赋给 orderdata 渲染整页。

## 用法

```bash
mbs oms erp-order-order-details --orderid <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/orderDetails`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderid` | orderid | query | string | 是 | - | 订单ID。来源：浏览器地址栏查询参数 GetQueryString("orderid") → basedata.orderid，以 query string 拼接到 URL；POST body 为空 {} |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `success` | boolean | 是否成功标志 | - |
| `obj` | object | 订单详情数据对象(赋给 orderdata，为 null 时提示无法查询订单) | - |
| `obj.bansendflag` | string | 禁止发货标志：1=禁止发货，其它=可发货 | - |
| `obj.alertflag` | string | 缺货标志：2=不缺货，其它=缺货 | - |
| `obj.reserve19` | string | 检验标志：1=已检验，其它=未检验 | - |
| `obj.isOverWeight` | string | 是否超重：0=不超重，其它=超重 | - |
| `obj.tradetype` | string | 是否有买家Message：1=有买家Message信息 | - |
| `obj.tradetypeflag` | string | 买家Message点亮标志：1=未点亮(置灰)，否则已点亮 | - |
| `obj.notestoyourself` | string | 平台Note留言内容(非空才显示Note图标/平台留言区) | - |
| `obj.notestoyourselfflag` | string | Note点亮标志：1=未点亮，否则已点亮 | - |
| `obj.content` | string | 订单备注内容(null=无备注；含'需要填写税号'时显示填写税号按钮) | - |
| `obj.bigChief` | string | 大主管 | - |
| `obj.shopmanager` | string | 店铺负责人/店长 | - |
| `obj.customerService` | string | 客服(有值才展示客服图标与名称) | - |
| `obj.shoptype` | string | 店铺名称(点击获取店铺登录URL；FBA发货订单/HWC发货订单时隐藏增/批增商品) | - |
| `obj.tradeid` | string | 平台交易单号(优选仓拒单按其传参) | - |
| `obj.opertime` | string | 操作/下单时间(面包屑展示；作为 getMessagelist 的 opertime 入参) | - |
| `obj.status` | string | 订单状态：新订单/已支付/配货中/已发货/作废/已完成(控制色带与操作按钮显隐) | - |
| `obj.closetime` | string | 发货截止时间(有值显示'请于…前发货') | - |
| `obj.latestDeliveryDate` | string | 最晚到货时间 | - |
| `obj.platformId` | string | 平台ID：1=ebay，2=amazon，13=other，120=temu(决定发起退款/取消订单/延迟率弹窗等显隐) | - |
| `obj.showPreferredWarehouse` | boolean | 是否显示'优选仓拒单'操作项 | - |
| `obj.ordertime` | string | 订单时间(其他信息区) | - |
| `obj.ordersource` | string | 订单属性/来源 | - |
| `obj.moneytype` | string | 外币币种(费用区前缀展示) | - |
| `obj.moneyrate` | number | 外币汇率：1外币=￥moneyrate(有值才显示外币汇率行，并用于外币↔人民币换算) | - |
| `obj.packagingname` | string | 包材名称 | - |
| `obj.packagingweight` | number | 包材重量(g)(有值才显示) | - |
| `obj.declaredValue` | number | 订单总申报价(USD)(可点击修改) | - |
| `obj.declaredNum` | number | 订单申报总量(departmentId=54 可修改) | - |
| `obj.warehouse` | string | 发货仓库(可点击修改) | - |
| `obj.orderTkCalaInfo[]` | array | 马帮费用计算明细列表(存在则展示TK费用核算；前端按 mabangFee 与本地模板合并；'打款金额'项剥离为 moneyFee 单独展示) | - |
| `obj.orderTkCalaInfo[][0]` | string | 费用项中文名(订单收入/运费收入/运费支出/平台费/付款交易费/广告费/税费/打款金额/退款/其他费用) | - |
| `obj.orderTkCalaInfo[][1]` | string | 费用字段key(对应 orderCalaBillInfo 的键，如 orderFee/platformFee) | - |
| `obj.orderTkCalaInfo[][2]` | string | 计算公式(中文描述，悬浮'公式') | - |
| `obj.orderTkCalaInfo[][3]` | string | 数值运算公式(悬浮'数值运算公式') | - |
| `obj.orderTkCalaInfo[][4]` | string | 字段运算公式(悬浮'字段运算公式') | - |
| `obj.orderTkCalaInfo[][5][]` | array | 该费用项下的明细子项列表 | - |
| `obj.orderTkCalaInfo[][5][][0]` | string | 明细中文名(收入/支出等) | - |
| `obj.orderTkCalaInfo[][5][][1]` | string | 平台费用类型(明细悬浮中绿色展示) | - |
| `obj.orderTkCalaInfo[][5][][2]` | number | 明细金额(外币，×moneyrate 换算人民币) | - |
| `obj.orderCalaBillInfo` | object | 订单账单费用对象，键为各费用 field(如 orderFee/platformFee)，值为该费用人民币金额；模板按 orderCalaBillInfo[item.field] 取数 | - |
| `obj.orderCalaBillInfo.orderFee` | number | 订单收入金额(人民币键) | - |
| `obj.orderCalaBillInfo.freightRevenueFee` | number | 运费收入金额 | - |
| `obj.orderCalaBillInfo.freightExpensesFee` | number | 运费支出金额 | - |
| `obj.orderCalaBillInfo.platformFee` | number | 平台费金额 | - |
| `obj.orderCalaBillInfo.paymentTransactionFee` | number | 付款交易费金额(前置字段 paypalfeewb) | - |
| `obj.orderCalaBillInfo.advertisingFee` | number | 广告费金额 | - |
| `obj.orderCalaBillInfo.taxationFee` | number | 税费金额 | - |
| `obj.orderCalaBillInfo.moneyFee` | number | 打款金额('打款金额'项，前端单独剥离展示) | - |
| `obj.orderCalaBillInfo.refundFee` | number | 退款金额 | - |
| `obj.orderCalaBillInfo.otherFee` | number | 其他费用金额 | - |
| `obj.amountreceivedwb` | number | 订单收入(外币)(无 orderTkCalaInfo 时回退展示) | - |
| `obj.moneyask` | number | 应收货款(人民币)(支付账号区'应收货款'；订单收入￥值) | - |
| `obj.yunfeiincomewb` | number | 运费收入(外币) | - |
| `obj.moneyexpressask` | number | 运费收入(人民币)(亦用于商品行'运费收入'列) | - |
| `obj.freightExpenses` | number | 运费支出(人民币) | - |
| `obj.platformid` | string | 平台ID(小写键)：==1 时按 ebay 用 reserve3 作平台费币种符号 | - |
| `obj.reserve3` | string | 平台费币种符号(ebay，platformid==1 时使用) | - |
| `obj.originfinalvaluefee` | number | 原始平台费(外币) | - |
| `obj.finalvaluefee` | number | 平台费(人民币) | - |
| `obj.paypalfeewb` | number | 付款交易费(外币) | - |
| `obj.paypalfeeamount` | number | 付款交易费(人民币) | - |
| `obj.maoli` | number | 订单毛利额(人民币) | - |
| `obj.slreserve8` | string | 订单毛利率(%)(有值才显示，后缀%) | - |
| `obj.customerreserve2` | string | 收货国家(二字代码，物流'发往'展示、国旗占位、复制) | - |
| `obj.customerqq` | string | 国家代码(转小写拼国旗图片名 flag/{code}.png) | - |
| `obj.expresstype` | string | 物流方式/物流渠道名称(物流详情标题) | - |
| `obj.expressid` | string | 运单号(有值才显示'面单'下载) | - |
| `obj.postageservice` | string | 自选物流 | - |
| `obj.orderweight` | number | 预估重量(g)(非0才显示；物流查价入参 weight) | - |
| `obj.actionorderweight` | number | 称重重量(g)(非0才显示) | - |
| `obj.slreserve7` | number | 预估运费(￥) | - |
| `obj.moneyexpressaction` | number | 真实运费(￥) | - |
| `obj.customername` | string | 买家/收件人姓名(买家资料、收货地址、订单消息抬头) | - |
| `obj.customerid` | string | 买家ID(作为 getMessagelist 的 sender、getHistorylist 的 customerid 入参) | - |
| `obj.customertel1` | string | 电话1 | - |
| `obj.customeraddress` | string | 收货地址 | - |
| `obj.customercity` | string | 城市 | - |
| `obj.customerprovince` | string | 州/省 | - |
| `obj.customercountry` | string | 国家 | - |
| `obj.customerzipcode` | string | 邮编 | - |
| `obj.customertel2` | string | 电话2 | - |
| `obj.customeremail` | string | 邮箱 | - |
| `obj.payid` | string | 收款ID | - |
| `obj.reserve8` | string | 收款账号 | - |
| `obj.paypaloper` | string | Paypal 收件人 | - |
| `obj.paypalstreet` | string | Paypal 地址 | - |
| `obj.paypalcity` | string | Paypal 城市 | - |
| `obj.paypalprovince` | string | Paypal 州/省 | - |
| `obj.paypacountry` | string | Paypal 国家(源码字段名即 paypacountry，以源码为准) | - |
| `obj.paypalpostcode` | string | Paypal 邮编 | - |
| `obj.paypaltel` | string | Paypal 电话 | - |
| `obj.paypalemail` | string | Paypal 邮箱 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
