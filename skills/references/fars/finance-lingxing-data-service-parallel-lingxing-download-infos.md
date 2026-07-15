<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars finance-lingxing-data-service-parallel-lingxing-download-infos

领星下载历史分页查询：下载历史页分页查询领星导出任务记录：按文件名、任务状态、创建时间区间筛选并分页，返回任务文件名、下载地址、状态、创建时间、表格总数、文件大小等列表数据。

## 用法

```bash
mbs fars finance-lingxing-data-service-parallel-lingxing-download-infos --page <number> [--total <number>] --pageSize <number> [--status <string>] [--taskName <string>] [--shortCreateTime <string>] [--longCreateTime <string>]
```

## API

- Service: `finance-lingxing-data-service`
- Method: `POST`
- Path: `/gateway/finance-lingxing-data-service/LingxingPaging/parallelLingxingDownloadInfos`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码(pageInfo.page,默认1,来源el-pagination) |
| `total` | total | body | number | 否 | - | 总条数(pageInfo.total,前端分页状态随pageInfo透传,初始0,实际由响应count回填) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(pageInfo.pageSize,默认50,可选50/100/200/300,来源el-pagination) |
| `status` | status | body | string | 否 | - | 任务状态(state.status,默认null,来源el-select)。FAILED=任务失败;COMPLETED=任务完成;IN_PROGRESS=任务进行中 |
| `taskName` | taskName | body | string | 否 | - | 文件名(state.taskName,模糊查询,默认空串,来源el-input) |
| `shortCreateTime` | shortCreateTime | body | string | 否 | - | 创建时间-起始(state.shortCreateTime,来源datePicker start,默认空串) |
| `longCreateTime` | longCreateTime | body | string | 否 | - | 创建时间-结束(state.longCreateTime,来源datePicker end,默认空串) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `count` | number | 满足条件的任务总数(赋给pageInfo.total) | - |
| `result[]` | array | 下载任务列表(赋给dataList) | - |
| `result[][0]` | string | 文件名(列"文件名",el-link文本) | - |
| `result[][1]` | string | 文件下载地址(el-link :href,带download直接下载) | - |
| `result[][2]` | string | 任务状态(列"状态",经tag转标签)。FAILED=任务失败;COMPLETED=任务完成;IN_PROGRESS=任务进行中 | - |
| `result[][3]` | string | 创建时间(列"创建时间",直接展示) | - |
| `result[][4]` | number | 表格总数(列"表格总数",直接展示) | - |
| `result[][5]` | number | 文件大小(列"文件大小",单位M,空值展示为0 M) | - |
| `result[][6]` | string | 任务ID(用于行内下载操作DownloadData(row.id),该操作列当前已注释;是否始终返回(待人工确认)) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
