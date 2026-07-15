# mbs pim erp-product-get-product-type

获取销量级别(产品类型)列表：移动端商品筛选/排序页加载时调用，返回“销量级别”枚举列表，用于动态渲染 salesTemplate 中的单选项(typeName 作展示文本、id 作提交值)。无请求参数，POST 空体调用。

## 用法

```bash
mbs pim erp-product-get-product-type
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getProductType`
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
| `obj[]` | array | 销量级别(产品类型)列表，前端遍历渲染单选项 | - |
| `obj[][0]` | string | 销量级别名称（<label> 展示文本） | - |
| `obj[][1]` | string | 销量级别ID（单选 value，选中后作为提交值） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
