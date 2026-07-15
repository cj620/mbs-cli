# mbs oms erp-order-find-refund-order-item

退款(退货)订单明细查询：在「退包订单」列表中点击订单展开时，按 orderId 查询该订单下的退款明细行(SKU级)，返回明细数组并渲染到子表(returnContentTemplate2)，展示图片/标题/SKU/产品等级/售价/数量/库存/在途/原价/开发员及前端计算的毛利与毛利率。

## 用法

```bash
mbs oms erp-order-find-refund-order-item --orderId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findRefundOrderItem`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderId` | orderId | query | string | 是 | - | 订单ID，作为 URL query 参数拼接(?orderId=+orderId)，用于查询该订单的退款明细；来源为退货列表行 tr 的 data-id |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(站点统一包装) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 退款(退货)订单明细行数组 | - |
| `obj[][0]` | string | 商品图片URL(加载失败回退默认图) | - |
| `obj[][1]` | string | 商品标题(超长省略，hover 显示全称) | - |
| `obj[][2]` | string | SKU编码(链接到 /product/SKUdetails.html?SKU=) | - |
| `obj[][3]` | string | 商品 itemId/平台商品ID(SKU 后括号显示，type==1 时另单列展示) | - |
| `obj[][4]` | string | 原始SKU(仅 type==1 分支展示；当前 returnSearch2 未传 type，默认不展示) | - |
| `obj[][5]` | string | 产品等级。枚举：超爆/超级爆款/爆A/爆B(危险标);旺A/旺B(警告标);平A/平B(信息标);滞A/滞B(描边标);无销新品(默认标) | - |
| `obj[][6]` | string | 产品状态(等级下方文本展示) | - |
| `obj[][7]` | number | 售价/单价(参与毛利、毛利率计算) | - |
| `obj[][8]` | number | 销售数量(参与毛利、毛利率计算) | - |
| `obj[][9]` | number | 库存数量 | - |
| `obj[][10]` | number | 在途数量 | - |
| `obj[][11]` | string | 币种(与原始价格拼接展示) | - |
| `obj[][12]` | number | 原始价格(原币种售价) | - |
| `obj[][13]` | string | 开发员 | - |
| `obj[][14]` | number | 成本价(前端计算毛利=(unitPrice-costPrice)*soldNum、毛利率=毛利/(unitPrice*soldNum)，均 toFixed(4)) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
