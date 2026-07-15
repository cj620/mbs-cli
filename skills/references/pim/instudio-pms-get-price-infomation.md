# mbs pim instudio-pms-get-price-infomation

获取运费模板：获取运费模板

## 用法

```bash
mbs pim instudio-pms-get-price-infomation [--id <integer>] [--listId <string>] [--shopName <string>] [--currency <string>] [--groupName <string>] [--categoryId <integer>] [--groups <array<string>>] [--erpSpu <string>] [--publishSpu <string>] [--images <array<string>>] [--backgroundWhite <string>] [--backgroundVT <string>] [--videoUrl <string>] [--description <string>] [--packageLength <number>] [--packageWidth <number>] [--packageHeight <number>] [--packageWeight <number>] [--title <string>] [--productAttributes <array<object>>] [--skus <array<object>>] [--imageRelate <string>] [--wholeProduct <integer>] [--productUnit <integer>] [--packageType <integer>] [--lotNum <integer>] [--bulkDiscount <integer>] [--bulkOrder <integer>] [--isPackSell <integer>] [--baseUnit <integer>] [--addUnit <integer>] [--addWeight <number>] [--freightTemplateId <integer>] [--freightTemplateName <string>] [--deliveryTime <integer>] [--reduceStrategy <string>] [--operId <integer>] [--publishStatus <integer>] [--isCountry <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/aliexpressSinglepublishController/getPriceInfomation`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `listId` | listId | body | string | 否 | - | 列表ID（字段名推断,语义待核实） |
| `shopName` | shopName | body | string | 否 | - | 店铺名称（字段名推断,语义待核实） |
| `currency` | currency | body | string | 否 | - | 币种（字段名推断,语义待核实） |
| `groupName` | groupName | body | string | 否 | - | 分组名称（字段名推断,语义待核实） |
| `categoryId` | categoryId | body | integer | 否 | - | 类目ID（字段名推断,语义待核实） |
| `groups` | groups | body | array<string> | 否 | - | Groups（字段名推断,语义待核实） |
| `erpSpu` | erpSpu | body | string | 否 | - | ERPSPU（字段名推断,语义待核实） |
| `publishSpu` | publishSpu | body | string | 否 | - | 刊登SPU（字段名推断,语义待核实） |
| `images` | images | body | array<string> | 否 | - | 图片列表（字段名推断,语义待核实） |
| `backgroundWhite` | backgroundWhite | body | string | 否 | - | BackgroundWhite（字段名推断,语义待核实） |
| `backgroundVT` | backgroundVT | body | string | 否 | - | BackgroundVT（字段名推断,语义待核实） |
| `videoUrl` | videoUrl | body | string | 否 | - | 视频URL（字段名推断,语义待核实） |
| `description` | description | body | string | 否 | - | 描述（字段名推断,语义待核实） |
| `packageLength` | packageLength | body | number | 否 | - | 包裹长度（字段名推断,语义待核实） |
| `packageWidth` | packageWidth | body | number | 否 | - | 包裹宽度（字段名推断,语义待核实） |
| `packageHeight` | packageHeight | body | number | 否 | - | 包裹高度（字段名推断,语义待核实） |
| `packageWeight` | packageWeight | body | number | 否 | - | 包裹重量（字段名推断,语义待核实） |
| `title` | title | body | string | 否 | - | 标题（字段名推断,语义待核实） |
| `productAttributes` | productAttributes | body | array<object> | 否 | - | 商品Attributes（字段名推断,语义待核实） |
| `skus` | skus | body | array<object> | 否 | - | SKU列表（字段名推断,语义待核实） |
| `imageRelate` | imageRelate | body | string | 否 | - | 图片Relate（字段名推断,语义待核实） |
| `wholeProduct` | wholeProduct | body | integer | 否 | - | Whole商品（字段名推断,语义待核实） |
| `productUnit` | productUnit | body | integer | 否 | - | 商品单位（字段名推断,语义待核实） |
| `packageType` | packageType | body | integer | 否 | - | 包裹类型（字段名推断,语义待核实） |
| `lotNum` | lotNum | body | integer | 否 | - | LOT数量（字段名推断,语义待核实） |
| `bulkDiscount` | bulkDiscount | body | integer | 否 | - | BULK折扣（字段名推断,语义待核实） |
| `bulkOrder` | bulkOrder | body | integer | 否 | - | BULK订单（字段名推断,语义待核实） |
| `isPackSell` | isPackSell | body | integer | 否 | - | 是否打包销售（字段名推断,语义待核实） |
| `baseUnit` | baseUnit | body | integer | 否 | - | 基础单位（字段名推断,语义待核实） |
| `addUnit` | addUnit | body | integer | 否 | - | 新增单位（字段名推断,语义待核实） |
| `addWeight` | addWeight | body | number | 否 | - | 新增重量（字段名推断,语义待核实） |
| `freightTemplateId` | freightTemplateId | body | integer | 否 | - | 运费模板ID（字段名推断,语义待核实） |
| `freightTemplateName` | freightTemplateName | body | string | 否 | - | 运费模板名称（字段名推断,语义待核实） |
| `deliveryTime` | deliveryTime | body | integer | 否 | - | 配送时间（字段名推断,语义待核实） |
| `reduceStrategy` | reduceStrategy | body | string | 否 | - | Reduce策略（字段名推断,语义待核实） |
| `operId` | operId | body | integer | 否 | - | 操作ID（字段名推断,语义待核实） |
| `publishStatus` | publishStatus | body | integer | 否 | - | 刊登状态（字段名推断,语义待核实） |
| `isCountry` | isCountry | body | integer | 否 | - | 是否国家（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
