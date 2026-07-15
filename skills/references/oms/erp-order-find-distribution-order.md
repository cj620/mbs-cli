# mbs oms erp-order-find-distribution-order

分销订单(自建商品订单)列表查询：采购桌面「自建商品」标签页的分销订单分页列表查询：按店铺、店长筛选并分页拉取分销订单，返回订单总数、总页数及订单行（订单号、状态、分销平台、店铺、币种/金额、客户国家、下单/建单时间、运费、交易号等），由 art-template buildContentTemplate 渲染表格。

## 用法

```bash
mbs oms erp-order-find-distribution-order [--currPage <number>] [--shopid <string>] [--shopManager <string>] [--pageSize <number>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findDistributionOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currPage` | currPage | query | number | 否 | - | 当前页码（分页控件 api.getCurrent() 取得；首次查询不传，翻页时传） |
| `shopid` | shopid | query | string | 否 | - | 店铺ID（店铺筛选，示例局部变量固定传空字符串） |
| `shopManager` | shopManager | query | string | 否 | - | 店铺管理员/店长（示例局部变量固定传空字符串） |
| `pageSize` | pageSize | query | number | 否 | - | 每页条数（取自下拉框 #purchaseItemPageSize，枚举：10/20/50/100，默认10；首次查询时传） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（统一响应包装） | - |
| `desc` | string | 响应提示信息（统一响应包装） | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的订单总数（写入 #buildtotal/#buildspan） | - |
| `obj.pages` | number | 总页数（传入分页控件 buildPaging(data.obj.pages)） | - |
| `obj.list[]` | array | 分销订单列表 | - |
| `obj.list[][0]` | string | 订单ID（行 data-id/复选框 value，链接跳订单详情 /mabang-new/orderdetail.html?orderid=） | - |
| `obj.list[][1]` | string | 订单状态 | - |
| `obj.list[][2]` | string | 分销平台 | - |
| `obj.list[][3]` | string | 店铺名称 | - |
| `obj.list[][4]` | string | 店铺管理员/店长 | - |
| `obj.list[][5]` | string | 客户ID | - |
| `obj.list[][6]` | string | 币种（原始订单金额币种） | - |
| `obj.list[][7]` | number | 原始订单金额（原币种） | - |
| `obj.list[][8]` | number | 订单金额（RMB 人民币） | - |
| `obj.list[][9]` | string | 客户国家（中文） | - |
| `obj.list[][10]` | string | 客户国家（英文） | - |
| `obj.list[][11]` | string | 下单时间 | - |
| `obj.list[][12]` | string | 创建订单时间（建单时间） | - |
| `obj.list[][13]` | number | 快递/运费金额 | - |
| `obj.list[][14]` | string | 交易号（平台交易ID） | - |
| `obj.list[][15]` | string | 订单备注（存在时在订单行下方单独展示） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
