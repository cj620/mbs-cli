# mbs pim erp-product-find-platform-product

平台列表查询：查询全部平台列表，用于详情页筛选区平台下拉选择框的选项数据源。页面加载时调用一次，返回平台集合，前端以 sequenceid 作为选项值、name 作为选项显示文本。

## 用法

```bash
mbs pim erp-product-find-platform-product
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/findPlatform`
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
| `code` | number | 响应状态码,200=成功(前端据此判定成功) | - |
| `desc` | string | 响应提示信息(失败时前端用于 ElMessage.error 弹窗) | - |
| `obj[]` | array | 平台列表数组(前端赋值给 platformOptions;非数组时回退为空数组) | - |
| `obj[][0]` | number | 平台ID(序号ID,作为下拉选项的值 :value 与 :key,提交给查询接口的 platform 参数) | - |
| `obj[][1]` | string | 平台名称(作为下拉选项的显示文本 :label) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
