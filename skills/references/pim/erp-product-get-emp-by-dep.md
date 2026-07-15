<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-emp-by-dep

按部门查询员工(下拉选项)：根据部门ID(depId)查询该部门下的全部员工，返回员工姓名字符串数组(obj)。前端用于采购员/开发员/销售员等人员下拉选择框的选项数据源(label=value=员工姓名)。

## 用法

```bash
mbs pim erp-product-get-emp-by-dep --depId <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getEmpByDep`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `depId` | depId | body | number | 是 | - | 部门ID(query参数)。决定查询哪个部门下的员工。已知取值：65=采购部门；62=(侵权图片/质检/拼售)；54=(海外备货绩效)。前端按页面写死，非用户输入 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `success` | boolean | 业务是否成功标识 | - |
| `content` | unknown | 通用内容字段(本接口未使用，一般为 null) | - |
| `obj[]` | array | 业务数据：该部门下员工姓名列表(字符串数组)。前端直接渲染为下拉选项 | - |
| `obj[]` | string | 数组元素：单个员工姓名(下拉选项的 label 与 value) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
