<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-team-number-drop-down

团队人员(下拉)查询：按员工类型/公司/平台/组长/主管等条件查询团队人员名单，返回人员对象数组。前端在刊登检测(type=checkPublish)模式下，用其 name 字段填充创建人下拉框(createdBy)的可选项。

## 用法

```bash
mbs oms erp-order-team-number-drop-down [--employeeType <string>] [--companyId <array>] [--platformIds <array>] [--leaders <array>] [--managers <array>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/teamDropDown/teamNumberDropDown`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 否 | - | 员工类型(前端固定传空字符串,来源:代码常量,无控件) |
| `companyId` | companyId | body | array | 否 | - | 公司ID列表(前端固定传空数组,来源:代码常量,无控件) |
| `platformIds` | platformIds | body | array | 否 | - | 平台ID列表(前端固定传空数组,来源:代码常量,无控件) |
| `leaders` | leaders | body | array | 否 | - | 组长列表(前端固定传空数组,来源:代码常量,无控件) |
| `managers` | managers | body | array | 否 | - | 主管列表(前端固定传空数组,来源:代码常量,无控件) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(项目统一包装,本回调未显式校验) | - |
| `desc` | string | 响应提示信息(项目统一包装) | - |
| `obj[]` | array | 团队人员对象数组(前端遍历取 name 作为创建人下拉项) | - |
| `obj[]` | string | 人员姓名(前端映射为下拉项 CREATER,作为 option 的 value 与显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
