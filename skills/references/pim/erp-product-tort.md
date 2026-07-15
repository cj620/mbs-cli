<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-tort

图片关联侵权SKU搜索：商品侵权审核「关联SKU」环节调用：把待审核清单中的 SKU+图片分批(每批最多20条)提交，以图搜款返回图片相似的关联商品列表(含相似度评分、是否侵权标记)，前端按 sku 去重后追加到审核弹窗 list3，供审核人勾选一并提交审核。

## 用法

```bash
mbs pim erp-product-tort --submitBy <string> --body <array<unknown>>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/picture/search/product/tort`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `submitBy` | submitBy | body | string | 是 | - | 提交人(URL查询参数)，取自 localStorage.username，标识本次以图搜款的操作人 |
| `body` | (body) | body | array<unknown> | 是 | - | 请求体根节点：待搜索的 SKU+图片列表(每次最多20条，由 listBefore 分批切片得到) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 关联到的相似/侵权商品列表(以图搜款结果) | - |
| `obj[][0]` | string | 关联商品SKU(前端用于去重 !set.has(item.sku)，并作为列表 key/勾选值) | - |
| `obj[][1]` | string | 商品名称(模板首行展示) | - |
| `obj[][2]` | string | 商品图片URL(模板 v-lazy 懒加载缩略图) | - |
| `obj[][3]` | string | 子SKU(模板展示「子SKU: ...」；审核提交 auditPass2 时收集为 alias) | - |
| `obj[][4]` | number | 图片相似度评分(0~1小数；score>0 时以 (score*100).toFixed(2)% 展示) | - |
| `obj[][5]` | string | 是否侵权标记，'1'=侵权(tort==='1' 时显示红色「侵权」标签) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
