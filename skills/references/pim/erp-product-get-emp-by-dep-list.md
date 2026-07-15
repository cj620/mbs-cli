# mbs pim erp-product-get-emp-by-dep-list

获取部门员工列表(提问人下拉)：进入商品咨询(留言)页面时自动调用，返回当前部门下的员工(提问人)姓名列表，前端用 art-template 渲染成"提问人"下拉框(#productName)的 <option> 选项。请求无任何业务参数(部门由后端依据登录态/默认部门判定)。

## 用法

```bash
mbs pim erp-product-get-emp-by-dep-list
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getEmpByDepList`
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
| `obj[]` | array | 员工(提问人)姓名列表，前端渲染为"提问人"下拉(#productName)的选项集合 | - |
| `obj[]` | string | 单个员工姓名(数组元素为字符串)，同时作为 <option> 的 value 与显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
