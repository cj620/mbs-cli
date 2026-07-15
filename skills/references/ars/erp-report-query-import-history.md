<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erp-report-query-import-history

支付宝采购账单-导入历史查询(分摊价导入历史)：查询「支付宝采购账单/分摊价」文件的导入历史记录：按操作人、操作时间区间、解析状态分页过滤(fileType 固定=2),返回导入文件名、操作人、操作时间、解析状态、总/成功/失败行数、导入结果描述及记录ID(用于下载分摊结果)。

## 用法

```bash
mbs ars erp-report-query-import-history --fileType <number> [--oper <string>] [--operTimeStart <string>] [--operTimeEnd <string>] [--status <number>] [--currentPage <number>] --pageSize <number>
```

## API

- Service: `erpReport`
- Method: `POST`
- Path: `/erpReport/erpReport/zfbPurchaseBill/queryImportHistory`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `fileType` | fileType | body | number | 是 | - | 文件类型,固定传 2(标识支付宝采购账单/分摊价导入历史) |
| `oper` | oper | body | string | 否 | - | 操作人,来源输入框 postdata.oper,按操作人过滤 |
| `operTimeStart` | operTimeStart | body | string | 否 | - | 操作时间-开始,来源日期选择器,格式 YYYY-MM-DD |
| `operTimeEnd` | operTimeEnd | body | string | 否 | - | 操作时间-结束,来源日期选择器,格式 YYYY-MM-DD |
| `status` | status | body | number | 否 | - | 解析状态,来源下拉。枚举：0=待解析;1=解析成功;2=解析失败(未选为空字符串) |
| `currentPage` | currentPage | body | number | 否 | - | 当前页码,来源 search(index) 入参(为空时传空字符串),分页从1开始 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数,固定传 50 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(前端 res.data.code==200 才渲染) | - |
| `content` | number | 满足条件的总条数,前端赋给 total 供分页 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 导入历史列表(前端赋给 datalist) | - |
| `obj[][0]` | string | 导入文件名(列「文件名」,fileUrl 为空时纯文本展示) | - |
| `obj[][1]` | string | 导入文件下载URL(非空时文件名渲染为超链接) | - |
| `obj[][2]` | string | 操作人(列「操作人」) | - |
| `obj[][3]` | string | 操作时间(列「操作时间」) | - |
| `obj[][4]` | number | 解析状态。枚举：0=待解析;1=解析成功;2=解析失败(前端转中文展示) | - |
| `obj[][5]` | number | 总行数(列「总行数」) | - |
| `obj[][6]` | number | 成功行数(列「成功行数」) | - |
| `obj[][7]` | number | 失败行数(列「失败行数」) | - |
| `obj[][8]` | string | 导入结果描述(列「导入结果」,超高滚动展示) | - |
| `obj[][9]` | string | 记录ID,用于「下载」分摊结果(拼接 /yyscm/scm/ureport/excel?...&fileid=${row.sid}) | - |
| `success` | boolean | 业务是否成功(ApiBase 标准字段,(待人工确认)本页未直接使用) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
