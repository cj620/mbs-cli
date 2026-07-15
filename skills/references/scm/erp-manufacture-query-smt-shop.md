<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-manufacture-query-smt-shop

SMT店铺列表查询：查询SMT纠纷统计页可选「店铺」列表。前端在页面 onMounted → getshop() 中调用，无任何请求参数，返回店铺名称字符串数组，前端将每个名称映射为 {value,label} 后填充店铺筛选下拉框。

## 用法

```bash
mbs scm erp-manufacture-query-smt-shop
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/issueInfo/querySmtShop`
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
| `code` | number | 响应状态码,200=成功(平台统一包装字段) | - |
| `content` | number | 总数/附加内容(平台统一包装字段,本接口未使用) | - |
| `desc` | string | 响应提示信息(平台统一包装字段) | - |
| `success` | boolean | 是否成功标识(平台统一包装字段) | - |
| `obj[]` | array | 业务数据：SMT店铺名称列表(字符串数组,前端映射为店铺下拉选项) | - |
| `obj[]` | string | 单个店铺名称(数组元素,前端同时作为下拉项的 value 与 label) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
