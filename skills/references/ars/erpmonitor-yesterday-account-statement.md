<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-yesterday-account-statement

昨日账户收支监控查询：首页仪表盘财务看板加载时自动调用，查询昨日账户收支汇总，返回昨日支出金额(expend)与昨日收入金额(income)，分别渲染到看板支出/收入两个数字卡片。无请求参数。

## 用法

```bash
mbs ars erpmonitor-yesterday-account-statement
```

## API

- Service: `erpmonitor`
- Method: `GET`
- Path: `/erpmonitor/erpmonitor/accountStatementMonitor/yesterdayAccountStatement`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(项目通用包装字段) | - |
| `desc` | string | 响应提示信息(项目通用包装字段) | - |
| `obj` | object | 业务数据对象(昨日账户收支汇总) | - |
| `obj.expend` | string | 昨日支出金额(渲染到 #expend 支出卡片,关联 IncomeExpenditure.html?Income=1) | - |
| `obj.income` | string | 昨日收入金额(渲染到 #income 收入卡片,关联 IncomeExpenditure.html?Income=0) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
