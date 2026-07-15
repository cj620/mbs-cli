# mbs ars erpmonitor-get-customer-service-shop

客服(店长/组员)店铺下拉查询：运营监控报表页面中，根据已选择的「店长(大酋长)」与「组员(店铺经理)」联动查询其名下店铺列表，返回店铺ID与店铺名称，用于渲染「店铺」多选下拉框(#shopList)。店长/组员下拉变更时(onchange)触发。

## 用法

```bash
mbs ars erpmonitor-get-customer-service-shop [--bigChiefList <array>] [--shopManagerList <array>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/smtShopKpi/getCustomerServiceShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `bigChiefList` | bigChiefList | body | array | 否 | - | 店长(大酋长)ID列表。来源控件 #leaderList(店长多选下拉)，option value 取 value.id。为空时传空数组 [] |
| `shopManagerList` | shopManagerList | body | array | 否 | - | 组员(店铺经理/客服)名称列表。来源控件 #customberList(组员多选下拉)，option value 取 value.name。为空时传空数组 [] |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(通用响应体字段;本接口成功回调未强校验) | - |
| `desc` | string | 响应提示信息(通用响应体字段) | - |
| `obj[]` | array | 店铺列表(前端 if(data.obj) 判断并直接遍历渲染店铺下拉) | - |
| `obj[][0]` | string | 店铺ID(渲染为 #shopList 的 option value) | - |
| `obj[][1]` | string | 店铺名称(渲染为 option 显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
