<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms erp-task-find-listing-review-task

刊登评价任务详情查询：根据任务ID查询「刊登评价」任务详情：返回任务处理状态/系统检查结果/截止时间/创建人等任务头信息，以及待评价的商品(listing)列表(图片、链接、商品ID、发布时间、评价状态等)，供任务细节页渲染倒计时、任务状态与商品评价入口。

## 用法

```bash
mbs pms erp-task-find-listing-review-task --id <string>
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/reviewListingTask/findListingReviewTask`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | query | string | 是 | - | 任务ID(query string)。来源：当前页面URL的 id 参数(GetQueryString('id'))，即任务主键；同时写入 localStorage['itemid'] |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准响应封装，同族接口 200=成功；本接口 success 回调未直接判断) | - |
| `desc` | string | 响应提示信息(标准响应封装) | - |
| `obj` | object | 任务详情业务对象 | - |
| `obj.endTime` | string | 任务截止时间(传入 TimeDown 计算任务倒计时) | - |
| `obj.dealResult` | string | 任务处理状态枚举：待处理/已解决/无效/不处理(控制「设置任务状态」按钮文案及评价入口显隐；=已解决 时隐藏修改评价) | - |
| `obj.checkResult` | string | 系统检查结果枚举：已完成(绿标)/未完成(红标)/部分完成(黄标)；=已完成 时禁用状态下拉 | - |
| `obj.checkTime` | string | 系统检查时间 | - |
| `obj.direction` | string | 任务方向/类型标签(页面顶部蓝色 label 展示) | - |
| `obj.content` | string | 任务内容描述 | - |
| `obj.reserve1` | string | 处理人头像图片URL(加载失败回退默认图) | - |
| `obj.listingList[]` | array | 待评价商品(listing)列表 | - |
| `obj.listingList[][0]` | string | 商品图片URL(加载失败回退默认图；点评价时写入 localStorage['imgUrl']) | - |
| `obj.listingList[][1]` | string | 商品/listing名称(超链接文本；写入 localStorage['listingName']) | - |
| `obj.listingList[][2]` | string | 商品/listing外部链接(新窗口打开；写入 localStorage['listingUrl']) | - |
| `obj.listingList[][3]` | string | 平台/站点图标URL(写入 localStorage['iconUrl']) | - |
| `obj.listingList[][4]` | string | 商品ID(表格「商品ID」列，超链接指向 listingUrl) | - |
| `obj.listingList[][5]` | string | 商品发布时间 | - |
| `obj.listingList[][6]` | string | 综合评价内容(非空且 draftType!=1 时显示「查看评价/修改评价」，否则显示「去评价」) | - |
| `obj.listingList[][7]` | number | 草稿类型枚举：1=草稿(显示「去评价」)；非1按是否有综合评价显示查看/去评价 | - |
| `obj.listingList[][8]` | string | 评价记录ID(跳转评价页 gotoEvalutate.html?reviewId= 参数) | - |
| `obj.createBy` | string | 任务创建人 | - |
| `obj.createTime` | string | 任务创建时间 | - |
| `obj.updateby` | string | 任务更新人(设置任务状态者) | - |
| `obj.updatetime` | string | 任务更新(设置状态)时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
