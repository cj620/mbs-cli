<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-aliexpress-single-publish-result-info

获取刊登信息：获取刊登信息

## 用法

```bash
mbs pim instudio-pms-get-aliexpress-single-publish-result-info [--queryType <string>] [--level <integer>] [--parentCategoryId <integer>] [--keyWord <string>] [--categoryId <integer>] [--shopName <string>] [--shopNames <array<string>>] [--description <string>] [--shopsSplice <string>] [--erpSpu <string>] [--erpSku <string>] [--platformId <integer>] [--picStyle <string>] [--picQueryType <string>] [--descriptionPics <array<string>>] [--selectTypes <array<integer>>] [--selectType <integer>] [--operId <integer>] [--publishSkuList <array<object>>] [--listId <string>] [--listIds <array<string>>] [--findPropertiesBySkus <string>] [--moneyRate <number>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/aliexpressSinglepublishController/getAliexpressSinglePublishResultInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `queryType` | queryType | body | string | 否 | - | 查询类型（字段名推断,语义待核实） |
| `level` | level | body | integer | 否 | - | 级别（字段名推断,语义待核实） |
| `parentCategoryId` | parentCategoryId | body | integer | 否 | - | 父级类目ID（字段名推断,语义待核实） |
| `keyWord` | keyWord | body | string | 否 | - | 键词（字段名推断,语义待核实） |
| `categoryId` | categoryId | body | integer | 否 | - | 类目ID（字段名推断,语义待核实） |
| `shopName` | shopName | body | string | 否 | - | 店铺名称（字段名推断,语义待核实） |
| `shopNames` | shopNames | body | array<string> | 否 | - | 店铺名称列表（字段名推断,语义待核实） |
| `description` | description | body | string | 否 | - | 描述（字段名推断,语义待核实） |
| `shopsSplice` | shopsSplice | body | string | 否 | - | 店铺列表Splice（字段名推断,语义待核实） |
| `erpSpu` | erpSpu | body | string | 否 | - | ERPSPU（字段名推断,语义待核实） |
| `erpSku` | erpSku | body | string | 否 | - | ERPSKU（字段名推断,语义待核实） |
| `platformId` | platformId | body | integer | 否 | - | 平台ID（字段名推断,语义待核实） |
| `picStyle` | picStyle | body | string | 否 | - | 图片样式（字段名推断,语义待核实） |
| `picQueryType` | picQueryType | body | string | 否 | - | 图片查询类型（字段名推断,语义待核实） |
| `descriptionPics` | descriptionPics | body | array<string> | 否 | - | 描述PICS（字段名推断,语义待核实） |
| `selectTypes` | selectTypes | body | array<integer> | 否 | - | 查询Types（字段名推断,语义待核实） |
| `selectType` | selectType | body | integer | 否 | - | 查询类型（字段名推断,语义待核实） |
| `operId` | operId | body | integer | 否 | - | 操作ID（字段名推断,语义待核实） |
| `publishSkuList` | publishSkuList | body | array<object> | 否 | - | 刊登SKU列表（字段名推断,语义待核实） |
| `listId` | listId | body | string | 否 | - | 列表ID（字段名推断,语义待核实） |
| `listIds` | listIds | body | array<string> | 否 | - | 列表ID列表（字段名推断,语义待核实） |
| `findPropertiesBySkus` | findPropertiesBySkus | body | string | 否 | - | 查询属性人SKU列表（字段名推断,语义待核实） |
| `moneyRate` | moneyRate | body | number | 否 | - | 金额比率（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj.id` | integer | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.listId` | string | 列表ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.shopName` | string | 店铺名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.currency` | string | 币种（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.groupName` | string | 分组名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.categoryId` | integer | 类目ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.groups[]` | array | Groups（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.groups[]` | string | - | - |
| `obj.obj.erpSpu` | string | ERPSPU（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.publishSpu` | string | 刊登SPU（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.images[]` | array | 图片列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.images[]` | string | - | - |
| `obj.obj.backgroundWhite` | string | BackgroundWhite（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.backgroundVT` | string | BackgroundVT（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.videoUrl` | string | 视频URL（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.description` | string | 描述（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.packageLength` | number | 包裹长度（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.packageWidth` | number | 包裹宽度（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.packageHeight` | number | 包裹高度（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.packageWeight` | number | 包裹重量（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.title` | string | 标题（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.productAttributes[]` | array | 商品Attributes（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.skus[]` | array | SKU列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.imageRelate` | string | 图片Relate（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.wholeProduct` | integer | Whole商品（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.productUnit` | integer | 商品单位（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.packageType` | integer | 包裹类型（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.lotNum` | integer | LOT数量（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.bulkDiscount` | integer | BULK折扣（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.bulkOrder` | integer | BULK订单（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.isPackSell` | integer | 是否打包销售（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.baseUnit` | integer | 基础单位（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.addUnit` | integer | 新增单位（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.addWeight` | number | 新增重量（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.freightTemplateId` | integer | 运费模板ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.freightTemplateName` | string | 运费模板名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.deliveryTime` | integer | 配送时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.reduceStrategy` | string | Reduce策略（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.operId` | integer | 操作ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.publishStatus` | integer | 刊登状态（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.isCountry` | integer | 是否国家（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
