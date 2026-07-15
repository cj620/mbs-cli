<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-sku-images

获取SKU图片列表：根据 SKU 查询该商品的图片列表，返回每张图片的URL与图片记录序号。前端用于 SKU 详情页主图轮播展示(exzoom)与编辑图片弹窗(可删除/设为主图)。前端在拿到 imageUrl 后会把图床域名 http://instudio.gnway.cc 替换为 http://www.instudio.me 再渲染。

## 用法

```bash
mbs pim erp-product-get-sku-images --sku <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getSkuImages`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | 商品SKU编号。来源：前端页面URL查询参数 SKU(GetQueryString('SKU'))，以 ?sku= 形式拼接到接口地址；无对应输入控件，由详情页上下文带入 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | SKU图片列表(图片对象数组,前端遍历渲染) | - |
| `obj[][0]` | string | 图片URL地址。前端渲染前会把 http://instudio.gnway.cc 替换为 http://www.instudio.me；加载失败回退占位图 /2018ui/assets/images/timg.jpg；列表第一张作为主图(res.list[0].imageUrl) | - |
| `obj[][1]` | number | 图片记录序号ID。用于删除图片(delImages(sequenceid))与设为主图(data-seqid)的标识 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
