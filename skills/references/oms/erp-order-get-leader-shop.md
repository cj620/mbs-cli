# mbs oms erp-order-get-leader-shop

大酋长/组员店铺列表查询(getLeaderShop)：店铺业绩页的「店铺」下拉联动接口：根据所选平台、大酋长(组长)、组员(员工)，查询其名下可选店铺集合，用于填充 #shop 多选下拉。平台/大酋长/组员任一为空时传空数组。

## 用法

```bash
mbs oms erp-order-get-leader-shop [--platformId <array<string>>] [--employeeList <array<string>>] [--bigChiefList <array<string>>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/shopAchievements/getLeaderShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | body | array<string> | 否 | - | 平台ID列表(来源 #platform 下拉 val().split(',')；未选为[]) |
| `employeeList` | employeeList | body | array<string> | 否 | - | 组员(员工)列表(来源 #groupMember 多选，元素为员工姓名 employee_name；未选为[]) |
| `bigChiefList` | bigChiefList | body | array<string> | 否 | - | 大酋长(组长)列表(来源 #leader 多选，元素为大酋长ID；未选为[]) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(200=成功；其余接口中可见500=失败)。本调用未显式判断 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 店铺列表；为空/假值时下拉填充「-请选择店铺-」 | - |
| `obj[]` | string | 店铺名称(用作 #shop option 的 value 与展示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
