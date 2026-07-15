# mbs pim erp-product-get-amazon-category

获取亚马逊子目录(类目)列表：亚马逊自动刊登确认页加载时调用，获取亚马逊「子目录」(类目)下拉列表，用于渲染筛选区 #categoryId 下拉框的选项（option 的 value=子目录ID、文本=子目录名称）。无请求参数。

## 用法

```bash
mbs pim erp-product-get-amazon-category
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/amazonProductPublish/getAmazonCategory`
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
| `obj[]` | array | 亚马逊子目录(类目)列表，前端据此渲染 #categoryId 下拉选项 | - |
| `obj[][0]` | string | 子目录(类目)ID，渲染为 <option> 的 value，作为后续查询参数 categoryId 的取值 | - |
| `obj[][1]` | string | 子目录(类目)名称，渲染为 <option> 的展示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
