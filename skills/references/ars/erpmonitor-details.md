<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-details

账户对账单监控-收支明细查询：账户对账单监控页面，根据交易时间区间、账户邮箱、收支类型、币种查询某账户的资金收支(进账/出账)流水明细，分页返回流水列表(币种、外币/人民币金额、来源去向、账户余额、平台、店铺、备注、交易日期)及总条数/总页数。

## 用法

```bash
mbs ars erpmonitor-details --startTime <string> --endTime <string> [--email <string>] --currpage <number> [--expend <string>] [--currency <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/accountStatementMonitor/details`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `startTime` | startTime | query | string | 是 | - | 交易开始时间(统计起始日期，格式 yyyy-MM-dd)，来源日期框 #startTime |
| `endTime` | endTime | query | string | 是 | - | 交易结束时间(统计结束日期，格式 yyyy-MM-dd)，来源日期框 #endTime |
| `email` | email | query | string | 否 | - | 账户邮箱(对账账户标识)，来源页面URL参数 email |
| `currpage` | currpage | query | number | 是 | - | 当前页码(每页50条)，首次固定为1，翻页取 api.getCurrent() |
| `expend` | expend | query | string | 否 | - | 收支类型(进/出账筛选标识)，来源页面URL参数 expend(枚举值待人工确认) |
| `currency` | currency | query | string | 否 | - | 币种(交易币种筛选)，来源页面URL参数 currency(翻页回调未带该参数) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `pages` | number | 总页数(传给分页组件 pageCount) | - |
| `total` | number | 满足条件的流水总条数(显示于 #total) | - |
| `list[]` | array | 收支流水明细列表 | - |
| `list[][0]` | string | 交易币种(外币币种，展示于币种列及金额单位) | - |
| `list[][1]` | number | 交易金额(外币)，>0视为收入(展示incomeRMB)，否则视为支出(展示expendRMB) | - |
| `list[][2]` | number | 收入金额(人民币)，come>0时展示于交易金额(人民币)列 | - |
| `list[][3]` | number | 支出金额(人民币)，come<=0时展示于交易金额(人民币)列 | - |
| `list[][4]` | string | 资金来源(展示于资金来源/去向列前段) | - |
| `list[][5]` | string | 资金去向(展示于资金来源/去向列后段) | - |
| `list[][6]` | number | 账户余额(外币，展示于账户余额(外币)列) | - |
| `list[][7]` | string | 账户余额币种(作为余额单位展示) | - |
| `list[][8]` | string | 收款方/平台标识(展示于平台列) | - |
| `list[][9]` | string | 店铺名称(展示于店铺ID列) | - |
| `list[][10]` | string | 备注(展示于备注列) | - |
| `list[][11]` | string | 交易日期(展示于交易日期列) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
