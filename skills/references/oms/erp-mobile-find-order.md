# mbs oms erp-mobile-find-order

订单列表查询（移动端正常/缺货订单）：移动端订单列表分页查询：按店长、店铺类型、订单类型标志(正常/缺货)与模糊关键字(订单ID/交易ID/卖家ID/SKU)分页拉取订单列表，返回订单行及正常/缺货数量汇总，并下发当前用户头像。

## 用法

```bash
mbs oms erp-mobile-find-order --currentPage <number> [--shopmanager <string>] [--shoptypeid <string>] --flag <number> [--skus <string>] [--search <string>]
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/pushController/findOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码(初始1，加载更多自增) |
| `shopmanager` | shopmanager | body | string | 否 | - | 店长(店铺管理员)，来源URL userName(decodeURI)，仅userName非空时传 |
| `shoptypeid` | shoptypeid | body | string | 否 | - | 店铺类型ID，来源URL shoptypeid |
| `flag` | flag | body | number | 是 | - | 订单类型标志。0=正常订单;1=缺货订单 |
| `skus` | skus | body | string | 否 | - | SKU，来源URL sku，仅userName与sku均非空分支传入 |
| `search` | search | body | string | 否 | - | 模糊搜索关键字(订单ID/交易ID/卖家ID/SKU)，来源输入框#search |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `content` | string | 当前用户头像URL，前端赋给#photo，为空回退默认头像 | - |
| `obj` | object | 业务数据对象(列表分页结果) | - |
| `obj.totalPages` | number | 总页数，前端据currentPage==totalPages判定到底 | - |
| `obj.rows[]` | array | 订单列表行集合，length==0时提示暂无订单 | - |
| `obj.rows[][0]` | string | 订单ID，卡片标题及详情跳转参数 | - |
| `obj.rows[][1]` | number | 订单内SKU数量，标题显示orderid(skucount) | - |
| `obj.rows[][2]` | string | 订单状态(中文文案，卡片右上角展示) | - |
| `obj.rows[][3]` | string | 商品图片URL，加载失败回退默认图 | - |
| `obj.rows[][4]` | string | 商品SKU | - |
| `obj.rows[][5]` | string | 商品名称(超长省略，title悬浮全名) | - |
| `obj.rows[][6]` | string | 买家ID | - |
| `obj.rows[][7]` | string | 国家 | - |
| `obj.rows[][8]` | string | 店铺(店铺类型名称) | - |
| `obj.rows[][9]` | number | 实付总金额(元) | - |
| `obj.rows[][10]` | number | 毛利，前端按正负着色(<0蓝;>=0红) | - |
| `obj.rows[][11]` | string | 下单时间(正常订单模板)；缺货订单模板对应字段为creatordertime(创建订单时间) | - |
| `obj.sort` | number | 正常订单数量，展示于正常订单徽标#nomaltotal | - |
| `obj.order` | number | 缺货订单数量，展示于缺货订单徽标#outtotal | - |
| `obj.total` | number | 总数，pagesSearch2中赋给缺货徽标#outtotal | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
