# mbs pim erp-product-get-product-log-spu-or-sku

SPU/SKU 操作日志查询：根据 SPU 分页（滚动加载）查询该商品 SPU 及其下 SKU 的操作日志列表，返回操作人、操作时间、关联SKU、操作内容，前端在 SPU 详情页右侧操作日志栏渲染，并通过 IntersectionObserver 触底递增 limitNum 加载更多。

## 用法

```bash
mbs pim erp-product-get-product-log-spu-or-sku --spu <string> --isAll <string> [--sku <string>] --limitNum <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getProductLogSpuOrSku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | body | string | 是 | - | 商品SPU编号。来源：浏览器URL查询参数 SPU（GetQueryString('SPU')），用于按SPU查询其操作日志 |
| `isAll` | isAll | body | string | 是 | - | 是否查询全部，前端固定传 1（1=查询该SPU全部/全公司操作日志） |
| `sku` | sku | body | string | 否 | - | SKU编号，前端固定传空串（即按SPU维度查询；预留按单个SKU过滤） |
| `limitNum` | limitNum | body | number | 是 | - | 加载条数上限。值=limitIndex * 1000（首次1000，每次触底滚动 limitIndex 递增），用于滚动分页加载 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 操作日志列表（前端 for 遍历并交由模板渲染） | - |
| `obj[][0]` | string | 操作人（模板 {{value.oper}}，渲染为标题） | - |
| `obj[][1]` | string | 操作时间（模板 {{value.opertime}}） | - |
| `obj[][2]` | string | 关联SKU编号（模板 {{value.sid}}，渲染为指向 SKUdetails.html?SKU={sid} 的链接） | - |
| `obj[][3]` | string | 操作内容/日志正文（模板 {{value.content}}） | - |
| `obj[][4]` | string | （前端补写，非接口返回）当前页 SPU，success 回调中 data.obj[i].SPU = SPU 写入 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
