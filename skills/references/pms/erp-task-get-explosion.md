<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms erp-task-get-explosion

销量下降(爆款监控)列表查询：首页"开发必做"面板中"销量下降"页签的分页查询：按复核/处理状态(checkStatus)分页拉取销量持续下降的 SPU 任务列表，返回 SPU 编号、产品名、日销量、库存、毛利率、开发员、任务推送/截止日期、处理备注等字段，用于渲染 #salesDownTemplate 表格。

## 用法

```bash
mbs pms erp-task-get-explosion [--checkStatus <string>] --page <number> --pageSize <number>
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/developMustDo/getExplosion`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `checkStatus` | checkStatus | body | string | 否 | - | 复核/处理状态，来源控件 #checkStatus。1=待处理,2=已处理；前端在 success 回调中写回每行 checkStatus |
| `page` | page | body | number | 是 | - | 当前页码，首次固定为 1，翻页取 api.getCurrent() |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，固定传 10 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准返回封装，本接口 success 回调未直接校验) (待人工确认) | - |
| `desc` | string | 响应提示信息(标准返回封装，本接口未直接使用) (待人工确认) | - |
| `obj` | object | 业务数据对象(回调 if (data.obj) 判空) | - |
| `obj.count` | number | 满足条件的任务总数(渲染到 #salesDowntotal/#salesDownspan) | - |
| `obj.countPage` | number | 总页数(传入 salesDownPaging 作为分页 pageCount) | - |
| `obj.result[]` | array | 销量下降任务列表 | - |
| `obj.result[][0]` | string | SPU 编号(前端作为 /product/SPUdetails.html?SPU= 链接参数并展示) | - |
| `obj.result[][1]` | string | 产品名称(列表标题，title 悬浮) | - |
| `obj.result[][2]` | number | 日销量(展示"销量连续跌到 X 单/日") | - |
| `obj.result[][3]` | number | 库存数量 | - |
| `obj.result[][4]` | number | 毛利率(直接展示原值) | - |
| `obj.result[][5]` | string | 开发员 | - |
| `obj.result[][6]` | string | 创建时间(与开发员同格展示) | - |
| `obj.result[][7]` | string | 任务推送日期 | - |
| `obj.result[][8]` | string | 截止完成日期 | - |
| `obj.result[][9]` | string | 标记/处理备注 | - |
| `obj.result[][10]` | string | 处理人(有值时展示于备注后) | - |
| `obj.result[][11]` | string | 处理时间(与处理人一起展示) | - |
| `obj.result[][12]` | number | 序号ID(点击"标记已处理" explosionModal(sequenceid) 时传入) | - |
| `obj.result[][13]` | string | 复核状态(前端在 success 回调中据请求 checkStatus 写回：1/2；模板据此决定是否展示"标记已处理"按钮) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
