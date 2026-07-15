<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-fin-manage-data-parallel-verification-fetcher

异常账单表-平行核对数据查询：TikTok「异常账单明细」表的平行核对数据分页查询：按汇总单号/订单编号/结算单号/店铺名称/账单时间区间/问题反馈/所属公司等条件分页查询异常账单核对明细，返回明细列表及总记录数。

## 用法

```bash
mbs fars erp-fin-manage-data-parallel-verification-fetcher [--relatedOrderIds <array>] [--orderIds <array>] [--settlementIds <array>] [--shopName <string>] [--shortSettlementTime <string>] [--longSettlementTime <string>] [--problem <number>] [--secondProblem <array>] [--companyId <number>] --pageSize <number> --page <number>
```

## API

- Service: `erpFinManageData`
- Method: `POST`
- Path: `/erpFinManageData/erpFinManageData/finance/parallelVerificationFetcher`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `relatedOrderIds` | relatedOrderIds | body | array | 否 | - | 汇总单号(全部订单汇总)，多个空格分隔拆成数组，空时为[] |
| `orderIds` | orderIds | body | array | 否 | - | 订单编号，多个空格分隔拆数组，空时为[] |
| `settlementIds` | settlementIds | body | array | 否 | - | 结算单号，多个空格分隔拆数组，空时为[] |
| `shopName` | shopName | body | string | 否 | - | 店铺名称(单值输入) |
| `shortSettlementTime` | shortSettlementTime | body | string | 否 | - | 账单时间-起始(账单时间区间起)，初始默认'' |
| `longSettlementTime` | longSettlementTime | body | string | 否 | - | 账单时间-结束(账单时间区间止)，初始默认'' |
| `problem` | problem | body | number | 否 | - | 问题反馈枚举(异常账单表)：1=无异常;2=核对金额小于0;3=核对金额大于0;4=属于平台优惠运费 |
| `secondProblem` | secondProblem | body | array | 否 | - | 二级问题反馈，仅账-付-流对比表展开；异常账单表固定为空数组[] |
| `companyId` | companyId | body | number | 否 | - | 所属公司：1=胤元;33=启元；初始默认'' |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，默认100，可选100/200/300/400 |
| `page` | page | body | number | 是 | - | 当前页码(page.countPage)，默认1 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `result[]` | array | 异常账单明细列表(赋值给tableData) | - |
| `result[][0]` | number | 记录ID | - |
| `result[][1]` | string | 财务单号(表格row-key、可复制) | - |
| `result[][2]` | string | 店铺名称 | - |
| `result[][3]` | string | 订单编号(可复制) | - |
| `result[][4]` | string | 调整项 | - |
| `result[][5]` | string | 全部订单汇总(汇总单号，可复制) | - |
| `result[][6]` | string | 打款时间 | - |
| `result[][7]` | string | 币种 | - |
| `result[][8]` | number | 用户支付 | - |
| `result[][9]` | number | 平台推广 | - |
| `result[][10]` | number | 运费补贴 | - |
| `result[][11]` | number | 退款(对应列已注释隐藏，仍在行结构中) | - |
| `result[][12]` | number | 交易手续费 | - |
| `result[][13]` | number | 平台佣金 | - |
| `result[][14]` | number | 固定费用 | - |
| `result[][15]` | number | 销售费用 | - |
| `result[][16]` | number | 达人佣金 | - |
| `result[][17]` | number | VAT税费 | - |
| `result[][18]` | number | 去掉平台折扣的物流费 | - |
| `result[][19]` | number | 小额订单费 | - |
| `result[][20]` | number | 平台广告费 | - |
| `result[][21]` | number | 调整金额 | - |
| `result[][22]` | number | 打款金额 | - |
| `result[][23]` | number | 交易手续费(列标题同paymentFee) | - |
| `result[][24]` | number | 折扣后商品价格 | - |
| `result[][25]` | number | 折扣后商品价格退款 | - |
| `result[][26]` | number | 买家支付运费 | - |
| `result[][27]` | number | 平台优惠运费(列colKey写作shippingFeePlatFormDiscount，与行字段大小写不一致，待人工确认后端真实字段名) | - |
| `result[][28]` | number | 汇率 | - |
| `result[][29]` | number | GST税 | - |
| `result[][30]` | number | SFP服务费 | - |
| `result[][31]` | string | 结算单号(可复制) | - |
| `result[][32]` | string | 付款单号(可复制) | - |
| `result[][33]` | string | 订单状态 | - |
| `result[][34]` | number | 应收金额 | - |
| `result[][35]` | number | 平台费 | - |
| `result[][36]` | number | 物流费 | - |
| `result[][37]` | number | 广告费 | - |
| `result[][38]` | number | 税费 | - |
| `result[][39]` | number | 退款费 | - |
| `result[][40]` | number | 核对金额 | - |
| `result[][41]` | string | 问题反馈 | - |
| `result[][42]` | string | 币种(疑似currency拼写变体，待人工确认) | - |
| `result[][43]` | number | 金额(待人工确认) | - |
| `result[][44]` | string | 美元币种(待人工确认) | - |
| `result[][45]` | number | 美元金额(待人工确认) | - |
| `result[][46]` | string | 付款状态(待人工确认) | - |
| `result[][47]` | string | 是否异常(待人工确认) | - |
| `result[][48]` | string | 创建时间(待人工确认) | - |
| `result[][49]` | number | 公司ID(经getComName通过queryCompanyIdInfo列表转公司名展示) | - |
| `result[][50]` | string | 状态(模板列status使用，Row类型未声明) | - |
| `result[][51]` | number | 额外总计(模板列feeAmount使用，Row类型未声明) | - |
| `result[][52]` | number | 优惠费项(模板列discountAmount使用，Row类型未声明) | - |
| `result[][53]` | number | 新广告费用(模板列affiliateCommissionAmount使用，Row类型未声明) | - |
| `result[][54]` | number | 付款反查枚举：1=是；其它=否(模板列cell渲染) | - |
| `count` | number | 满足条件的总记录数(赋值给page.total) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
