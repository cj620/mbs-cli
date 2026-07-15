# mbs oms erp-order-get-bad-comment-task-detail

获取差评任务详情：根据订单编号(orderId)与任务状态(status)查询该订单下差评任务的商品(SKU)明细列表，返回SKU图片/标题/itemId/销量级别/商品状态/售价/原始币种售价/币种/数量/总售价/评价类别/评价内容等字段，用于差评处理页(待处理/已处理/已结案)点击订单行展开时渲染下级明细表。

## 用法

```bash
mbs oms erp-order-get-bad-comment-task-detail
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/badCommentTask/{orderId}/{status}/getBadCommentTaskDetail`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderId` | orderId | path | string | 是 | - | 订单编号(路径参数)。来源：列表行的 v.orderId，点击订单行展开明细时传入。后端为空时返回404参数不能为空。 |
| `status` | status | path | number | 是 | - | 任务状态(路径参数)。枚举：0=待处理,1=已处理,2=已结案(成功解决)。来源：当前 Tab 的 statusFlag。后端为空时返回404参数不能为空。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功,404/500=失败 | - |
| `desc` | string | 响应提示信息(如获取成功/参数不能为空) | - |
| `success` | boolean | 是否成功标识 | - |
| `obj[]` | array | 差评任务商品(SKU)明细列表 | - |
| `obj[][0]` | string | 记录主键 sid(模板未渲染) | - |
| `obj[][1]` | string | 评论ID(模板未渲染) | - |
| `obj[][2]` | string | 商品SKU(模板渲染为 SKU 链接 /product/SKUdetails.html?SKU=) | - |
| `obj[][3]` | string | SKU标题(超长省略,title 悬浮显示) | - |
| `obj[][4]` | string | 平台 itemId(刊登ID,展示于 SKU 后括号内) | - |
| `obj[][5]` | string | SKU图片URL(加载失败回退 /2018ui/assets/images/timg.jpg) | - |
| `obj[][6]` | string | SKU销量级别。枚举:超爆/超级爆款/爆A/爆B(红标)、旺A/旺B(橙标)、平A/平B(蓝标)、滞A/滞B(描边标)、无销新品(默认标) | - |
| `obj[][7]` | string | SKU商品状态 | - |
| `obj[][8]` | number | 售价(单价) | - |
| `obj[][9]` | number | 原始币种售价(与 currency 拼接展示) | - |
| `obj[][10]` | string | 币种 | - |
| `obj[][11]` | string | 评价类别。后端将 NEGATIVE 转为中文差评后返回 | - |
| `obj[][12]` | string | 评价内容 | - |
| `obj[][13]` | number | SKU购买数量 | - |
| `obj[][14]` | number | 总售价 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
