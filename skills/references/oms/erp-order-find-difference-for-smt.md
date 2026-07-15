# mbs oms erp-order-find-difference-for-smt

SMT联盟费差异明细查询：日销报表「站内推广费」明细钻取页：当平台为 SpeedMaster/SMT(platformIds=10/138) 且员工类型≠4 时跳转本页，按单日(oneDay)分页查询联盟费差异明细，返回交易单号、店铺、币种、联盟费、汇率、店长、费用时间等列。

## 用法

```bash
mbs oms erp-order-find-difference-for-smt [--oneDay <string>] --pageSize <number> --page <number> [--platformIds <string>] [--employeeType <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/findDifferenceForSmt`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `oneDay` | oneDay | body | string | 否 | - | 费用日期(单日)，来源URL查询参数 oneDay |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，页面固定为50 |
| `page` | page | body | number | 是 | - | 当前页码，从1开始；翻页时由分页 onCurrentChange(index) 传入 |
| `platformIds` | platformIds | body | string | 否 | - | 平台ID(站内推广费平台标识)，来源 localStorage params；取值 10(SpeedMaster)/138(SMT) 时进入本页 |
| `employeeType` | employeeType | body | string | 否 | - | 员工类型，来源 localStorage params；上游判定 !=='4' 才进入本页 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码。500=失败(前端弹warning并中止)，非500视为成功 | - |
| `desc` | string | 提示信息(失败时展示) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的总条数(用于分页 pagination.total) | - |
| `obj.rows[]` | array | 联盟费差异明细行列表(为空时取空数组) | - |
| `obj.rows[][0]` | string | 交易单号(表格 rowKey/行主键) | - |
| `obj.rows[][1]` | string | 店铺名称 | - |
| `obj.rows[][2]` | string | 币种 | - |
| `obj.rows[][3]` | string | 联盟费(原始币种金额) | - |
| `obj.rows[][4]` | string | 汇率 | - |
| `obj.rows[][5]` | string | 店长 | - |
| `obj.rows[][6]` | string | 费用时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
