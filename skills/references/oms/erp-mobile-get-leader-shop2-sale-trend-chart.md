<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-mobile-get-leader-shop2-sale-trend-chart

组长店铺列表查询(getLeaderShop2)：移动端销售趋势"搜索"页：在用户勾选平台或组员后触发，按所选组员员工姓名与平台ID查询该范围下可选的店铺列表，渲染为店铺勾选框。

## 用法

```bash
mbs oms erp-mobile-get-leader-shop2-sale-trend-chart [--teamNumberEmployeeNames <string>] [--platformId <string>]
```

## API

- Service: `erpMobile`
- Method: `GET`
- Path: `/erpMobile/erpMobile/saleTrendChart/getLeaderShop2`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `teamNumberEmployeeNames` | teamNumberEmployeeNames | query | string | 否 | - | 组员员工姓名。来源：组员勾选框 input.MemberByLeader 的 value(即返回的 employee_name)。未勾选时传空字符串 |
| `platformId` | platformId | query | string | 否 | - | 平台ID。来源：平台勾选框 input.Platform 的 value(即 PLATFORMID)。未勾选时传空字符串 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(项目统一封装,本回调未引用,取值/含义待人工确认) | - |
| `desc` | string | 响应提示信息(项目统一封装,本回调未引用,待人工确认) | - |
| `obj[]` | array | 店铺列表(success 回调 data.obj,模板 each obj 遍历渲染店铺勾选项) | - |
| `obj[][0]` | string | 店铺ID。渲染为店铺勾选框 input.getLeaderShop 的 value,确认后写入 sessionStorage shopId | - |
| `obj[][1]` | string | 店铺名称。渲染为勾选框 label 展示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
