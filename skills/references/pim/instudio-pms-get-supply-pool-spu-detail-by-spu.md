# mbs pim instudio-pms-get-supply-pool-spu-detail-by-spu

根据supplySpu查询SupplyPoolSpu的相关信息：根据supplySpu查询SupplyPoolSpu的相关信息

## 用法

```bash
mbs pim instudio-pms-get-supply-pool-spu-detail-by-spu --supplySpu <string>
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/SupplyPoolController/getSupplyPoolSpuDetailBySpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `supplySpu` | supplySpu | query | string | 是 | - | 供应SPU（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj.newProductCode` | string | 新品编码。前端使用：待核实 | - |
| `obj.obj.supplySpu` | string | 商家货品编码。前端使用：待核实 | - |
| `obj.obj.productNameCh` | string | 产品中文名称。前端使用：待核实 | - |
| `obj.obj.productNameEn` | string | 产品英文名称。前端使用：待核实 | - |
| `obj.obj.category` | string | 品类（注：只可选择下拉中分类）。前端使用：待核实 | - |
| `obj.obj.supplyPriceMax` | number | 供货价(大)。前端使用：待核实 | - |
| `obj.obj.supplyPriceMin` | number | 供货价(小)。前端使用：待核实 | - |
| `obj.obj.supplyName` | string | 供应商。前端使用：待核实 | - |
| `obj.obj.wangwang` | string | 旺旺。前端使用：待核实 | - |
| `obj.obj.description` | string | 描述。前端使用：待核实 | - |
| `obj.obj.selectReason` | string | 选品原因。前端使用：待核实 | - |
| `obj.obj.status` | integer | 0草稿,1待审核,2审核通过,3审核不通过,4已开发,已停产。前端使用：待核实 | - |
| `obj.obj.nopassReason` | string | 不通过原因。前端使用：待核实 | - |
| `obj.obj.isRepeat` | integer | 是否重复 1是 0否。前端使用：待核实 | - |
| `obj.obj.repeatCnt` | integer | 重复数量。前端使用：待核实 | - |
| `obj.obj.isTort` | integer | 是否侵权1是 0否。前端使用：待核实 | - |
| `obj.obj.createBy` | string | 创建人。前端使用：待核实 | - |
| `obj.obj.createTime` | string | 创建时间。前端使用：待核实 | - |
| `obj.obj.reviewer` | string | 审核人。前端使用：待核实 | - |
| `obj.obj.reviewerTime` | string | 审核时间。前端使用：待核实 | - |
| `obj.obj.spuPictureCnt` | integer | SPU图片CNT（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.spuPicture[]` | array | SPU图片（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.spuPicture[]` | string | - | - |
| `obj.obj.skuList[]` | array | SKU列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.skuListCnt` | integer | SKU列表CNT（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.spu` | string | SPU（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.developBy` | string | 开发人员。前端使用：待核实 | - |
| `obj.obj.developTime` | string | 开发时间。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
