# mbs pim instudio-pms-get-ozon-singlepublish-list

获取刊登信息列表：获取刊登信息列表

## 用法

```bash
mbs pim instudio-pms-get-ozon-singlepublish-list [--id <integer>] [--listId <integer>] [--shopname <string>] [--shopManager <string>] [--title <string>] [--description <string>] [--descriptionStr <string>] [--descriptionJson <string>] [--erpSpu <string>] [--erpSkuList <array<string>>] [--publishSpu <string>] [--vat <string>] [--weight <number>] [--weightUnit <string>] [--depth <integer>] [--width <integer>] [--height <integer>] [--dimensionUnit <string>] [--productCategory <string>] [--productCategoryShow <string>] [--productCategoryAll <string>] [--vType <integer>] [--vNum <integer>] [--attributeList <array<object>>] [--publicAttributeList <array<object>>] [--publicAttributeStr <string>] [--mainPic <string>] [--productUrl <string>] [--mainPicList <array<string>>] [--videoUrl <string>] [--videoCover <string>] [--warehouse <string>] [--warehouseId <string>] [--ozonSinglepublishSku <array<object>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/ozonSinglepublishInfoController/getOzonSinglepublishList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `listId` | listId | body | integer | 否 | - | 列表ID（字段名推断,语义待核实） |
| `shopname` | shopname | body | string | 否 | - | 店铺 |
| `shopManager` | shopManager | body | string | 否 | - | 店铺负责人 |
| `title` | title | body | string | 否 | - | 标题 |
| `description` | description | body | string | 否 | - | 描述 |
| `descriptionStr` | descriptionStr | body | string | 否 | - | 描述 |
| `descriptionJson` | descriptionJson | body | string | 否 | - | 描述Json |
| `erpSpu` | erpSpu | body | string | 否 | - | 马帮spu |
| `erpSkuList` | erpSkuList | body | array<string> | 否 | - | 马帮sku |
| `publishSpu` | publishSpu | body | string | 否 | - | 刊登spu |
| `vat` | vat | body | string | 否 | - | vat税 |
| `weight` | weight | body | number | 否 | - | 重量 |
| `weightUnit` | weightUnit | body | string | 否 | - | 重量单位 |
| `depth` | depth | body | integer | 否 | - | 深度 |
| `width` | width | body | integer | 否 | - | 宽度 |
| `height` | height | body | integer | 否 | - | 高度 |
| `dimensionUnit` | dimensionUnit | body | string | 否 | - | 尺寸单位 |
| `productCategory` | productCategory | body | string | 否 | - | 产品分类 |
| `productCategoryShow` | productCategoryShow | body | string | 否 | - | 页面显示 |
| `productCategoryAll` | productCategoryAll | body | string | 否 | - | 页面显示 |
| `vType` | vType | body | integer | 否 | - | 类型（字段名推断,语义待核实） |
| `vNum` | vNum | body | integer | 否 | - | 数量（字段名推断,语义待核实） |
| `attributeList` | attributeList | body | array<object> | 否 | - | 属性 |
| `publicAttributeList` | publicAttributeList | body | array<object> | 否 | - | 公有属性 |
| `publicAttributeStr` | publicAttributeStr | body | string | 否 | - | 公有属性 |
| `mainPic` | mainPic | body | string | 否 | - | 主图 |
| `productUrl` | productUrl | body | string | 否 | - | 产品链接 |
| `mainPicList` | mainPicList | body | array<string> | 否 | - | 主图片列表（字段名推断,语义待核实） |
| `videoUrl` | videoUrl | body | string | 否 | - | 视频链接 |
| `videoCover` | videoCover | body | string | 否 | - | 视频封面 |
| `warehouse` | warehouse | body | string | 否 | - | 仓库（字段名推断,语义待核实） |
| `warehouseId` | warehouseId | body | string | 否 | - | 仓库ID（字段名推断,语义待核实） |
| `ozonSinglepublishSku` | ozonSinglepublishSku | body | array<object> | 否 | - | sku |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `obj.obj.total` | integer | 总数（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.totalPages` | integer | 总数Pages（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.rows[]` | array | 行数据（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.success` | boolean | 成功（字段名推断,语义待核实）。前端使用：是（条件判断，行号待核实） | - |
| `obj.obj.desc` | string | 描述（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.code` | integer | 编码（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.footer[]` | array | Footer（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.sort` | string | 排序（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.order` | string | 订单（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.label` | string | 标签（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.vNum` | string | 数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.mainPic` | string | 主图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.erpSpu` | string | ERPSPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.titleEdit` | string | 标题编辑（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.title` | string | 标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productCategoryAll` | string | 商品类目全部（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishStatus` | string | 刊登状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productUrl` | string | 商品URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishItemid` | string | 刊登商品项ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishResponse` | string | 刊登响应（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopname` | string | 店铺名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopManager` | string | 店铺管理（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.profitRate` | string | 利润比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.createBy` | string | 创建人（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishType` | string | 刊登类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.createTime` | string | 创建时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.updateTime` | string | 更新时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishTime` | string | 刊登时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.trim` | string | TRIM（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.categoryname` | string | Categoryname（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.timeInfo` | string | 时间信息（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spu` | string | SPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuList` | string | SKU列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.type` | string | 类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.onload` | string | Onload（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
