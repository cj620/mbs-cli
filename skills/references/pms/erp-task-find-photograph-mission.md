<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms erp-task-find-photograph-mission

拍照延迟任务列表查询：首页/看板"拍照延迟"面板分页查询：按完成状态与当前页码，返回拍照/作图任务列表（含SPU、任务类型、拍照耗时、拍摄备注、采购/物流、库存状态、创建人/时间、任务起止时间、拍照状态等）及分页信息(总数、总页数)，前端以art-template渲染成列表并分页。

## 用法

```bash
mbs pms erp-task-find-photograph-mission --finishStatus <number> --currentPage <number>
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/developMustDo/findPhotographMission`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `finishStatus` | finishStatus | body | number | 是 | - | 完成状态过滤，前端固定传1（拍照延迟/未完成任务） |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码。首次加载固定1；分页回调取分页控件api.getCurrent() |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象（前端if(data.obj)判空后使用） | - |
| `obj.pages` | number | 总页数（传入分页控件pageCount） | - |
| `obj.total` | number | 满足条件的任务总数（渲染到#photodelaytotal/#photodelayspan） | - |
| `obj.list[]` | array | 拍照延迟任务列表 | - |
| `obj.list[][0]` | string | 商品SPU编号（行data-spu，SPU详情跳转） | - |
| `obj.list[][1]` | string | 任务类型。1=拍照任务;2=作图任务（控制行内分支展示） | - |
| `obj.list[][2]` | string | SPU名称（type=1时展示,title提示） | - |
| `obj.list[][3]` | number | 拍照耗时天数（type=1,>3天标红"拍照耗时（N天）"） | - |
| `obj.list[][4]` | string | 产品名称（type=2作图延迟时展示） | - |
| `obj.list[][5]` | string | 美工备注 | - |
| `obj.list[][6]` | string | 拍摄备注（type=1） | - |
| `obj.list[][7]` | string | 拍摄备注2（type=1,可在弹窗编辑保存） | - |
| `obj.list[][8]` | string | 拍摄任务ID（编辑拍摄备注photoShow/makeEdit使用） | - |
| `obj.list[][9]` | string | 采购单ID（跳转采购列表groupid） | - |
| `obj.list[][10]` | string | 最近物流跟踪日期（悬浮title） | - |
| `obj.list[][11]` | string | 最近物流跟踪信息（悬浮title） | - |
| `obj.list[][12]` | string | 采购快递单号 | - |
| `obj.list[][13]` | string | 完成状态文本 | - |
| `obj.list[][14]` | string | 库存状态。枚举:有库存(绿)/缺货(红)/部分缺货(黄) | - |
| `obj.list[][15]` | string | 拍照信息（type=1展示） | - |
| `obj.list[][16]` | string | 作图信息（type=2展示） | - |
| `obj.list[][17]` | string | 订单ID（跳转订单详情） | - |
| `obj.list[][18]` | string | 创建人（type=1） | - |
| `obj.list[][19]` | string | 创建时间（type=1,字符串） | - |
| `obj.list[][20]` | string | 创建人（type=2） | - |
| `obj.list[][21]` | string | 创建时间（type=2） | - |
| `obj.list[][22]` | string | 任务开始时间 | - |
| `obj.list[][23]` | string | 任务结束时间 | - |
| `obj.list[][24]` | string | 美工/认领人（type=2,"已认领(xxx)"展示） | - |
| `obj.list[][25]` | string | 拍照图片地址（有值时提供"复制图片地址"） | - |
| `obj.list[][26]` | number | 拍照状态。==1时展示"核实无误需美工作图"操作 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
