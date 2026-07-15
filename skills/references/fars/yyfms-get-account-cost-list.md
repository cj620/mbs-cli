<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars yyfms-get-account-cost-list

账户费用(对账)列表查询：Payoneer 账户费用对账列表分页查询：按币种、起止日期、邮箱、描述等条件查询账户收支流水（账户类型、金额、收入/支出、人民币折算、余额、来源/目标、日期等），返回流水列表及总记录数，供页面表格展示与分页。

## 用法

```bash
mbs fars yyfms-get-account-cost-list [--currency <string>] [--startDate <string>] [--endDate <string>] [--email <string>] [--description <string>] --page <number> --size <number>
```

## API

- Service: `yyfms`
- Method: `POST`
- Path: `/yyfms/fms/accountcostexport/getAccountCostList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currency` | currency | body | string | 否 | - | 币种(来源控件：el-input postdata.currency,占位"请输入币种") |
| `startDate` | startDate | body | string | 否 | - | 开始日期(来源控件：el-date-picker,格式 YYYY-MM-DD;默认今天前30天) |
| `endDate` | endDate | body | string | 否 | - | 结束日期(来源控件：el-date-picker,格式 YYYY-MM-DD;默认今天) |
| `email` | email | body | string | 否 | - | 邮箱(来源控件：el-input postdata.email,占位"请输入邮箱") |
| `description` | description | body | string | 否 | - | 描述(来源控件：el-input postdata.description,占位"请输入描述") |
| `page` | page | body | number | 是 | - | 当前页码(getdata(index),搜索时为1,分页时为当前页) |
| `size` | size | body | number | 是 | - | 每页条数(前端固定为200) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(框架统一字段) | - |
| `content` | string | 总记录数(前端赋值 postdata.total,分页 :total 用 Number() 转换) | - |
| `desc` | string | 响应提示信息(框架统一字段) | - |
| `success` | boolean | 是否成功(框架统一字段) | - |
| `obj[]` | array | 账户费用流水列表 | - |
| `obj[][0]` | string | 记录ID(勾选导出时收集 item.id,前端表格未直接展示列) | - |
| `obj[][1]` | string | 账户类型 | - |
| `obj[][2]` | string | 币种 | - |
| `obj[][3]` | string | 金额(表头"金额",prop=come) | - |
| `obj[][4]` | string | 支出 | - |
| `obj[][5]` | string | 支出人民币金额 | - |
| `obj[][6]` | string | 收入 | - |
| `obj[][7]` | string | 收入人民币金额 | - |
| `obj[][8]` | string | 描述 | - |
| `obj[][9]` | string | 余额(运行余额) | - |
| `obj[][10]` | string | 余额币种 | - |
| `obj[][11]` | string | 来源 | - |
| `obj[][12]` | string | 目标 | - |
| `obj[][13]` | string | 日期(前端取前10位 row.date.substring(0,10) 展示) | - |
| `obj[][14]` | string | 邮箱 | - |
| `obj[][15]` | string | 详情 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
