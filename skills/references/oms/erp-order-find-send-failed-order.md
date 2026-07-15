# mbs oms erp-order-find-send-failed-order

发货失败订单列表查询：销售融合订单中心-发货失败订单页签的分页列表查询：按店长、店铺、平台筛选，返回发货失败订单分页列表（订单编号、状态、店铺/客户、金额、国家、时间、运费、交易单号、备注等），并返回总条数与总页数供前端分页。

## 用法

```bash
mbs oms erp-order-find-send-failed-order [--shopManager <string>] [--shopid <string>] [--platformId <string>] [--currPage <number>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findSendFailedOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopManager` | shopManager | body | string | 否 | - | 店长（来源下拉控件 #saleLeader10，未选传空串） |
| `shopid` | shopid | body | string | 否 | - | 店铺ID（来源下拉控件 #shopName10，未选传空串） |
| `platformId` | platformId | body | string | 否 | - | 平台ID（来源下拉控件 #platformes2，未选传空串） |
| `currPage` | currPage | body | number | 否 | - | 当前页码（分页组件回调追加；首次查询不传，由后端默认第1页） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（同站点其他接口约定） | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象（无数据时可能为空，前端置 total=0） | - |
| `obj.total` | number | 满足条件的发货失败订单总条数（页面显示“共 N 条”） | - |
| `obj.pages` | number | 总页数（前端分页组件 pageCount，每页10条） | - |
| `obj.list[]` | array | 发货失败订单列表 | - |
| `obj.list[][0]` | string | 订单编号（行主键，渲染为订单详情链接 orderdetail.html?orderid=，并作为子表/操作入参） | - |
| `obj.list[][1]` | number | 是否低利润订单。1=是（订单号显红，并显示“标记完成”按钮 markComplete） | - |
| `obj.list[][2]` | string | 订单状态（“状态”列直接展示） | - |
| `obj.list[][3]` | string | 店铺名称（“店铺”列，与 shopManager 合并展示） | - |
| `obj.list[][4]` | string | 店长（与 shopName 合并展示为 shopName(shopManager)） | - |
| `obj.list[][5]` | string | 客户ID | - |
| `obj.list[][6]` | string | 原币种（与原金额合并展示） | - |
| `obj.list[][7]` | number | 原金额（原币种金额） | - |
| `obj.list[][8]` | number | 订单金额（RMB，展示为 RMB 金额） | - |
| `obj.list[][9]` | string | 客户国家（中文） | - |
| `obj.list[][10]` | string | 客户国家（英文） | - |
| `obj.list[][11]` | string | 订单日期 | - |
| `obj.list[][12]` | string | 拉单时间（订单拉取/创建时间） | - |
| `obj.list[][13]` | number | 运费 | - |
| `obj.list[][14]` | string | 交易单号 | - |
| `obj.list[][15]` | string | 订单备注（存在时单独行展示“订单备注:xxx”） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
