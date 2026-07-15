<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-query-shop-bean-by-sale-leader

按店铺负责人查询店铺列表(queryShopBeanBySaleLeader)：Lazada relisting 列表页中，当用户在“店铺负责人”下拉框选择某负责人时触发，按所选负责人的员工ID查询其名下店铺集合，返回店铺列表用于渲染“店铺”下拉框。负责人为空表示查询全部。

## 用法

```bash
mbs pim erp-product-query-shop-bean-by-sale-leader [--employeeId <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productPublish/queryShopBeanBySaleLeader`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeId` | employeeId | body | string | 否 | - | 店铺负责人对应的员工ID，取自页面下拉框 #employeeId 选中值(employee_id)，可为空字符串表示未筛选 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(平台统一响应结构) | - |
| `desc` | string | 响应提示信息(平台统一响应结构) | - |
| `obj[]` | array | 店铺列表(店铺负责人名下的店铺集合) | - |
| `obj[]` | string | 店铺名称，前端用作店铺下拉框 option 的 value 与显示文本({{value.shopName}})；元素其余字段前端未使用(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
