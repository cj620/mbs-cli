<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-shop-info

左侧店铺信息查询（shopInfo）：订单列表页左侧 Top100 店铺列表查询：按维度(待发量/今日单量)返回当前用户可见店铺集合，含店铺名称、所属平台ID、对应单量；前端用于渲染左侧店铺树并支持点击店铺过滤订单。

## 用法

```bash
mbs oms erp-order-shop-info --orderType <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/shopInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderType` | orderType | body | string | 是 | - | 店铺统计维度。orderstatus=待发量(按订单状态,默认)；ordertime=今日单量(按订单时间)。来源:左侧按钮#orderStatusType/#orderTimeType;未传参时默认orderstatus |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(失败时alert) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.shopInfoList[]` | array | 店铺列表(赋值给模板list渲染左侧店铺树) | - |
| `obj.shopInfoList[][0]` | string | 店铺名称(渲染为li文本并作为id,点击时赋给base.shoptype用于过滤) | - |
| `obj.shopInfoList[][1]` | string | 平台ID(渲染为data-platfrom,点击时填入#platformList) | - |
| `obj.shopInfoList[][2]` | string | 单量徽标值(按orderType为待发量或今日单量,渲染于.badge) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
