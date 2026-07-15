# mbs pim erp-product-get-spu-images

获取SPU图片列表：在新增SPU页面，按SPU编号查询该SPU下已存在的全部商品图片，返回图片URL与图片记录ID列表，前端渲染为图片墙；新增/删除图片及组装属性成功后回调刷新。

## 用法

```bash
mbs pim erp-product-get-spu-images --spu <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getSpuImages`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | query | string | 是 | - | SPU编号。来源输入控件 #SPU($("#SPU").val())，作为查询该SPU全部图片的唯一条件 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(统一响应包裹字段) | - |
| `desc` | string | 响应提示信息(失败时前端弹窗展示) | - |
| `obj[]` | array | 该SPU下的图片列表 | - |
| `obj[][0]` | string | 商品图片URL，渲染为 <img src>(失败回退占位图) | - |
| `obj[][1]` | number | 图片记录ID(序号ID)，用于删除图片 delImages | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
