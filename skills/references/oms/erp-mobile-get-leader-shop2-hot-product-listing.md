# mbs oms erp-mobile-get-leader-shop2-hot-product-listing

组员店铺列表查询(getLeaderShop2)：订单查询(爆款)页"店铺"下拉数据源：根据所选大酋长(经理)、组员、平台及店铺名模糊关键字，查询并返回对应的可选店铺列表(店铺ID+店铺名)，渲染为店铺多选复选框。平台/组员选择变化或店铺名输入时自动触发。

## 用法

```bash
mbs oms erp-mobile-get-leader-shop2-hot-product-listing [--bigChiefEmployeeId <string>] [--teamNumberEmployeeNames <string>] [--platformId <string>] [--shopName <string>]
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/hotProductListing/getLeaderShop2`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `bigChiefEmployeeId` | bigChiefEmployeeId | body | string | 否 | - | 大酋长(经理)员工ID。来源：getManager() 读取 name=chiefBy 选中项 value 后 .toString()(单选) |
| `teamNumberEmployeeNames` | teamNumberEmployeeNames | body | string | 否 | - | 组员员工名称集合(逗号拼接)。来源：getShopManager() 读取 name=MemberByLeader 选中项 value 数组后 .join(',')(多选) |
| `platformId` | platformId | body | string | 否 | - | 平台ID。来源：getPlatform() 读取 name=Platform 选中项 value 后 .toString()(单选) |
| `shopName` | shopName | body | string | 否 | - | 店铺名称(模糊搜索关键字)。来源：输入框 #shopName 的值，oninput 触发查询 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应包装,(待人工确认)具体码值) | - |
| `desc` | string | 响应提示信息(统一响应包装) | - |
| `obj[]` | array | 店铺列表(前端遍历渲染店铺复选框;为空数组/空时提示店铺为空) | - |
| `obj[][0]` | string | 店铺ID(用作店铺复选框 value 提交) | - |
| `obj[][1]` | string | 店铺名称(店铺复选框展示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
