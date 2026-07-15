<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms erp-task-find-task

我收到的任务列表查询：任务管理页「我收到的任务」分页查询：按日期区间、处理结果筛选，返回任务卡片列表（含分类、已读状态、标题、内容、创建人、处理结果、倒计时截止时间等），并驱动分页与倒计时渲染。

## 用法

```bash
mbs pms erp-task-find-task --currentPage <number> [--startdate <string>] [--enddate <string>] [--dealResult <string>] --type <number>
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/taskController/findTask`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码。首次查询固定为1；分页回调取分页控件api.getCurrent() |
| `startdate` | startdate | body | string | 否 | - | 开始日期(yyyy-MM-dd)。来源#startTime或#getTime近N天(7/10/15/30/60/90/120天)换算，未选为空 |
| `enddate` | enddate | body | string | 否 | - | 结束日期(yyyy-MM-dd)。来源#endTime或近N天换算(默认当天)，未选为空 |
| `dealResult` | dealResult | body | string | 否 | - | 处理结果筛选。枚举：已解决/无效/不处理/待处理(默认)/空=全部。来源#dealResult下拉 |
| `type` | type | body | number | 是 | - | 任务归属类型标识，固定传1(表示「我收到的任务」) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准响应封装，前端未直接读取)(待人工确认) | - |
| `desc` | string | 响应提示信息(标准响应封装，前端未直接读取)(待人工确认) | - |
| `obj` | object | 业务数据对象(为空时列表与总数显示0) | - |
| `obj.total` | number | 满足条件的任务总条数(渲染到#total，页面固定每页10条) | - |
| `obj.totalPages` | number | 总页数(传入分页控件pageCount) | - |
| `obj.rows[]` | array | 任务列表 | - |
| `obj.rows[][0]` | string | 任务ID(用于详情页跳转与倒计时元素id) | - |
| `obj.rows[][1]` | number | 任务分类枚举，决定卡片样式与详情页：1=待刊登SPU(taskPublished);2=待完善SPU(taskperfect);3=待处理异常订单(taskPending);4=待下架SKU(taskwaiting);5=采购催单(taskPurchase);6=财务(taskFinance);7=物流(taskLogistics2);8=重量(taskWeight);9=降本(taskExtend);10=开发池任务(taskPubpool);11=版本(taskEdition);12=重量2(taskWeight2);13=面试任务(findTaskDetail弹层跳转);14=视频展示(taskVideoDisplay);15=Listing评估(listingEvaluate);16=侵权(taskTort);17=投诉(complaintDetail);18=退货(taskReturn) | - |
| `obj.rows[][2]` | number | 是否已读。1=已读；其他值=未读 | - |
| `obj.rows[][3]` | string | 任务标题(卡片超链接文案) | - |
| `obj.rows[][4]` | string | 任务内容(HTML富文本，模板{{@ value.content}}原样输出) | - |
| `obj.rows[][5]` | string | 审核/完成结果。枚举：已完成(显示完成角标)/未完成(显示未完成角标) | - |
| `obj.rows[][6]` | string | 创建人(任务发起人姓名) | - |
| `obj.rows[][7]` | string | 创建人头像URL(加载失败回退默认图) | - |
| `obj.rows[][8]` | string | 处理结果。枚举：已解决/无效/不处理/待处理；非「已解决」时展示倒计时 | - |
| `obj.rows[][9]` | string | 生成时间(卡片「生成时间」展示) | - |
| `obj.rows[][10]` | string | 截止时间(倒计时基准，前端TimeDown计算剩余天/时/分/秒) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
