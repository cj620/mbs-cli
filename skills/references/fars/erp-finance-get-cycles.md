<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-finance-get-cycles

财务推送任务-获取期数列表(getCycles)：财务导入进度页面初始化(onMounted)时调用，获取可选的财务期数列表，用于顶部"请选择期数"下拉框；返回后默认选中第一项并据其 years/cycle 触发任务列表查询。无请求参数。

## 用法

```bash
mbs fars erp-finance-get-cycles
```

## API

- Service: `erpFinance`
- Method: `GET`
- Path: `/erpFinance/erpFinance/financePushTask/getCycles`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 期数列表(赋值给下拉数据源 timelist) | - |
| `obj[][0]` | number | 年份(下拉 value 的第一段;前端 Number(time.split(',')[0]) 作为 years 入参) | - |
| `obj[][1]` | number | 期数/周期序号(下拉 value 的第二段;前端 Number(time.split(',')[1]) 作为 cycle 入参) | - |
| `obj[][2]` | string | 期数显示文本(作为 el-option 的 label 展示,如"XXXX年第X期") | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
