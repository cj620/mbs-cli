<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-fin-manage-data-parallel-his-bill-infos-fetcher

非当月账单明细查询：TikTok 对账中心「非当月账单明细」分页查询：按汇总单号/财务单号/订单编号/付款单号/结算单号/店铺名称/账单时间/问题反馈/账单分类/所属公司等条件筛选，返回账单明细列表及总条数。

## 用法

```bash
mbs fars erp-fin-manage-data-parallel-his-bill-infos-fetcher [--relatedOrderIds <array>] [--sequecneIds <array>] [--orderIds <array>] [--paymentIds <array>] [--settlementIds <array>] [--shopName <string>] [--shortSettlementTime <string>] [--longSettlementTime <string>] [--problem <number>] [--secondProblem <array>] [--zdMonthType <string>] [--companyId <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpFinManageData`
- Method: `POST`
- Path: `/erpFinManageData/erpFinManageData/finance/parallelHisBillInfosFetcher`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `relatedOrderIds` | relatedOrderIds | body | array | 否 | - | 汇总单号（全部订单汇总），多个值空格分隔→字符串数组 |
| `sequecneIds` | sequecneIds | body | array | 否 | - | 财务单号，多个值空格分隔→字符串数组 |
| `orderIds` | orderIds | body | array | 否 | - | 订单编号，多个值空格分隔→字符串数组 |
| `paymentIds` | paymentIds | body | array | 否 | - | 付款单号，多个值空格分隔→字符串数组 |
| `settlementIds` | settlementIds | body | array | 否 | - | 结算单号，多个值空格分隔→字符串数组 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称 |
| `shortSettlementTime` | shortSettlementTime | body | string | 否 | - | 账单时间-起始（日期范围左值） |
| `longSettlementTime` | longSettlementTime | body | string | 否 | - | 账单时间-结束（日期范围右值） |
| `problem` | problem | body | number | 否 | - | 问题反馈（一级）。1=无异常;2=核对金额小于0;3=核对金额大于0;4=属于平台优惠运费;5=未归纳到反馈问题 |
| `secondProblem` | secondProblem | body | array | 否 | - | 二级问题反馈（多选），默认[]，非当月账单表下不展示二级联动 |
| `zdMonthType` | zdMonthType | body | string | 否 | - | 账单分类。1=往月代收;2=往月遗漏;3=下月账单 |
| `companyId` | companyId | body | string | 否 | - | 所属公司。1=胤元;33=启元 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（默认100，可选100/200/300/400） |
| `page` | page | body | number | 是 | - | 当前页码（默认1） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `count` | number | 满足条件的明细总条数（前端赋给分页 total） | - |
| `result[]` | array | 非当月账单明细列表 | - |
| `result[][0]` | number | 明细记录ID（表格 row-key 主键） | - |
| `result[][1]` | string | 全部订单汇总（汇总订单号） | - |
| `result[][2]` | string | 结算单号 | - |
| `result[][3]` | string | 付款单号 | - |
| `result[][4]` | number | 核对金额 | - |
| `result[][5]` | number | 应收金额 | - |
| `result[][6]` | number | 平台费 | - |
| `result[][7]` | number | 广告费 | - |
| `result[][8]` | number | 物流费 | - |
| `result[][9]` | number | 税费 | - |
| `result[][10]` | number | 平台广告费 | - |
| `result[][11]` | number | VAT税费 | - |
| `result[][12]` | number | 退款费 | - |
| `result[][13]` | string | 问题反馈 | - |
| `result[][14]` | string | 财务单号 | - |
| `result[][15]` | string | 店铺名称 | - |
| `result[][16]` | string | 订单编号 | - |
| `result[][17]` | string | 调整项 | - |
| `result[][18]` | string | 打款时间 | - |
| `result[][19]` | string | 币种 | - |
| `result[][20]` | number | 用户支付 | - |
| `result[][21]` | number | 平台推广 | - |
| `result[][22]` | number | 运费补贴 | - |
| `result[][23]` | number | 交易手续费 | - |
| `result[][24]` | number | 平台佣金 | - |
| `result[][25]` | number | 固定费用 | - |
| `result[][26]` | number | 销售费用 | - |
| `result[][27]` | number | 达人佣金 | - |
| `result[][28]` | number | 去掉平台折扣的物流费 | - |
| `result[][29]` | number | 小额订单费 | - |
| `result[][30]` | number | 调整金额 | - |
| `result[][31]` | number | 打款金额 | - |
| `result[][32]` | number | 交易手续费 | - |
| `result[][33]` | number | 折扣后商品价格 | - |
| `result[][34]` | number | 折扣后商品价格退款 | - |
| `result[][35]` | number | 买家支付运费 | - |
| `result[][36]` | number | 平台优惠运费 | - |
| `result[][37]` | string | 状态 | - |
| `result[][38]` | number | 汇率 | - |
| `result[][39]` | number | GST税 | - |
| `result[][40]` | number | SFP服务费 | - |
| `result[][41]` | number | 额外总计 | - |
| `result[][42]` | number | 优惠费项 | - |
| `result[][43]` | number | 新广告费用 | - |
| `result[][44]` | number | 付款反查。1=是;0(其他)=否 | - |
| `result[][45]` | string | 订单状态 | - |
| `result[][46]` | number | 所属公司ID（'公司'列经 getComName(companyId) 转公司名展示） | - |
| `result[][47]` | string | 流水号 | - |
| `result[][48]` | number | 来源标识（含义待人工确认） | - |
| `result[][49]` | string | 店铺名称(原) | - |
| `result[][50]` | number | 创建时间（时间戳） | - |
| `result[][51]` | string | 是否匹配店铺金额（含义待人工确认） | - |
| `result[][52]` | string | 是否匹配店铺（含义待人工确认） | - |
| `result[][53]` | string | 关联订单ID集合 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
