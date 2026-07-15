# mbs pim ozon-product-service-id

获取Ozon商品图片编辑信息：Ozon 图片编辑页进入时，按 listing 记录ID(URL路径变量)拉取该 Ozon 商品的编辑信息，前端据此渲染主图、附图列表(imgUrl JSON串)、颜色样本图，并把原始返回对象整体缓存(rawData)，用于后续 1:1还原/3:4裁剪(取 publishSpu/erpSpu/erpSku)及提交保存(原样回传)。

## 用法

```bash
mbs pim ozon-product-service-id
```

## API

- Service: `ozon-product-service`
- Method: `GET`
- Path: `/gateway/ozon-product-service/ozonProductEdit/getOzonProductEditInfo/{id}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | path | string | 是 | - | listing 记录ID（URL路径变量，拼接于接口路径末尾 /getOzonProductEditInfo/{id}）。来源：前端路由参数 route.params.id |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `id` | number | listing 主键ID。提交裁剪时作为 listingId 回传（rawData.value?.id） | - |
| `publishSpu` | string | 刊登SPU编码。优先用于用1:1图/3:4裁剪取原图（rawData.value?.publishSpu），为空再取 erpSpu | - |
| `erpSpu` | string | ERP SPU编码（publishSpu 为空时的备选 SPU 来源） | - |
| `dataList[]` | array | SKU数据列表。前端取第一条 dataList[0] 渲染图片，并在提交时回写首条的 mainImg/imgUrl/colorImage | - |
| `dataList[][0]` | string | 商品主图URL。渲染为图片列表第一张（主图），提交时回写 imgList[0] | - |
| `dataList[][1]` | string | 附图URL列表（JSON字符串数组）。前端 JSON.parse(imgUrl) 得到 string[] 拼在主图之后；提交时回写 JSON.stringify(imgList) | - |
| `dataList[][2]` | string | 颜色样本图URL（只允许一张），渲染于颜色样本区，提交时回写 | - |
| `dataList[][3]` | string | ERP SKU编码。3:4裁剪生成时取首条 dataList[0].erpSku 作为 erpSku 参数（rawData.value?.dataList?.[0]?.erpSku） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
