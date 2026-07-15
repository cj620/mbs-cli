# mbs oms erp-mobile-find-shop2

按店铺名称查询店铺列表：移动端「按店铺搜索」页面：根据店铺名称关键词(shopName，以 URL 查询参数传递)模糊查询当前用户可见的店铺列表，返回店铺集合(店铺ID + 店铺名称)，前端用 art-template 渲染列表并跳转到对应店铺订单列表页。页面首次加载与上拉加载更多均调用本接口。

## 用法

```bash
mbs oms erp-mobile-find-shop2 [--shopName <string>]
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/pushController/findShop2`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | query | string | 否 | - | 店铺名称模糊搜索关键词。来源：搜索输入框 #keyword(placeholder「订单ID/交易ID/卖家ID/SKU 模糊搜索」)；以 URL 查询参数传递；为空时传空串，后端返回全部可见店铺 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 店铺列表(店铺对象数组)。前端 data.obj，按 length(每次+20)切片分页展示 | - |
| `obj[][0]` | string | 店铺ID。模板中作为跳转参数 shoptypeid(orderLst.html?shoptypeid={{v.sid}}) | - |
| `obj[][1]` | string | 店铺名称(列表项展示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
