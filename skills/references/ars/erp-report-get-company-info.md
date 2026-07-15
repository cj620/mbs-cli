# mbs ars erp-report-get-company-info

公司信息下拉列表查询：消息客服监控报表页加载时调用，获取当前用户可见的公司列表，用于渲染顶部「请选择公司」下拉框。GET 无入参，返回公司数组，前端用 art-template 模板 companyTemplate 遍历 obj 渲染 option(value=companyId, text=companyName)。

## 用法

```bash
mbs ars erp-report-get-company-info
```

## API

- Service: `erpReport`
- Method: `GET`
- Path: `/erpReport/erpReport/message/getCompanyInfo`
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
| `obj[]` | array | 公司列表数组(模板 {{each obj value i}} 遍历的数据源) | - |
| `obj[][0]` | string | 公司ID(写入 option value，作为搜索时 companyId 入参) | - |
| `obj[][1]` | string | 公司名称(下拉项显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
