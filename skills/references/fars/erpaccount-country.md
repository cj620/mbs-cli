<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-country

仪表盘-国家下拉列表查询：财务仪表盘(经理case分析页)初始化时拉取国家列表，用于填充“按国家搜索”的国家下拉框 #country。页面加载即自动调用 country()，无入参，返回国家值数组，前端用 art-template 渲染为 <option>。

## 用法

```bash
mbs fars erpaccount-country
```

## API

- Service: `erpaccount`
- Method: `GET`
- Path: `/erpaccount/erpaccount/dashboard/country`
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
| `obj[]` | array | 国家列表数组（前端遍历渲染国家下拉框 #country 的选项） | - |
| `obj[]` | string | 数组元素：单个国家值（直接作为 <option> 的 value 与显示文本）。模板 {{value}} 直接输出，无子字段 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
