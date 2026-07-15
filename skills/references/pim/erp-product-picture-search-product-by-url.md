# mbs pim erp-product-picture-search-product-by-url

以图搜款(按图片URL搜索相似SKU)：在 SPU 管理列表商品图片上点击「搜索相似SKU」放大镜图标，将该商品主图URL提交后端做以图搜图，返回匹配到的相似商品SKU集合；前端把结果写入 localStorage(arrSkus)，再跳转 SPU 管理页(flag=6)，以批量SKU(batchSku)方式回填搜索框并重新查询，从而展示所有相似款。

## 用法

```bash
mbs pim erp-product-picture-search-product-by-url --url <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/pictureSearchProductByUrl`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `url` | url | body | string | 是 | - | 商品主图图片URL(来源:商品列表行图片『搜索相似SKU』图标传入的 value.picture)，作为以图搜图的检索图源 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | string | 以图搜图命中的相似商品SKU集合；前端存入 localStorage.arrSkus 后作为批量SKU(batchSku)字符串使用,多个SKU以逗号分隔(具体元素结构待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
