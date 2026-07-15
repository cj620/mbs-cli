# mbs oms erp-order-get-leader-shop2-shop-achievements

店长名下店铺下拉查询(getLeaderShop2)：订单看板页中，选择销售负责人(店长)下拉后，根据所选店长(employeeList)联动查询其名下店铺列表，渲染到各 Tab 的店铺(shopName1~shopName10)下拉框。请求体还固定携带空的 bigChiefList(大酋长列表)与 platformId(平台ID列表)两个数组占位参数。

## 用法

```bash
mbs oms erp-order-get-leader-shop2-shop-achievements [--employeeList <array>] [--bigChiefList <array>] [--platformId <array>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/shopAchievements/getLeaderShop2`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeList` | employeeList | body | array | 否 | - | 销售负责人(店长)列表。取店长下拉框(#saleLeader1~#saleLeader10)选中值按逗号split为字符串数组；未选择时为空数组[]。元素为店长标识(saleLeader值) |
| `bigChiefList` | bigChiefList | body | array | 否 | - | 大酋长列表。前端固定传空数组[](占位，当前页面未赋值) |
| `platformId` | platformId | body | array | 否 | - | 平台ID列表。前端固定传空数组[](占位，当前页面未赋值) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(统一响应包装) | - |
| `desc` | string | 响应提示信息(统一响应包装) | - |
| `obj[]` | array | 店铺列表(店长名下店铺集合)，前端 let list = data.obj 直接渲染下拉 | - |
| `obj[][0]` | string | 店铺ID，作为下拉<option>的value(核实于#shopNameTemplate) | - |
| `obj[][1]` | string | 店铺名称，作为下拉<option>的展示文本(核实于#shopNameTemplate) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
