# mbs oms erp-mobile-get-team-member-by-leader-sale-trend-chart

获取组长名下团队组员列表：移动端马帮ERP「销售搜索」页面初始化时调用，根据当前登录人(组长)身份返回其名下可选的团队组员列表，用于渲染"组员"多选筛选项。前端无入参，由后端依据登录态识别组长并返回组员集合。

## 用法

```bash
mbs oms erp-mobile-get-team-member-by-leader-sale-trend-chart
```

## API

- Service: `erpMobile`
- Method: `GET`
- Path: `/erpMobile/erpMobile/saleTrendChart/getTeamMemberByLeader`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准包装字段,本回调未引用)(待人工确认) | - |
| `desc` | string | 响应提示信息(标准包装字段,本回调未引用)(待人工确认) | - |
| `obj[]` | array | 组员列表(模板遍历 {{each obj v i}} 渲染为组员复选项) | - |
| `obj[]` | string | 组员姓名(渲染为 checkbox 的 label 与 value;选中后作为 base.teamNumber 并存入 sessionStorage('name')) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
