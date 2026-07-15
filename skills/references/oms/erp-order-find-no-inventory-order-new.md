# mbs oms erp-order-find-no-inventory-order-new

清仓停产(无货)订单列表查询：仪表盘订单中心“清停暂收/清仓停产”页签：按店铺、店长筛选，分页查询马帮内清仓停产不再采购但线上仍出单的“无货”订单，返回订单列表(订单编号、状态、延迟天数、店铺、客户、金额、时间、运费、交易单号、备注等)及总条数/总页数。

## 用法

```bash
mbs oms erp-order-find-no-inventory-order-new [--currPage <number>] [--shopid <string>] [--shopManager <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findNoInventoryOrderNEW`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currPage` | currPage | query | number | 否 | - | 当前页码。来源分页控件 .notprodM-box 的 api.getCurrent()；首次调用不传，后端默认第1页 |
| `shopid` | shopid | query | string | 否 | - | 店铺ID。来源下拉控件 #shopName6，不选时传空串 |
| `shopManager` | shopManager | query | string | 否 | - | 店长/店铺管理员。来源下拉控件 #saleLeader6，不选时传空串 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象（为空时前端将总数置0） | - |
| `obj.total` | number | 满足条件的订单总条数（写入 #notprodtotal/#notprodspan） | - |
| `obj.totalPages` | number | 总页数（传入 notprodPaging 作为分页 pageCount） | - |
| `obj.rows[]` | array | 无货(清仓停产)订单列表 | - |
| `obj.rows[][0]` | string | 订单编号（行主键，渲染订单详情链接，作废/标记/明细均以此为键） | - |
| `obj.rows[][1]` | string | 店铺ID（复选框 data-shop-id） | - |
| `obj.rows[][2]` | string | 订单状态 | - |
| `obj.rows[][3]` | number | 延迟天数（展示为“{delaydays}天”） | - |
| `obj.rows[][4]` | string | 店铺名称（展示为“店铺名(店长)”） | - |
| `obj.rows[][5]` | string | 店长/店铺管理员 | - |
| `obj.rows[][6]` | string | 客户ID | - |
| `obj.rows[][7]` | number | 订单金额(RMB)，前端 toFixed(2) 保留2位展示 | - |
| `obj.rows[][8]` | string | 订单日期 | - |
| `obj.rows[][9]` | string | 拉单(创建)时间 | - |
| `obj.rows[][10]` | number | 运费 | - |
| `obj.rows[][11]` | string | 交易单号 | - |
| `obj.rows[][12]` | string | 订单备注（存在时额外渲染一行“订单备注:…”） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
