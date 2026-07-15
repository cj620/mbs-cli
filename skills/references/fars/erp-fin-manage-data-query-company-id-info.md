<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-fin-manage-data-query-company-id-info

公司ID信息查询：查询当前用户可见的全部公司列表（公司ID + 公司名称），前端模块首次加载时无参 POST 拉取并缓存为响应式 companyList，供各对账/明细页面将 companyId 翻译为公司名称（getComName）及作为公司下拉选项数据源。接口直接返回公司对象数组，无 code/obj 包装。

## 用法

```bash
mbs fars erp-fin-manage-data-query-company-id-info
```

## API

- Service: `erpFinManageData`
- Method: `POST`
- Path: `/erpFinManageData/erpFinManageData/finance/queryCompanyIdInfo`
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
| `(root array)[]` | array | 公司列表，接口直接返回数组（无 code/obj 包装），元素为公司对象 | - |
| `(root array)[][0]` | number | 公司ID（与各业务行 row.companyId 匹配的主键；getComName 据此查找） | - |
| `(root array)[][1]` | string | 公司名称（用于列展示/下拉 label，getComName 命中后返回该值） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
