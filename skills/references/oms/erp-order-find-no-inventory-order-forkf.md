# mbs oms erp-order-find-no-inventory-order-forkf

清仓停产暂售缺货订单列表查询：成品仪表盘(finishedGoods)「清停暂售缺货」页签的分页列表查询：按当前页码 currPageStr 分页拉取因清仓/停产/暂售导致缺货的待处理订单，返回总条数、总页数及订单行列表，用于 notprodContentTemplate 渲染表格。

## 用法

```bash
mbs oms erp-order-find-no-inventory-order-forkf --currPageStr <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findNoInventoryOrderForkf`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currPageStr` | currPageStr | query | string | 是 | - | 当前页码(查询串)。首次固定传1，翻页取分页控件 api.getCurrent()。每页固定10条 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(待人工确认) | - |
| `obj` | object | 业务数据对象(分页结果)，为空则前端将总数置0 | - |
| `obj.total` | number | 满足条件的订单总条数(渲染到 #notprodtotal / #notprodspan) | - |
| `obj.totalPages` | number | 总页数(传入 notprodPaging 作为分页 pageCount) | - |
| `obj.rows[]` | array | 订单行列表(渲染 notprodContentTemplate) | - |
| `obj.rows[][0]` | string | 订单编号(主键；行 data-id，详情链接 orderdetail.html?orderid=，作废/标记入参) | - |
| `obj.rows[][1]` | string | 订单状态(中文文案直接展示) | - |
| `obj.rows[][2]` | number | 延迟天数(展示为「{n}天」) | - |
| `obj.rows[][3]` | string | 店铺名称 | - |
| `obj.rows[][4]` | string | 店铺负责人(销售)，展示为「店铺名(负责人)」 | - |
| `obj.rows[][5]` | string | 客户ID | - |
| `obj.rows[][6]` | number | 订单金额(RMB)，前端 toFixed(2) 保留2位 | - |
| `obj.rows[][7]` | string | 订单日期 | - |
| `obj.rows[][8]` | string | 拉单(创建)时间 | - |
| `obj.rows[][9]` | number | 运费 | - |
| `obj.rows[][10]` | string | 交易单号 | - |
| `obj.rows[][11]` | string | 店铺ID(noProces 临时标记处理时取 v.shopId 写入 #storeid) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
