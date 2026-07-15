# mbs oms erp-order-find-distribution-order-item

自建商品订单详情查询：在自建商品订单列表中点击某行展开时，按 orderId 查询该分销订单下的全部商品明细行，返回图片/标题/SKU/售卖等级/单价/销量/库存/在途/成本等字段，渲染到子表 buildContentTemplate2。

## 用法

```bash
mbs oms erp-order-find-distribution-order-item --orderId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findDistributionOrderItem`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderId` | orderId | body | string | 是 | - | 分销订单ID（来源：列表行 data-id，即 $(tr).data('id')），用于查询该订单下的商品明细 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（参照统一返回结构，本回调未直接使用，待人工确认） | - |
| `desc` | string | 响应提示信息（本回调未直接使用，待人工确认） | - |
| `obj[]` | array | 订单商品明细列表（前端赋值 list2 = data.obj 并遍历渲染） | - |
| `obj[][0]` | string | 商品图片URL（加载失败回退 /2018ui/assets/images/timg.jpg） | - |
| `obj[][1]` | string | 商品标题（鼠标悬浮 title，溢出省略显示） | - |
| `obj[][2]` | string | 商品SKU编码（链接到 /product/SKUdetails.html?SKU=） | - |
| `obj[][3]` | string | 商品项ID（平台 itemId，显示在 SKU 后括号内） | - |
| `obj[][4]` | string | 产品售卖等级。枚举：超爆/超级爆款/爆A/爆B（红标）；旺A/旺B（黄标）；平A/平B（蓝标）；滞A/滞B（边框标）；无销新品（默认标） | - |
| `obj[][5]` | string | 商品状态（文本展示于等级下方） | - |
| `obj[][6]` | number | 销售单价（参与毛利与毛利率计算） | - |
| `obj[][7]` | number | 销量（已售数量，参与毛利与毛利率计算） | - |
| `obj[][8]` | number | 库存量 | - |
| `obj[][9]` | number | 在途量 | - |
| `obj[][10]` | string | 币种（与原价拼接展示） | - |
| `obj[][11]` | number | 原价（与币种拼接展示） | - |
| `obj[][12]` | string | 开发员 | - |
| `obj[][13]` | number | 成本价（前端计算毛利=(unitPrice-costPrice)×soldNum、毛利率=毛利/(unitPrice×soldNum)，保留4位） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
