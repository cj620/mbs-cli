<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-fin-manage-data-parallel-pay-contrast-fetcher

账-付-流并行对比数据查询：TikTok「账-付-流核对」表分页查询：按付款单号、结算单号、店铺名称、付款时间、流水时间、问题反馈(一级/二级)、所属公司等条件过滤，返回账单(结)、付款(付)、流水(流)三表并行对比的明细行与差值/反馈字段及总记录数。

## 用法

```bash
mbs fars erp-fin-manage-data-parallel-pay-contrast-fetcher [--paymentIds <array>] [--settlementIds <array>] [--shopName <string>] [--shortCreateTime <string>] [--longCreateTime <string>] [--shortCreateDate <string>] [--longCreateDate <string>] [--problem <number>] [--secondProblem <array>] [--companyId <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpFinManageData`
- Method: `POST`
- Path: `/erpFinManageData/erpFinManageData/finance/parallelPayContrastFetcher`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `paymentIds` | paymentIds | body | array | 否 | - | 付款单号(按空格拆分为字符串数组,空时为[]),来源付款单号输入框 |
| `settlementIds` | settlementIds | body | array | 否 | - | 结算单号(按空格拆分为字符串数组,空时为[]),来源结算单号输入框 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称,来源店铺名称输入框 |
| `shortCreateTime` | shortCreateTime | body | string | 否 | - | 付款时间-起始,来源付款时间日期范围选择器左值 |
| `longCreateTime` | longCreateTime | body | string | 否 | - | 付款时间-结束,来源付款时间日期范围选择器右值 |
| `shortCreateDate` | shortCreateDate | body | string | 否 | - | 流水时间-起始,来源流水时间日期范围选择器左值(默认空) |
| `longCreateDate` | longCreateDate | body | string | 否 | - | 流水时间-结束,来源流水时间日期范围选择器右值(默认空) |
| `problem` | problem | body | number | 否 | - | 问题反馈-一级分类(取值=选项序号+1)。1=账-付(反馈-店);2=账-付(反馈);3=付-流(反馈);4=账-流(反馈) |
| `secondProblem` | secondProblem | body | array | 否 | - | 问题反馈-二级分类(多选,取值=子项序号+1),依赖一级problem。默认[] |
| `companyId` | companyId | body | string | 否 | - | 所属公司。1=胤元;33=启元(初始值'') |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(默认100,可选100/200/300/400) |
| `page` | page | body | number | 是 | - | 当前页码(默认从1开始) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `result[]` | array | 账-付-流对比明细行列表 | - |
| `result[][0]` | number | 所属公司ID | - |
| `result[][1]` | number | 行记录ID(表格row-key) | - |
| `result[][2]` | string | 账-结算单号 | - |
| `result[][3]` | string | 账-付款单号(更新操作按此去重提交) | - |
| `result[][4]` | string | 账-店铺名称 | - |
| `result[][5]` | string | 账-币种 | - |
| `result[][6]` | number | 账-应收金额(结)(源类型unknown,按金额展示) | - |
| `result[][7]` | number | 账-平台费(结) | - |
| `result[][8]` | string | 订单状态(源类型null,取值待人工确认) | - |
| `result[][9]` | number | 账-物流费(结) | - |
| `result[][10]` | number | 账-广告费(结) | - |
| `result[][11]` | number | 账-税费(结) | - |
| `result[][12]` | number | 账-退款(结) | - |
| `result[][13]` | number | 账-打款金额(结) | - |
| `result[][14]` | number | 账-打款金额(付) | - |
| `result[][15]` | number | 账-往月代收(付) | - |
| `result[][16]` | number | 账-往月遗漏(付) | - |
| `result[][17]` | number | 账-本月(付) | - |
| `result[][18]` | number | 账-下月(付) | - |
| `result[][19]` | number | 账-打款金额(店) | - |
| `result[][20]` | string | 账-最早创建时间 | - |
| `result[][21]` | string | 账-最近创建时间 | - |
| `result[][22]` | string | 付-原币种 | - |
| `result[][23]` | number | 付-原金额(付) | - |
| `result[][24]` | number | 付-原金额(店) | - |
| `result[][25]` | string | 付-USD币种 | - |
| `result[][26]` | number | 付-USD金额(付) | - |
| `result[][27]` | number | 付-USD金额(店) | - |
| `result[][28]` | number | 付-同金额付款单数 | - |
| `result[][29]` | string | 付-状态 | - |
| `result[][30]` | string | 付-异常反馈(源类型null,取值待人工确认) | - |
| `result[][31]` | string | 付款时间 | - |
| `result[][32]` | string | 流-USD币种 | - |
| `result[][33]` | number | 流-USD金额(付) | - |
| `result[][34]` | string | 流水时间 | - |
| `result[][35]` | number | 流-同金额流水数 | - |
| `result[][36]` | string | 流-来源 | - |
| `result[][37]` | string | 账-付(反馈-店) | - |
| `result[][38]` | number | 账-付(差值)(源类型null,按差值数值展示) | - |
| `result[][39]` | string | 账-付(反馈) | - |
| `result[][40]` | number | 付-流(差值)(源类型null,按差值数值展示) | - |
| `result[][41]` | string | 付-流(反馈) | - |
| `result[][42]` | number | 账-流(差值)(源类型null,按差值数值展示) | - |
| `result[][43]` | string | 账-流(反馈) | - |
| `count` | number | 满足条件的总记录数(前端用作分页total) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
