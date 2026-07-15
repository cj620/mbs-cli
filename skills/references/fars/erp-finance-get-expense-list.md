<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-finance-get-expense-list

凭证来源(费用名称)列表查询：日记账凭证页面初始化时调用，拉取全部凭证来源/费用名称列表，用于渲染顶部筛选区 #expenseName(凭证来源)下拉选项。前端用原生 fetch 发起，无请求参数；返回结果生成 <option>，仅取每项 name(或字符串元素本身)作为下拉值与显示文本。

## 用法

```bash
mbs fars erp-finance-get-expense-list
```

## API

- Service: `erpFinance`
- Method: `GET`
- Path: `/erpFinance/erpFinance/financeAccountMoveLine/getExpenseList`
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
| `obj[]` | array | 凭证来源(费用名称)列表。结构B下为对象的 obj 数组；结构A下整个响应体即为该数组(根为数组)。前端 Array.isArray(res) ? res : (res.obj || []) 取值 | - |
| `obj[]` | string | 凭证来源名称(费用名称)。前端用作 #expenseName 下拉框 <option> 的 value 与显示文本；当数组元素为纯字符串时，直接取该字符串本身作为此值 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
