<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-infriging-order-item

侵权商品订单明细查询：在「侵权或禁售」订单列表中点击某条订单行展开时，按订单ID查询该订单下的商品明细(订单项)列表，返回每个订单项的图片、标题、SKU、产品等级、单价、销量、库存/在途、币种/原价、开发员、利润计算所需成本及侵权平台，渲染到子表格 tortContentTemplate2。

## 用法

```bash
mbs oms erp-order-find-infriging-order-item --orderId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findInfrigingOrderItem`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderId` | orderId | query | string | 是 | - | 订单ID。来源：侵权订单列表当前行<tr>的data-id，以URL查询参数?orderId=传递，用于查询该订单下的商品明细 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本接口回调未校验，按平台统一约定列出) | - |
| `desc` | string | 响应提示信息(平台统一约定) | - |
| `obj[]` | array | 订单明细(订单项)列表,前端赋给list2遍历 | - |
| `obj[][0]` | string | 商品图片URL(加载失败回退默认图timg.jpg) | - |
| `obj[][1]` | string | 商品标题(鼠标悬停显示完整标题) | - |
| `obj[][2]` | string | 商品SKU编码(链接到/product/SKUdetails.html?SKU=) | - |
| `obj[][3]` | string | 商品/订单项ID(展示在SKU后括号内) | - |
| `obj[][4]` | string | 产品等级/售卖状态。枚举:超爆;超级爆款;爆A;爆B(标红);旺A;旺B(标黄);平A;平B(标蓝);滞A;滞B(描边);无销新品(默认色) | - |
| `obj[][5]` | string | 产品状态(展示在等级下方) | - |
| `obj[][6]` | number | 销售单价(参与利润与毛利率计算) | - |
| `obj[][7]` | number | 销售数量(参与利润与毛利率计算) | - |
| `obj[][8]` | number | 库存数量 | - |
| `obj[][9]` | number | 在途数量 | - |
| `obj[][10]` | string | 币种(展示在原价前) | - |
| `obj[][11]` | number | 原价(对应币种的价格) | - |
| `obj[][12]` | string | 开发员 | - |
| `obj[][13]` | number | 成本单价。前端计算利润((unitPrice-costPrice)*soldNum)与毛利率((((unitPrice-costPrice)*soldNum)/(unitPrice*soldNum))),保留4位 | - |
| `obj[][14]` | string | 侵权平台 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
