# mbs oms erp-order-manager-drop-down

经理下拉列表查询：自定义报表(客单价分析)页头部“所有经理”下拉框的数据源接口。根据人员类别、公司、平台及已选总监(leaders)联动查询其下属经理列表，返回 {id,name} 列表用于 el-select 渲染。

## 用法

```bash
mbs oms erp-order-manager-drop-down [--employeeType <string>] [--companyIds <array>] [--platformIds <array>] [--leaders <array>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/teamDropDown/managerDropDown`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 否 | - | 人员类别(员工类型)。取自 $("#orderStaus").val()，控件来源待人工确认 |
| `companyIds` | companyIds | body | array | 否 | - | 公司ID(可多选)。取自 $('#componey').val()，控件来源待人工确认 |
| `platformIds` | platformIds | body | array | 否 | - | 平台ID列表。取自 $("#reserve11").val()，为空时传[]，来源控件#reserve11(所属平台下拉) |
| `leaders` | leaders | body | array | 否 | - | 总监ID列表(已选总监)。取自 selectdata.leaders，即“所有总监”el-select(多选)的选中 item.id 集合 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(统一包裹，200=成功；前端本接口未读取，待人工确认) | - |
| `desc` | string | 响应提示信息(统一包裹；前端本接口未读取，待人工确认) | - |
| `obj[]` | array | 经理下拉列表数据(赋值给 managerlist，用于渲染“所有经理”下拉) | - |
| `obj[][0]` | string | 经理ID(作为 el-option 的 :value，并作为后续 getshopmanager/remoteMethod 的 managers 入参) | - |
| `obj[][1]` | string | 经理名称(作为 el-option 的 :label 展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
