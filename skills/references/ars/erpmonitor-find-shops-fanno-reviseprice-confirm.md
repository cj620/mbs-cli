# mbs ars erpmonitor-find-shops-fanno-reviseprice-confirm

店铺列表查询(fanno提价店铺下拉)：fanno提价页面初始化时调用，获取当前用户可选的店铺列表，用于顶部店铺多选下拉(#checkShops)的渲染。请求体为空对象{}，无入参；返回店铺集合，每项含店铺名称与店铺ID，供勾选后回填 checkShop(店铺名)与 checkShopId(店铺ID)。

## 用法

```bash
mbs ars erpmonitor-find-shops-fanno-reviseprice-confirm
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/fannoRevisepriceConfirm/findShops`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `success` | boolean | 请求是否成功。true=成功(进入渲染分支) | - |
| `desc` | string | 响应提示信息(本接口成功回调未使用)(待人工确认) | - |
| `obj[]` | array | 店铺列表(赋值 pData.shopList，作为下拉数据源) | - |
| `obj[][0]` | string | 店铺名称(复选框显示文本及 value，勾选后拼入 checkShop) | - |
| `obj[][1]` | string | 店铺ID(作为复选框元素 id，勾选后拼入 checkShopId) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
