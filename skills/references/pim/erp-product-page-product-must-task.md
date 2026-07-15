<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-page-product-must-task

清仓/停产待办任务分页查询：成品看板「清仓申请」标签页加载/翻页时调用，按状态类型(statusType)分页查询商品清仓/停产待办任务，返回任务总数与任务行列表(SKU、商品名、销量级别、库存、推送人/时间、审核人等)。前端以 res.obj.items[0] 作为表格行渲染，并支持对单条任务进行同意/拒绝处理。

## 用法

```bash
mbs pim erp-product-page-product-must-task [--statusType <number>] [--currentPage <number>] [--pageSize <number>] [--total <number>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/productMustTask/page`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `statusType` | statusType | body | number | 否 | - | 任务状态类型。1=同意;2=拒绝;3=未处理(默认)，当前固定为3未处理 |
| `currentPage` | currentPage | body | number | 否 | - | 当前页码，默认1，翻页时由分页组件回传 |
| `pageSize` | pageSize | body | number | 否 | - | 每页条数，固定10 |
| `total` | total | body | number | 否 | - | 总条数，前端分页状态字段(初始0，随pageInfo一并展开提交) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的任务总数(前端用于分页total与角标计数) | - |
| `obj.items[]` | array | 任务列表外层数组(二维)，前端只取第0个元素 items[0] 渲染 | - |
| `obj.items[][]` | array | 任务行集合(items的首个元素，元素为任务行对象) | - |
| `obj.items[][][0]` | string | 商品主图URL | - |
| `obj.items[][][1]` | string | 商品SKU编号 | - |
| `obj.items[][][2]` | string | 原状态(修改前状态) | - |
| `obj.items[][][3]` | string | 商品名称 | - |
| `obj.items[][][4]` | string | 销量级别名称。超爆/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品(前端据此渲染el-tag颜色) | - |
| `obj.items[][][5]` | string | 修改状态(目标修改后状态) | - |
| `obj.items[][][6]` | number | 库存 | - |
| `obj.items[][][7]` | string | 推送人 | - |
| `obj.items[][][8]` | string | 推送时间 | - |
| `obj.items[][][9]` | string | 更新时间 | - |
| `obj.items[][][10]` | string | 审核人 | - |
| `obj.items[][][11]` | string | 任务记录ID(同意/拒绝操作changeStatus回传) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
