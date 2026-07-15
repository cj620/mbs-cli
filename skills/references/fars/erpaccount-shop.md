<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-shop

物流店铺下拉列表查询：加载「Case分析（管理明细）」页面店铺筛选下拉框(#shoptype)的可选项数据。页面初始化时无参 GET 调用，返回店铺集合，前端用 art-template(contentTemplate2) 渲染为 option，仅取 shopName 作为选项值与文本。

## 用法

```bash
mbs fars erpaccount-shop
```

## API

- Service: `erpaccount`
- Method: `GET`
- Path: `/erpaccount/erpaccount/dashboard/shop`
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
| `obj[]` | array | 店铺列表（模板遍历对象，为页面店铺下拉数据源） | - |
| `obj[]` | string | 店铺名称（同时作为下拉 option 的 value 与显示文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
