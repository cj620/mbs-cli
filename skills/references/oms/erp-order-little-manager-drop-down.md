# mbs oms erp-order-little-manager-drop-down

主管(小经理)下拉列表查询：人销售报表页面顶部筛选区的「主管」下拉框数据源。根据所选人员类别(订单/发货时间业绩)、公司、平台、总监、经理等上级条件，联动查询其下属主管(小经理)列表，返回 {id,name} 数组供 el-select 渲染主管选项。

## 用法

```bash
mbs oms erp-order-little-manager-drop-down [--employeeType <string>] [--companyIds <array>] [--platformIds <array>] [--leaders <array>] [--managers <array>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/teamDropDown/littleManagerDropDown`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 否 | - | 人员类别(业绩类型)，来源控件 #orderStaus。1=订单时间业绩;3=发货时间业绩 |
| `companyIds` | companyIds | body | array | 否 | - | 公司ID列表。公司下拉单值包装为数组(selectdata.company ? [company] : [])，元素为 companyid |
| `platformIds` | platformIds | body | array | 否 | - | 平台ID列表。来源 #reserve11，无值时传 []，元素为平台 PLATFORMID |
| `leaders` | leaders | body | array | 否 | - | 总监ID列表(上级总监筛选)，来源总监下拉 v-model=leaders，元素为 leaderslist.id |
| `managers` | managers | body | array | 否 | - | 经理ID列表(上级经理筛选)，来源经理下拉 v-model=manager，元素为 managerlist.id |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一返回体字段,本接口前端未直接读取) | - |
| `desc` | string | 响应提示信息(统一返回体字段,本接口前端未直接读取) | - |
| `obj[]` | array | 主管(小经理)下拉选项列表,赋值给 selectOption.littleLeaderslist | - |
| `obj[][0]` | string | 主管(小经理)员工ID,用作 el-option 的 :value | - |
| `obj[][1]` | string | 主管(小经理)姓名,用作 el-option 的 :label 显示 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
