# mbs oms erp-order-find-shortage-order-item

投递失败订单-缺货商品明细查询：客户评价(差评)页「投递失败订单」Tab中，点击某一行的展开图标时，按订单号(orderId)查询该订单下的商品明细列表(图片/标题/SKU/数量/销量级别/单价/库存/在途/成本等)，用于渲染子表格并计算商品毛利与毛利率。

## 用法

```bash
mbs oms erp-order-find-shortage-order-item --orderId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findShortageOrderItem`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderId` | orderId | query | string | 是 | - | 订单编号(订单号)。取自“投递失败订单”行的 data-id，以查询串 ?orderId= 拼接 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本接口 success 回调未判断 code,直接取 obj;参照同页其它接口惯例) | - |
| `desc` | string | 响应提示信息(同页其它接口惯例,本接口未使用) | - |
| `obj[]` | array | 商品明细列表(传入模板的 list) | - |
| `obj[][0]` | string | 商品图片URL(模板 <img src>,加载失败回退默认图) | - |
| `obj[][1]` | string | 商品标题(超长省略,title 悬浮显示) | - |
| `obj[][2]` | string | 商品SKU编号(链接 /product/SKUdetails.html?SKU=) | - |
| `obj[][3]` | string | 平台商品ID(itemId,SKU 后括号展示) | - |
| `obj[][4]` | number | 数量(销量,参与毛利计算 (unitPrice-costPrice)*soldNum) | - |
| `obj[][5]` | string | 销量级别(枚举,中文文案)。取值:超爆/超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品(模板据文案套用不同标签样式) | - |
| `obj[][6]` | string | 商品状态(销量级别下方展示) | - |
| `obj[][7]` | number | 单价(参与毛利及毛利率计算) | - |
| `obj[][8]` | string | 币种(与原始价格拼接展示) | - |
| `obj[][9]` | number | 原始价格(与币种拼接展示) | - |
| `obj[][10]` | number | 库存 | - |
| `obj[][11]` | number | 在途(在途数量) | - |
| `obj[][12]` | number | 成本价(仅用于前端计算商品毛利=(unitPrice-costPrice)*soldNum、毛利率=((unitPrice-costPrice)*soldNum)/(unitPrice*soldNum),本身不单独展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
