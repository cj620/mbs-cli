# mbs pim erp-product-find-all-country

查询全部主销国家(下拉选项)：商品SPU管理(管理版)筛选区初始化时调用，拉取全部主销国家选项列表，填充到 kingCountriesOptions，供主销国家多选下拉框渲染。无请求参数，返回国家选项数组(以 name 作为下拉项的 label 与 value)。

## 用法

```bash
mbs pim erp-product-find-all-country
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/findAllCountry`
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
| `obj[]` | array | 主销国家选项列表(国家对象数组) | - |
| `obj[]` | string | 国家名称(下拉项的 label 与 value，选中后 join 拼接作为 hjreserve4 国家筛选条件) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
