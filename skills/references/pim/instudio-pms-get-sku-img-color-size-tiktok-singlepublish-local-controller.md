# mbs pim instudio-pms-get-sku-img-color-size-tiktok-singlepublish-local-controller

获取sku尺码颜色：获取sku尺码颜色

## 用法

```bash
mbs pim instudio-pms-get-sku-img-color-size-tiktok-singlepublish-local-controller
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/tiktokSinglepublishLocalController/getSkuImgColorSize`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.erpSpu` | string | ERPSPU（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.erpSku` | string | ERPSKU（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.skuColor` | string | SKU颜色（字段名推断,语义待核实）。前端使用：是（条件判断，行号待核实） | - |
| `obj.obj.skuSize` | string | SKU大小（字段名推断,语义待核实）。前端使用：是（条件判断，行号待核实） | - |
| `obj.obj.skuPic` | string | SKU图片（字段名推断,语义待核实）。前端使用：是（条件判断，行号待核实） | - |
| `obj.obj.savenum` | integer | 保存数量（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.ordernum` | integer | 订单号（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.canUseNum` | integer | CANUSE数量（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.specialNum` | integer | 特殊数量（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.title` | string | 标题（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.description` | string | 描述（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.saleNotes` | string | 销售Notes（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.packageWeight` | number | 包裹重量（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.packageLength` | integer | 包裹长度（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.packageWidth` | integer | 包裹宽度（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.packageHeight` | integer | 包裹高度（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.status` | string | 状态（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.skuStatus` | string | SKU状态（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.costprice` | number | Costprice（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.siteNameZh` | string | 站点名称ZH（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.siteCode` | string | 站点编码（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.currency` | string | 币种（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.categoryId` | string | 类目ID（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.mabangCategoryName` | string | 马帮类目名称（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.siteLimit` | string | 站点限制（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.pictureUrl` | string | 图片URL（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.pictureStyle` | string | 图片样式（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.selectType` | integer | 查询类型（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.weight` | number | 重量（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.length` | number | 长度（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.width` | number | 宽度（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.height` | number | 高度（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.properties` | string | 属性（字段名推断,语义待核实）。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj.skus` | string | SKU列表（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.num` | number | 数量（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.img` | string | 图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuId` | string | SKUID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value_name` | string | 值名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.relateImage` | string | Relate图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.profitRate` | string | 利润比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.erpSkuStatus` | string | ERPSKU状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.erpSkuSaveNum` | string | ERPSKU保存数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
