# mbs fars erp-fin-manage-data-query-download-infos-fetcher

下载任务记录查询：「下载任务记录」页面分页查询下载任务列表：按所属公司、文件名、创建时间区间、任务状态、平台等条件筛选，返回任务列表（含文件名、创建人、状态、表格大小/总数、进度、sheet 信息、起止/刷新时间、错误摘要、所属公司等）及总记录数。

## 用法

```bash
mbs fars erp-fin-manage-data-query-download-infos-fetcher --type <string> [--taskName <string>] [--status <string>] [--shortCreateTime <string>] [--longCreateTime <string>] [--companyId <number>] [--platform <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpFinManageData`
- Method: `POST`
- Path: `/erpFinManageData/erpFinManageData/finance/queryDownloadInfosFetcher`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `type` | type | body | string | 是 | - | 查询类型（URL 查询参数，固定 1，硬编码于接口地址） |
| `taskName` | taskName | body | string | 否 | - | 文件名（筛选「文件名」输入框，来源控件 Input） |
| `status` | status | body | string | 否 | - | 任务状态。枚举：FAILED=任务失败；COMPLETED=任务完成；IN_PROGRESS=任务进行中（来源控件 Select） |
| `shortCreateTime` | shortCreateTime | body | string | 否 | - | 创建时间-起始（「创建时间」日期区间起，来源控件 DateRangePicker；默认空字符串） |
| `longCreateTime` | longCreateTime | body | string | 否 | - | 创建时间-结束（「创建时间」日期区间止，来源控件 DateRangePicker；默认空字符串） |
| `companyId` | companyId | body | number | 否 | - | 所属公司。枚举：1=胤元；33=启元（来源控件 Select） |
| `platform` | platform | body | string | 否 | - | 平台（来源控件 Select，选项 OptionUtils.toOptions(Platform.list)；默认值取自 usePlatformQuery()） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（默认 100，可选 100/200/300/400） |
| `page` | page | body | number | 是 | - | 当前页码（从 1 开始） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `result[]` | array | 下载任务记录列表 | - |
| `result[][0]` | string | 任务ID（下载操作以 BigInt(row.id) 传入 DownlaodData） | - |
| `result[][1]` | string | 文件名（表格首列，作为下载链接文本） | - |
| `result[][2]` | string | 文件下载地址 URL（文件名链接的 href） | - |
| `result[][3]` | string | 创建人 | - |
| `result[][4]` | string | 创建时间 | - |
| `result[][5]` | string | 任务状态。枚举：COMPLETED=任务完成；IN_PROGRESS=任务进行中；FAILED=任务失败（仅 COMPLETED 显示下载入口） | - |
| `result[][6]` | number | 表格大小（前端拼接单位 M 展示） | - |
| `result[][7]` | number | 表格总数 | - |
| `result[][8]` | number | 预估总行数（用于进度计算；为 0 时进度列留空） | - |
| `result[][9]` | number | 已写入行数（进度=writtenRows/totalRows×100，全部写完显示已完成，为 0 显示未开始） | - |
| `result[][10]` | number | 当前 sheet 编号 | - |
| `result[][11]` | number | 预估 sheet 数 | - |
| `result[][12]` | number | 任务开始时间（毫秒时间戳，前端 new Date(...).toLocaleString() 展示） | - |
| `result[][13]` | number | 进度最近刷新时间（毫秒时间戳，前端 new Date(...).toLocaleString() 展示） | - |
| `result[][14]` | string | 最近状态/错误摘要 | - |
| `result[][15]` | number | 所属公司。枚举：1=胤元；33=启元 | - |
| `count` | number | 满足条件的任务总记录数（分页用） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
