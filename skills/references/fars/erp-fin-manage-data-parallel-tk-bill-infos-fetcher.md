<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-fin-manage-data-parallel-tk-bill-infos-fetcher

TikTok账单核对表查询：TikTok核销·账单核对明细列表分页查询：按汇总单号/订单编号/付款单号/结算单号/店铺名称/账单时间/问题反馈/异常分类/是否核销/付款反查/所属公司等条件筛选，返回账单核对行明细及总条数。type=1 标识账单核对表。

## 用法

```bash
mbs fars erp-fin-manage-data-parallel-tk-bill-infos-fetcher --type <number> [--relatedOrderIds <array>] [--orderIds <array>] [--paymentIds <array>] [--settlementIds <array>] [--shopName <string>] [--shortSettlementTime <string>] [--longSettlementTime <string>] [--problem <number>] [--secondProblem <array>] [--companyId <string>] [--zdMonthType <string>] [--isVerification <string>] [--isExistPayment <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpFinManageData`
- Method: `POST`
- Path: `/erpFinManageData/erpFinManageData/finance/parallelTkBillInfosFetcher`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `type` | type | query | number | 是 | - | URL固定查询参数 type=1（账单核对表标识），非请求体字段 |
| `relatedOrderIds` | relatedOrderIds | body | array | 否 | - | 汇总单号（全部订单汇总），输入框多个空格分隔后拆分为字符串数组 |
| `orderIds` | orderIds | body | array | 否 | - | 订单编号，多个空格分隔拆分为数组 |
| `paymentIds` | paymentIds | body | array | 否 | - | 付款单号，多个空格分隔拆分为数组 |
| `settlementIds` | settlementIds | body | array | 否 | - | 结算单号，多个空格分隔拆分为数组 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称 |
| `shortSettlementTime` | shortSettlementTime | body | string | 否 | - | 账单时间-起始(yyyy-MM-dd)，默认空 |
| `longSettlementTime` | longSettlementTime | body | string | 否 | - | 账单时间-结束(yyyy-MM-dd)，默认空 |
| `problem` | problem | body | number | 否 | - | 问题反馈枚举(账单核对表)。1=无异常;2=核对金额小于0;3=核对金额大于0;4=属于平台优惠运费;5=未归纳到反馈问题 |
| `secondProblem` | secondProblem | body | array | 否 | - | 二级问题反馈(多选)；账单核对表一级项无下级，固定为[] |
| `companyId` | companyId | body | string | 否 | - | 所属公司。1=胤元;33=启元 |
| `zdMonthType` | zdMonthType | body | string | 否 | - | 异常分类。0=无结算单或付款单;1=无结算单且无付款单;2=有结算单但无付款单;3=无结算单但有付款单 |
| `isVerification` | isVerification | body | string | 否 | - | 是否核销。0=否;1=是 |
| `isExistPayment` | isExistPayment | body | string | 否 | - | 付款反查。0=否;1=是 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，默认100，可选100/200/300/400 |
| `page` | page | body | number | 是 | - | 当前页码，从1开始 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `result[]` | array | 账单核对明细列表 | - |
| `result[][0]` | string | 全部订单汇总（汇总单号） | - |
| `result[][1]` | string | 结算单号 | - |
| `result[][2]` | string | 付款单号 | - |
| `result[][3]` | number | 核对金额 | - |
| `result[][4]` | number | 应收金额 | - |
| `result[][5]` | number | 平台费 | - |
| `result[][6]` | number | 广告费 | - |
| `result[][7]` | number | 物流费 | - |
| `result[][8]` | number | 税费 | - |
| `result[][9]` | number | 平台广告费（达人合作佣金） | - |
| `result[][10]` | number | VAT税费 | - |
| `result[][11]` | number | 退款费 | - |
| `result[][12]` | string | 问题反馈 | - |
| `result[][13]` | string | 财务单号（行主键 row-key） | - |
| `result[][14]` | string | 店铺名称 | - |
| `result[][15]` | string | 订单编号 | - |
| `result[][16]` | string | 调整项 | - |
| `result[][17]` | string | 打款时间 | - |
| `result[][18]` | string | 币种 | - |
| `result[][19]` | number | 用户支付 | - |
| `result[][20]` | number | 平台推广 | - |
| `result[][21]` | number | 运费补贴 | - |
| `result[][22]` | number | 交易手续费 | - |
| `result[][23]` | number | 平台佣金 | - |
| `result[][24]` | number | 固定费用 | - |
| `result[][25]` | number | 销售费用 | - |
| `result[][26]` | number | 达人佣金 | - |
| `result[][27]` | number | 去掉平台折扣的物流费 | - |
| `result[][28]` | number | 小额订单费 | - |
| `result[][29]` | number | 调整金额 | - |
| `result[][30]` | unknown | 打款金额 | - |
| `result[][31]` | number | 交易手续费 | - |
| `result[][32]` | number | 折扣后商品价格 | - |
| `result[][33]` | number | 折扣后商品价格退款 | - |
| `result[][34]` | number | 买家支付运费 | - |
| `result[][35]` | number | 平台优惠运费 | - |
| `result[][36]` | string | 状态 | - |
| `result[][37]` | number | 汇率 | - |
| `result[][38]` | number | GST税 | - |
| `result[][39]` | number | SFP服务费 | - |
| `result[][40]` | number | 额外总计 | - |
| `result[][41]` | number | 优惠费项 | - |
| `result[][42]` | number | 新广告费用 | - |
| `result[][43]` | number | 付款反查（1=是，否则=否） | - |
| `result[][44]` | string | 订单状态 | - |
| `result[][45]` | number | 所属公司ID（经 getComName 转公司名展示「公司」列） | - |
| `count` | number | 满足条件的总记录数（分页total） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
