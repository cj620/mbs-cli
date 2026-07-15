<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-finance-finance-account-account-list

科目(会计科目)列表查询：查询全部会计科目(account.account)列表，用于日记账凭证页面顶部筛选栏“科目”下拉框，以及创建/修改凭证弹窗中的“科目/银行科目”下拉框数据填充。页面加载时一次性拉取全部科目，前端用 art-template 渲染为 <option>。前端为不带请求体的空 POST。

## 用法

```bash
mbs fars erp-finance-finance-account-account-list
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/financeAccountAccount/financeAccountAccountList`
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
| `code` | number | 响应状态码,200=成功（统一外壳字段；本接口回调未显式判断，待人工确认是否返回） | - |
| `desc` | string | 响应提示信息（统一外壳字段；本接口回调未使用，待人工确认是否返回） | - |
| `obj[]` | array | 会计科目列表（前端 {{each obj value i}} 直接遍历） | - |
| `obj[][0]` | string | 科目ID（作为下拉 <option> 的 value，选中后用于筛选/提交凭证） | - |
| `obj[][1]` | string | 科目名称（作为下拉 <option> 的显示文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
