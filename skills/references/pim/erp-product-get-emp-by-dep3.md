<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-emp-by-dep3

按部门获取开发员(员工)列表：进入「独立站产品报表」页面时调用，按当前登录用户所在部门返回开发员(员工)姓名列表，用于填充页面顶部“开发员”筛选下拉框(#deveplover)。该接口为无参 GET 请求。

## 用法

```bash
mbs pim erp-product-get-emp-by-dep3
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/product/getEmpByDep3`
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
| `code` | number | 响应状态码,200=成功(平台统一包装,模板未直接使用)(待人工确认) | - |
| `desc` | string | 响应提示信息(平台统一包装,模板未直接使用)(待人工确认) | - |
| `obj[]` | array | 开发员(员工)姓名列表，前端 {{each obj}} 遍历渲染为“开发员”下拉选项 | - |
| `obj[]` | string | 单个开发员(员工)姓名；同时作为下拉框 <option> 的 value 与显示文本(search() 中作为 develOper 提交) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
