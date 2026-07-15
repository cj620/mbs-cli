<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-list-publish-shop-lazada-publish

可刊登店铺列表查询(listPublishShop)：Lazada 批量刊登页面初始化时调用，获取当前用户可用于“生成 listing/刊登”的店铺列表，渲染到“请选择店铺”多选下拉框(#pubshop)。请求无业务参数(空 body POST)，响应 obj 为店铺数组，前端仅取店铺名 ebayShopName 作为下拉选项的 value 与显示文本。

## 用法

```bash
mbs pim erp-product-list-publish-shop-lazada-publish
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaPublish/listPublishShop`
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
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 可刊登店铺列表 | - |
| `obj[]` | string | 店铺名称（前端作为下拉选项 option 的 value 及显示文本；唯一被模板使用的字段） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
