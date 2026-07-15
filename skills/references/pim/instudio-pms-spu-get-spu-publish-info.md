# mbs pim instudio-pms-spu-get-spu-publish-info

查询SPU刊登信息：查询SPU刊登信息(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-spu-get-spu-publish-info
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/spu/getSpuPublishInfo/{spu}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | path | string | 是 | - | SPU（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj.spu` | string | spu编号。前端使用：待核实 | - |
| `obj.obj.nameCn` | string | 产品中文名称。前端使用：待核实 | - |
| `obj.obj.englishKeyword` | string | 产品英文关键词。前端使用：待核实 | - |
| `obj.obj.descriptionEn` | string | 商品描述。前端使用：待核实 | - |
| `obj.obj.spuImgList[]` | array | spu图片。前端使用：待核实 | - |
| `obj.obj.spuImgList[]` | string | - | - |
| `obj.obj.mainImgList[]` | array | 主图。前端使用：待核实 | - |
| `obj.obj.mainImgList[]` | string | - | - |
| `obj.obj.sizeChart` | string | 尺码表。前端使用：待核实 | - |
| `obj.obj.videoPath` | string | 视频。前端使用：待核实 | - |
| `obj.obj.subsidiaryImgList[]` | array | 附属图。前端使用：待核实 | - |
| `obj.obj.subsidiaryImgList[]` | string | - | - |
| `obj.obj.descriptionImgList[]` | array | 描述图片。前端使用：待核实 | - |
| `obj.obj.descriptionImgList[]` | string | - | - |
| `obj.obj.skuPublishInfoList[]` | array | sku信息。前端使用：待核实 | - |
| `obj.obj.whiteBkImgList[]` | array | 白底图。前端使用：待核实 | - |
| `obj.obj.whiteBkImgList[]` | string | - | - |
| `obj.obj.defaultSkuInfo` | object | 默认SKU信息（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.competingTitle` | string | Competing标题（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.relatedAttribute` | string | Related属性（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.forbidSalePlatforms[]` | array | 禁售平台。前端使用：待核实 | - |
| `obj.obj.forbidSalePlatforms[]` | string | - | - |
| `obj.obj.mustGenerateTemplatePlatforms[]` | array | 必须生成模版的平台。前端使用：待核实 | - |
| `obj.obj.mustGenerateTemplatePlatforms[]` | string | - | - |
| `obj.obj.forbidSalePlatform` | string | Forbid销售平台（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.styleId` | string | 样式ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.applicablePlatform` | string | Applicable平台（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
