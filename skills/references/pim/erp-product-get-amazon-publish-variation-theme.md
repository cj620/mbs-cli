# mbs pim erp-product-get-amazon-publish-variation-theme

获取亚马逊刊登变体主题(Variation Theme)列表：在亚马逊自动刊登确认列表页点击某行"主题"单元格时触发，无入参 POST 请求，后端返回当前可选的亚马逊变体主题(Variation Theme)名称列表，前端用 themeTypeTemplate 渲染为 select 下拉；用户选中后由 themeTypeChange 将所选 variationTheme 回写到对应 SPU/SKU。

## 用法

```bash
mbs pim erp-product-get-amazon-publish-variation-theme
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/amazonProductPublish/getAmazonPublishVariationTheme`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 变体主题(Variation Theme)名称列表；元素为字符串，前端遍历渲染为下拉 option,value 与文本均为该字符串 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
