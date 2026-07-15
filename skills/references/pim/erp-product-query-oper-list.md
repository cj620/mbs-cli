<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-query-oper-list

认领人下拉列表查询：进入「独立站产品认领」页面时加载，返回可作为认领人筛选项的员工列表，用于渲染顶部「认领人」多选下拉框(#queryOperList)。该请求无任何请求参数(空 body)。

## 用法

```bash
mbs pim erp-product-query-oper-list
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productClaim/queryOperList`
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
| `code` | number | 响应状态码,200=成功(统一响应包裹字段) | - |
| `desc` | string | 响应提示信息(统一响应包裹字段) | - |
| `obj[]` | array | 认领人(员工)列表，模板直接遍历该数组渲染下拉选项 | - |
| `obj[]` | string | 员工姓名(同时作为 <option> 的 value 与显示文本，作为认领人筛选值) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
