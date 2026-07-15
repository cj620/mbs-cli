<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-platform-listing-controller

平台列表查询：查询平台基础数据列表，用于「爆款listing」页面顶部平台多选下拉框(platfromlist)的数据填充。无请求参数(空请求体)，返回平台数组，前端取 sequenceid 作为选项值、name 作为显示文本。

## 用法

```bash
mbs pim erp-product-find-platform-listing-controller
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/listingController/findPlatform`
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
| `code` | number | 响应状态码,200=成功(框架统一返回结构) | - |
| `desc` | string | 响应提示信息(框架统一返回结构) | - |
| `obj[]` | array | 平台列表(直接赋值给下拉数据源 platfromlist) | - |
| `obj[][0]` | number | 平台ID(作为下拉选项 :value，选中后传入查询的 platformIdQueryList) | - |
| `obj[][1]` | string | 平台名称(作为下拉选项 :label 显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
