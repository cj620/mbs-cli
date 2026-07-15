# mbs oms erp-order-find-shortage-order-by-principal

缺货订单查询(按负责人)：仪表盘「清仓停产/15天缺货订单」列表分页查询：按当前登录负责人(principal)拉取其名下缺货订单，返回订单列表(订单号、状态、延迟天数、店铺、客户、金额、时间、运费、交易单号、备注)及总条数/总页数。首屏不带分页参数(默认首页)，翻页回调带 currPage。

## 用法

```bash
mbs oms erp-order-find-shortage-order-by-principal [--currPage <number>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findShortageOrderByPrincipal`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currPage` | currPage | query | number | 否 | - | 当前页码。来源：分页控件 .fifteenM-box 回调 api.getCurrent()。首屏查询不传(后端默认第1页)；翻页时以 ?currPage= 拼入 URL |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本页面以 data.obj 存在性判断成功) | - |
| `desc` | string | 响应提示信息 (待人工确认) | - |
| `obj` | object | 业务数据对象(无数据时为空/假值，前端显示总数0) | - |
| `obj.total` | number | 缺货订单总条数(渲染到 #fifteentotal / #fifteenspan) | - |
| `obj.pages` | number | 总页数(传入分页控件 pageCount，每页10条) | - |
| `obj.list[]` | array | 缺货订单列表 | - |
| `obj.list[][0]` | string | 订单号(主键，行 data-id，并拼接订单详情链接 /mabang-new/orderdetail.html?orderid=) | - |
| `obj.list[][1]` | string | 订单状态 | - |
| `obj.list[][2]` | number | 延迟天数(展示为 {delaydays}天) | - |
| `obj.list[][3]` | string | 店铺名称 | - |
| `obj.list[][4]` | string | 店铺负责人/销售负责人(展示为 店铺名(负责人)) | - |
| `obj.list[][5]` | string | 客户ID | - |
| `obj.list[][6]` | number | 订单金额(RMB，前端 toFixed(2) 保留2位) | - |
| `obj.list[][7]` | string | 订单日期 | - |
| `obj.list[][8]` | string | 拉单时间(订单创建/抓取时间) | - |
| `obj.list[][9]` | number | 运费 | - |
| `obj.list[][10]` | string | 交易单号 | - |
| `obj.list[][11]` | string | 订单备注(存在时单独行展示 订单备注:{content}) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
