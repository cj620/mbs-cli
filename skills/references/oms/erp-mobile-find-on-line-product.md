# mbs oms erp-mobile-find-on-line-product

查看线上(侵权)商品列表查询：移动端马帮ERP「查看线上商品」页：按商品ID与关键词(sku/店铺)分页查询线上侵权商品列表，返回商品标题、SKU、侵权关键词及移除状态、店铺、刊登时间等，支持「加载更多」分页。

## 用法

```bash
mbs oms erp-mobile-find-on-line-product --currPage <number> [--id <string>] [--search <string>]
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/infringing/findOnLineProduct`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currPage` | currPage | body | number | 是 | - | 当前页码。search()固定传1；getMore()传++currPage递增；来源：前端分页计数器 |
| `id` | id | body | string | 否 | - | 商品ID。来源：页面URL查询参数id(GetQueryString('id'))；用于定位要查询线上商品的关联ID |
| `search` | search | body | string | 否 | - | 搜索关键词。来源：搜索输入框#search(占位提示「sku/店铺」)，按SKU或店铺名模糊查询 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准返回字段，前端未直接使用)(待人工确认) | - |
| `desc` | string | 响应提示信息；当obj为空时前端直接展示该文案 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.list[]` | array | 线上商品列表 | - |
| `obj.list[][0]` | string | 平台商品ID(展示于卡片头部) | - |
| `obj.list[][1]` | number | 商品状态枚举。0=已下架;1=已在售;2=已删除;3=等待下架;4=下架中;5=下架失败(模板转中文展示) | - |
| `obj.list[][2]` | string | 商品主图URL(加载失败回退默认图) | - |
| `obj.list[][3]` | string | ERP SKU(用于跳转商品详情 goodsDetails.html?sku=) | - |
| `obj.list[][4]` | string | 商品属性(有值时以括号形式拼在标题前) | - |
| `obj.list[][5]` | string | 商品标题 | - |
| `obj.list[][6]` | string | 侵权关键词 | - |
| `obj.list[][7]` | number | 侵权关键词移除状态枚举。0=已移除;1=未移除;2=等待移除;3=正在移除;4=失败(模板转中文展示) | - |
| `obj.list[][8]` | string | SKU状态(与属性以「/」拼接展示) | - |
| `obj.list[][9]` | string | SKU属性 | - |
| `obj.list[][10]` | string | 店铺名称(展示于卡片底部) | - |
| `obj.list[][11]` | string | 店铺销售负责人(紧随店铺名展示) | - |
| `obj.list[][12]` | string | 刊登(上架)时间 | - |
| `obj.pages` | number | 总页数；前端据 currPage==pages 判断是否到末页(展示「我也是有底线的」) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
