# mbs pms erp-task-review-listing-list

listing评价任务列表查询：listing评价任务列表查询：按平台、时间段(今天/昨天/前天/更早/精华/自定义区间)、类型、分组人员等条件查询已创建的 listing 评价任务，返回 listing 卡片列表(主图/标题/链接/图标/点赞数/评论数)供页面各 tab 与排行榜下钻渲染。

## 用法

```bash
mbs pms erp-task-review-listing-list [--platformId <string>] [--times <string>] [--type <string>] [--groupOper <string>]
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/reviewListingTask/reviewListingList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | body | string | 否 | - | 平台ID。来源页面顶部“平台”下拉框 #platform(取值为 PLATFORMID)；searchListing 调用时传入 |
| `times` | times | body | string | 否 | - | 时间/时间段。取值来源：各时间 tab 的 TIMES(来自 getFourDayTime 返回 data.obj[n].TIMES)；自定义区间为 开始日期@结束日期；排行榜下钻取行数据 times(累计精华取 times2) |
| `type` | type | body | string | 否 | - | 类型标记。来源：精华 tab 的 .fivenone(即 getFourDayTime 返回 data.obj[4].type)，或排行榜行数据 type；用于区分精华/普通等统计口径 |
| `groupOper` | groupOper | body | string | 否 | - | 分组人员标识。来源排行榜行数据 value.groupOper；置精华(putEssence)、累计评价数(listingNum)、累计精华评数(listingNum2)下钻时传入 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(前端 data.code == 200 判断) | - |
| `desc` | string | 响应提示信息(标准响应包装字段，本页 success 回调未直接引用)(待人工确认) | - |
| `obj` | object | 业务数据对象(前端以 data.obj 判空) | - |
| `obj.result[]` | array | listing 评价任务列表(前端取 data.obj.result) | - |
| `obj.result[][0]` | string | 评价记录ID，用于跳转评论详情 /task/evaluationDetails.html?sequenceid={sequenceid} | - |
| `obj.result[][1]` | string | listing 主图URL(懒加载 data-original) | - |
| `obj.result[][2]` | string | listing 名称/标题(卡片标题链接文本) | - |
| `obj.result[][3]` | string | listing 原始链接(卡片标题 href，新窗口打开) | - |
| `obj.result[][4]` | string | 平台/图标URL(卡片底部图标图片) | - |
| `obj.result[][5]` | number | 点赞/精华数，>0 时展示奖章角标 | - |
| `obj.result[][6]` | number | 评论数量(展示为 “评论(detailNum)”) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
