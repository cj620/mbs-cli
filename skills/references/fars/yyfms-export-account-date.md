<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars yyfms-export-account-date

Payoneer账户费用明细导出：根据币种、起止日期、邮箱、描述等筛选条件及表格勾选的记录ID集合，导出账户费用明细文件(Excel)。前端以XMLHttpRequest POST JSON、responseType=blob接收二进制流，并从响应头content-disposition解析文件名后触发浏览器下载。

## 用法

```bash
mbs fars yyfms-export-account-date [--currency <string>] [--startDate <string>] [--endDate <string>] [--email <string>] [--description <string>] [--ids <array>]
```

## API

- Service: `yyfms`
- Method: `POST`
- Path: `/yyfms/fms/accountcostexport/exportAccountDate`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currency` | currency | body | string | 否 | - | 币种(来源:币种输入框 postdata.currency) |
| `startDate` | startDate | body | string | 否 | - | 开始日期,格式YYYY-MM-DD(来源:日期选择器,默认当前-30天) |
| `endDate` | endDate | body | string | 否 | - | 结束日期,格式YYYY-MM-DD(来源:日期选择器,默认当天) |
| `email` | email | body | string | 否 | - | 邮箱(来源:邮箱输入框 postdata.email) |
| `description` | description | body | string | 否 | - | 描述(来源:描述输入框 postdata.description) |
| `ids` | ids | body | array | 否 | - | 选中导出的记录ID列表(元素为表格行item.id,来源表格多选;空数组表示按筛选条件全量导出) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `(response body)` | unknown | 导出的账户费用明细文件二进制流(Excel),前端以Blob接收并触发下载 | - |
| `content-disposition` | string | 响应头,携带文件名;前端按 split(';')[1].split('=')[1] 取filename并decodeURI解码作为下载文件名 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
