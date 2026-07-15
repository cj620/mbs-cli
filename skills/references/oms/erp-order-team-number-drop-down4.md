<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-team-number-drop-down4

根据人员获取下面组员的店铺(店铺下拉)：团队下拉组件数据源：根据店长(shopManagers)与平台(platform/平台名称)筛选在营店铺，返回店铺ID与店铺名称列表，供前端“店铺”下拉选择器渲染 label/value。

## 用法

```bash
mbs oms erp-order-team-number-drop-down4 [--shopManagers <array>] [--platform <array>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/teamDropDown/teamNumberDropDown4`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopManagers` | shopManagers | body | array | 否 | - | 店长列表(店长姓名/工号)。前端示例固定传 ['']；后端对应 DB_SHOP.shopmanager IN (...)，总经办账号会改用岗位99人员 |
| `platform` | platform | body | array | 否 | - | 平台名称列表，来源平台多选控件 form.platform 的 PLATFORMNAME。注：后端过滤字段为 platformIds(对应 DB_SHOP.RESERVE11)，前端示例传平台名称(待人工确认) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功,500=失败 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 店铺列表(店铺下拉数据源) | - |
| `obj[][0]` | string | 店铺ID，前端作为下拉项 value | - |
| `obj[][1]` | string | 店铺名称，前端作为下拉项 label | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
