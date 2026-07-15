# mbs pim erp-product-assemble-attributes-detail

组装SKU属性明细（assembleAttributesDetail）：新增SPU页面根据颜色(color)与尺寸(size)做笛卡尔组合，由后端组装并返回该SPU下的SKU明细列表（含SKU编号、颜色-尺寸属性、产品中文名、图片等），前端渲染到SKU明细表格供继续补充供应商/尺寸/采购价后保存。

## 用法

```bash
mbs pim erp-product-assemble-attributes-detail [--infoDefined <string>] [--number <string>] [--color <string>] [--size <string>] --spu <string> --skuname <string> [--generateType <number>] [--oldSpu <string>] [--type <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/attributeDetail/assembleAttributesDetail`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `infoDefined` | infoDefined | body | string | 否 | - | 自定义信息，前端固定传空字符串 |
| `number` | number | body | string | 否 | - | 数量/编号占位，前端固定传空字符串 |
| `color` | color | body | string | 否 | - | 颜色(多颜色英文逗号拼接，来源#colors，中文逗号自动转英文) |
| `size` | size | body | string | 否 | - | 尺寸(多尺寸英文逗号拼接，来源#sizes，中文逗号自动转英文) |
| `spu` | spu | body | string | 是 | - | SPU编号(来源#SPU，为空则前端拦截) |
| `skuname` | skuname | body | string | 是 | - | SPU名称(来源#spuName，为空则前端拦截) |
| `generateType` | generateType | body | number | 否 | - | 生成类型，仅当#supplieType=='3'时追加并固定传3 |
| `oldSpu` | oldSpu | body | string | 否 | - | 被淘汰旧SPU编号，仅当#EliminationSpuVal有值时追加(淘汰SPU重开发场景) |
| `type` | type | body | string | 否 | - | 业务类型，仅当#price5=='1'(FBA)时追加并固定传'FBA' |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(失败时弹窗展示) | - |
| `obj[]` | array | 组装出的SKU明细列表(颜色×尺寸组合，每元素为一个SKU行) | - |
| `obj[][0]` | string | SKU编号(前端按仓库标记追加TM/SE后缀，渲染于SKU列与sku2{i}) | - |
| `obj[][1]` | string | 颜色-尺寸属性值(渲染于颜色-尺寸列，用于与1688 SKU属性匹配) | - |
| `obj[][2]` | string | 产品中文名称(渲染于产品中文名称列输入框skuName{i}) | - |
| `obj[][3]` | string | SKU图片URL(渲染于skuImageUrl{i}的src，无则回退1688图) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
