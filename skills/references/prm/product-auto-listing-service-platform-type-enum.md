# mbs prm product-auto-listing-service-platform-type-enum

平台类型枚举查询：获取刊登模板下拉所需的「平台类型枚举」列表。前端在组件挂载时调用，拿到平台数组后用于渲染「刊登模板」下拉菜单，并按 canSalePlatform 过滤被禁用平台（120→TIKTOK、119→OZON），再据所选平台预取刊登模板ID。

## 用法

```bash
mbs prm product-auto-listing-service-platform-type-enum
```

## API

- Service: `product-auto-listing-service`
- Method: `GET`
- Path: `/gateway/product-auto-listing-service/support/enum/platformTypeEnum`
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
| `code` | number | 网关响应状态码(统一包装字段,前端未直接使用,待人工确认) | - |
| `msg` | string | 网关响应提示信息(统一包装字段,前端未直接使用,待人工确认) | - |
| `data[]` | array | 平台类型枚举数组(前端 res.data.data,赋值给 platformList) | - |
| `data[][0]` | string | 平台代码/标识(下拉显示文本,并与禁用映射 120→TIKTOK、119→OZON 比对过滤;亦作 getListingTemplatePage 的 platformType) | - |
| `data[][1]` | string | 平台值(下拉项 command;跳转刊登页时取 value || code 转大写拼入 platform 查询参数) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
