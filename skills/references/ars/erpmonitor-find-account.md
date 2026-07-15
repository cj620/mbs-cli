<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-find-account

查询收支监控账号列表：收支监控（收入/支出）页面初始化时调用，获取当前可选的账号列表，用于渲染顶部“请选择账号”下拉框（select#findAccount）。请求不携带任何请求体，响应返回账号字符串数组 obj，前端通过 art-template 模板 findAccountTemplate 逐项渲染为 option，其 value 与显示文本均为账号本身。

## 用法

```bash
mbs ars erpmonitor-find-account
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/accountStatementMonitor/findAccount`
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
| `obj[]` | array | 账号列表，字符串数组；前端 if (data.obj) 后取出，作为账号下拉框数据源 | - |
| `obj[]` | string | 账号（数组元素本身），渲染为 <option value="{{item}}">{{item}}</option>，value 与显示文本均为该账号字符串（即收支明细中的账号/邮箱 email，具体语义待人工确认） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
