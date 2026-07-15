<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-shop-manager-drop-down

店长下拉列表查询：按总监/经理/主管、公司、平台等条件查询店长(店铺销售负责人 sale_leader)下拉选项列表，后端将总监/经理/主管转换为名下店长并按公司/平台/登录人组员过滤后去重返回，供前端店长下拉控件使用。

## 用法

```bash
mbs oms erp-order-shop-manager-drop-down [--employeeType <string>] [--companyIds <array>] [--platformIds <array>] [--leaders <array>] [--managers <array>] [--littleLeaders <array>] [--companyId <array>]
```

## API

- Service: `erp-order`
- Method: `POST`
- Path: `/erpOrder/erpOrder/teamDropDown/shopManagerDropDown`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 否 | - | 员工类型，apis.js 默认"1"；枚举具体含义待人工确认。本接口后端未直接用于过滤，仍随请求体提交 |
| `companyIds` | companyIds | body | array | 否 | - | 公司ID列表，按公司过滤店长(company_id)，默认[] |
| `platformIds` | platformIds | body | array | 否 | - | 平台ID列表(cms_platform.mabangid)，按平台过滤店长，默认[]，来源平台多选控件 |
| `leaders` | leaders | body | array | 否 | - | 总监(员工ID)列表，后端转换为名下店长，默认[]，来源总监下拉 |
| `managers` | managers | body | array | 否 | - | 经理(员工ID)列表，后端转换为名下店长，默认[]，来源经理下拉 |
| `littleLeaders` | littleLeaders | body | array | 否 | - | 主管(员工ID)列表，后端 leaderToShopManager 转换为名下店长(report/mabang 等页面传入)，来源主管下拉 |
| `companyId` | companyId | body | array | 否 | - | 公司ID(兼容字段)，后端非空时并入 companyIds，来源公司选择控件 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `success` | boolean | 业务是否成功(CommonResponse 标准字段) | - |
| `code` | number | 响应状态码,200=成功,500=失败/权限不足 | - |
| `desc` | string | 响应提示信息(失败时如「权限不足」) | - |
| `obj[]` | array | 店长(员工)下拉列表 | - |
| `obj[][0]` | string | 店长(店铺销售负责人)员工ID,来源 cms_shop.sale_leader;前端作为 option value | - |
| `obj[][1]` | string | 店长姓名,来源 hr_employee.employee_name;前端 option 显示文本 | - |
| `obj[][2]` | string | 公司编码,来源 hr_company.company_code | - |
| `obj[][3]` | number | 集团公司ID,来源 hr_employee.group_company_id(后端按登录人集团公司过滤时使用) | - |
| `obj[][4]` | string | 集团公司名称,来源 hr_employee.group_company_name | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
