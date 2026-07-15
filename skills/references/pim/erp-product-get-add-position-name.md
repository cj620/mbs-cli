<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-add-position-name

根据部门名称获取岗位/人员名称：备货规则新增/编辑弹窗中，用户在「部门权限」下拉选择部门并触发 change 时调用。以部门名称为入参，返回该部门下可分配的岗位/人员名称集合，前端将返回的 obj 赋给 state.dialogOptions.stockUpCheckEmp 作为人员权限相关选项数据。

## 用法

```bash
mbs pim erp-product-get-add-position-name --name <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getAddPositionName`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `name` | name | body | string | 是 | - | 部门名称（URL query 参数）。取自「部门权限」下拉 stockUpDeptCheckName 当前选中值 e.toString()，用于查询该部门下可分配的岗位/人员名称。来源控件：部门权限 el-select（@change=changeDepartId） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 该部门下可分配的岗位/人员名称集合，前端赋给 dialogOptions.stockUpCheckEmp 作为人员权限选项数据源 | - |
| `obj[]` | string | 数组元素：岗位/人员名称（如 店长/开发员、经理、总监 等）。元素具体结构（字符串名称或对象）(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
