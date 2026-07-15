# mbs pim erp-product-shop-manager-drop-down

开发经理下拉列表查询：获取 SKU 包裹/采样业务下「开发经理」下拉选项列表。前端进入「拍照采样批次核销表」页面时自动调用，返回开发经理 id 与姓名集合，用于「开发经理」多选下拉框；选中后再以其 id 联动查询其名下开发员。

## 用法

```bash
mbs pim erp-product-shop-manager-drop-down
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/skuPackage/shopManagerDropDown`
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
| `code` | number | 响应状态码，200=成功（项目统一响应码） | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 开发经理下拉列表（前端赋值给 operList.manager，为空时取 []） | - |
| `obj[][0]` | string | 开发经理ID（下拉项 value-key，选中后用于联动查询其名下开发员） | - |
| `obj[][1]` | string | 开发经理姓名（下拉项展示文本 :label） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
