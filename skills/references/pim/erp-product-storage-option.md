# mbs pim erp-product-storage-option

发货仓库选项查询：获取SPU管理列表筛选器中「发货仓库」下拉框的选项列表。页面初始化时无参 GET 调用，返回值为发货仓库名称字符串数组，直接作为 el-select 的 label 与 value 渲染，供用户选择后以 storageNew 参数回传到 SPU 列表查询接口做过滤。

## 用法

```bash
mbs pim erp-product-storage-option
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/product/storageOption`
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
| `code` | number | 响应状态码,200=成功(统一响应约定,待人工确认具体取值) | - |
| `desc` | string | 响应提示信息(统一响应约定) | - |
| `obj[]` | array | 发货仓库选项列表,元素为仓库名称字符串 | - |
| `obj[]` | string | 单个发货仓库名称,前端作为下拉项的 label 与 value(选中后赋值给 storageNew) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
