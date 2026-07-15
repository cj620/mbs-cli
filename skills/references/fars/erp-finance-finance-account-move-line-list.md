<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-finance-finance-account-move-line-list

日记账凭证(分录)列表查询：日记账凭证页(journalVoucher)列表分页查询：按科目、账户、币种、凭证来源、费用日期区间、摘要等条件筛选，返回会计分录(account_move_line)列表及借贷方、状态、创建人等字段。

## 用法

```bash
mbs fars erp-finance-finance-account-move-line-list [--accountAccountId <string>] [--accountJournalId <string>] [--resCurrencyId <string>] [--expenseName <string>] [--feeDateStart <string>] [--feeDateEnd <string>] [--ref <string>] --page <number> --pageSize <number>
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/financeAccountMoveLine/financeAccountMoveLineList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `accountAccountId` | accountAccountId | body | string | 否 | - | 科目ID(会计科目 account_account ID)，来源科目下拉#AccountList，未选时传null |
| `accountJournalId` | accountJournalId | body | string | 否 | - | 账户ID(PayPal/日记账账户 id)，来源账户下拉#BalanceList，未选时传null |
| `resCurrencyId` | resCurrencyId | body | string | 否 | - | 币种ID(res_currency ID)，来源币种下拉#CurrencyList，未选时传null |
| `expenseName` | expenseName | body | string | 否 | - | 凭证来源/费用来源名称，来源凭证来源下拉#expenseName(由getExpenseList接口填充)，未选时传null |
| `feeDateStart` | feeDateStart | body | string | 否 | - | 费用开始日期(yyyy-MM-dd)，来源日期框#startTime，默认当前日期前30天 |
| `feeDateEnd` | feeDateEnd | body | string | 否 | - | 费用结束日期(yyyy-MM-dd)，来源日期框#endTime，默认当天 |
| `ref` | ref | body | string | 否 | - | 摘要搜索关键词，来源文本框#ref，为空时传null；仅search()首次查询提交，翻页回调不提交 |
| `page` | page | body | number | 是 | - | 当前页码，search()固定传1，MoveLineList()翻页时传当前页 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，固定为100 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码。200=成功；601=未登录(跳转登录页)；其它=失败弹提示 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的总条数(写入#total) | - |
| `obj.countPage` | number | 总页数(传入分页组件MoveLineList) | - |
| `obj.result[]` | array | 日记账凭证(分录)列表 | - |
| `obj.result[][0]` | string | 分录ID(account_move_line 主键，复选框值/撤销/编辑入参) | - |
| `obj.result[][1]` | string | 科目名称(列：科目) | - |
| `obj.result[][2]` | string | 账户(账户邮箱，列：账户) | - |
| `obj.result[][3]` | string | 币种名称(列：币种) | - |
| `obj.result[][4]` | number | 借方金额(列：借方) | - |
| `obj.result[][5]` | number | 贷方金额(列：贷方) | - |
| `obj.result[][6]` | string | 费用时间(列：费用时间) | - |
| `obj.result[][7]` | string | 辅助核算(往来单位名称，列：辅助核算) | - |
| `obj.result[][8]` | string | 凭证来源(列：凭证来源) | - |
| `obj.result[][9]` | string | 分析账户(列：分析账户) | - |
| `obj.result[][10]` | string | 摘要(列：摘要，悬浮展开全文) | - |
| `obj.result[][11]` | string | 状态。枚举："正常"/"失败"(失败行标红)；为"正常"或"失败"时显示撤销/编辑操作 | - |
| `obj.result[][12]` | string | 创建人(列：创建人) | - |
| `obj.result[][13]` | string | 创建时间(列：创建时间) | - |
| `obj.result[][14]` | string | 错误描述(列：错误描述，悬浮展开全文) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
