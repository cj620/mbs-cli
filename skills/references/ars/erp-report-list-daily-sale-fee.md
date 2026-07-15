# mbs ars erp-report-list-daily-sale-fee

订阅费导入记录列表查询：查询「订阅费/开号店铺成本/店铺商标成本」导入文件的解析记录列表：按操作人、操作时间区间、解析状态分页查询，返回文件名、费用类型、操作人、创建/更新时间、解析状态及导入结果等字段。

## 用法

```bash
mbs ars erp-report-list-daily-sale-fee --fileType <number> [--oper <string>] [--startTime <string>] [--endTime <string>] [--status <number>] --pageNo <number> --pageSize <number>
```

## API

- Service: `erpReport`
- Method: `POST`
- Path: `/erpReport/erpReport/dailySaleFee/list`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `fileType` | fileType | body | number | 是 | - | 文件类型，固定传1(订阅费/店铺成本类导入) |
| `oper` | oper | body | string | 否 | - | 操作人，来源输入框 postdata.oper，模糊查询 |
| `startTime` | startTime | body | string | 否 | - | 操作开始时间，来源日期选择器 operTimeStart，格式 YYYY-MM-DD |
| `endTime` | endTime | body | string | 否 | - | 操作结束时间，来源日期选择器 operTimeEnd，格式 YYYY-MM-DD |
| `status` | status | body | number | 否 | - | 解析状态。0=待解析;1=解析中;3=解析成功;2=解析失败 |
| `pageNo` | pageNo | body | number | 是 | - | 当前页码，来源 search(index) 入参，初始为1，无值传空串 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，固定50 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.total` | number | 满足条件的记录总数(赋给 el-pagination total) | - |
| `obj.rows[]` | array | 导入记录列表(赋给 el-table data) | - |
| `obj.rows[][0]` | string | 文件名 | - |
| `obj.rows[][1]` | string | 文件路径/下载地址(status==2解析失败时作为<a href>链接) | - |
| `obj.rows[][2]` | string | 费用类型(ebay订阅费/开号店铺成本/店铺商标成本) | - |
| `obj.rows[][3]` | string | 操作人 | - |
| `obj.rows[][4]` | string | 创建时间 | - |
| `obj.rows[][5]` | string | 更新时间 | - |
| `obj.rows[][6]` | number | 解析状态。0=待解析;1=解析中;2=解析失败;3=解析成功 | - |
| `obj.rows[][7]` | string | 导入结果/解析返回信息(表格「导入结果」列展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
