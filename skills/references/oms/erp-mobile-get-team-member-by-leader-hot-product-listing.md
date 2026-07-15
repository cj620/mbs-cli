# mbs oms erp-mobile-get-team-member-by-leader-hot-product-listing

根据大酋长(经理)查询组员列表：订单移动端搜索页中，选中某个大酋长(经理)后，按该经理的员工ID查询其下属团队组员列表，用于渲染「组员」多选框；选中组员后会进一步触发店铺列表查询(getLeaderShop2)。

## 用法

```bash
mbs oms erp-mobile-get-team-member-by-leader-hot-product-listing [--bigChiefEmployeeId <string>]
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/hotProductListing/getTeamMemberByLeader`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `bigChiefEmployeeId` | bigChiefEmployeeId | body | string | 否 | - | 大酋长(经理)员工ID。取自 getManager()——读取 name="chiefBy" 选中单选项的 value(经理 employeeId)；未选中时为空。来源控件：#chiefByLogin 经理单选框 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应包装字段，本接口前端未显式校验)(待人工确认) | - |
| `desc` | string | 响应提示信息(统一响应包装字段)(待人工确认) | - |
| `obj[]` | array | 组员列表数组(模板 {{each obj v i}} 直接遍历) | - |
| `obj[]` | string | 组员姓名。模板中作为 <label> 展示文本，且作为多选框 value(name="MemberByLeader")，被 getShopManager() 收集后用于查询店铺(getLeaderShop2 的 teamNumberEmployeeNames) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
