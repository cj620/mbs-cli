<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-fin-manage-data-parallel-last-month-advance-infos

eBay上月预收余额信息查询：eBay 平台「上月已收」页面的余额信息分页查询：按 ids、平台订单号、店铺名称、余额月份区间、公司等条件分页查询，返回订单金额/平台费/发货金额/账单退款/上月余额/余额等对账字段列表及总条数。

## 用法

```bash
mbs fars erp-fin-manage-data-parallel-last-month-advance-infos [--shortBalanceMonth <string>] [--longBalanceMonth <string>] [--shopName <string>] [--ids <array>] [--orderIds <array>] [--companyId <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpFinManageData`
- Method: `POST`
- Path: `/erpFinManageData/erpFinManageData/ebayFinance/parallelLastMonthAdvanceInfos`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shortBalanceMonth` | shortBalanceMonth | body | string | 否 | - | 余额月份-起始(格式 YYYY-MM)，来源余额月份范围选择器左值，默认当前时间前约90天 |
| `longBalanceMonth` | longBalanceMonth | body | string | 否 | - | 余额月份-结束(格式 YYYY-MM)，来源余额月份范围选择器右值，默认当前月 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称，来源店铺名称输入框 |
| `ids` | ids | body | array | 否 | - | ids 集合，来源 ids 输入框按英文逗号拆分为字符串数组，空时为[] |
| `orderIds` | orderIds | body | array | 否 | - | 平台订单号集合，来源平台订单号输入框按英文逗号拆分为字符串数组，空时为[] |
| `companyId` | companyId | body | string | 否 | - | 公司ID(所属公司)，来源公司下拉选择(选项来自 companyList) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，来源分页组件，默认100，可选100/200/300/400 |
| `page` | page | body | number | 是 | - | 当前页码，来源分页组件 current，搜索按钮固定传1 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `count` | number | 满足条件的总条数(前端用于分页 total) | - |
| `result[]` | array | 余额信息数据列表 | - |
| `result[][0]` | string | 店铺(店铺ID，列标题“店铺名称”) | - |
| `result[][1]` | string | 平台订单号 | - |
| `result[][2]` | number | 订单金额 | - |
| `result[][3]` | number | 平台费 | - |
| `result[][4]` | number | 发货金额 | - |
| `result[][5]` | number | 账单退款 | - |
| `result[][6]` | number | 上月余额 | - |
| `result[][7]` | number | 余额 | - |
| `result[][8]` | string | 币种 | - |
| `result[][9]` | string | 结算月份 | - |
| `result[][10]` | string | 状态 | - |
| `result[][11]` | string | 订单状态 | - |
| `result[][12]` | string | 原因 | - |
| `result[][13]` | string | 备注 | - |
| `result[][14]` | string | 余额月份 | - |
| `result[][15]` | number | 公司ID(前端经 getComName 转公司名展示) | - |
| `result[][16]` | number | 记录ID(Row 类型声明) | - |
| `result[][17]` | string | 业务流水/逻辑ID(Row 类型声明，具体含义 待人工确认) | - |
| `result[][18]` | number | 来源标识(Row 类型声明，枚举含义 待人工确认) | - |
| `result[][19]` | string | 旧店铺名称(Row 类型声明) | - |
| `result[][20]` | string | 店铺名称(Row 类型声明) | - |
| `result[][21]` | number | 创建时间(时间戳，Row 类型声明) | - |
| `result[][22]` | string | 是否匹配店铺金额(标识，枚举含义 待人工确认) | - |
| `result[][23]` | string | 是否匹配店铺(标识，枚举含义 待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
