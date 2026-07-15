<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-get-all-emp-name

查询市场部所有在职人员：查询市场部(department_id=54)全部在职(status=1)员工姓名列表，用于页面「市场部在职人员」下拉/看板渲染。后端SQL：select employee_name from hr_employee where department_id =54 and status =1。前端调用函数已标注@deprecated。

## 用法

```bash
mbs ars erpmonitor-get-all-emp-name
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/getAllEmpName`
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
| `success` | boolean | 是否成功(结果非空时为true) | - |
| `code` | number | 响应状态码,200=成功;异常时500 | - |
| `desc` | string | 响应提示信息,成功为success,异常为错误信息 | - |
| `obj[]` | array | 市场部在职人员姓名列表(department_id=54且status=1) | - |
| `obj[]` | string | 单个员工姓名(hr_employee.employee_name),前端kanTemplate遍历渲染为看板/下拉项 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
