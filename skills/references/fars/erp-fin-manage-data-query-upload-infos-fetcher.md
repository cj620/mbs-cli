# mbs fars erp-fin-manage-data-query-upload-infos-fetcher

上传任务记录列表查询：财务「上传任务记录」分页查询：按所属公司/文件名/创建时间区间/任务状态/平台等条件筛选导入任务，返回任务记录列表（文件名、创建人、成功/失败总数、状态、文件大小、表格总数等）及总记录数，供前端表格分页展示。

## 用法

```bash
mbs fars erp-fin-manage-data-query-upload-infos-fetcher --type <string> [--taskName <string>] [--status <string>] [--shortCreateTime <string>] [--longCreateTime <string>] [--companyId <number>] [--platform <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpFinManageData`
- Method: `POST`
- Path: `/erpFinManageData/erpFinManageData/finance/queryUploadInfosFetcher`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `type` | type | body | string | 是 | - | 【URL查询参数】任务类型，固定1（上传任务记录） |
| `taskName` | taskName | body | string | 否 | - | 文件名（来源：文件名输入框Input，模糊筛选） |
| `status` | status | body | string | 否 | - | 任务状态。枚举：FAILED=任务失败；COMPLETED=任务完成；IN_PROGRESS=任务进行中（来源：状态下拉Select） |
| `shortCreateTime` | shortCreateTime | body | string | 否 | - | 创建时间-起始（来源：创建时间DateRangePicker起值，默认''） |
| `longCreateTime` | longCreateTime | body | string | 否 | - | 创建时间-结束（来源：创建时间DateRangePicker止值，默认''） |
| `companyId` | companyId | body | number | 否 | - | 所属公司。枚举：1=胤元；33=启元（来源：所属公司下拉Select） |
| `platform` | platform | body | string | 否 | - | 平台（来源：平台下拉Select，选项OptionUtils.toOptions(Platform.list)；默认取路由query platformId） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，默认100，可选[100,200,300,400]（来源：分页组件） |
| `page` | page | body | number | 是 | - | 当前页码（来源：分页组件，初始1） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `result[]` | array | 任务记录列表 | - |
| `result[][0]` | number | 记录主键（表格row-key="id"） | - |
| `result[][1]` | string | 文件名（「文件名」列；有failPath时渲染为下载链接） | - |
| `result[][2]` | string | 失败文件下载地址（存在时文件名渲染为可下载Link的href） | - |
| `result[][3]` | string | 创建人（「创建人」列） | - |
| `result[][4]` | string | 创建时间（「创建时间」列，字段名源码即creatTime） | - |
| `result[][5]` | number | 成功总数（「成功总数」列） | - |
| `result[][6]` | number | 失败总数（「失败总数」列） | - |
| `result[][7]` | string | 任务状态。枚举：COMPLETED=任务完成；IN_PROGRESS=任务进行中；FAILED=任务失败（前端转Tag展示） | - |
| `result[][8]` | string | 文件大小（「文件大小」列cell渲染row.fileSize；列colKey名为tableSize但实际读取fileSize） | - |
| `result[][9]` | number | 表格总数（「表格总数」列） | - |
| `count` | number | 满足条件的总记录数（前端赋值page.total用于分页） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
