<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-sku-package-create-oper

SKU包装-提交人(创建人)下拉列表查询：SKU包装信息报表页加载时调用，获取该报表数据中所有「提交人(创建人)」去重列表，用于顶部「请选择提交人」筛选下拉框的选项数据。返回值为提交人姓名字符串数组。

## 用法

```bash
mbs pim erp-product-get-sku-package-create-oper
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/skuPackage/getSkuPackageCreateOper`
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
| `code` | number | 响应状态码，200=成功（项目统一响应体字段） | - |
| `desc` | string | 响应提示信息（项目统一响应体字段） | - |
| `content` | string | 附加内容字段（项目统一响应体字段，本接口前端未使用，(待人工确认)是否返回） | - |
| `success` | boolean | 请求是否成功标识（项目统一响应体字段，本接口前端未使用） | - |
| `obj[]` | array | 提交人(创建人)姓名列表；数组元素为字符串(人名)，前端直接用作「请选择提交人」下拉框选项的 key/value/label | - |
| `obj[]` | string | 单个提交人(创建人)姓名，如「王丽」（数组项无字段名，整体即为字符串） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
