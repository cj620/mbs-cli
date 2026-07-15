<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms erp-task-get-delay-task

拍照/作图延迟任务列表查询：首页看板「拍照(延迟)」标签页分页查询：固定按 checkStatus=2 拉取拍照延迟(type=1)与作图延迟(type=2)两类任务，返回任务列表(含SPU/采购单/物流跟踪/完成状态/库存/创建人/任务起止时间等)及总数、总页数，前端用 art-template delayTemplate 渲染表格。

## 用法

```bash
mbs pms erp-task-get-delay-task --checkStatus <number> --page <number> --pageSize <number>
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/developMustDo/getDelayTask`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `checkStatus` | checkStatus | body | number | 是 | - | 审核/查询状态，前端固定传 2（拍照延迟场景） |
| `page` | page | body | number | 是 | - | 当前页码，首次查询=1，翻页取 api.getCurrent() |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，前端固定传 10 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的任务总数(写入 #delayspan/#delaytotal) | - |
| `obj.pages` | number | 总页数(传入 delayPaging 分页) | - |
| `obj.list[]` | array | 延迟任务列表 | - |
| `obj.list[][0]` | string | 商品SPU编号(行主键,链接至 SPUdetails) | - |
| `obj.list[][1]` | string | 任务类型枚举。1=拍照延迟任务;2=作图延迟任务(决定各字段渲染分支) | - |
| `obj.list[][2]` | string | SPU名称(type=1 时展示) | - |
| `obj.list[][3]` | number | 拍照耗时天数(type=1,>3 天标红显示「拍照耗时（N天）」) | - |
| `obj.list[][4]` | string | 产品名称(type=2 时展示) | - |
| `obj.list[][5]` | string | 美工备注 | - |
| `obj.list[][6]` | string | 拍摄备注(type=1) | - |
| `obj.list[][7]` | string | 拍摄备注2(type=1,可经 makeEdit 编辑) | - |
| `obj.list[][8]` | string | 拍照任务ID(type=1,用于 photoShow/编辑备注) | - |
| `obj.list[][9]` | string | 采购单ID(链接至采购列表) | - |
| `obj.list[][10]` | string | 采购快递单号 | - |
| `obj.list[][11]` | string | 最新物流跟踪日期(悬浮 title 展示) | - |
| `obj.list[][12]` | string | 最新物流跟踪信息(悬浮 title 展示) | - |
| `obj.list[][13]` | string | 完成状态描述 | - |
| `obj.list[][14]` | string | 库存状态。有库存(绿)/缺货(红)/部分缺货(黄) | - |
| `obj.list[][15]` | string | 拍照信息(type=1 直接展示) | - |
| `obj.list[][16]` | string | 作图信息(type=2 时展示) | - |
| `obj.list[][17]` | string | 订单ID(链接至订单详情) | - |
| `obj.list[][18]` | string | 创建人(type=1) | - |
| `obj.list[][19]` | string | 创建时间(type=1) | - |
| `obj.list[][20]` | string | 创建人(type=2) | - |
| `obj.list[][21]` | string | 创建时间(type=2) | - |
| `obj.list[][22]` | string | 任务开始时间 | - |
| `obj.list[][23]` | string | 任务结束时间 | - |
| `obj.list[][24]` | string | 认领美工(type=2,「已认领(xxx)」) | - |
| `obj.list[][25]` | string | 图片地址(存在时显示「复制图片地址」,copymessage 用) | - |
| `obj.list[][26]` | number | 拍照状态。1=核实无误需美工作图(显示 CheckImg 操作) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
