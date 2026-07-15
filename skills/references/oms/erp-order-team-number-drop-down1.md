# mbs oms erp-order-team-number-drop-down1

团队人员下拉(按集团公司)查询：按集团公司ID(groupCompanyId)、员工类型、公司/平台/组长等条件查询团队成员(员工)下拉列表。前端在创建海外仓SKU弹窗 onMounted 时分别以 groupCompanyId=1 与 groupCompanyId=33 各调一次，把返回数组分别缓存到 companyUserMap[1] / companyUserMap[33]，用于开发员(developer1/developer2)下拉选择，选项展示与取值均为成员姓名 name。

## 用法

```bash
mbs oms erp-order-team-number-drop-down1 --employeeType <string> --companyIds <array> [--platformIds <array>] [--leaders <array>] --groupCompanyId <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/teamDropDown/teamNumberDropDown1`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 是 | - | 员工类型，前端固定传 "2"（枚举具体含义待人工确认） |
| `companyIds` | companyIds | body | array | 是 | - | 公司ID列表，前端固定传 [1] |
| `platformIds` | platformIds | body | array | 否 | - | 平台ID列表，前端固定传空数组 []（不限平台） |
| `leaders` | leaders | body | array | 否 | - | 组长/负责人列表，前端固定传空数组 []（不限组长） |
| `groupCompanyId` | groupCompanyId | body | number | 是 | - | 集团公司ID。前端两次调用分别传 1 与 33（具体集团名称待人工确认） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（统一包裹字段，待人工确认是否返回） | - |
| `desc` | string | 响应提示信息（统一包裹字段，待人工确认是否返回） | - |
| `obj[]` | array | 团队成员(员工)列表；前端直接取 data.obj 作为下拉数据源 | - |
| `obj[]` | string | 成员(员工)姓名；下拉选项的展示文本与选中值(:label/:value 均为 name)。该数组元素其余字段前端未使用，待人工确认 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
