# mbs pim erp-product-find-manage-employee-names

查询修改人(管理员工)姓名列表：Lazada批量修改标题页面初始化时调用，无入参，返回当前可选「修改人」(管理员工姓名)字符串数组，前端用 art-template(modifierTemplate) 渲染到「选择修改人」下拉框(#modifier)，供按修改人筛选 Lazada 改标题任务列表。

## 用法

```bash
mbs pim erp-product-find-manage-employee-names
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaExportController/findManageEmployeeNames`
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
| `code` | number | 响应状态码,200=成功（页面统一返回结构；本回调仅判断 obj，未直接读取 code） | - |
| `desc` | string | 响应提示信息（统一返回结构字段；本回调未使用） | - |
| `obj[]` | array | 修改人(管理员工)姓名列表；前端据其是否存在决定是否渲染下拉框 | - |
| `obj[]` | string | 数组元素：单个修改人/管理员工姓名，直接作为 <option value> 与下拉显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
