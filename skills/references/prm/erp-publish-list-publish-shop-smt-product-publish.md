<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erp-publish-list-publish-shop-smt-product-publish

SMT可刊登店铺列表查询：SMT批量刊登页打开“多选店铺”模态框时调用，获取当前可刊登(SMT/Lazada)店铺列表，用于渲染店铺多选复选框。请求体为空(不传任何参数)，返回店铺名称列表。

## 用法

```bash
mbs prm erp-publish-list-publish-shop-smt-product-publish
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/smtProductPublish/listPublishShop`
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
| `code` | number | 响应状态码,200=成功(本回调未校验,为马帮erp统一响应外壳字段) | - |
| `obj[]` | array | 可刊登店铺列表(`{{each obj}}` 遍历渲染为复选框) | - |
| `obj[]` | string | 店铺名称(复选框 value 与展示文案,模板 value.joomShopName) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
