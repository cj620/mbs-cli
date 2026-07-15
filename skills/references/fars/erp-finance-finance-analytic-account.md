# mbs fars erp-finance-finance-analytic-account

分析账户列表查询：日记账凭证(创建/编辑凭证)页面点击「分析账户」时，按名称关键词分页查询分析账户列表，供用户选择并回填到凭证的「分析账户」输入框。

## 用法

```bash
mbs fars erp-finance-finance-analytic-account [--name <string>] --page <number> --pageSize <number>
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/financeResPartner/financeAnalyticAccount`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `name` | name | body | string | 否 | - | 分析账户名称搜索关键词，来源控件 #accountName，无输入时传空字符串"" |
| `page` | page | body | number | 是 | - | 当前页码，首查/搜索固定1，翻页取api.getCurrent() |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，固定100 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码（标准响应包装，本接口回调未显式校验，200=成功）(待人工确认) | - |
| `desc` | string | 响应提示信息（标准响应包装，本接口回调未使用）(待人工确认) | - |
| `obj` | object | 业务数据对象（前端以其是否存在判定有无数据） | - |
| `obj.count` | number | 满足条件的分析账户总数（写入弹窗#total展示） | - |
| `obj.countPage` | number | 总页数（传入accountPage()初始化分页组件） | - |
| `obj.result[]` | array | 分析账户列表数组 | - |
| `obj.result[]` | string | 分析账户名称（模板#accountListTemplate渲染并回填到#addAnalytic/#editAnalytic） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
