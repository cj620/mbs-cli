# mbs pim erp-product-get-packing

包材下拉列表查询：查询全部可选包材(包装材料)列表，用于 SKU 详情页"包材"下拉框(#getPackingContent)的选项渲染。前端通过 art-template getPackingTemplate 把返回的 obj 数组渲染为 <option value="包材ID">包材名称</option>。

## 用法

```bash
mbs pim erp-product-get-packing
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getPacking`
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
| `code` | number | 响应状态码,200=成功（项目统一返回字段） | - |
| `desc` | string | 响应提示信息（项目统一返回字段） | - |
| `obj[]` | array | 包材列表，模板 {{each obj value i}} 遍历渲染为下拉选项 | - |
| `obj[][0]` | string | 包材ID(包材主键序号)，作为 <option> 的 value 提交 | - |
| `obj[][1]` | string | 包材名称，作为 <option> 的显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
