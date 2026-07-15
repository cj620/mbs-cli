# mbs fars erp-fin-manage-data-parallel-tk-reference-provision

TikTok 凭证计提参考(账单反查表)查询：TikTok 凭证计提参考页面的列表查询：按流水号 / 店铺名称 / 所属公司及分页条件，反查并返回各店铺平台费、物流费的计提/冲销金额、差值，以及借贷方科目（分析账户、辅助核算、科目编号、币种、金额）和凭证字/凭证编号等明细，供凭证计提参考。type=1 为固定查询类型。

## 用法

```bash
mbs fars erp-fin-manage-data-parallel-tk-reference-provision --type <number> [--lid <string>] [--shopName <string>] [--companyId <number>] --pageSize <number> --page <number>
```

## API

- Service: `erpFinManageData`
- Method: `POST`
- Path: `/erpFinManageData/erpFinManageData/finance/parallelTkReferenceProvision`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `type` | type | body | number | 是 | - | URL 查询参数（固定 type=1，凭证计提参考查询类型） |
| `lid` | lid | body | string | 否 | - | 流水号（多个以空格分隔；来源：Header「流水号」输入框） |
| `shopName` | shopName | body | string | 否 | - | 店铺名称（来源：Header「店铺名称」输入框） |
| `companyId` | companyId | body | number | 否 | - | 所属公司。枚举：1=胤元；33=启元（来源：Header「所属公司」下拉） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（默认 100，可选 100/200/300/400） |
| `page` | page | body | number | 是 | - | 当前页码 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `count` | number | 满足条件的总记录数（前端用于分页 page.total） | - |
| `result[]` | array | 凭证计提参考记录列表 | - |
| `result[][0]` | number | 行记录ID（表格 row-key） | - |
| `result[][1]` | string | 店铺 | - |
| `result[][2]` | string | 平台费(计提) | - |
| `result[][3]` | string | 物流费(计提) | - |
| `result[][4]` | string | 平台费(冲销) | - |
| `result[][5]` | string | 物流费(冲销) | - |
| `result[][6]` | string | 平台费差值 | - |
| `result[][7]` | string | 物流费差值 | - |
| `result[][8]` | string | 币种 | - |
| `result[][9]` | string | 平台费凭证字 | - |
| `result[][10]` | string | 物流费凭证字 | - |
| `result[][11]` | string | 平台费标签 | - |
| `result[][12]` | number | 公司ID（前端经 getComName 转公司名展示） | - |
| `result[][13]` | string | 平台费凭证时间 | - |
| `result[][14]` | string | 平台费-借方分析账户 | - |
| `result[][15]` | string | 平台费-借方辅助核算 | - |
| `result[][16]` | string | 平台费借方科目编号 | - |
| `result[][17]` | string | 平台费-借方科目币种 | - |
| `result[][18]` | string | 平台费借方科目金额 | - |
| `result[][19]` | string | 平台费-贷方分析账户 | - |
| `result[][20]` | string | 平台费-贷方辅助核算 | - |
| `result[][21]` | string | 平台费-贷方科目编号 | - |
| `result[][22]` | string | 平台费-贷方科目币种 | - |
| `result[][23]` | string | 平台费贷方科目金额 | - |
| `result[][24]` | string | 平台费凭证编号 | - |
| `result[][25]` | string | 物流费凭证时间 | - |
| `result[][26]` | string | 物流费-借方分析账户 | - |
| `result[][27]` | string | 物流费-借方辅助核算 | - |
| `result[][28]` | string | 物流费-借方科目币种 | - |
| `result[][29]` | string | 物流费-贷方分析账户 | - |
| `result[][30]` | string | 物流费-贷方辅助核算 | - |
| `result[][31]` | string | 物流费-贷方科目编号 | - |
| `result[][32]` | string | 物流费-贷方科目币种 | - |
| `result[][33]` | string | 物流费凭证编号 | - |
| `result[][34]` | string | 物流费标签 | - |
| `result[][35]` | string | 物流费借方科目编号 | - |
| `result[][36]` | string | 物流费借方科目金额 | - |
| `result[][37]` | string | 物流费贷方科目金额 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
