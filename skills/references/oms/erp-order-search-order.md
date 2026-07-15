# mbs oms erp-order-search-order

待发货订单查询：待发货订单列表分页查询：按订单状态(必选)、SKU、供应商、平台/店铺、货运方式、订单时间区间、是否缺货等条件筛选，返回订单列表及总数、总页数。

## 用法

```bash
mbs oms erp-order-search-order --status <string> --page <number> --pageSize <number> [--sku <string>] [--manufacture <string>] [--platformid <string>] [--expresstypeid <string>] [--startDate <string>] [--endDate <string>] --alertflag <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderDeliver/searchOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `status` | status | body | string | 是 | - | 订单状态(多选逗号拼接)。来源控件 #status(如:已支付/配货中)。未选则前端拦截不发请求 |
| `page` | page | body | number | 是 | - | 当前页码(baseData.page,固定从1开始,分页回调时更新) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(来源 #pageNume 输入框,默认50,Number()转换) |
| `sku` | sku | body | string | 否 | - | SKU(多值空格分隔,来源 #sku) |
| `manufacture` | manufacture | body | string | 否 | - | 供应商(多值空格分隔,来源 #manufacture) |
| `platformid` | platformid | body | string | 否 | - | 平台/店铺ID(多选逗号拼接,来源隐藏域 #platformid,由店铺勾选 #shopList 生成) |
| `expresstypeid` | expresstypeid | body | string | 否 | - | 货运方式ID(多选逗号拼接,来源隐藏域 #expresstypeid,由 #expressList 勾选生成) |
| `startDate` | startDate | body | string | 否 | - | 订单时间-起始(date,来源 #starttime) |
| `endDate` | endDate | body | string | 否 | - | 订单时间-结束(date,来源 #endtime) |
| `alertflag` | alertflag | body | number | 是 | - | 是否缺货。1=是,0=否(来源复选框 #alertflag,恒传值) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `total` | number | 订单总数(前端展示 #toatalCount,并赋值 baseData.total) | - |
| `pages` | number | 总页数(首页加载时传入分页组件 findTaskReport(pages)) | - |
| `list[]` | array | 订单列表 | - |
| `list[][0]` | string | 订单编号(渲染为订单编辑页链接 /eshop/order.do?method=edit&orderid=...,也用于批量添加勾选值) | - |
| `list[][1]` | string | 订单状态 | - |
| `list[][2]` | string | 平台 | - |
| `list[][3]` | string | 店铺名称 | - |
| `list[][4]` | string | 货运方式 | - |
| `list[][5]` | string | 运单号 | - |
| `list[][6]` | number | 重量 | - |
| `list[][7]` | number | 运费 | - |
| `list[][8]` | number | 订单金额 | - |
| `list[][9]` | number | 延迟天数 | - |
| `list[][10]` | string | 订单时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
