<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-query-employee-id

查询下属管理员ID(刊登人)：eBay批量刊登页用于获取当前登录用户的下属员工/管理员ID集合，结果写入 sessionStorage(subManngerIds) 供后续 search() 刊登列表查询作为数据权限过滤条件。请求体为空(无入参)，身份信息由登录态(Cookie/Session)隐式传递。

## 用法

```bash
mbs pim erp-product-query-employee-id
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productPublish/queryEmployeeId`
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
| `code` | number | 响应状态码，200=成功(前端据此判断) | - |
| `obj[]` | array | 下属员工/管理员ID列表(刊登人ID集合)；为空时前端置为[]，存入 sessionStorage(subManngerIds) | - |
| `obj[]` | string | 单个员工/管理员ID(下属刊登人ID，前端以逗号拼接后用于刊登列表数据权限过滤) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
