# mbs pim erp-product-get-develop-list

开发员(负责经理/负责人)下拉列表查询：商品类目维护页面初始化时调用，返回可选的开发员/负责经理/负责人名称列表，用于「修改类目」「批量设置权限」「批量删除权限」弹窗中「负责经理」「负责人」下拉框的候选项。接口无入参。

## 用法

```bash
mbs pim erp-product-get-develop-list
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/categoryController/getDevelopList`
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
| `obj[]` | array | 开发员/负责经理/负责人名称列表,元素为字符串;前端赋值给 managerlist,渲染为负责经理/负责人下拉选项 | - |
| `obj[]` | string | 数组元素:单个人员名称(同时作为下拉框的 label 与 value) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
