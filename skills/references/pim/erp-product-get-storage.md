# mbs pim erp-product-get-storage

仓库列表下拉查询：拉取仓库列表，用于 SKU 详情页“仓库列表”下拉框(#storageId)的选项渲染。无请求参数，POST 直接调用，返回仓库数组，前端仅使用每项的 name 作为 option 的 value 与显示文本。

## 用法

```bash
mbs pim erp-product-get-storage
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getStorage`
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
| `code` | number | 响应状态码,200=成功(本接口回调未显式校验,以 data.obj 是否存在为准) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 仓库列表数组(前端据此渲染下拉选项;为空/不存在则不渲染) | - |
| `obj[]` | string | 仓库名称(前端用作 <option> 的 value 与显示文本,即 value.name) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
