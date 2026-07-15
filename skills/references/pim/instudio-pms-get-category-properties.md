<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-category-properties

获取商品分类：获取商品分类

## 用法

```bash
mbs pim instudio-pms-get-category-properties [--dataType <integer>] [--shopName <string>] [--mainCategory <string>] [--site <string>] [--parentCategoryId <string>] [--categoryLevel <integer>] [--categoryName <string>] [--spu <string>] [--productType <string>] [--singleFlag <string>] [--queryFlag <string>] [--queryCategory <string>] [--queryCategoryList <array<string>>] [--spuList <array<string>>] [--status <integer>] [--createBy <string>] [--startDate <string>] [--endDate <string>] [--sku <string>] [--pricingChannel <string>] [--page <integer>] [--pageSize <integer>] [--startIndex <integer>] [--shopIdList <array<string>>] [--fieldName <string>] [--required <integer>] [--shopManagerList <array<string>>] [--id <string>] [--requestId <string>] [--requestIdList <array<string>>] [--sites <array<string>>] [--title <string>] [--orderType <string>] [--orderFiled <string>] [--riskLevel <integer>] [--defaultTemplates <array<string>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/amazon/getCategoryProperties`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `dataType` | dataType | body | integer | 否 | - | 205.3.21 上线调试。区分新老数据，后期可以去掉 |
| `shopName` | shopName | body | string | 否 | - | 查询分类用的参数 |
| `mainCategory` | mainCategory | body | string | 否 | - | 主类目（字段名推断,语义待核实） |
| `site` | site | body | string | 否 | - | 站点（字段名推断,语义待核实） |
| `parentCategoryId` | parentCategoryId | body | string | 否 | - | 父级类目ID（字段名推断,语义待核实） |
| `categoryLevel` | categoryLevel | body | integer | 否 | - | 类目级别（字段名推断,语义待核实） |
| `categoryName` | categoryName | body | string | 否 | - | 类目名称（字段名推断,语义待核实） |
| `spu` | spu | body | string | 否 | - | 查询分类用的参数 |
| `productType` | productType | body | string | 否 | - | 商品类型（字段名推断,语义待核实） |
| `singleFlag` | singleFlag | body | string | 否 | - | single 单变体， multi 多变体 |
| `queryFlag` | queryFlag | body | string | 否 | - | 0 代表查询 非分类属性字段, 1代表查询 分类属性字段 |
| `queryCategory` | queryCategory | body | string | 否 | - | 查询分类属性, Required 重要属性, Preferred 首选属性, Optional 可选属性 |
| `queryCategoryList` | queryCategoryList | body | array<string> | 否 | - | 查询类目列表（字段名推断,语义待核实） |
| `spuList` | spuList | body | array<string> | 否 | - | 查询分类用的参数 |
| `status` | status | body | integer | 否 | - | 刊登状态 |
| `createBy` | createBy | body | string | 否 | - | 创建人 |
| `startDate` | startDate | body | string | 否 | - | 创建时间查询的开始时间 |
| `endDate` | endDate | body | string | 否 | - | 创建时间查询的结束时间 |
| `sku` | sku | body | string | 否 | - | SKU（字段名推断,语义待核实） |
| `pricingChannel` | pricingChannel | body | string | 否 | - | Pricing渠道（字段名推断,语义待核实） |
| `page` | page | body | integer | 否 | - | 页码（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `shopIdList` | shopIdList | body | array<string> | 否 | - | 店铺ID列表（字段名推断,语义待核实） |
| `fieldName` | fieldName | body | string | 否 | - | 查询分类用的参数 |
| `required` | required | body | integer | 否 | - | 0 不必填， 1必填 |
| `shopManagerList` | shopManagerList | body | array<string> | 否 | - | 店铺管理列表（字段名推断,语义待核实） |
| `id` | id | body | string | 否 | - | ID（字段名推断,语义待核实） |
| `requestId` | requestId | body | string | 否 | - | 请求ID（字段名推断,语义待核实） |
| `requestIdList` | requestIdList | body | array<string> | 否 | - | 请求ID列表（字段名推断,语义待核实） |
| `sites` | sites | body | array<string> | 否 | - | Sites（字段名推断,语义待核实） |
| `title` | title | body | string | 否 | - | 标题（字段名推断,语义待核实） |
| `orderType` | orderType | body | string | 否 | - | 排序规则 ASC：升序；DESC：降序 |
| `orderFiled` | orderFiled | body | string | 否 | - | 排序属性 |
| `riskLevel` | riskLevel | body | integer | 否 | - | 风险级别（字段名推断,语义待核实） |
| `defaultTemplates` | defaultTemplates | body | array<string> | 否 | - | 默认Templates（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.validate` | string | 校验（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.nowValues` | string | NOW值列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.fieldName` | string | 字段名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
